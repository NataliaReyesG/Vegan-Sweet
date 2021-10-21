import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsmenuComponent } from './productsmenu.component';

describe('ProductsmenuComponent', () => {
  let component: ProductsmenuComponent;
  let fixture: ComponentFixture<ProductsmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
