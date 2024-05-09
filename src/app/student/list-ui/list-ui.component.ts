import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-list-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-ui.component.html',
  styleUrl: './list-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListUiComponent {

}
