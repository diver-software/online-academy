import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fakeStudents, Student } from '../models/student.model';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'wrapper',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  template: '<students-dashboard [props]="props"></students-dashboard>'
})
class WrapperComponent {
  props: { students: Student[], loading: boolean } = { students: [], loading: false };
}

describe('OverviewComponent', () => {
  let component: OverviewComponent;
  let fixture: ComponentFixture<OverviewComponent>;

  let wrapperFixture: ComponentFixture<WrapperComponent>;
  let wrapperComponent: WrapperComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverviewComponent, WrapperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    wrapperFixture = TestBed.createComponent(WrapperComponent);
    wrapperComponent = wrapperFixture.componentInstance;
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

  it('should NOT display an info when there are students', () => {
    const noStudents = wrapperFixture.nativeElement.querySelector('.tst-no-students');
    expect(noStudents).toBeNull();
  });

  it('Should display students', () => {
    const students = fakeStudents();
    wrapperComponent.props = { students, loading: false };
    wrapperFixture.detectChanges();

    const studentElems: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('.tst-student');
    expect(studentElems).toBeTruthy();
    expect(studentElems.length).toBe(students.length);
  });

  it('Should show every student name', () => {
    const students = fakeStudents();
    wrapperComponent.props = { students, loading: false };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .queryAll(By.css('.tst-student-name'))
      .map(it => it?.nativeElement?.textContent);

    students.forEach(student => {
      expect(expected).toContain(student.name);
    });
  });

  it('Should show every student surname', () => {
    const students = fakeStudents();
        wrapperComponent.props = { students, loading: false };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .queryAll(By.css('.tst-student-surname'))
      .map(it => it?.nativeElement?.textContent);

    students.forEach(student => {
      expect(expected).toContain(student.surname);
    });
  });

  it('Should show every student birthday', () => {
    const students = fakeStudents();
    wrapperComponent.props = { students, loading: false };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .queryAll(By.css('.tst-student-birthday'))
      .map(it => it?.nativeElement?.textContent);

    students.forEach(student => {
      expect(expected).toContain(student.birthday.toDateString());
    });
  });

  it('Should show every student enroll date', () => {
    const students = fakeStudents();
    wrapperComponent.props = { students, loading: false };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .queryAll(By.css('.tst-student-enroll-date'))
      .map(it => it?.nativeElement?.textContent);

    students.forEach(student => {
      expect(expected).toContain(student.enrollDate.toDateString());
    });
  });

  it('Should show loading indicator', () => {
    wrapperComponent.props = { students: [], loading: true };
    wrapperFixture.detectChanges();

    const loadingIndicator = wrapperFixture.debugElement
      .query(By.css('.tst-loading-indicator'))

    expect(loadingIndicator).toBeTruthy();
  });

  it('Should NOT show students when loading', () => {
    wrapperComponent.props = { students: fakeStudents(), loading: true };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .queryAll(By.css('.tst-student'))

    expect(expected.length).toBe(0);
  });

  it('Should NOT show no-students indicator when loading', () => {
    wrapperComponent.props = { students: [], loading: true };
    wrapperFixture.detectChanges();

    const expected = wrapperFixture.debugElement
      .query(By.css('.tst-no-students'))

    expect(expected).toBeFalsy();
  });
});
