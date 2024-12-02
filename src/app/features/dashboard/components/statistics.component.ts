import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-statistics',
  template: `
    <h2 class="text-xl font-bold text-left mb-2">Statistics</h2>
    <div class="flex gap-2 justify-between">
      <div
        class="w-40 h-40 flex flex-col gap-4 justify-center items-center shadow"
      >
        <p class="font-bold text-xl">241</p>
        <p class="text-sm">written lines last week</p>
      </div>
      <div class="w-40 h-40 flex justify-center items-center shadow">
        241 lines
      </div>
      <div class="w-40 h-40 flex justify-center items-center shadow">
        241 lines
      </div>
    </div>
  `,
})
export class DashboardStatisticsComponent {}
