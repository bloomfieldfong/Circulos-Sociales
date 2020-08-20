import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  constructor( private router: Router){}

  ngOnInit() {
  }
  
  
  moveHome(){
    this.router.navigate(['/home']);
  }

  moveProfile(){
      this.router.navigate(['/perfil']);
  }

  moveMensajes(){
    this.router.navigate(['/mensajes']);
  }

  moveGroup(){
    this.router.navigate(['/grupos']);
  }



}
