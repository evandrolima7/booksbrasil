import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddbookService } from 'src/app/service/addbook.service';

@Component({
  selector: 'app-for-add',
  templateUrl: './formAdd.component.html',
  styleUrls: ['./formAdd.component.css']
})
export class FormAddComponent implements OnInit {
  bookForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private addBookService: AddbookService
  ) { }

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.bookForm.invalid) {
      this.bookForm.markAllAsTouched();
      return;
    }
    this.addBookService.addBook(this.bookForm.value)
      .subscribe({
        next: newBook => {
          console.log('Livro adicionado:', newBook);
          this.bookForm.reset();
        },
        error: err => console.error('Falha ao adicionar livro:', err)
      });
  }


  hasError(controlName: string, error: string): boolean {
    const control = this.bookForm.get(controlName);
    return control!.touched && control!.hasError(error);
  }
}
