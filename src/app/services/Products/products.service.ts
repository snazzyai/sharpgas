import { Injectable } from '@angular/core';
import { IProduct } from '../../models/product'
import {Observable} from 'rxjs'
import { HttpClient } from "@angular/common/http";



const apiUrl = "http://localhost:7000/products"

@Injectable({
  providedIn: 'root'
})



export class ProductsService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(apiUrl)
  }


}
