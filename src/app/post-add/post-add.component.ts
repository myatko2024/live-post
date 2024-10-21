import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.css'
})
export class PostAddComponent {
 form?: any;

 constructor(
  private postService: PostService,
  private router: Router
 ){}

 ngOnInit(): void {
   this.form = new FormGroup({
    title: new FormControl(null,Validators.required),
    description: new FormControl(null,Validators.required),
    imagePath: new FormControl(null,Validators.required),
   })
 }

 onSubmit(){
  const title = this.form.value.title;
  const description = this.form.value.description;
  const imagePath = this.form.value.imagePath;

   const post: Post = new Post(
    title,
    description,
    imagePath,
    "Test",
    new Date(),
    5
   )

   this.postService.addPost(post);

   this.router.navigate(['post-list']);
 }
}
