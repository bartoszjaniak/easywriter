import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-header',
  imports: [MatIconModule],
  template: `
    <div class="flex w-full justify-between gap-4 mb-10">
      <div class="flex-grow">
        <h1 class="text-2xl font-bold text-left">Hallo, Bart</h1>
        <p class="text-gray-500 text-left">What do you want to do today?</p>
      </div>

      <button
        class="flex items-center justify-center bg-slate-300 text-white font-bold py-1 px-1 rounded h-10 w-10"
      >
        <mat-icon>search</mat-icon>
      </button>

      <button
        class="flex items-center justify-center bg-black  text-white font-bold py-2 px-4 rounded h-10"
      >
        Add new project
      </button>
    </div>
  `,
})
export class DashboardHeaderComponent {}
