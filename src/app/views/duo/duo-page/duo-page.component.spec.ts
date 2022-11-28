import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoPageComponent } from './duo-page.component';

describe('DuoPageComponent', () => {
  let component: DuoPageComponent;
  let fixture: ComponentFixture<DuoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
