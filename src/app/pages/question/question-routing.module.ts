import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionFormComponent } from './question-form/question-form.component';


const routes: Routes = [
  { path: 'create', component: QuestionFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
