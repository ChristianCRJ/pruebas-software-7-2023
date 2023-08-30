import { Component } from '@angular/core';
import { mascotas } from '../entidades/mascotas';
import { HttpResponse } from '@angular/common/http';
import { MascotasService } from '../servicios-backend/mascotas/Mascotas.service';

@Component({
  selector: 'app-tab6',
  templateUrl: 'tab6.page.html',
  styleUrls: ['tab6.page.scss']
})
export class Tab6Page {

  public nombre = ""
  public especie = ""

  public listaMascota: mascotas[] = []


  constructor(private mascotasService: MascotasService) {
    this.getMascotaFromBackend();
  }


  private getMascotaFromBackend(){
    this.mascotasService.GetMascotas().subscribe({
        next: (response: HttpResponse<any>) => {
            this.listaMascota = response.body;
            console.log(this.listaMascota)
        },
        error: (error: any) => {
            console.log(error);
        },
        complete: () => {
            //console.log('complete - this.getUsuarios()');
        },
    });
  }
  
  public addMascotas(){
    this.AddMascotasFromBackend(this.nombre, this.especie)
   }
 
   private AddMascotasFromBackend(nombre: string, especie: string){
 
     var MascotaEntidad = new mascotas();
     MascotaEntidad.nombre = nombre;
     MascotaEntidad.especie = especie;
 
     this.mascotasService.AddMascotas(MascotaEntidad).subscribe({
       next: (response: HttpResponse<any>) => {
           console.log(response.body)//1
           if(response.body == 1){
               alert("Se agrego la mascota  con exito :)");
               this.getMascotaFromBackend();//Se actualize el listado
               this.nombre = "";
               this.especie = "";
           }else{
               alert("Al agregar la mascota fallo exito :(");
           }
       },
       error: (error: any) => {
           console.log(error);
       },
       complete: () => {
           console.log('complete - this.addMascotas()');
       },
   });
   }

}