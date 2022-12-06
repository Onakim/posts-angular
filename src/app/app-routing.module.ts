import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/home/home/home.component';
import { NotFoundComponent } from 'src/layout/not-found/not-found.component';
import { PostsComponent } from 'src/posts/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    title: 'Головна',
    component: HomeComponent
  },
  {
    path: 'posts',
    title: 'Пости',
    component: PostsComponent
  },
  {
    path: '**',
    title: 'Помилка',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
