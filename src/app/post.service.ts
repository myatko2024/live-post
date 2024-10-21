import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  listOfPost: Post[] = [
    new Post(
      "Nature",
      "Descriptive Text is a text which says what a person or a thing is like. Its purpose is to describe and reveal a particular person, place, or thing. In a broad ...",
      "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
      "Mg Mg",
      new Date(),
      4
     ),
     new Post(
      "Collection",
      "A complete collection of quotes about nature to use in every imaginable project. Bring your quote to life with Adobe Express, no experience required.",
      "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
      "Aung Aung",
      new Date(),
      9
     ),
     new Post(
      "TextStudio",
      "TextStudio is an online application for creating custom text effects and logos. Our 3D text style effects generator can also be used to animate your fonts.",
      "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
      "Ma Ma",
      new Date(),
      5
     ),
  ];

  constructor() { }

  getPosts(){
    return this.listOfPost;
  }

  deletePost(index: number){
     this.listOfPost.splice(index,1);
  }

  addPost(post: any){
    this.listOfPost.push(post);
  }

  updatePost(index: number,post: any){
    this.listOfPost[index] = post;
  }

  getPost(index: number){
     return this.listOfPost[index];
  }

  likePost(index: number){
    this.listOfPost[index].numberOfLikes += 1;
  }
}
