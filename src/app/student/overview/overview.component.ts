import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewUiComponent } from '../overview-ui/overview-ui.component';

@Component({
  selector: 'students-overview',
  standalone: true,
  imports: [CommonModule, OverviewUiComponent],
  template: `
    <students-overview-ui></students-overview-ui>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {

}
