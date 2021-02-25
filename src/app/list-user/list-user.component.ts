import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '../authservice.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  user: any = {};
  current: any = {};
  data: any = {};


  constructor(private authservice: AuthserviceService) {
  }

  dele: any = {};


  ngOnInit(): void {
    this.updateUsers(); // this.user = JSON.parse(localStorage.getItem('Users') as string);
  }

  updateUsers(): void {
    this.user = JSON.parse(localStorage.getItem('Users') as string);
  }

  // @ts-ignore
  // tslint:disable-next-line:typedef
    delete (index)
    {
      this.dele = this.user;
      this.dele.splice(index, 1);
      localStorage.setItem('Users', JSON.stringify(this.user).toString());

      // } else {
      //   alert(0)
      //   this.user = localStorage.removeItem('Users');
      // }
      // @ts-ignore

    }

    // tslint:disable-next-line:typedef
    // @ts-ignore
    // tslint:disable-next-line:typedef
    update(index)
    {
      this.data = JSON.parse(localStorage.getItem('Users') as string);

      // tslint:disable-next-line:no-conditional-assignment
      if (index !== -1) {

        const formData = this.data[index];
        this.current = formData;

      }
    }
    // @ts-ignore
    edit() {
      console.log(this.current, 'currnet edit method');
      // this.current =
      localStorage.setItem('Users', JSON.stringify(this.data));
      this.updateUsers();

    }
  }

