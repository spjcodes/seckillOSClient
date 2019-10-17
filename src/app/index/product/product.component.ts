import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../model/product';
import {CommonReturnType} from '../../model/CommonReturnType';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product>;
  commonReturnType: CommonReturnType;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductList().then((data: any) => {
      if (data != null) {
        this.commonReturnType = data;
        this.products = this.commonReturnType.data;
      }
    });
  }

}
