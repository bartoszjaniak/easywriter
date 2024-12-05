import { Component } from '@angular/core';
import { ChaptersComponent } from '../../features/editor/components/chapters/chapters.component';
import { EditorComponent } from '../../features/editor/editor.component';
import { LayoutDefaultComponent } from '../../ui/layout/default.component';

@Component({
  selector: 'editor-page',
  template: `
    <layout-default>
      <app-editor />

      <div rightAside>
        <h1>Chapters</h1>
        <app-chapters></app-chapters>
      </div>
    </layout-default>
  `,
  imports: [LayoutDefaultComponent, EditorComponent, ChaptersComponent],
})
export default class EditorPage {}
