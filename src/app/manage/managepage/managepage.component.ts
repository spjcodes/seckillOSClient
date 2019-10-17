import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-managepage',
  templateUrl: './managepage.component.html',
  styleUrls: ['./managepage.component.css']
})
export class ManagepageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toProductManage() {
    this.router.navigate(['../managePage/productManage']);
  }

  toUserMange() {
    this.router.navigate(['../managePage/userManage']);
  }

}
