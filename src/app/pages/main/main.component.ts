import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AplicationService } from 'src/app/Services/aplication.service';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public aplicacionForm: FormGroup;
  public listaAplicaciones:any;
  public listaUsuarios:any;

  public isCreatedAplication:boolean = false;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private loginSRV:LoginService,
    private aplicacionesSRV:AplicationService
  ) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })

    this.aplicacionForm= this.fb.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });

    this.cargarAplicaciones();
    this.cargarUsuarios();

    this.aplicacionesSRV.getSearchParameter$().subscribe(resp=>{
      this.listaAplicaciones= resp;
    })
  }


  logout(){
    this.router.navigate(['/login'],{queryParams: {}});
  }

  cargarAplicaciones(){
    this.aplicacionesSRV.obtenerListaAplicaciones(this.userID).subscribe((resp:any)=>{
      this.listaAplicaciones = resp;
    });
  }

  cargarUsuarios(){
    this.aplicacionesSRV.allUsers(this.userID).subscribe((resp:any)=>{
      this.listaUsuarios = resp;
    })
  }

  verAplicacion(appId,nomClien){
    this.router.navigate(['/dashboard/verApp'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol,appId,nomClien}});
  }


}
