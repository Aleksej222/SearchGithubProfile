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

  user: User = new User()

  constructor(
    private getUser: GetUserService
  ) { }

  ngOnInit(): void {
  }

  lookUpProfile() {
    console.log(this.username);
    this.getUser.findUser(this.username).subscribe((response:any) => {
      console.log(response);
      this.user = response[0];  //get all data
      //this.user.login = response[0].owner.login  //get only one piece of data
    });
    this.username = "";
  }

}

