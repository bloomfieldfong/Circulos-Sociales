import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.page.html',
  styleUrls: ['./mensajes.page.scss'],
})
export class MensajesPage implements OnInit {

  constructor( private router: Router){}

  ngOnInit() {
  }

  moveHome(){
    this.router.navigate(['/home']);
  }

  moveProfile(){
      this.router.navigate(['/perfil']);
  }

  moveGroup(){
    this.router.navigate(['/grupos']);
  }

  movePerfil(){
    this.router.navigate(['/perfil']);
  }
  

}
