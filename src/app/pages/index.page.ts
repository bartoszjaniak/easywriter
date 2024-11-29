import { Component } from '@angular/core';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [LayoutDefaultComponent],
  template: `
    <layout-default>
      <div menu>MENU</div>
      <p>Hello World</p>
    </layout-default>
  `,
  styles: [],
})
export default class IndexComponent {}
