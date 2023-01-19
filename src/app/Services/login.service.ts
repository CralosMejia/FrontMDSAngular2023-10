import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const base_url=environment.url;

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
    const url=`${base_url}/Usuarios/Usuarios?user=${username}&pass=${password}`

    return this.http.get(url);
  }
}
