import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Student } from '../../models/student.model';
import { BootstrapInfoAlertUiComponent } from '../../../shared/components/bootstrap-info-alert-ui/bootstrap-info-alert-ui.component';

@Component({
  selector: 'student-card-bootstrap-ui[student]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BootstrapInfoAlertUiComponent],
  templateUrl: './card-bootstrap-ui.component.html',
  styleUrl: './card-bootstrap-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBootstrapUiComponent {
  @Input({ required: true })
  student!: Student;
}
