import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscarHeroe(busqueda: string) {
    this.router.navigate(['/buscar', busqueda]);
  }
}
