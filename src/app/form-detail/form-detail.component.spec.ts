import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailComponent } from './form-detail.component';

describe('FormMDetailComponent', () => {
  let component: FormDetailComponent;
  let fixture: ComponentFixture<FormDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
