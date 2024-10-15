import { Component } from '@angular/core';
import { ShowCardComponent } from "../show-card/show-card.component";
import { ProductoService } from '../../services/producto.service';
import { inject} from '@angular/core';
import { NgFor } from '@angular/common';
import { Product } from '../../interface/show.interface';

@Component({
  selector: 'app-proshow',
  standalone: true,
  imports: [ShowCardComponent,NgFor],
  templateUrl: './proshow.component.html',
  styleUrl: './proshow.component.css'
})

export class ProshowComponent {

private productService=inject(ProductoService);

constructor(){
  this.productService.fetchProduct();
}

public get products(): Product[]{
  return this.productService.products;
}
}
