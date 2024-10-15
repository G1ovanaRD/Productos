import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ShowCardComponent } from "./components/show-card/show-card.component";
import { ProshowComponent } from "./components/proshow/proshow.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShowCardComponent, ProshowComponent,RouterLink,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'productos';
}
