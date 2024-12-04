import { Component } from '@angular/core';
import { DashboardAllBooksCardComponent } from './all-book-card.component';

@Component({
  selector: 'app-dashboard-all-books',
  imports: [DashboardAllBooksCardComponent],
  host: { class: 'flex flex-col h-full' },
  template: `
    <h2 class="text-xl font-bold text-left mb-8">All Books</h2>
    <div class="flex  flex-col gap-10">
      <app-dashboard-all-books-card />
      <app-dashboard-all-books-card />
      <app-dashboard-all-books-card />
    </div>
  `,
})
export class DashboardAllBooksComponent {}
