import { Routes } from '@angular/router';
import { ListComponent as StudentListComponent } from './student/components/list/list.component';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent
  },
];
