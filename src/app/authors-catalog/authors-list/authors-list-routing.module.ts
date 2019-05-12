import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsListComponent } from './authors-list.component';
import { AuthorDetailsComponent } from '../author-details/author-details.component';


const routes: Routes = [
  { path: '', component: AuthorsListComponent },
  { path: 'author', component: AuthorDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsListRoutingModule { }
