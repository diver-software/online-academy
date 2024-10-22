import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../../../shared/ui/loading.component';
import { InfoAlertComponent } from '../../../shared/ui/info-alert.component';
import { CardComponent } from '../card/card.component';
import { StudentsApplicationService } from '../../application/students-application.service';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    InfoAlertComponent,
    CardComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (loading()) {
      <bootstrap-loading-ui></bootstrap-loading-ui>
    } @else {
      @if (students().length == 0) {
        <div id="tst-none-students">
          <bootstrap-info-alert-ui msg="No students to show"></bootstrap-info-alert-ui>
        </div>
      }

      @for (student of students(); track student.id) {
        <div [attr.id]="'tst-student-' + student.id" class="d-flex flex-row justify-content-center m-2">
          <student-card [student]="student"></student-card>
        </div>
      }
    }
  `
})
export class ListComponent {
  private studentsAppService = inject(StudentsApplicationService);

  loading = this.studentsAppService.getLoadingSignal();
  students = this.studentsAppService.getStudentsSignal();
}
