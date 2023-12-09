import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './property-view/property-view.component';
import { RegUserComponent } from './reg-user/reg-user.component';

const routes: Routes = [
  {path:'stream/:id',component:RegUserComponent},
  {path:'property/:id',component:PropertyViewComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
