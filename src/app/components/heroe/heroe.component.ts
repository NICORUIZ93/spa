import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  constructor(
    private activateRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {
    activateRoute.params.subscribe((params) => {
      console.log(params['id']);
      this.heroe = heroesService.getHeroe(params['id']);
    });
  }

  ngOnInit(): void {
    console.log(this.heroe);
  }
}
