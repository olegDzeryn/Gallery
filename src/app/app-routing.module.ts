import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'authors' },
    { path: 'authors', loadChildren: './authors-catalog/authors-list/authors-list.module#AuthorsListModule' }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,

        RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
