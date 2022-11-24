import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'diego pacori';
  nombreUpper: string = 'DIEGO PACORI';
  nombreCompleto: string = 'dIeGO paCoRI';

  fecha: Date = new Date(); //Hoy dia
}
