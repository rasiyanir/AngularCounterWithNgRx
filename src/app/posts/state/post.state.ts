import { Post } from "src/app/models/posts.model";

export interface postState {
  posts: Post[]
}

export const initialState: postState = {
  posts: [
    {id: '1', title: 'Sample Title 1', description: 'Sample Description 1'},
    {id: '2', title: 'Sample Title 2', description: 'Sample Description 2'}
  ]
}
