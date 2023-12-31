import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewUiComponent } from '../overview-ui/overview-ui.component';
import { StudentService } from '../services/student.service';
import { map, startWith } from 'rxjs';
import { Student } from '../models/student.model';

@Component({
  selector: 'students-overview',
  standalone: true,
  imports: [CommonModule, OverviewUiComponent],
  template: `
    <ng-container *ngIf="(overviewUiProps$ |  async) as overviewUiProps">
      <students-overview-ui [props]="overviewUiProps"></students-overview-ui>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
  private studentService = inject(StudentService);

  private initialOverviewUiProps: { students: Student[], loading: boolean } =
    {
      students: []
      , loading: true
    };

  private students2OverviewUiProps = (students: Student[]) =>
    ({
      students: students
      , loading: false
    });

  overviewUiProps$ = this.studentService.getStudents()
    .pipe(
      map(this.students2OverviewUiProps),
      startWith(this.initialOverviewUiProps)
    );
}
