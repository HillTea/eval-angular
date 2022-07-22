import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpServices {

  constructor(private _httpServices: HttpClient) { }

getRequest<T>(url: string): Observable<T>{
  return this._httpServices.get<T>(url);
}

}
