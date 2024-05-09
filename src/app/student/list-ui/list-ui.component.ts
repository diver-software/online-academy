import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-list-ui[students]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-ui.component.html',
  styleUrl: './list-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUiComponent {
  @Input({ required: true })
  students!: any[];
}
