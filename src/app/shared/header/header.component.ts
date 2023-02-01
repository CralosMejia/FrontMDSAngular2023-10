import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AplicationService } from 'src/app/Services/aplication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public usuariosSinAdminList=[];
  public busquedaForm: FormGroup;
  public datenow =new Date(Date.now());
  public listaAplicaciones;

  constructor(
    private route:ActivatedRoute,
    private appSrv:AplicationService,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })

    this.appSrv.obtenerUsuariosSinAdmin().subscribe((resp:any)=>{
      this.usuariosSinAdminList= resp;
      this.usuariosSinAdminList.push({nombreUser:'Todos'})
    })

    this.busquedaForm= this.fb.group({
      fechaIni:[formatDate(this.datenow, 'yyyy-MM-dd', 'en'),],
      fechaFin:[formatDate(this.datenow, 'yyyy-MM-dd', 'en'),],
      tipoFecha:['1'],
      cliente:['Todos',[Validators.required]]
    })


  }

  buscar(){
    if(!this.busquedaForm.invalid){
      // console.log(this.busquedaForm.value)
      let fechaIni = this.busquedaForm.get('fechaIni').value
      let fechaFin = this.busquedaForm.get('fechaFin').value
      let Tipofecha = this.busquedaForm.get('tipoFecha').value
      let cliente = this.busquedaForm.get('cliente').value

      this.appSrv.allAppsParameters(fechaIni,fechaFin,Tipofecha,cliente,this.userID).subscribe((resp:any)=>{
        this.appSrv.changeSearchParameter(resp);
      })
    }else{
      Swal.fire('Llene todos los campos')
    }
  }

}
