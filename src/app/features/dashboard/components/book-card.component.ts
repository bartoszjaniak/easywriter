import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-card',
  imports: [MatIconModule, CommonModule],
  template: `
    <div class="p-3 rounded-lg shadow-lg text-left bg-my-bg-light text-black">
      <button
        class="flex items-center justify-center font-bold py-1 px-1 rounded h-10 w-10 ml-auto mb-4"
      >
        <mat-icon>more_vert</mat-icon>
      </button>
      <h3 class="font-bold text-lg">Przejście</h3>
      <p class="mt-2">Sci-fi</p>
      <p class="text-xs mt-2 text-center mb-2">254 pages</p>
      <div class="w-full bg-neutral-500 bg-opacity-50 rounded-full h-1.5 mb-4">
        <div class="bg-my-orange h-1.5 rounded-full " style="width: 45%"></div>
      </div>
    </div>
  `,
  styles: [],
})
export class BookCardComponent {}
