import { Component, inject, OnInit, signal } from '@angular/core';

import { CommonModule } from '@angular/common';

import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books implements OnInit {

  private bookService = inject(BookService);

  books = signal<any[]>([]);

  ngOnInit(): void {

    this.bookService.getBooks().subscribe((data: any) => {

      this.books.set(data);

    });

  }

}
