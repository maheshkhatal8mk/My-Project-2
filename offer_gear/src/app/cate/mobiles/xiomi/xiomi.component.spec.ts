import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XiomiComponent } from './xiomi.component';

describe('XiomiComponent', () => {
  let component: XiomiComponent;
  let fixture: ComponentFixture<XiomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XiomiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XiomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
