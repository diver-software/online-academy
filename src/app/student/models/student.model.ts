import * as fc from 'fast-check';

export interface Student {
  name: string;
  surname: string;
  birthday: Date;
  enrollDate: Date;
}

export const StudentArbitrary =
  fc.record({
    name: fc.string()
    , surname: fc.string()
    , birthday: fc.date()
    , enrollDate: fc.date()
  });

export const fakeStudents = (
  length = 10
): Student[] => fc.sample(
  StudentArbitrary
  , length
);