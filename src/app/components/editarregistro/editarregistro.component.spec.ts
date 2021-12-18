import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarregistroComponent } from './editarregistro.component';

describe('EditarregistroComponent', () => {
  let component: EditarregistroComponent;
  let fixture: ComponentFixture<EditarregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
