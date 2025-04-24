import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBooksComponent } from './all-books.component';
import { of } from 'rxjs';

describe('AllBooksComponent', () => {
  let component: AllBooksComponent;
  let fixture: ComponentFixture<AllBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deve exibir lista de livros após init', () => {
    const fixture = TestBed.createComponent(AllBooksComponent);
    const comp = fixture.componentInstance;
    spyOn(comp['addBookService'], 'getBooks').and.returnValue(of([{id:1,title:'T',author:'A',description:'D'}]));
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('T');
  });
});
