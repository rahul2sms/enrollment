import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public userList:User[];

    constructor() {
        this.userList = [];
    }

    createUser(firstName: string, lastName: string, dob: string, gender: string, email: string, phone: string, subject:string) {
        const user = new User(firstName, lastName, dob, gender, email, phone, subject);
        this.userList.push(user);
    }
}
