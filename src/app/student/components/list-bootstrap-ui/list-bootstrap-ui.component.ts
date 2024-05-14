import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'student-list-bootstrap-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-bootstrap-ui.component.html',
  styleUrl: './list-bootstrap-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListBootstrapUiComponent {

}
