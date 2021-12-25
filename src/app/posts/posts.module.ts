import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { AddPostsComponent } from "./add-posts/add-posts.component";
import { EditPostsComponent } from "./edit-posts/edit-posts.component";
import { PostsListComponent } from "./posts-list/posts-list.component";
import { PostReducer } from "./state/post.reducer";
import { POST_STATE_NAME } from "./state/post.selector";

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      { path: 'add', component: AddPostsComponent},
      { path: 'edit/:id', component: EditPostsComponent}
    ]
  }
]

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes), StoreModule.forFeature(POST_STATE_NAME, PostReducer)],
  declarations:[
    PostsListComponent,
    AddPostsComponent,
    EditPostsComponent,
  ]
})
export class PostsModule {

}