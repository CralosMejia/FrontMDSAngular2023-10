import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

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

      this.loginSRV.login(username,password).subscribe(resp=>{
        console.log(resp);
        this.router.navigate(['/mainPage'],{queryParams: {username}});
      });

    }
    
  }

}
