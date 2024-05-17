import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Student } from '../../models/student.model';
import { ListBootstrapUiComponent } from '../list-bootstrap-ui/list-bootstrap-ui.component';

@Component({
  selector: 'student-list',
  standalone: true,
  imports: [CommonModule, ListBootstrapUiComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  students$ = new BehaviorSubject<Student[]>([]);
}
