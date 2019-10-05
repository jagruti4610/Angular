import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
productDetails=[{id:1, name:'addidas', price:1234},{id:2, name:'rebook', price:1234}]
  constructor() { }
  message:any
  getProductDetails()
  {
    return this.productDetails
  }
  setMessage(_message:any)
  {
    this.message=_message
  }
  getMeassage()
  {
    
  }
}
