import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the title "Students Overview"', () => {
    const title = fixture.nativeElement.querySelector('.tst-title');
    expect(title).toBeTruthy();
    expect(title?.textContent).toContain('Students Overview');
  });

  it('should display an info when there are no students', () => {
    const noStudents = fixture.nativeElement.querySelector('.tst-no-students');
    expect(noStudents).toBeTruthy();
    expect(noStudents?.textContent).toContain('There are no students!');
  });
});
