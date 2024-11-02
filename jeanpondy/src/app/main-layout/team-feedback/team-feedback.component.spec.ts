import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeedbackComponent } from './team-feedback.component';

describe('TeamFeedbackComponent', () => {
  let component: TeamFeedbackComponent;
  let fixture: ComponentFixture<TeamFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
