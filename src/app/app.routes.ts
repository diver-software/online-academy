import { Routes } from '@angular/router';
import { ListComponent as StudentListComponent } from './student/ui/list/list.component';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent
  },
];
