import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCrmComponent } from './simple-crm.component';

describe('SimpleCrmComponent', () => {
  let component: SimpleCrmComponent;
  let fixture: ComponentFixture<SimpleCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleCrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
