import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElPolloLocoComponent } from './el-pollo-loco.component';

describe('ElPolloLocoComponent', () => {
  let component: ElPolloLocoComponent;
  let fixture: ComponentFixture<ElPolloLocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElPolloLocoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElPolloLocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
