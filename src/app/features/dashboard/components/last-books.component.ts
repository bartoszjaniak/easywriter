import { Component } from '@angular/core';
import { BookCardComponent } from './book-card.component';

@Component({
  selector: 'app-last-books',
  imports: [BookCardComponent],
  host: {
    class: 'grid grid-cols-3 gap-6',
  },
  template: `
    <app-book-card color="my-purple"></app-book-card>
    <app-book-card color="my-teal"></app-book-card>
    <app-book-card color="my-orange"></app-book-card>
  `,
  styles: [],
})
export class LastBooksComponent {}
