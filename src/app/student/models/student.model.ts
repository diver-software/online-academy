import * as S from '@effect/schema/Schema';
import * as A from '@effect/schema/Arbitrary';
import * as FC from '@effect/schema/FastCheck';

const StudentId = S.Int.pipe(
  S.positive(),
  S.brand('StudentId')
);
type StudentId = S.Schema.Type<typeof StudentId>;

export const Student = S.Struct({
  id: StudentId,
  firstname: S.NonEmpty,
  lastname: S.NonEmpty,
  birthDate: S.DateFromString,
  enrolmentDate: S.DateFromString,
  profilePictureUrl: S.NonEmpty.annotations({
    arbitrary: () => (fc) => fc.webUrl()
  })
});
export type Student = S.Schema.Type<typeof Student>;

const StudentAbr: FC.Arbitrary<Student> = A.make(Student);

export const genStudents = (length: number = 20) =>
  FC.sample(
    FC.uniqueArray(
      StudentAbr,
      {
        selector: (student) => student.id,
        maxLength: length,
        minLength: length
      }
    ),
    1
  )[0];
