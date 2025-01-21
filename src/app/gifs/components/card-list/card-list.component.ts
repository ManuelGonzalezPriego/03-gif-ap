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

  images(index:Gif):string{
    const i:number=this.listadoGifs.indexOf(index);
    return this.listadoGifs[i].images.preview_webp.url;
  }

  title(index:Gif):string{
    const i:number=this.listadoGifs.indexOf(index);
    return this.listadoGifs[i].title;
  }

}
