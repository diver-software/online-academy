import * as fc from 'fast-check';

export interface Student {
  id: number;
  firstname: string;
  lastname: string;
}


const StudentsArb:  fc.Arbitrary<Student> = fc.record({
  id: fc.integer({ min: 1 }).noBias(),
  firstname: fc.string({ minLength: 3 }),
  lastname: fc.string({ minLength: 3 }),
});

export const genStudents = (length: number = 20) => fc.sample(StudentsArb, length);
