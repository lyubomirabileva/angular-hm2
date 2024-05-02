import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  title: string;
  description: string;
  authors: string[];
  rating: number;
  ratings: number[];
  hasRated: boolean;
}

@Component({
  selector: 'app-book-rating',
  templateUrl: './book-rating.component.html',
  styleUrls: ['./book-rating.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class BookRatingComponent {
  public isDone = false;
  books: Book[] = [
    {
      "title": "The Great Gatsby",
      "description": "It is set in the Roaring Twenties, an era of post-World War I prosperity and cultural change, and explores themes of wealth, class, love, and the American Dream.",
      "authors": ["F. Scott Fitzgerald"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Madame Bovary",
      "description": "Madame Bovary is a tragic novel about a young woman, Emma Bovary, who is married to a dull, but kind-hearted doctor.",
      "authors": ["Gustave Flaubert"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Don Quixote",
      "description": "The story follows the adventures of Don Quixote, a man from La Mancha in central Spain, who, after reading too many chivalric romances, believes himself to be a knight-errant. ",
      "authors": ["Miguel de Cervantes"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Dune",
      "description": "Dune by Frank Herbert is a science fiction epic set in a distant future where noble families vie for control of the desert planet Arrakis, the only source of the spice melange, a powerful substance critical to space travel, which leads to an intricate tale of politics, religion, and rebellion.",
      "authors": ["Frank Herbert"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
    {
      "title": "Atomic Habits",
      "description": "Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. ",
      "authors": ["James Clear"],
      "rating": 0,
      "ratings": [],
      "hasRated": false
    },
  ];
  currentBookIndex = 0;
  get currentBook(): Book {
    return this.books[this.currentBookIndex];
  }

  restart() {
    this.currentBookIndex = 0;
    this.books.forEach((book) => (book.hasRated = false));
  }

  finish() {
    this.isDone = true;
    //alert('Край! Оцени всичко.');
  }

  get allBooksRated(): boolean {
    return this.books.every((book) => book.hasRated);
  }

  rateBook(rating: number) {
    this.currentBook.ratings.push(rating);
    this.currentBook.rating =
      this.currentBook.ratings.reduce((a, b) => a + b) /
      this.currentBook.ratings.length;
    this.currentBook.hasRated = true;
    this.currentBookIndex = (this.currentBookIndex + 1) % this.books.length;
  }

  updateBook(title: string, description: string, authors: string[]) {
    this.currentBook.title = title;
    this.currentBook.description = description;
    this.currentBook.authors = authors;
  }
}