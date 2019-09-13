import { Injectable } from '@angular/core';
import {ConfigService} from './config.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private config: ConfigService) { }

  private GetOtpURL = this.config.host + '/user/getotp';
  getOtp(phonenumber: string) {
    const p = this.GetOtpURL + '?telephone=' + phonenumber;
    console.dir(p );

    return this.http.post(this.GetOtpURL, p).toPromise();
  }
 }
