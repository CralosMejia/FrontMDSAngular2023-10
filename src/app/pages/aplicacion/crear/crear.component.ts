import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AplicationService } from 'src/app/Services/aplication.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public aplicacionForm: FormGroup;
  public datenow =new Date(Date.now());
  public nPoliza = Math.floor(Math.random() * (Math.floor(999999) - Math.ceil(111111)+1) + Math.ceil(111111));
  public numApp;
  public usuariosSinAdminList=[];
  public tipoTransporte=['Aereo','Maritimo','Terestre']
  public incotemrsLista=['EXW', 'FCA', 'FAS', 'FOB', 'CFR', 'CIF', 'CPT', 'CIP', 'DPU', 'DAP','DDP']
  public itemsLista=['Materia Prima', 'Alimentos', 'Ropa', 'Vehiculos', 'Dispositivos Electronicos']



  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private appSrv:AplicationService
  ) { }

  ngOnInit(): void {
    this.cargarVariables();
    this.cargarFormulario();
  }

  cargarVariables(){
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })

    this.appSrv.obtenerNumeroApp(this.userID).subscribe((resp)=>{
      this.numApp=resp;
    })

    this.appSrv.obtenerUsuariosSinAdmin().subscribe((resp:any)=>{
      this.usuariosSinAdminList= resp;
    })
  }

  regresar(){
    this.router.navigate(['/mainPage'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
  }

  cargarFormulario(){
    this.aplicacionForm= this.fb.group({
      aplicacionID:[0,],
      numero_poliza:[this.nPoliza,],
      numero_aplicacion:[this.numApp,],
      fecha:[formatDate(this.datenow, 'yyyy-MM-dd', 'en'),],
      asegurado:[{value:''},[Validators.required]],
      pagador:[{value:''},[Validators.required]],
      tipo_trasnporte:[{value:''},[Validators.required]],
      consignada_a:[{value:''},[Validators.required]],
      incoterms:[{value:''},[Validators.required]],
      items:[{value:''},[Validators.required]],
      bultos:[0,[Validators.required]],
      desde:['',[Validators.required]],
      hasta:['',[Validators.required]],
      pertenece_a:['',[Validators.required]],
      embarcado_por:['',[Validators.required]],
      nota_de_pedido:['',[Validators.required]],
      marca:['',[Validators.required]],
      monto_total:[0,[Validators.required]],
      fecha_embarque:['',[Validators.required]],
      fecha_llegada:['',[Validators.required]],
      afianzador:['',[Validators.required]],
      orden_compra:['',[Validators.required]],
      numero:[0,[Validators.required]],
      peso_bruto:[0,[Validators.required]],
      porcentaje_gasto_justificado:[0,[Validators.required]],
      suma_asegurada:[0,[Validators.required]],
      tasa:[12,[Validators.required]],
      valor_prima:[0,[Validators.required]],
      cobertura:['',[Validators.required]],
      deducible:[10,[Validators.required]],
      objeto_de_seguro:['',[Validators.required]],
      descripcion_contenido:['',[Validators.required]],
      observaciones:['',],
      userID:[this.userID],
      nombreUsuario:[''],
    });
  }

  crearApp(){
    if(!this.aplicacionForm.invalid){
      this.aplicacionForm.controls['numero_aplicacion'].setValue(this.numApp);
      console.log(this.aplicacionForm.value);
      this.appSrv.crearAplicacion(this.aplicacionForm.value).subscribe(resp =>{
        this.router.navigate(['/mainPage'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
      })
    }else{
      Swal.fire('Llene todos los campos')
    }
  }

}
