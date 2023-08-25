import { Component } from '@angular/core';
import { productos } from '../entidades/productos';
import { HttpResponse } from '@angular/common/http';
import { ProductosService } from '../servicios-backend/productos/productos.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public nombre = ""
  public idCategoria = ""

  public listaproducto: productos[] = []

  constructor(private ProductosService: ProductosService) {
    this.getproductoFromBackend();
  }

  private getproductoFromBackend(){
    this.ProductosService.GetProductos().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listaproducto = response.body;
            console.log(this.listaproducto)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }
  
  public addproducto(){
    this.AddProductoFromBackend(this.nombre, this.idCategoria)
   }
 
   private AddProductoFromBackend(nombre: string, idCategoria: string){
 
     var productoEntidad = new productos();
     productoEntidad.nombre = nombre;
     productoEntidad.idCategoria = idCategoria;
 
     this.ProductosService.Addproducto(productoEntidad).subscribe({
       next: (response: HttpResponse<any>) => {
           console.log(response.body)//1
           if(response.body == 1){
               alert("Se agrego el producto con exito :)");
               this.getproductoFromBackend();//Se actualize el listado
               this.nombre = "";
               this.idCategoria = "";
           }else{
               alert("Al agregar al producto fallo exito :(");
           }
       },
       error: (error: any) => {
           console.log(error);
       },
       complete: () => {
           console.log('complete - this.Addproducto()');
       },
   });
   }

}