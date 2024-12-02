import { Component } from '@angular/core';
import { BookCardComponent } from './book-card.component';

@Component({
  selector: 'app-last-books',
  imports: [BookCardComponent],
  template: ` <div class="grid grid-cols-3 gap-6">
    <app-book-card color="my-purple"></app-book-card>
    <app-book-card color="my-teal"></app-book-card>
    <app-book-card color="my-orange"></app-book-card>
  </div>`,
  styles: [],
})
export class LastBooksComponent {}
