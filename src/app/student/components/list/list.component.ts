import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUiComponent } from '../list-ui/list-ui.component';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../../models/student.model';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule, ListUiComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  students$ = new BehaviorSubject<Student[]>([]);
}
