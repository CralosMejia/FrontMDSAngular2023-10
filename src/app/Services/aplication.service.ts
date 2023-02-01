import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url=environment.url;

@Injectable({
  providedIn: 'root'
})
export class AplicationService {


  private searchParameter:any[];
  private searchParameter$: Subject<any[]>;

  constructor(private http:HttpClient) {
    this.searchParameter$= new Subject();
  }


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

  allUsers(userId:number){
    const url=`${base_url}/Usuarios/${userId}`
    return this.http.get(url)
  }

  allAppsParameters(fechaIni,fechaFin,tipoFecha,cliente,userID){
    const url=`${base_url}/Aplicacion/appsbydate?fechaIni=${fechaIni}&fechaFin=${fechaFin}&tipoFecha=${tipoFecha}&cliente=${cliente}&userId=${userID}`
    return this.http.get(url)
  }


  ///Comunicacion entre componentes
  changeSearchParameter(search:any[]){
    this.searchParameter = search;
    this.searchParameter$.next(this.searchParameter);
  }

  getSearchParameter$():Observable<any[]>{
    return this.searchParameter$.asObservable();
  }

}
