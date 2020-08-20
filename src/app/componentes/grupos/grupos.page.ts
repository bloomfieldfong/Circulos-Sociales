import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.page.html',
  styleUrls: ['./grupos.page.scss'],
})
export class GruposPage implements OnInit {

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

  movePerfil(){
    this.router.navigate(['/perfil']);
  }

}
