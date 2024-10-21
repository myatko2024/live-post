import { Component } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  listofPost: Post[] = [];

  constructor(
    private postService: PostService
  ){}

  ngOnInit(): void {
    this.listofPost = this.postService.getPosts();
  }
}
