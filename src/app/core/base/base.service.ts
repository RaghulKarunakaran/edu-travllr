import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  BASE_URL = environment.ApiUrl;
  defaultHeader = { Accept: 'application/json' };
  constructor(private httpClient: HttpClient) {}
  get(url: string) {
    return this.httpClient.get(`${this.BASE_URL}${url}`);
  }
  post(url: string, data: any, headers = null) {
    return this.httpClient.post(`${this.BASE_URL}${url}`, data, {
      headers: headers ? headers : this.defaultHeader,
    });
  }
  put(url: string, data: any, headers = null) {
    return this.httpClient.put(`${this.BASE_URL}${url}`, data, {
      headers: headers ? headers : this.defaultHeader,
    });
  }
}
