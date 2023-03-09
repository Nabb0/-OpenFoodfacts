import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutIdComponent } from './about-id/about-id.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'about-id', component: AboutIdComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }