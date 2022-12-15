import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkThirdComponent } from './work-third.component';

describe('WorkThirdComponent', () => {
  let component: WorkThirdComponent;
  let fixture: ComponentFixture<WorkThirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkThirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkThirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
