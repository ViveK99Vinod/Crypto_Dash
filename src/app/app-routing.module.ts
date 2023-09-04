import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbodyComponent } from './dashbody/dashbody.component';

const routes: Routes = [
  {path:'dashbody',component:DashbodyComponent},
  {path:'',redirectTo:'dashbody',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
