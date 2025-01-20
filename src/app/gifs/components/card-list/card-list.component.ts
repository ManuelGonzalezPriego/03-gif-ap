import { Component, Input } from '@angular/core';
import { Gif, Images } from '../../interfaces/gif.interfaces';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  constructor(){
  }

  @Input()
  public listadoGifs:Gif[]=[];

  images(index:number):string{
    return this.listadoGifs[index].images.preview_webp.url;
  }

  title(index:number):string{
    return this.listadoGifs[index].title;
  }

}
