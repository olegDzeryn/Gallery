import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsListRoutingModule } from './authors-list-routing.module';
import { AuthorsListComponent } from './authors-list.component';
import { RouterModule } from '@angular/router';
import { AuthorItemComponent } from '../author-item/author-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthorDetailsComponent } from '../author-details/author-details.component';

@NgModule({
  declarations: [AuthorsListComponent,
    AuthorItemComponent,
    AuthorDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthorsListRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule
  ]
})
export class AuthorsListModule { }
