import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-loading-ui',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootstrap-loading-ui.component.html',
  styleUrl: './bootstrap-loading-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapLoadingUiComponent {

}
