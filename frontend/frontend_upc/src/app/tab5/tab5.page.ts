import { Component } from '@angular/core';
import { clientes } from '../entidades/clientes';
import { ClientesService } from '../servicios-backend/clientes/Clientes.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page {

  public nombrE_COMPLETO  = ""
  public telefono  = ""
  public direccion  = ""

  public listaClientes: clientes[] = []

  
  constructor(private ClientesService: ClientesService) {
    this.getClientesFromBackend();

    
  }

  private getClientesFromBackend(){
    this.ClientesService.GetClientes().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listaClientes = response.body;
            console.log(this.listaClientes)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }

  public addClientes(){
   this.AddClientesFromBackend(this.nombrE_COMPLETO, this.telefono, this.direccion)
  }

  private AddClientesFromBackend(nombrE_COMPLETO: string,telefono: string,direccion: string){
    
    var ClientesEntidad = new clientes();
    ClientesEntidad.nombrE_COMPLETO = nombrE_COMPLETO;
    ClientesEntidad.telefono = telefono;
    ClientesEntidad.direccion = direccion;

    this.ClientesService.AddClientes(ClientesEntidad).subscribe({
      next: (response: HttpResponse<any>) => {
          console.log(response.body)//1
          if(response.body == 1){
              alert("Se agrego el CLiente con exito :)");
              this.getClientesFromBackend();//Se actualize el listado
              this.nombrE_COMPLETO = "";
          }else{
              alert("Al agregar el cliente fallo exito :(");
          }
      },
      error: (error: any) => {
          console.log(error);
      },
      complete: () => {
          //console.log('complete - this.AddUsuario()');
      },
  });
  }

}

