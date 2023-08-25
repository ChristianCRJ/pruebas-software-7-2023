import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { productos } from 'src/app/entidades/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  PATH_BACKEND = "http://localhost:" + "5159"

  URL_GET = this.PATH_BACKEND + "/api/Producto/GetAllProductos";
  URL_ADD_USUARIO = this.PATH_BACKEND + "/api/Producto/AddProducto";

  constructor(private httpClient: HttpClient) {
  }

  public GetProductos(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public Addproducto(entidad: productos): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_USUARIO, entidad,
        { observe: 'response' })
      .pipe();
  }

}