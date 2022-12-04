import { Component, OnInit } from '@angular/core';
import JsonDataDump from './DataDump.json';

@Component({
  selector: 'app-login-management',
  templateUrl: './login-management.component.html',
  styleUrls: ['./login-management.component.css']
})
export class LoginManagementComponent implements OnInit {
  
  records: any;

  constructor() { 
    this.records = JsonDataDump.data;
  }

  ngOnInit(): void {

  }
}
