import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { PersonComponent } from './pages/person/person.component';


const routes: Routes = [
  { path: "form", component:FormComponent},
  { path: "person", component:PersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
