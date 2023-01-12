import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';




class user{
  public username:string
  public password:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  login(username:string, password:string){

    return this.http.get(`http://meto24-001-site1.atempurl.com/api/Usuarios/Usuarios?user=${username}&pass=${password}`);
  }
}
