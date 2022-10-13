import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductDTO } from '../models/product-dto.model';

@Injectable()
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }
  getAllProducts(): Observable<ProductDTO[]> {
    return this._httpClient.get<ProductDTO[]>('https://fakestoreapi.com/products');
  }
}
