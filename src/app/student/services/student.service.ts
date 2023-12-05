import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  getStudents = (): Observable<Student[]> => {
    // TODO: not yet implemented
    return of([]);
  }

  constructor() { }
}
