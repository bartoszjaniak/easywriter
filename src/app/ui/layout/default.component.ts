import { Component } from '@angular/core';
import { b } from 'vitest/dist/suite-IbNSsUWN';

@Component({
    selector: 'layout-default',
    standalone: true,
    imports: [],
    template: `
        <aside> 
            <ng-content name="menu"></ng-content>
        </aside>
        <main>
            <ng-content></ng-content>
        </main>

        `,
    host: { backgroundColor: 'red' },
    styles: []
})
export class LayoutDefaultComponent {

}
