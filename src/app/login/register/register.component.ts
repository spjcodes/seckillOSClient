import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userservice: UserService  ) { }

  user: User;
  ngOnInit() {
    this.user = new User();
  }

  register(user: User) {
    console.log(user);
  }

  getOtp(phoneNumber: string) {
    if (this.user.telephone == null) {
      alert('请输入手机号');
    } else {
      this.userservice.getOtp(phoneNumber).then((data: any) => {
        if (data != null) {
          alert('验证码已发送至你的手机');
        }
      });
    }

  }
}
