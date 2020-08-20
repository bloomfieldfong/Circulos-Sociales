import { Component } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public authService: AuthService, private router: Router){}
  
  Onlogout(){
    console.log("hola")
    this.authService.logout();
  }

  ngOnInit() {
  }

  moveGroup(){
    this.router.navigate(['/grupos']);
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
