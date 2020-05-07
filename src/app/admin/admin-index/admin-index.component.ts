import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-admin-index',
  templateUrl: './admin-index.component.html',
  styleUrls: ['./admin-index.component.css']
})
export class AdminIndexComponent implements OnInit {
  currentUser: any;

  constructor(
    private router: Router, 
    private userService: UserService, 
    private token: TokenStorageService, 
    private tokenStorageService: TokenStorageService
  ) { }
  content = '';
  ngOnInit(): void {
   
    if (this.token.getUser()) {
      this.currentUser = true;
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }
  logout() {
    this.tokenStorageService.signOut();
    // this.router.navigateByUrl('/home');
    window.location.reload();
  }

}
