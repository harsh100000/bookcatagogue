import { Component } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrl: './show-post.component.css'
})
export class ShowPostComponent {
  allPost:Post[] =[];
  constructor(private postService:PostService){
    this.allPost = postService.getPost();
  }
}


