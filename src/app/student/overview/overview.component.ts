import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'students-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      overview works!
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {

}
