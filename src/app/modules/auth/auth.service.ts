import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { BaseService } from 'src/app/core/base/base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserDetails$ = new BehaviorSubject<any>(null);
  constructor(private httpService: BaseService, private router: Router) {}
  login(user: any) {
    this.httpService.post('/login', user).subscribe(
      (res: any) => {
        this.updateUserDetails(res.data);
        this.getUserDetails$.next(res.data);
        console.log('success');
      },
      (err) => {
        console.log('error');
      }
    );
  }
  updateUserDetails(user: any) {
    localStorage.setItem('user-atapp', JSON.stringify(user));
    // localStorage.setItem('user-token-atapp', JSON.stringify(user.token));
  }
  check() {
    this.httpService.get('todos/1').subscribe(
      (res: any) => {
        this.updateUserDetails(res);
        this.getUserDetails$.next(res);
        console.log('success');
      },
      (err) => {
        console.log('error');
      }
    );
  }
}
