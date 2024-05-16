import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Student } from '../../models/student.model';

@Component({
  selector: 'student-list-bootstrap-ui[students]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './list-bootstrap-ui.component.html',
  styleUrl: './list-bootstrap-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBootstrapUiComponent {
  @Input({ required: true })
  students!: Student[];
}
