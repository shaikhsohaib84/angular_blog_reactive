import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GetBlogPayLoad } from '../addpost/get-blog-payload';
import { PostPayLoad } from '../addpost/post-payload';

import { PostService } from '../post.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  getBlogPayLoad:GetBlogPayLoad;
  publishBlogPayLoad:GetBlogPayLoad;

  posts:Observable<Array<PostPayLoad>>;

  constructor(private postService: PostService, private router:Router) { 
    this.getBlogPayLoad = {
      status :"DRAFT"
    }

    this.publishBlogPayLoad = {
      status: "PUBLISHED"
    }
  }

  ngOnInit(): void {
    this.postService.getPostList(this.getBlogPayLoad).subscribe((res:any)=>{
      console.log(res)
      this.posts = res
    },error=>{
      alert("unable to fetch rec")
    })
  }

  publishdraft(id){
    console.log(id)
    this.postService.publishBlog(id, this.publishBlogPayLoad).subscribe((res:any)=>{
      alert("Your blog has been published")
      this.router.navigateByUrl("/")
    }, error=>{
      alert("unable to publish your draft")
    })
  }

}
