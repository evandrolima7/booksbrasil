import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AddbookService } from './addbook.service';
import { Book } from '../Interface/InterfaceBook';

describe('AddbookService', () => {
  let service: AddbookService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AddbookService]
    });
    service = TestBed.inject(AddbookService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch books', () => {
    const mockBooks: Book[] = [{ id:1, title:'A', author:'B', description:'C' }];
    service.getBooks().subscribe(books => expect(books).toEqual(mockBooks));
    const req = httpMock.expectOne('http://localhost:3000/books');
    expect(req.request.method).toBe('GET');
    req.flush(mockBooks);
  });

  afterEach(() => httpMock.verify());
});