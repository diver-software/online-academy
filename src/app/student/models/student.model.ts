import * as fc from 'fast-check';

export interface Student {
  name: string;
}

export const StudentArbitrary =
  fc.record({
    name: fc.string()
  });

export const fakeStudents = (length = 10): Student[] => fc.sample(StudentArbitrary, length);