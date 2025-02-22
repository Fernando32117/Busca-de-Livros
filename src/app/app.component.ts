import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookSearchComponent } from './book-search/book-search.component';

@Component({
  selector: 'app-root',
  template: '<app-book-search></app-book-search>',
  standalone: true,
  imports: [CommonModule, BookSearchComponent]
})
export class AppComponent {}
