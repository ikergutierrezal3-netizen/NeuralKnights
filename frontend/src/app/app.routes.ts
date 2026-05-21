import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'libros',
    pathMatch: 'full'
  },
  {
    path: 'libros',
    loadComponent: () => import('./components/libro-lista/libro-lista.component').then(m => m.LibroListaComponent)
  },
  {
    path: 'libros/nuevo',
    loadComponent: () => import('./components/libro-form/libro-form.component').then(m => m.LibroFormComponent)
  },
  {
    path: 'libros/:id',
    loadComponent: () => import('./components/libro-detalle/libro-detalle.component').then(m => m.LibroDetalleComponent)
  },
  {
    path: '**',
    redirectTo: 'libros'
  }
];
