import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gif.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historialEtiquetas: string[]=[];
  private apiKey:string='nWdUyfF9ldeDUmbwA9ahwNoPAddE3Yui';
  private url:string='https://api.giphy.com/v1/gifs';
  public listadoGifs:Gif[]=[];

  constructor(private http:HttpClient) {
    this.cargarLocalStorage();
  }

  private almacenarLocalStorage():void{
    localStorage.setItem('historial',JSON.stringify(this._historialEtiquetas))
  }

  private cargarLocalStorage():void{
    if(!localStorage.getItem('historial'))return;

    //Con la exclamación indicamos que por narices va a regresarle un string, en este caso estamos seguros por que
    //este local extorage ya lo formateamos anterior mente
    this._historialEtiquetas=JSON.parse(localStorage.getItem('historial')!);

    if(this._historialEtiquetas.length===0){
      return;
    }else{
      this.buscarEtiqueta(this._historialEtiquetas[0]);
    }
  }

  get historialEtiquetas(){
    //*Estos ... se colocan para hacer una copia del array original y no modificar lo. Es decir crear una copiar.
    return [...this._historialEtiquetas]
  }

  get Http(){
    return this.http;
  }

  //*El unshift nos coloca el elemento pasado por parametro al principio de la lista, si este ya esta contenido en la lista solo se reordena.

  buscarEtiqueta(etiqueta: string): void{
    //Con trim podemos comprobar si tiene espacios en blanco si esta tiene los elimina y lo añade y si es una cadena
    //vacía nos dara un mensaje de error por consola.
    if(!etiqueta.trim()){
      console.log("No se haceptan los espacios blancos.")
    }
    else{
      //Este metodo te va a devolver un array sin la palabra indicada, lo que va a hacer es comparar la palabra dentro del
      //array pasarla a minuscula y si esta es igual la elimina si no no hace nada y la siguente linea lo añade
      this._historialEtiquetas=this._historialEtiquetas.filter(palabrea=>palabrea.toLowerCase()!==etiqueta.toLowerCase());

      this._historialEtiquetas.unshift(etiqueta);


    }

    if(this._historialEtiquetas.length>10){
      this._historialEtiquetas.pop();
    }

    this.almacenarLocalStorage();

    console.log(this._historialEtiquetas);

    const params= new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit',10)
      .set('q',etiqueta);

    this.http.get<SearchResponse>(`${this.url}/search`,{params}).subscribe(resp =>{
      this.listadoGifs=resp.data;
      console.log({gifs:this.listadoGifs});
    });
  }



}
