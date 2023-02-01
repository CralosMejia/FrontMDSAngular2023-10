import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userName:any;
  public userID:number;
  public rol:string;

  constructor(
    private router:Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.userName = params['userName'];
      this.userID = params['id_user'];
      this.rol = params['rol'];

    })
  }


  logout(){
    this.router.navigate(['/login'],{queryParams: {}});
  }

  crearNuevaApp(){
    this.router.navigate(['/dashboard/createApp'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
  }

  crearusuario(){
    this.router.navigate(['/dashboard/userCreate'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
  }

  regresar(){
    this.router.navigate(['/dashboard/mainPage'],{queryParams: {userName:this.userName,id_user:this.userID,rol:this.rol}});
  }

}
