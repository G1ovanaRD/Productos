import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../interface/show.interface';
import { NgbRating } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  imports: [NgbRating,NgIf,RouterLink,CommonModule],  // Cambiar a NgbRatingModule
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductoService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del producto desde la URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.products.find(p => p.id === productId) || {id: 0, title: "", price: 0, description: "", image: "", category:"",rating: { rate: 0, count: 0 }};
  }
}
