import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Carritos } from 'src/app/entidades/carrito-compra';

@Injectable({
  providedIn: 'root'
})
export class CarritosService {

  PATH_BACKEND = "http://localhost:" + "5159"

  URL_GET = this.PATH_BACKEND + "/api/CarritoCompra/GetAllCarritoCompra";
  URL_ADD_CATEGORIA = this.PATH_BACKEND + "/api/CarritoCompra/AddCarritoCompra";

  constructor(private httpClient: HttpClient) {
  }

  public GetCarritocompra(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public addcarrito(entidad: Carritos): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CATEGORIA, entidad,
        { observe: 'response' })
      .pipe();
  }

}