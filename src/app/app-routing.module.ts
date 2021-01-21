import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { FindCatComponent } from './find-cat/find-cat.component';

const routes: Routes = [
  { path: 'find', component: FindCatComponent },
  { path: 'fotos', component: FotosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
