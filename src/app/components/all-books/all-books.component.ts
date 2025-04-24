import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AddbookService } from 'src/app/service/addbook.service';
import { Book } from 'src/app/Interface/InterfaceBook';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  books$!: Observable<Book[]>;
  loading = false;

  constructor(private addBookService: AddbookService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loading = true;
    this.books$ = this.addBookService.getBooks()
      .pipe(finalize(() => this.loading = false));
  }

  deleteBook(id: number): void {
    if (!confirm('Deseja realmente deletar este livro?')) {
      return;
    }
    this.addBookService.deleteBook(id)
      .subscribe({
        next: () => this.loadBooks(),
        error: err => console.error('Erro ao deletar:', err)
      });
  }
}
