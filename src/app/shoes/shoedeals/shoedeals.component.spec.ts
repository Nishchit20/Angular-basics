import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoedealsComponent } from './shoedeals.component';

describe('ShoedealsComponent', () => {
  let component: ShoedealsComponent;
  let fixture: ComponentFixture<ShoedealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoedealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoedealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
