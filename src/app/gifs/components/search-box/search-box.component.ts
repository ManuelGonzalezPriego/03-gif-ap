import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  //* Con viewChild (Si usamos view children accedemos a todos lo elementos.)
  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!: ElementRef<HTMLInputElement>;


  constructor(private gifsService:GifsService){

  }

  //! Sin viewChild
  // buscartEtiqueta(nuevaEtiqueta: string):void{
  //   console.log(nuevaEtiqueta);
  // }
  buscartEtiqueta():void{
    const nuevaEtiqueta=this.inputEtiqueta.nativeElement.value;
    this.gifsService.buscarEtiqueta(nuevaEtiqueta);
    this.inputEtiqueta.nativeElement.value="";
  }

}
