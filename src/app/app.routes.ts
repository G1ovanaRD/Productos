import { Routes } from '@angular/router';
import { ProshowComponent} from './components/proshow/proshow.component';
import { InfoComponent } from './components/info/info.component';
import { ProductDetailsComponent } from './components/product-detail/product-detail.component';

export const routes: Routes = [
    {path : 'show-info', component: InfoComponent},
    {path : 'proshow', component: ProshowComponent},
    { path: 'product/:id', component: ProductDetailsComponent },  
    {path : '**', component: ProshowComponent},//redireccionar a todas las urtas no defnidas
    {path : '**', redirectTo:"proshow",pathMatch:"full"}
];