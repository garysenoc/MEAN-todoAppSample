import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddTaskComponent } from './components/add-task/add-task.component';
import { AllComponent } from './components/all/all.component';
import { CompletedComponent } from './components/completed/completed.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { NotStartedComponent } from './components/not-started/not-started.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'all' },
  { path: 'all', component: AllComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'in-progress', component: InProgressComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'not-started', component: NotStartedComponent },
  { path: 'update-task/:id', component: UpdateTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
