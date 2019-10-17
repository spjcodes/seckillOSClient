import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private config: ConfigService, private http: HttpClient) { }

  private getProductUrl = this.config.host + '/product/getProduct';
  getProduct(id: string ) {
    return this.http.post(this.getProductUrl, {'id': id}).toPromise();
  }

  private getProductListUrl = this.config.host + '/product/getProductList';
  getProductList() {
    return this.http.get(this.getProductListUrl).toPromise();
  }

  private deleteProductUrl = this.config.host + '/product/deleteProduct';
  deleteProduct(id: string) {
    return this.http.post(this.deleteProductUrl, {'id': id}).toPromise();
  }
  private updaProductUrl = this.config.host + '/product/updateProduct';
  udpateProduct(product: Product) {
    const p = {
      'id': product.id,
      'productName': product.productName,
      'price': product.price,
      'descri': product.descri,
      'imgUrl': product.imgUrl,
      'inventory': product.inventory,
      'cales': product.cales,
      'recomRate': product.recomRate,
      'comment': product.comment
    };

    return this.http.post(this.updaProductUrl, p).toPromise();
  }
  private addProductUrl = this.config.host + '/product/addProduct';
  addProduct(product: Product) {
    const p = {
      'id': product.id,
      'productName': product.productName,
      'price': product.price,
      'descri': product.descri,
      'imgUrl': product.imgUrl,
      'inventory': product.inventory,
      'cales': product.cales,
      'recomRate': product.recomRate,
      'comment': product.comment
    };

    return this.http.post(this.addProductUrl, p).toPromise();
  }

}
