import { Component, Input } from '@angular/core';
import { Product } from '../../interface/show.interface';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-show-info',
  standalone: true,
  imports: [NgbModule],
  templateUrl: './show-info.component.html',
  styleUrl: './show-info.component.css'
})
export class ShowInfoComponent {

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
  
}
