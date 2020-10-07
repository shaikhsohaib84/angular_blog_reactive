import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostPayLoad } from './addpost/post-payload';
import { Observable } from 'rxjs';

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
}
