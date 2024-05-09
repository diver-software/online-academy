import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { genStudents } from '../models/student.model';

@Injectable({ providedIn: 'root' })
export class StudentService {
  getAll = () => of(genStudents())
}
