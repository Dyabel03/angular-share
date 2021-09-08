import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyShareComponent } from './my-share.component';

describe('MyShareComponent', () => {
  let component: MyShareComponent;
  let fixture: ComponentFixture<MyShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyShareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
