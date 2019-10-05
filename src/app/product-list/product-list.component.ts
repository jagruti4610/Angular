import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productList;
  constructor(private PD:ProductService) { }

  ngOnInit() {
  }

  getProductName()
  {
    this.productList=this.PD.getProductDetails()
  }

}
