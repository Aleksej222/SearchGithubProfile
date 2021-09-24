import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserService {

  constructor(
    private _http: HttpClient
  ) { }

  findUser(username: string, page:number=0) {
    
    return this._http.get(`https://api.github.com/users/${username}/repos?page=${page.toString()}`);
  }
}
