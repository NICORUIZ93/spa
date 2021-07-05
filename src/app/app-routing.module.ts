import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'heroe/:id',
    component: HeroeComponent,
  },
  {
    path: 'buscar/:termino',
    component: BuscadorComponent,
  },
  {
    path: 'heroes',
    component: HeroesComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
