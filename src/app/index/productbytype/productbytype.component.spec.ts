import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbytypeComponent } from './productbytype.component';

describe('ProductbytypeComponent', () => {
  let component: ProductbytypeComponent;
  let fixture: ComponentFixture<ProductbytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductbytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
