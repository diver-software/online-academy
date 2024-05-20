import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBootstrapUiComponent } from '../list-bootstrap-ui/list-bootstrap-ui.component';
import { StudentService } from '../../services/student';
import { Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Student } from '../../models/student.model';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule, ListBootstrapUiComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  private studentService: StudentService = inject(StudentService);

  private students$: Observable<Student[]> = this.studentService.getAll().pipe(
    tap(() => {
      this.loading.set(false);
    })
  );

  loading = signal(true);
  students = toSignal(this.students$, { initialValue: [] });
}
