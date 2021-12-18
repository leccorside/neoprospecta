import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoregistroComponent } from './novoregistro.component';

describe('NovoregistroComponent', () => {
  let component: NovoregistroComponent;
  let fixture: ComponentFixture<NovoregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoregistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
