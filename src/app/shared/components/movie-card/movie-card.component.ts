import { Component, Input, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  img_path: string = 'https://image.tmdb.org/t/p/w1280';

  @Input()
  imdbArray: Array<Imovie> = []
  constructor() { }

  ngOnInit(): void {
  }


}
