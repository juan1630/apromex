import { Component, OnInit } from '@angular/core';
import { RegistroService } from '../../services/registroSociedad/registro.service'
@Component({
  selector: 'app-agregar-sociedad',
  templateUrl: './agregar-sociedad.component.html',
  styleUrls: ['./agregar-sociedad.component.css']
})
export class AgregarSociedadComponent implements OnInit {

    info = {

      // id:"",
      nombre:"", 
      direccion:"",
       RFC:"", 
       telefono:"", 
       correo:"", 
       nombreRepresentante:"", 
       apellidosRepresentante:"", 
       correoRepresentante:"", 
       telefonoRepresentante:""

    }


  constructor(
    private _registro: RegistroService
  ) { }

  ngOnInit(): void {
  }

  enviar( ){
    this._registro.agregarSociedad( this.info )
    .subscribe((data) => {
      console.log(data);
      alert('Datos guadados');
    } )
  }

}
