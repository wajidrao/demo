import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name="wajid from user components";
  obj={
    rollNo:3,name:"sumit",salary:4000
  }
  arra=[1,"wajid",5000];
  

}
