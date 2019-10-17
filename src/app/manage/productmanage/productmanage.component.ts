import { Component, OnInit } from '@angular/core';
import {Product} from '../../model/product';

@Component({
  selector: 'app-productmanage',
  templateUrl: './productmanage.component.html',
  styleUrls: ['./productmanage.component.css']
})
export class ProductmanageComponent implements OnInit {
  products: Array<Product>;

  constructor() { }

  ngOnInit() {
  }

  update(bid: string) {

  }

  detail(bid: string) {

  }

  delete(bid: string) {

  }

  add() {

  }
}
