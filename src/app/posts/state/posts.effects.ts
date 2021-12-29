import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, tap } from "rxjs/operators";
import { PostService } from "src/app/services/post.service";
import { addPost, addPostSuccess, loadPosts, loadPostsSuccess } from "./post.actions";

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postService: PostService, private router: Router){}

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(ofType(loadPosts),
    mergeMap((action) => {
      return this.postService.getPosts().pipe(
        map((posts) => {
          return loadPostsSuccess({posts});
        })
      )
    }))
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService.addPost(action.post).pipe(
          map((data) => {
            const post = {...action.post, id: data.name};
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  postsRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPostSuccess),
      tap((action) => {
          this.router.navigate(['posts']);
      })
    )
  }, {dispatch: false});
}
