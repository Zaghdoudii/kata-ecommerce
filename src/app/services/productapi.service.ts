import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductapiService {

  constructor(private http: HttpClient) { }

  // fetch products from the API
  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }
}
