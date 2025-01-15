import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historialEtiquetas: string[]=[];

  constructor() { }

  get historialEtiquetas(){
    //*Estos ... se colocan para hacer una copia del array original y no modificar lo. Es decir crear una copiar.
    return [...this._historialEtiquetas]
  }

  //*El unshift nos coloca el elemento pasado por parametro al principio de la lista, si este ya esta contenido en la lista solo se reordena.

  buscarEtiqueta(etiqueta: string): void{
    this._historialEtiquetas.unshift(etiqueta);
    console.log(this._historialEtiquetas);
  }

}
