import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoconComponent } from './videocon.component';

describe('VideoconComponent', () => {
  let component: VideoconComponent;
  let fixture: ComponentFixture<VideoconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
