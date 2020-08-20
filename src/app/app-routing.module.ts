import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),canActivate:[AuthGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule), canActivate:[NologinGuard]
  },
  
  {
    path: 'grupos',
    loadChildren: ()=> import('./componentes/grupos/grupos.module').then( m=> m.GruposPageModule), canActivate:[AuthGuard]
  },
  
  {
    path: 'mensajes',
    loadChildren: ()=> import('./componentes/mensajes/mensajes.module').then( m=> m.MensajesPageModule), canActivate:[AuthGuard]
  },
  
  {
    path: 'perfil',
    loadChildren: ()=> import('./componentes/perfil/perfil.module').then( m=> m.PerfilPageModule), canActivate:[AuthGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
