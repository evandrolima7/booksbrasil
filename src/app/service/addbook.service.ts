import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../Interface/InterfaceBook';

@Injectable({ providedIn: 'root' })
export class AddbookService {
  private readonly API = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  addBook(book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.post<Book>(this.API, book);
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

  updateBook(id: number, book: Omit<Book, 'id'>): Observable<Book> {
    return this.http.put<Book>(`${this.API}/${id}`, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.API}/${id}`);
  }
}