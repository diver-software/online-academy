import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Student } from '../../models/student.model';

@Component({
  selector: 'student-list-ui[students]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './list-ui.component.html',
  styleUrl: './list-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUiComponent {
  @Input({ required: true })
  students!: Student[];
}
