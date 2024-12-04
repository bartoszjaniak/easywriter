import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface SidePanelComponent {
  component: Type<any>,
  inputs?: Record<string, unknown>;
  title?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SidePanelControllerService {
  public sidePanelContentChanged$: Subject<SidePanelComponent | null> = new Subject<SidePanelComponent | null>();

  public open(component: SidePanelComponent): void {
    this.sidePanelContentChanged$?.next(component);
  }

  public close(): void {
    this.sidePanelContentChanged$.next(null);
  }
}
