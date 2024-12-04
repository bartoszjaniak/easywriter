// content.store.methods.ts
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, StateSignal } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, pipe, switchMap, tap } from 'rxjs';
import { ContentService } from '../content.service';
import { Chapter, ChapterWithContent, ContentState } from '../content.store';

export function addChapter(store: StateSignal<ContentState>, service = inject(ContentService)) {
  return rxMethod<Omit<Chapter, 'id'>>(
    pipe(
      switchMap((chapter) =>
        service.addChapter(chapter).pipe(
          tapResponse({
            next: (chapter) => {
              patchState(store, {
                chapters: {
                  data: [...(store['chapters']().data || []), chapter],
                  state: 'loaded',
                },
              });
            },
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
      )
    )
  );
}

export function updateChapter(store: ContentState, service = inject(ContentService)) {
  return rxMethod<ChapterWithContent>(
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
              console.log(e);
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
  );
}

export function loadChapters(store: ContentState, service = inject(ContentService)) {
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
}

export function load(store: ContentState, id: number, service = inject(ContentService)) {
  patchState(store, { loadedChapter: { data: null, state: 'loading' } });
  return service.load(id).pipe(
    tapResponse({
      next: (content) =>
        patchState(store, {
          loadedChapter: { data: content, state: 'loaded' },
        }),
      error: (e: Error) =>
        patchState(store, {
          loadedChapter: { data: null, state: 'error', error: e },
        }),
    })
  );
}

export function save(store: ContentState, content: ChapterWithContent, service = inject(ContentService)) {
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
}

export function removeChapter(store: ContentState, id: number, service = inject(ContentService)) {
  patchState(store, {
    chapters: { data: store.chapters().data, state: 'loading' },
  });
  service
    .removeChapter(id)
    .pipe(
      tapResponse({
​⬤