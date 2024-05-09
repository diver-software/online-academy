import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';

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
    component.students$.next(["student1", "student2"]);
    fixture.detectChanges();

    const ne = fixture.debugElement.query(By.css("#tst-none-students"))?.nativeElement as HTMLElement;
    expect(ne).toBeFalsy();
  });
});
