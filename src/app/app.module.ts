import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
