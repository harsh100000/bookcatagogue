import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private allPosts: Post[] = [];
  constructor() { }

  addPost(userPost: Post) {
    this.allPosts.push(userPost);
    localStorage.setItem('books',JSON.stringify(this.allPosts));
    console.log(this.allPosts);
  }

  getPost(): Post[] {
    const jsonString = localStorage.getItem("books");
    if (jsonString) {
      this.allPosts = JSON.parse(jsonString);
    }
    console.log(jsonString);
    return this.allPosts;
  }

  getPostById(id: string):Post {
    let post:Post;
    for (let i = 0; i < this.allPosts.length; i++) {
      if (id === this.allPosts[i].id){
        post = this.allPosts[i];
        break;
      }
    }
    return post;
  }

  deletePost(id:string)
  {
    for (let i = 0; i < this.allPosts.length; i++) {
      if (id === this.allPosts[i].id){
        this.allPosts.splice(i,1);
        break;
      }
    }
  }

}

