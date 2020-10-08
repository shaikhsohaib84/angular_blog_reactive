import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PostPayLoad } from './addpost/post-payload';
import { GetBlogPayLoad } from './addpost/get-blog-payload';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = "http://localhost:8000/api/";

  addPost(postPayLoad: PostPayLoad): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json' });
    return this.httpClient.post(this.baseUrl + 'blog/createblog', postPayLoad, { headers:headers });
  }

  getPostList(getBlogPayLoad: GetBlogPayLoad): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json' });
    return this.httpClient.post(this.baseUrl + 'blog/getbloglist', getBlogPayLoad, { headers : headers});
  }

  getPostById(id: Number): Observable<any>{
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
    return this.httpClient.get(this.baseUrl + 'blog/getBlogDetails/' + id, { headers:headers });
  }
}
