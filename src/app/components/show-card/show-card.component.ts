import { Component, Input } from '@angular/core';
import { Product } from '../../interface/show.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [NgbModule,CommonModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {

@Input()
public product : Product={
  id:0,
  title: "",
  price: 0,
  description:"",
  image: "",
  category:"",
  rating:{
    rate:0,
    count:0
  }
}

constructor(private router: Router) {}

  goToDetails() {
    this.router.navigate(['/product', this.product.id]);  // Redirigir a la página de detalles con el ID del producto
  }

}
