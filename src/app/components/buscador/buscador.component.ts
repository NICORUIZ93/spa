import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string = '';
  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }
}
