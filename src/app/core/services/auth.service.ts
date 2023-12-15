import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {delay, of} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(form: { email: string, password: string }) {
    // return this.httpClient.post(``, form).pipe();
    return of(form).pipe(delay(1000));
  }
}
