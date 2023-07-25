import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoopageComponent } from './foopage/foopage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component:FoopageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
