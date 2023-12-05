import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../models/student.model';

interface Props {
  students: Student[];
  loading: boolean;
}

@Component({
  selector: 'students-overview-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-ui.component.html',
  styleUrl: './overview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewUiComponent {
  @Input()
  props: Props = { students: [], loading: false };
}
