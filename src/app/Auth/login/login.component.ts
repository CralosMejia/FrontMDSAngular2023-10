import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private loginSRV:LoginService
  ) { }

  ngOnInit(): void {

    this.loginForm= this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }


  login(){
    if(!this.loginForm.invalid){
      const username=this.loginForm.controls['username'].value
      const password=this.loginForm.controls['password'].value

      this.loginSRV.login(username,password).subscribe((resp:any)=>{
        //console.log(resp[0]);
        this.router.navigate(['/mainPage'],{queryParams: {userName:resp[0].nombreUser,id_user:resp[0].iD_User,rol:resp[0].rol}});
      },error=>{
        Swal.fire('No existe un usuario registrado con esas credenciales.')
      });

    }

  }

}
