import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, map } from 'rxjs';
import { Chapter, ChapterWithContent } from './content.store';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private httpService = inject(HttpClient);

  public loadAll(): Observable<Chapter[]> {
    return this.httpService.get<Chapter[]>('api/chapter');
  }

  public load(id: number): Observable<ChapterWithContent | null> {
    return this.httpService.get<ChapterWithContent>(`api/chapter/${id}`);
  }

  public addChapter(chapter: Omit<Chapter, 'id'>): Observable<Chapter> {
    return this.httpService.post<Chapter>('api/chapter', chapter);
  }

  public removeChapter(id: number): Observable<boolean> {
    return this.httpService.delete<boolean>(`api/chapter/${id}`);
  }

  public updateContent(content: ChapterWithContent): Observable<boolean> {
    return this.httpService
      .patch<ChapterWithContent>(`api/chapter/${content.id}`, content)
      .pipe(map((chapter) => !!chapter.id))
      .pipe(delay(1000)); // for test and maybe better experience
  }
}
