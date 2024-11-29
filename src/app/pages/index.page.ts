import { Component } from '@angular/core';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
    selector: 'app-index',
    standalone: true,
    imports: [LayoutDefaultComponent],
    template: `
    <layout-default>
    <ng-template name="menu">
        MENU
    </ng-template>

        Siema!
    </layout-default>
    `,
    styles: []
})
export default class IndexComponent {

}
