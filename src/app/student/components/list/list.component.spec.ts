import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { genStudents, Student } from '../../models/student.model';
import { of } from 'rxjs';
import { StudentService } from '../../services/student';

type TestObjects = {
  component: ListComponent;
  fixture: ComponentFixture<ListComponent>;
}

describe('ListComponent', () => {
  const studentServiceMock = { getAll: jest.fn() };

  function createTestObjects(students: Student[] = []): TestObjects {
    studentServiceMock.getAll.mockReturnValueOnce(of(students));
    const fixture = TestBed.createComponent(ListComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { fixture, component };
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: StudentService, useValue: studentServiceMock }],
    })
    .compileComponents();
  });

  it('should create', () => {
    const { component } = createTestObjects();
    expect(component).toBeTruthy();
  });

  describe('"No students to show" banner', () => {
    it('Should print "No students to show" when there are no students', () => {
      const { fixture } = createTestObjects([]);
      const ne = fixture.debugElement.query(By.css('#tst-none-students'))?.nativeElement as HTMLElement;
      expect(ne.textContent).toContain("No students to show");
    });

    it('Should NOT print "No students to show" when there are students', () => {
      const { fixture } = createTestObjects(genStudents(1));
      const ne = fixture.debugElement.query(By.css('#tst-none-students'))?.nativeElement as HTMLElement;
      expect(ne).toBeFalsy();
    });
  });

  describe('Student\'s properties', () => {
    let students = genStudents();
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(() => {
      fixture = createTestObjects(students).fixture;
    });

    it('Should print student\'s firstname', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement.query(By.css('#tst-student-'+student.id))?.nativeElement as HTMLElement;
        expect(ne.textContent).toContain(student.firstname);
      });
    });

    it('Should print student\'s lastname', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement.query(By.css('#tst-student-'+student.id))?.nativeElement as HTMLElement;
        expect(ne.textContent).toContain(student.lastname);
      });
    });

    it('Should print student\'s date of birth e.g. "Wed Jun 14 2017"', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement.query(By.css('#tst-student-'+student.id))?.nativeElement as HTMLElement;
        expect(ne.textContent).toContain(student.birthDate.toDateString());
      });
    });

    it('Should print student\'s enrollment date e.g. "Wed Jun 14 2017"', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement.query(By.css('#tst-student-'+student.id))?.nativeElement as HTMLElement;
        expect(ne.textContent).toContain(student.enrolmentDate.toDateString());
      });
    });

    it('Should print student\'s profile Picture', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement
          .query(By.css('#tst-student-'+student.id))
          .query(By.css('img')).nativeElement as HTMLElement;
        expect(ne.getAttribute('src')).toContain(student.profilePictureUrl);
      });
    });
  });
});
