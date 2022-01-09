import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousStoriesComponent } from './previous-stories.component';

describe('PreviousStoriesComponent', () => {
  let component: PreviousStoriesComponent;
  let fixture: ComponentFixture<PreviousStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
