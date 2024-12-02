import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DashboardAllBooksComponent } from '../features/dashboard/components/all-books.component';
import { DashboardHeaderComponent } from '../features/dashboard/components/header.component';
import { LastBooksComponent } from '../features/dashboard/components/last-books.component';
import { DashboardStatisticsComponent } from '../features/dashboard/components/statistics.component';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
  selector: 'app-index',
  imports: [
    LayoutDefaultComponent,
    MatIconModule,
    LastBooksComponent,
    DashboardHeaderComponent,
    DashboardAllBooksComponent,
    DashboardStatisticsComponent,
  ],
  template: `
    <layout-default>
      <app-dashboard-header />

      <div class="flex flex-col space-y-6">
        <app-last-books />

        <div class="flex gap-12 justify-between">
          <app-dashboard-all-books class="flex-grow" />
          <app-dashboard-statistics class="flex-grow" />
        </div>
      </div>
    </layout-default>
  `,
  styles: [],
})
export default class IndexComponent {}
