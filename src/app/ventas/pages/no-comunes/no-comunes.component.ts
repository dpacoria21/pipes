import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Diego';
  genero:string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo', 
    'femenino': 'invitarla'
  }

  //i18nPlural

  clientes: string[] = ['Maria','Jose', 'Juan','Rodrigo'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    'other': 'tenemos # clientes esperando'
  }


  cambiarCliente() {
    if(this.genero === 'femenino') {
      this.genero = 'masculino';
      this.nombre = 'Jorge';
    }else {
      this.genero = 'femenino';
      this.nombre = 'Angely';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }
}
