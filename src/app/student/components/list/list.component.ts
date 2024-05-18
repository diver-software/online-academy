import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBootstrapUiComponent } from '../list-bootstrap-ui/list-bootstrap-ui.component';
import { StudentService } from '../../services/student';

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
  students$ = this.studentService.getAll();
}
