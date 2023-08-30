import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { mascotas } from 'src/app/entidades/mascotas';

@Injectable({
  providedIn: 'root'
})
export class MascotasService{

  PATH_BACKEND = "http://localhost:" + "5159"

  URL_GET = this.PATH_BACKEND + "/api/Clientes/GetAllClientes";
  URL_ADD_MASCOTAS = this.PATH_BACKEND + "/api/Clientes/AddCliente";

  constructor(private httpClient: HttpClient) {
  }

  public GetMascotas(): Observable<HttpResponse<any>> {
    return this.httpClient
      .get<any>(this.URL_GET,
        { observe: 'response' })
      .pipe();
  }

  public AddMascotas(entidad: mascotas): Observable<HttpResponse<any>> {
    return this.httpClient
      .post<any>(this.URL_ADD_MASCOTAS, entidad,
        { observe: 'response' })
      .pipe();
  }

}