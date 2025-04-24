import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddComponent } from './formAdd.component';

describe('formAdd', () => {
  let component: FormAddComponent;
  let fixture: ComponentFixture<FormAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
