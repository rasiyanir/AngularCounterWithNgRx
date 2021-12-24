import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { HomeComponent } from './home/home.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { EditPostsComponent } from './posts/edit-posts/edit-posts.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'counter', component: CounterComponent},
  {
    path: 'posts',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostsComponent},
      { path: 'edit/:id', component: EditPostsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
