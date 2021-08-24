import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderCoffeeItemComponent } from './components/order-coffee-item/order-coffee-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddOrderComponent } from './components/add-order/add-order.component';

const appRoutes: Routes = [
  { path: '', component: OrdersComponent },
  { path: 'history', component: OrderHistoryComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    OrdersComponent,
    OrderCoffeeItemComponent,
    OrderHistoryComponent,
    FooterComponent,
    AddOrderComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
