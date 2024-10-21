import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
 @Input() post?: Post;
 @Input() index?: number;

 constructor(
  private postService: PostService,
  private router: Router
 ){

 }

 ngOnInit(): void {

 }

 deletePost(index: any){
  this.postService.deletePost(index);
 }

 editPost(){
   this.router.navigate(['post-edit',this.index]);
 }

 likesPost(){

 }
}
