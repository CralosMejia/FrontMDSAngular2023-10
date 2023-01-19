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
      console.log(params['user']);
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })

    this.aplicacionForm= this.fb.group({
      nombre:['',[Validators.required]],
      descripcion:['',[Validators.required]]
    });

    this.cargarAplicaciones();
  }


  logout(){
    this.router.navigate(['/login'],{queryParams: {}});
  }

  activateCreatedForm(){
    if(this.isCreatedAplication){
      this.isCreatedAplication= false
    }else{
      this.isCreatedAplication=true;
    }
  }

  cargarAplicaciones(){
    this.aplicacionesSRV.obtenerListaAplicaciones(this.userID).subscribe((resp:any)=>{
      console.log(resp);
      this.listaAplicaciones = resp;
    });
  }


  crearAplicacion(){
    if(!this.aplicacionForm.invalid){
      const nombre=this.aplicacionForm.controls['nombre'].value
      const descripcion=this.aplicacionForm.controls['descripcion'].value
      this.aplicacionesSRV.crearAplicacion(nombre,descripcion,this.userID).subscribe(()=>this.cargarAplicaciones())
      this.activateCreatedForm();
    }
    else{
      Swal.fire('Llene todos los campos')
    }

  }

}
