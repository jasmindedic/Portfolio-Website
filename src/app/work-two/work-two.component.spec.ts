import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTwoComponent } from './work-two.component';

describe('WorkTwoComponent', () => {
  let component: WorkTwoComponent;
  let fixture: ComponentFixture<WorkTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
