import { Component, inject } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interface/show.interface';
import { NgFor } from '@angular/common';
import { ShowInfoComponent } from "../show-info/show-info.component";

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgFor, ShowInfoComponent],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})

export class InfoComponent {
  private productService=inject(ProductoService);

constructor(){
  this.productService.fetchProduct();
}

public get products(): Product[]{
  return this.productService.products;
}
}
