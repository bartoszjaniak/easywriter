import { Component } from '@angular/core';
import { DashboardAllBooksCardComponent } from './all-book-card.component';

@Component({
  selector: 'app-dashboard-all-books',
  imports: [DashboardAllBooksCardComponent],
  template: `
    <h2 class="text-xl font-bold text-left mb-2">All Books</h2>
    <app-dashboard-all-books-card />
    <app-dashboard-all-books-card />
    <app-dashboard-all-books-card />
    <app-dashboard-all-books-card />
  `,
})
export class DashboardAllBooksComponent {}
