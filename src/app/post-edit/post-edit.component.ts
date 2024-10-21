import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css'
})
export class PostEditComponent {
  form?: any;
  index: number = 0;
  editMode = false;

 constructor(
  private route: ActivatedRoute,
  private postService: PostService,
  private router: Router
){}

 ngOnInit(): void {
   let title = '';
   let description = '';
   let imagePath = '';

   this.route.params.subscribe(
    (params)=>{
      if(params['index']){
        this.index = params['index'];
        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
      }
   });

   this.form = new FormGroup({
    title: new FormControl(title,Validators.required),
    description: new FormControl(description,Validators.required),
    imagePath: new FormControl(imagePath,Validators.required),
   })

 }

 onUpdate(){
  const title = this.form.value.title;
  const description = this.form.value.description;
  const imagePath = this.form.value.imagePath;

   const post: Post = new Post(
    title,
    description,
    imagePath,
    "Test",
    new Date(),
    2
   )

   this.postService.updatePost(this.index,post);

   this.router.navigate(['post-list']);
 }
}
