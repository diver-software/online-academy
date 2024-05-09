import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bootstrap-info-alert-ui[msg]',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bootstrap-info-alert-ui.component.html',
  styleUrl: './bootstrap-info-alert-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BootstrapInfoAlertUiComponent {
  @Input({required: true})
  msg!: string;
}
