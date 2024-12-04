import { Component } from '@angular/core';
import { EditorComponent } from '../../features/editor/editor.component';
import { LayoutDefaultComponent } from '../../ui/layout/default.component';

@Component({
  selector: 'editor-page',
  template: `
    <layout-default>
      <app-editor />
    </layout-default>
  `,
  imports: [LayoutDefaultComponent, EditorComponent],
})
export default class EditorPage {}
