import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { genStudents, Student } from '../../domain/student.model';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let fixture: ComponentFixture<CardComponent>;
  let component: CardComponent;

  const studentMock: Student = genStudents(1)[0];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        CardComponent
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.student = studentMock;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the student’s full name', () => {
    expect(fixture.nativeElement.textContent).toContain(`${studentMock.firstname} ${studentMock.lastname}`);
  });

  it('should display the student’s profile picture', () => {
    const imgElement = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(imgElement.src).toContain(studentMock.profilePictureUrl);
  });

  it('should display the student’s birth date', () => {
    expect(fixture.nativeElement.textContent).toContain(studentMock.birthDate.toDateString());
  });

  it('should display the student’s enrolment date', () => {
    expect(fixture.nativeElement.textContent).toContain(studentMock.enrolmentDate.toDateString());
  });
});
