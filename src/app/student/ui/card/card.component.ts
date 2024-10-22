import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Student } from '../../domain/student.model';

@Component({
  selector: 'student-card[student]',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="card p-3 rounded">
      <div class="d-flex align-items-center">
        <div class="image">
          <img [ngSrc]="student.profilePictureUrl" width="150" height="150" class="img-fluid rounded-start" alt="Profile Picture">
        </div>

        <div class="ml-3 w-100">
          <h4 class="mb-0 mt-0">{{ student.firstname }} {{ student.lastname }}</h4>

          <div class="p-2 mt-2 d-flex flex-column rounded digest">
            <div>
              <span>Born on </span>
              <strong>{{ student.birthDate.toDateString() }}</strong>
            </div>

            <div>
              <span>Enrolled on </span>
              <strong>{{ student.enrolmentDate.toDateString() }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .card {
        width: 500px;

        .digest {
          background-color: whitesmoke;
          color: #000 !important;
          font-size: 10px;
        }
      }
    `
  ]
})
export class CardComponent {
  @Input({ required: true })
  student!: Student;
}
