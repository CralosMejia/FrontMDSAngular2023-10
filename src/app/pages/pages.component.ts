import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    let val = localStorage.getItem('validation');

    if(val === '1'){
      localStorage.setItem('validation','2')
      // location.reload();
    }


  }

}
