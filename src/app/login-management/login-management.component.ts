import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login-management',
  templateUrl: './login-management.component.html',
  styleUrls: ['./login-management.component.css']
})
export class LoginManagementComponent implements OnInit {
  
  records: any;

  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {

    let obs: Observable<any> = this.userService.getUsers(1);
    this.records = obs.subscribe((response) => {
      this.records = response.data;
    });

  }
}
