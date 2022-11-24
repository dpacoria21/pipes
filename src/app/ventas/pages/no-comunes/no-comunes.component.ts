import { Component } from '@angular/core';
import { interval } from 'rxjs';

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

  persona = {
    nombre: 'Diego',
    edad: 35,
    direccion: 'Arequipa'
  }

  heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Gatubela',
        vuela: true
      },
      {
        nombre: 'Goku',
        vuela: true
      },
      {
        nombre: 'Gogeta',
        vuela: true
      },
  ];

  miObservable = interval(2000); // 0, 1, 2, 3, ...

  valorPromesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve('Tenemos data de promesa');
    }, 3500);

  });

}
