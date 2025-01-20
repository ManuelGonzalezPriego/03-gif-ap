import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private gifSservice:GifsService){};

  get gifs():Gif[]{
    return this.gifSservice.listadoGifs
  }
}
