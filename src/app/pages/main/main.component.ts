import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public username:string;

  constructor(
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params=>{
      this.username = params['username'];
    })
  }


  logout(){
    this.router.navigate(['/login'],{queryParams: {}});
  }

}
