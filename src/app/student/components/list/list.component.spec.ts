import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { genStudents, Student } from '../../models/student.model';
import { Observable, of, ReplaySubject } from 'rxjs';
import { StudentService } from '../../services/student';
import { findHTMLElement } from '../../../shared/utils/test.utils';

type TestObjects = {
  component: ListComponent;
  fixture: ComponentFixture<ListComponent>;
}

describe('ListComponent', () => {
  const studentServiceMock = { getAll: jest.fn() };

  function createTestObjects(students$: Observable<Student[]>): TestObjects {
    studentServiceMock.getAll.mockReturnValueOnce(students$);
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
    const { component } = createTestObjects(of());
    expect(component).toBeTruthy();
  });

  describe('"No students to show" banner', () => {
    it('Should print "No students to show" when there are no students', () => {
      const { fixture } = createTestObjects(of([]));
      const ne = findHTMLElement(fixture, By.css('#tst-none-students'));
      expect(ne.textContent).toContain("No students to show");
    });

    it('Should NOT print "No students to show" when there are students', () => {
      const { fixture } = createTestObjects(of(genStudents(1)));
      const ne = findHTMLElement(fixture, By.css('#tst-none-students'));
      expect(ne).toBeFalsy();
    });
  });

  describe('Student\'s properties', () => {
    const students = genStudents();
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(() => {
      fixture = createTestObjects(of(students)).fixture;
    });

    it('Should print student\'s firstname', () => {
      students.forEach((student) => {
        const ne = findHTMLElement(fixture, By.css('#tst-student-'+student.id));
        expect(ne.textContent).toContain(student.firstname);
      });
    });

    it('Should print student\'s lastname', () => {
      students.forEach((student) => {
        const ne = findHTMLElement(fixture, By.css('#tst-student-'+student.id));
        expect(ne.textContent).toContain(student.lastname);
      });
    });

    it('Should print student\'s date of birth e.g. "Wed Jun 14 2017"', () => {
      students.forEach((student) => {
        const ne = findHTMLElement(fixture, By.css('#tst-student-'+student.id));
        expect(ne.textContent).toContain(student.birthDate.toDateString());
      });
    });

    it('Should print student\'s enrollment date e.g. "Wed Jun 14 2017"', () => {
      students.forEach((student) => {
        const ne = findHTMLElement(fixture, By.css('#tst-student-'+student.id));
        expect(ne.textContent).toContain(student.enrolmentDate.toDateString());
      });
    });

    it('Should print student\'s profile Picture', () => {
      students.forEach((student) => {
        const ne = fixture.debugElement.query(By.css(`#tst-student-${student.id} img`))?.nativeElement as HTMLElement;
        expect(ne.getAttribute('src')).toContain(student.profilePictureUrl);
      });
    });
  });

  describe('Loading', () => {
    const students$ = new ReplaySubject<Student[]>(1);

    afterAll(() => {
      students$.unsubscribe();
    });

    it('Should print loading indicator while student\'s data is being requested', () => {
      const { fixture } = createTestObjects(students$.asObservable());
      let ne = findHTMLElement(fixture, By.css('.tst-loading'));
      expect(ne).toBeTruthy();

      students$.next([]);
      fixture.detectChanges();
      ne = findHTMLElement(fixture, By.css('.tst-loading'));
      expect(ne).toBeFalsy();
    });
  });
});
