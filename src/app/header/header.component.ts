import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  u = this.localStorage.retrieve('loginData');
  constructor(public authService: AuthService, private router: Router, public localStorage: LocalStorageService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl("/");
  }

  deleteprofile(){
    let d = this.localStorage.retrieve('loginData');
    this.authService.deleteUser(d.id).subscribe((res:any)=>{
          this.router.navigateByUrl('home')
        }, error=>{
          alert("unable to fetch record")
        })
        this.localStorage.clear('loginData');
  }
}
