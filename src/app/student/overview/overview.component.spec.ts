import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { OverviewUiComponent } from '../overview-ui/overview-ui.component';
import { StudentService } from '../services/student.service';
import { Observable, of } from 'rxjs';
import { fakeStudents, Student } from '../models/student.model';
import { By } from '@angular/platform-browser';

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;
  let studentService: StudentService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent, OverviewUiComponent],
      providers: [StudentService]
    })
      .compileComponents();
    studentService = TestBed.inject(StudentService);
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use an ui component', () => {
    const studentsOverviewUi = fixture.debugElement.query(By.directive(OverviewUiComponent));
    expect(studentsOverviewUi).toBeTruthy();
  });

  it('should fetch students and pass them to the child component', () => {
    const students = fakeStudents();
    jest.spyOn(studentService, 'getStudents').mockReturnValue(of(students));

  it('should fetch students and pass them to the child component', async () => {
    const students = fakeStudents();
    mockStudentService(of(students));
    fixture.detectChanges();

    await fixture.whenStable();

    const studentsOverviewUi: OverviewUiComponent = fixture.debugElement.query(
      By.directive(OverviewUiComponent)
    ).componentInstance;
    expect(studentsOverviewUi.props.students).toEqual(students);
  });

  const mockStudentService =
    (getStudentsMockResult: Observable<Student[]>) => {
      jest.spyOn(studentService
        , 'getStudents'
      ).mockReturnValue(getStudentsMockResult);

      fixture = TestBed.createComponent(OverviewComponent);
      component = fixture.componentInstance;
    }
});
