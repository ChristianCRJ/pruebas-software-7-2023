import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { clientes } from 'src/app/entidades/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  PATH_BACKEND = "http://localhost:" + "5159"

  URL_GET = this.PATH_BACKEND + "/api/Clientes/GetAllClientes";
  URL_ADD_CLIENTES = this.PATH_BACKEND + "/api/Clientes/AddCliente";

  constructor(private httpClient: HttpClient) {
  }

  public GetClientes(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public AddClientes(entidad: clientes): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_CLIENTES, entidad,
        { observe: 'response' })
      .pipe();
  }

}
