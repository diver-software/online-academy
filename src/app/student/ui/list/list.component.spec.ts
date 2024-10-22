import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { findHTMLElement } from '../../../shared/utils/test.utils';
import { genStudents, Student } from '../../domain/student.model';
import { StudentsApplicationService } from '../../application/students-application.service';
import { signal } from '@angular/core';

type TestObjects = {
  component: ListComponent;
  fixture: ComponentFixture<ListComponent>;
}

describe('ListComponent', () => {
  const studentsAppServiceMock = {
    getLoadingSignal: jest.fn(),
    getStudentsSignal: jest.fn()
  };

  function createTestObjects(loading: boolean = false, students: Student[] = []): TestObjects {
    studentsAppServiceMock.getLoadingSignal.mockReturnValueOnce(signal(loading));
    studentsAppServiceMock.getStudentsSignal.mockReturnValueOnce(signal(students));
    const fixture = TestBed.createComponent(ListComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    return { fixture, component };
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [{ provide: StudentsApplicationService, useValue: studentsAppServiceMock }],
    })
    .compileComponents();
  });

  it('should create', () => {
    const { component } = createTestObjects();
    expect(component).toBeTruthy();
  });

  describe('"No students to show" banner', () => {
    it('Should print "No students to show" when there are no students', () => {
      const { fixture } = createTestObjects(false, []);
      const ne = findHTMLElement(fixture, By.css('#tst-none-students'));
      expect(ne.textContent).toContain("No students to show");
    });

    it('Should NOT print "No students to show" when there are students', () => {
      const { fixture } = createTestObjects(false, genStudents(1));
      const ne = findHTMLElement(fixture, By.css('#tst-none-students'));
      expect(ne).toBeFalsy();
    });
  });

  describe('Students', () => {
    const students = genStudents();
    let fixture: ComponentFixture<ListComponent>;

    beforeEach(() => {
      fixture = createTestObjects(false, students).fixture;
    });

    it('Should print students', () => {
      students.forEach((student) => {
        const ne = findHTMLElement(fixture, By.css('#tst-student-'+student.id));
        expect(ne).toBeTruthy();
      });
    });
  });

  describe('Loading', () => {

    it('should display the loading indicator when loading is true', () => {
      const { fixture } = createTestObjects(true);
      let ne = findHTMLElement(fixture, By.css('.tst-loading'));
      expect(ne).toBeTruthy();
    });


    it('should hide the loading indicator when loading is false', () => {
      const { fixture } = createTestObjects(false);
      let ne = findHTMLElement(fixture, By.css('.tst-loading'));
      ne = findHTMLElement(fixture, By.css('.tst-loading'));
      expect(ne).toBeFalsy();
    });
  });
});
