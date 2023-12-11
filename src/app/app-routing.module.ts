import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './property-view/property-view.component';
import { RegUserComponent } from './reg-user/reg-user.component';

const routes: Routes = [
  { path: 'stream/:id', component: RegUserComponent },
  { path: 'property', component: PropertyViewComponent },
  { path: "live", loadChildren: () => import('./managelivestream/managelivestream.module').then((m) => m.ManagelivestreamModule), },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
