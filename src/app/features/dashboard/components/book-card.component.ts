import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-book-card',
  imports: [MatIconModule, CommonModule],
  template: `
    @if(colorClass()) {
    <div
      class="text-white p-3 rounded-lg shadow-lg text-left"
      [ngClass]="colorClass()"
    >
      <button
        class="flex items-center justify-center text-white font-bold py-1 px-1 rounded h-10 w-10 ml-auto mb-4"
      >
        <mat-icon>more_vert</mat-icon>
      </button>
      <h3 class="text-white font-bold text-lg">Przejście</h3>
      <p class="text-white mt-2">Sci-fi</p>
      <p class="text-white text-xs mt-2 text-center mb-2">254 pages</p>
      <div class="w-full bg-neutral-500 bg-opacity-50 rounded-full h-1.5 mb-4">
        <div class="bg-white h-1.5 rounded-full " style="width: 45%"></div>
      </div>
    </div>
    }
  `,
  styles: [],
})
export class BookCardComponent {
  public color = input<'my-purple' | 'my-teal' | 'my-orange'>();
  public colorClass = computed(() => {
    return `bg-${this.color()}`;
  });
}
