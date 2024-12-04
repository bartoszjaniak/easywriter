import { computed, inject } from '@angular/core';
import { OutputData } from '@editorjs/editorjs';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { catchError, debounceTime, of, pipe, switchMap, tap } from 'rxjs';
import { ContentService } from './content.service';

export interface Chapter {
  id: number;
  name: string;
}

export interface ChapterWithContent extends Chapter {
  content: OutputData;
}

export type ContentStates =
  | 'initial'
  | 'loading'
  | 'loaded'
  | 'error'
  | 'saving'
  | 'saved';

export interface StoreData<T> {
  data: T;
  state: ContentStates;
  error?: Error;
}

type ContentState = {
  chapters: StoreData<Chapter[]>;
  loadedChapter: StoreData<ChapterWithContent | null>;
};

const initialState: ContentState = {
  chapters: { data: [], state: 'initial' },
  loadedChapter: { data: null, state: 'initial' },
};

export const ContentStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => ({
    loadedChapterLastSave: computed(() =>
      store.loadedChapter().data &&
      store.loadedChapter.data()!.content &&
      store.loadedChapter.data()!.content!.time
        ? new Date(store.loadedChapter.data()!.content!.time!)
        : null
    ),
    numberOfWordsInCurrentChapter: computed(() =>
      store.loadedChapter().data &&
      store.loadedChapter.data()!.content &&
      store.loadedChapter.data()!.content!.blocks
        ? store.loadedChapter
            .data()!
            .content!.blocks.reduce(
              (acc, block) => acc + block.data.text.split(' ').length,
              0
            )
        : 0
    ),
  })),
  withMethods((store, service = inject(ContentService)) => ({
    addChapter: rxMethod<Omit<Chapter, 'id'>>(
      pipe(
        switchMap((chapter) =>
          service.addChapter(chapter).pipe(
            tapResponse({
              next: (chapter) => {
                patchState(store, {
                  chapters: {
                    data: [...(store.chapters().data || []), chapter],
                    state: 'loaded',
                  },
                });
              },
              error: () => {
                error: (e: Error) =>
                  patchState(store, {
                    chapters: {
                      data: store.chapters().data,
                      state: 'error',
                      error: e,
                    },
                  });
              },
            })
          )
        )
      )
    ),
    updateChapter: rxMethod<ChapterWithContent>(
      pipe(
        debounceTime(1000),
        tap(() =>
          patchState(store, {
            loadedChapter: {
              data: store.loadedChapter().data,
              state: 'saving',
            },
          })
        ),
        switchMap((chapter) =>
          service.updateContent(chapter).pipe(
            tapResponse({
              next: () => {
                patchState(store, {
                  loadedChapter: { data: chapter, state: 'loaded' },
                  // update chapters because title might have changed
                  chapters: {
                    data: [
                      ...(store.chapters().data || []).map((c: Chapter) =>
                        c.id === chapter.id ? chapter : c
                      ),
                    ],
                    state: 'loaded',
                  },
                });
              },
              error: (e: Error) => {
                patchState(store, {
                  loadedChapter: {
                    data: store.loadedChapter().data,
                    state: 'error',
                    error: e,
                  },
                });
              },
            })
          )
        )
      )
    ),
    loadChapters: () => {
      patchState(store, { chapters: { data: [], state: 'loading' } });
      service
        .loadAll()
        .pipe(
          tapResponse({
            next: (chapters) =>
              patchState(store, {
                chapters: { data: chapters, state: 'loaded' },
              }),
            error: (e: Error) =>
              patchState(store, {
                chapters: { data: [], state: 'error', error: e },
              }),
          })
        )
        .subscribe();
    },
    load: (id: number) => {
      patchState(store, { loadedChapter: { data: null, state: 'loading' } });
      return of(id).pipe(
        switchMap((id) =>
          service.load(id).pipe(
            catchError((error) => {
              patchState(store, {
                loadedChapter: { data: null, state: 'error', error },
              });
              return of(null);
            })
          )
        ),
        tapResponse({
          next: (content) => {
            patchState(store, {
              loadedChapter: { data: content, state: 'loaded' },
            });
          },
          error: (e: Error) => {
            patchState(store, {
              loadedChapter: { data: null, state: 'error', error: e },
            });
          },
        })
      );
    },
    save: (content: ChapterWithContent) => {
      service
        .updateContent(content)
        .pipe(
          tapResponse({
            next: (result) =>
              patchState(store, {
                loadedChapter: {
                  data: content,
                  state: result ? 'loaded' : 'error',
                },
                chapters: {
                  data: [...store.chapters().data].map((x) =>
                    x.id === content.id ? content : x
                  ),
                  state: 'loaded',
                },
              }),
            error: (e: Error) =>
              patchState(store, {
                loadedChapter: { data: content, state: 'error', error: e },
              }),
          })
        )
        .subscribe();
    },
    removeChapter: (id: number) => {
      patchState(store, {
        chapters: { data: store.chapters().data, state: 'loading' },
      });
      service
        .removeChapter(id)
        .pipe(
          tapResponse({
            next: (result) =>
              patchState(store, {
                chapters: {
                  data: store.chapters().data.filter((x) => x.id !== id),
                  state: 'loaded',
                },
              }),
            error: (e: Error) =>
              patchState(store, {
                chapters: {
                  data: store.chapters().data,
                  state: 'error',
                  error: e,
                },
              }),
          })
        )
        .subscribe();
    },
  })),
  withHooks({
    onInit: (store) => store.loadChapters(),
    onDestroy: (store) => console.log('Store destroyed', store),
  })
);
