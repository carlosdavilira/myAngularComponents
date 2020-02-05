import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDropdownComponent } from './my-dropdown.component';

describe('MyDropdownComponent', () => {
  let component: MyDropdownComponent;
  let fixture: ComponentFixture<MyDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
