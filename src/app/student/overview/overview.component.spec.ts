import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student.model';

@Component({
  selector: 'wrapper',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  template: '<students-dashboard [students]="content"></students-dashboard>'
})
class WrapperComponent {
  content: Student[] = [];
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
    const students = [ { name: 'student1' }, { name: 'student2' } ];
    wrapperComponent.content = students;
    wrapperFixture.detectChanges();

    const studentElems: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('.tst-student');
    expect(studentElems).toBeTruthy();
    expect(studentElems.length).toBe(students.length);
  });

  it('Should show every student name', () => {
    const students = [ { name: 'student1' }, { name: 'student2' } ];
    wrapperComponent.content = students;
    wrapperFixture.detectChanges();

    const studentNameElems: HTMLElement[] = wrapperFixture.nativeElement.querySelectorAll('.tst-student-name');
    expect(studentNameElems).toBeTruthy();
    expect(studentNameElems.length).toBe(students.length);
    studentNameElems.forEach(elem => {
      expect(students.some(student => student.name === elem?.textContent)).toBeTruthy();
    });
  });
});
