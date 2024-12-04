import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardAllBooksComponent } from '../features/dashboard/components/all-books.component';
import { LastBooksComponent } from '../features/dashboard/components/last-books.component';
import { DashboardPremiumComponent } from '../features/dashboard/components/premium.component';
import { DashboardStatisticsComponent } from '../features/dashboard/components/statistics.component';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
  selector: 'app-index',
  imports: [
    LayoutDefaultComponent,
    MatIconModule,
    LastBooksComponent,
    DashboardAllBooksComponent,
    DashboardStatisticsComponent,
    DashboardPremiumComponent,
  ],
  template: `
    <layout-default>
      <div class="flex flex-col space-y-6 max-h-full">
        <app-last-books />

        <div class="flex gap-12 justify-between flex-grow">
          <app-dashboard-all-books class="flex-grow" />
          <div class="flex flex-col gap-4 flex-grow">
            <app-dashboard-statistics class="flex-grow" />
            <app-dashboard-premium />
          </div>
        </div>
      </div>
    </layout-default>
  `,
  styles: [],
})
export default class IndexComponent {}
