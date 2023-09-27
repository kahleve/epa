import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login').then((m) => m.LoginPage),
  },
  {
    path: 'cadastro',
    loadComponent: () => import('./cadastro/cadastro').then((m) => m.CadastroPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'receita',
    loadComponent: () => import('./receita/receita.page').then( m => m.ReceitaPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },
];
