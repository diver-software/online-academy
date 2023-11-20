import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponent } from './overview.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wrapper',
  standalone: true,
  imports: [CommonModule, OverviewComponent],
  template: '<students-dashboard [students]="content"></students-dashboard>'
})
class WrapperComponent {
  content: string[] = [];
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
    wrapperComponent.content = ['student1', 'student2'];
    wrapperFixture.detectChanges();

    const noStudents = wrapperFixture.nativeElement.querySelector('.tst-no-students');
    expect(noStudents).toBeNull();
  });
});
