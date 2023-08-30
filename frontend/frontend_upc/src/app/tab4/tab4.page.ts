import { Component } from '@angular/core';
import { Carritos } from '../entidades/carrito-compra';
import { HttpResponse } from '@angular/common/http';
import { CarritosService } from '../servicios-backend/carrito-compra/carrito-compra.service';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  public fecha = ""
  public idUsuario = ""

  public listacarrito: Carritos[] = []


  constructor(private CarritosService: CarritosService) {
    this.getcarritoFromBackend();
  }


  private getcarritoFromBackend(){
    this.CarritosService.GetCarritocompra().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listacarrito = response.body;
            console.log(this.listacarrito)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }
  
  public addcarrito(){
    this.AddCarritoFromBackend(this.fecha, this.idUsuario)
   }
 
   private AddCarritoFromBackend(fecha: string, idUsuario: string){
 
     var productoEntidad = new Carritos();
     productoEntidad.fecha = fecha;
     productoEntidad.idUsuario = idUsuario;
 
     this.CarritosService.addcarrito(productoEntidad).subscribe({
       next: (response: HttpResponse<any>) => {
           console.log(response.body)//1
           if(response.body == 1){
               alert("Se agrego el producto con exito :)");
               this.getcarritoFromBackend();//Se actualize el listado
               this.fecha = "";
               this.idUsuario = "";
           }else{
               alert("Al agregar al producto fallo exito :(");
           }
       },
       error: (error: any) => {
           console.log(error);
       },
       complete: () => {
           console.log('complete - this.addcarrito()');
       },
   });
   }

}