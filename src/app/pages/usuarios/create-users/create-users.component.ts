import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styles: [
  ]
})
export class CreateUsersComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;
  public usuarioForm: FormGroup;

  constructor(
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private userSRV:LoginService,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];
    })


    this.usuarioForm= this.fb.group({
      iD_User:[0,],
      NombreUser:['',[Validators.required]],
      Password:['',[Validators.required]],
      rol:['Cliente',[Validators.required]],
    })
  }

  crearUsuario(){
    if(!this.usuarioForm.invalid){
      console.log(this.usuarioForm.value);
      this.userSRV.crearUsuario(this.usuarioForm.value,this.userID).subscribe(()=>this.router.navigate(['/dashboard/mainPage'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}}));
    }else{
      Swal.fire('Llene todos los campos')
    }
  }

}
