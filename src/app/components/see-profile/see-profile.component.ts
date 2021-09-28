import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/user';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit {
  username: string;
  _username: string;
  user: User = new User()

  constructor(
    private getUser: GetUserService
  ) { }

  ngOnInit(): void {
  }

  lookUpProfile() {
    console.log(this.username);
    this._username = this.username;
    this.getUser.page = 1;
    this.getUser.findUser(this._username).subscribe((user) => {
     
      this.user=user;

      // console.log(response);
      // this.data = response;

      //this.user = response[0];  //get all data
      
      //this.repoes = response;
      // this.user=response[0].owner;
      // //this.user.login = response[0].owner.login  //get only one piece of data
      // //this.user.avatar_url = response[0].owner.avatar_url
      // this.user.repositories = response;
      //less efficient way
      // for (let i = 0; i < response.length; i++) {
       //  this.user.name = response[i].name;
       //  this.user.language = response[i].language;
      // }
      // this.getUser.items += 10;
      // this.getUser.page++;
    });
    this.username = "";
  
  }

  onScroll() {
   this.getUser.page++;
   this.getUser.findUser(this._username).subscribe((user) => {
     this.user.repositories = this.user.repositories.concat(user.repositories);
   });
   console.log(this.getUser.items);
  }

}

