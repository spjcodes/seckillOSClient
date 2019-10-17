import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  images: string[];
  showNavigationArrows: boolean;
  showNavigationIndicators: boolean;
  constructor(private config: NgbCarouselConfig) {
    this.config.showNavigationArrows = true;
    this.config.showNavigationIndicators = true;
  }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }





}
