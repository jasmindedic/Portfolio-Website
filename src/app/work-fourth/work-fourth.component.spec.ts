import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkFourthComponent } from './work-fourth.component';

describe('WorkFourthComponent', () => {
  let component: WorkFourthComponent;
  let fixture: ComponentFixture<WorkFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkFourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
