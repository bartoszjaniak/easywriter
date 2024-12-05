import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-statistics',
  imports: [MatIconModule],
  host: {
    class:
      'flex flex-col gap-6 shadow bg-my-bg-light h-full p-4 rounded-lg text-my-text-light',
  },
  template: `
    <div class="flex items-center bg-white shadow p-2 rounded gap-6 w-full">
      <div
        class="flex items-center justify-center w-10 h-10 bg-my-teal-light rounded"
      >
        <mat-icon>edit_note</mat-icon>
      </div>
      <div class="flex-grow flex flex-col">
        <span class="text-sm">Written chapters</span>
        <span class="text-xl">24</span>
      </div>
    </div>
    <div class="flex items-center bg-white shadow p-2 rounded gap-6 w-full">
      <div
        class="flex items-center justify-center w-10 h-10 bg-my-orange-light rounded"
      >
        <mat-icon>timer</mat-icon>
      </div>
      <div class="flex-grow flex flex-col">
        <span class="text-sm">Written hours</span>
        <span class="text-xl">2K+</span>
      </div>
    </div>
    <div class="flex items-center bg-white shadow p-2 rounded gap-6 w-full">
      <div
        class="flex items-center justify-center w-10 h-10 bg-my-purple-light rounded"
      >
        <mat-icon>group</mat-icon>
      </div>
      <div class="flex-grow flex flex-col">
        <span class="text-sm">created characters</span>
        <span class="text-xl">16</span>
      </div>
    </div>
  `,
})
export class DashboardStatisticsComponent {}
