import {inject, Injectable } from '@angular/core';
import { Product } from '../interface/show.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductoService {

  constructor() { }
  private _products : Product[]=[];
  public get products():Product[]{
    return this._products;
  }

  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products";

  public fetchProduct(){
    this.http.get<Product[]>(this.apiUrl).subscribe({
      next: (response)=>{
        console.log(response);
        this._products = response;
      },
      error: (error)=>{
        console.log(error);
      }
    })
  }

}
