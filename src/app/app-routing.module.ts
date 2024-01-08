import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyViewComponent } from './property-view/property-view.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { CompeletedStreamComponent } from '../app/compeleted-stream/compeleted-stream.component';
import { StreamDetailsComponent } from './stream-details/stream-details.component';
import { CompletdStreamVideoComponent } from './completd-stream-video/completd-stream-video.component';

const routes: Routes = [
  { path: 'stream/:id', component: RegUserComponent },
  { path: 'property', component: PropertyViewComponent },
  {
    path: 'completed-stream'
    , children: [
      { path: '', component: CompeletedStreamComponent },
      { path: 'stream-details', component: StreamDetailsComponent },
      { path: "stream", component: CompletdStreamVideoComponent }
    ]
  },

  { path: "live", loadChildren: () => import('./managelivestream/managelivestream.module').then((m) => m.ManagelivestreamModule), },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
