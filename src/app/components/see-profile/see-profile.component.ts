import { Component, OnInit } from '@angular/core';
import { GetUserService } from 'src/app/services/get-user.service';

@Component({
  selector: 'app-see-profile',
  templateUrl: './see-profile.component.html',
  styleUrls: ['./see-profile.component.css']
})
export class SeeProfileComponent implements OnInit {
  user: string;

  constructor(
    private getUser: GetUserService
  ) { }

  ngOnInit(): void {
  }

  lookUpProfile() {
    console.log(this.user);
    this.getUser.findUser(this.user).subscribe((respone) => {
      console.log(respone);
    });

  }

}
