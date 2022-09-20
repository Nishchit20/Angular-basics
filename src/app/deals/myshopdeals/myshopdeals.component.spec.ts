import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyshopdealsComponent } from './myshopdeals.component';

describe('MyshopdealsComponent', () => {
  let component: MyshopdealsComponent;
  let fixture: ComponentFixture<MyshopdealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyshopdealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyshopdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
