import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOneComponent } from './work-one.component';

describe('WorkOneComponent', () => {
  let component: WorkOneComponent;
  let fixture: ComponentFixture<WorkOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
