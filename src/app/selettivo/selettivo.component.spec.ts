import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelettivoComponent } from './selettivo.component';

describe('SelettivoComponent', () => {
  let component: SelettivoComponent;
  let fixture: ComponentFixture<SelettivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelettivoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelettivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
