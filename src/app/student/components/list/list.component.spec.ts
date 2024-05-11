import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { genStudents } from '../../models/student.model';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should print "No students to show" when there are no students', () => {
    component.students$.next([]);
    fixture.detectChanges();

    const ne = fixture.debugElement.query(By.css("#tst-none-students"))?.nativeElement as HTMLElement;
    expect(ne.textContent).toContain("No students to show");
  });

  it('Should NOT print "No students to show" when there are students', () => {
    component.students$.next(genStudents());
    fixture.detectChanges();

    const ne = fixture.debugElement.query(By.css("#tst-none-students"))?.nativeElement as HTMLElement;
    expect(ne).toBeFalsy();
  });

  it('Should print student\'s firstname', () => {
    const students = genStudents()
    component.students$.next(students);
    fixture.detectChanges();

    students.forEach((student) => {
      const ne = fixture.debugElement.query(By.css("#tst-student-"+student.id))?.nativeElement as HTMLElement;
      expect(ne.textContent).toContain(student.firstname);
    });
  });

  it('Should print student\'s lastname', () => {
    const students = genStudents()
    component.students$.next(students);
    fixture.detectChanges();

    students.forEach((student) => {
      const ne = fixture.debugElement.query(By.css("#tst-student-"+student.id))?.nativeElement as HTMLElement;
      expect(ne.textContent).toContain(student.lastname);
    });
  });

  it('Should print student\'s date of birth e.g. "Wed Jun 14 2017"', () => {
    const students = genStudents()
    component.students$.next(students);
    fixture.detectChanges();

    students.forEach((student) => {
      const ne = fixture.debugElement.query(By.css("#tst-student-"+student.id))?.nativeElement as HTMLElement;
      expect(ne.textContent).toContain(student.birthDate.toDateString());
    });
  });

  it('Should print student\'s enrollment date e.g. "Wed Jun 14 2017"', () => {
    const students = genStudents()
    component.students$.next(students);
    fixture.detectChanges();

    students.forEach((student) => {
      const ne = fixture.debugElement.query(By.css("#tst-student-"+student.id))?.nativeElement as HTMLElement;
      expect(ne.textContent).toContain(student.enrolmentDate.toDateString());
    });
  });

  it('Should print student\'s profile Picture', () => {
    const students = genStudents()
    component.students$.next(students);
    fixture.detectChanges();

    students.forEach((student) => {
      const ne = fixture.debugElement
        .query(By.css("#tst-student-"+student.id))
        .query(By.css("img")).nativeElement as HTMLElement;
      expect(ne.getAttribute("src")).toContain(student.profilePictureUrl);
    });
  });
});
