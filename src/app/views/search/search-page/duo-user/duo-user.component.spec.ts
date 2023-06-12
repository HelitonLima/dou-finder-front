/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DuoUserComponent } from './duo-user.component';

describe('DuoUserComponent', () => {
  let component: DuoUserComponent;
  let fixture: ComponentFixture<DuoUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
