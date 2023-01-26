import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AplicationService } from 'src/app/Services/aplication.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public appID:number;
  public aplicacion:any;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private appSrv:AplicationService
  ) { }

  ngOnInit(): void {
    this.cargarVariables();
  }


  cargarVariables(){
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];
      this.appID = params['appId'];

    })

    this.appSrv.obtenerAplicacion(this.appID).subscribe(resp =>{
      this.aplicacion= resp[0]
    })
  }

  regresar(){
    this.router.navigate(['/mainPage'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
  }

}
