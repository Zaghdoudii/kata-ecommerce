import { Component } from '@angular/core';
import { ProductapiService } from 'src/app/services/productapi.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  selectedItem: string = '';
  public productList: any;
  public filterCategory: any;
  searchKey: string = "";


  constructor(private api: ProductapiService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.category === "women's clothing" || a.category === "men's clothing") {
            a.category = "fashion"
          }
          Object.assign(a, { quantity: 1, total: a.price });
        });
        console.log(this.productList)
      });

    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }


  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }



  filter(category: string) {
    this.selectedItem = category;
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }


}