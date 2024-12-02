import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-all-books-card',
  imports: [MatIconModule],
  host: {
    class:
      'block relative border-l-my-purple border-l-8 p-4 rounded mb-4 shadow text-left',
  },
  template: `
    <p class="font-bold">Ogniem i mieczem</p>
    <p>Fantasy</p>
    <div class="w-full bg-neutral-200 bg-opacity-50 rounded-full h-1.5 mb-4">
      <div class="bg-neutral-300 h-1.5 rounded-full " style="width: 45%"></div>
    </div>
    <button
      class="absolute right-1 top-1 flex items-center justify-center text-black font-bold py-1 px-1 rounded h-10 w-10 ml-auto mb-4"
    >
      <mat-icon>more_vert</mat-icon>
    </button>
  `,
})
export class DashboardAllBooksCardComponent {}
