import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const base_url=environment.url;

@Injectable({
  providedIn: 'root'
})
export class AplicationService {

  constructor(private http:HttpClient) { }


  obtenerListaAplicaciones(idUser:number){
    const url=`${base_url}/Aplicacion/allAplications/${idUser}`

    return this.http.get(url);
  }

  crearAplicacion(aplicacion:any ){
    const url=`${base_url}/Aplicacion`
    return this.http.post(url,aplicacion)
  }

  obtenerNumeroApp(idUser:number){
    const url=`${base_url}/Aplicacion/numApp/${idUser}`

    return this.http.get(url);
  }

  obtenerUsuariosSinAdmin(){
    const url=`${base_url}/Usuarios/whitoutadmin`

    return this.http.get(url);
  }

  obtenerAplicacion(appId){
    const url=`${base_url}/Aplicacion/${appId}`

    return this.http.get(url);
  }

}
