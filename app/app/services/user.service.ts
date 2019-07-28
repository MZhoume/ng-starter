import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  SignUpRequestModel,
  SignUpResponseModel,
  LogInRequestModel,
  LogInResponseModel
} from '../../../server/features/user/models/user.models';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User | undefined>(undefined);
  public user$: Observable<User | undefined> = this.userSubject;

  constructor(private httpService: HttpService) {}

  public signUp(model: SignUpRequestModel): Observable<number> {
    return this.httpService
      .post<SignUpResponseModel>('user/signup', model)
      .pipe(map(res => res.id));
  }

  public logIn(model: LogInRequestModel): Observable<void> {
    return this.httpService.post<LogInResponseModel>('user/login', model).pipe(
      map(res => {
        this.userSubject.next(res);
      })
    );
  }
}
