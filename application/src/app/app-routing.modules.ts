import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'projetos',
    loadChildren: () => import('./components/projetos/projetos.module').then((m) => m.ProjetosModule)
  },
  {
    path: 'blog',
    loadChildren: () => import('./components/blog/blog.module').then((m) => m.BlogModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
