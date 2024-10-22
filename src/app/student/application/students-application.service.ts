import { Injectable, signal } from '@angular/core';
import { of, tap } from 'rxjs';
import { genStudents } from '../domain/student.model';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class StudentsApplicationService {

  private loading = signal(true);

  private students$ = of(genStudents()).pipe(
    tap(() => this.loading.set(false))
  );

  getLoadingSignal() {
    return this.loading;
  }

  getStudentsSignal() {
    return toSignal(this.students$, { initialValue: [] });
  }
}
