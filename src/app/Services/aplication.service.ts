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

  crearAplicacion(nombre:string, descripcion:string,userID:number ){
    const url=`${base_url}/Aplicacion`
    return this.http.post(url,{
      nombre,descripcion,userID
    })
  }

}
