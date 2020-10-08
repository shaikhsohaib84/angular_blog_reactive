import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GetBlogPayLoad } from '../addpost/get-blog-payload';
import { PostPayLoad } from  '../addpost/post-payload';

import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  getBlogPayLoad: GetBlogPayLoad;

  posts: Observable<Array<PostPayLoad>>;
  constructor(private postService: PostService) {

    this.getBlogPayLoad = {
      status : 'PUBLISHED'
    }
   }

  ngOnInit(): void {
    
    this.postService.getPostList(this.getBlogPayLoad).subscribe((res: any) => {
      console.log("Before",this.posts);
      this.posts = res;
      console.log("after",this.posts);
    },  error => {
      console.log("failed",this.getBlogPayLoad);
      alert("Blog Failed");
    })
  }
}