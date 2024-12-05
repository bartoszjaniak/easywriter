import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ChartComponent } from '../features/dashboard/components/chart.component';
import { DashboardInvitationComponent } from '../features/dashboard/components/invitation.component';
import { LastBooksComponent } from '../features/dashboard/components/last-books.component';
import { DashboardStatisticsComponent } from '../features/dashboard/components/statistics.component';
import { LayoutDefaultComponent } from '../ui/layout/default.component';

@Component({
  selector: 'app-index',
  imports: [
    LayoutDefaultComponent,
    MatIconModule,
    LastBooksComponent,
    DashboardInvitationComponent,
    DashboardStatisticsComponent,
    ChartComponent,
  ],
  template: `
    <layout-default>
      <div class="grid grid-cols-[2fr_1fr] gap-10">
        <div>
          <app-dashboard-invitation class="mb-10" />
          <app-last-books class="mb-10" />
          <app-dashboard-chart />
        </div>
        <aside class="w-full"><app-dashboard-statistics /></aside>
      </div>

      <!-- <app-last-activity rightAside /> -->
    </layout-default>
  `,
  styles: [],
})
export default class IndexComponent {}
