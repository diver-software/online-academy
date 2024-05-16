import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Student } from '../../models/student.model';
import { BootstrapInfoAlertUiComponent } from '../../../shared/components/bootstrap-info-alert-ui/bootstrap-info-alert-ui.component';

@Component({
  selector: 'student-list-bootstrap-ui[students]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, BootstrapInfoAlertUiComponent],
  templateUrl: './list-bootstrap-ui.component.html',
  styleUrl: './list-bootstrap-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBootstrapUiComponent {
  @Input({ required: true })
  students!: Student[];
}
