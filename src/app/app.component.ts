import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{



  constructor( private primengConfig: PrimeNGConfig) {

  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


  nombre : string = 'DiEgO PaCoRi';
  valor: number = 1000;
  obj = {
    nombre: 'Fernando'
  }

  //Los pipes no modifican la data, solo se usan para darle una mejor
  //visibilidad a la data (cambiarla solo al momento de mostrar sin alterarla desde raiz)

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

  title = 'pipes';
}
