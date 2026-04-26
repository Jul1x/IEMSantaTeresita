import { Component } from '@angular/core';

@Component({
  selector: 'app-pqrs',
  templateUrl: './pqrs.html',
  styleUrl: './pqrs.css'
})
export class Pqrs {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('¡Gracias! Hemos recibido tu solicitud y le daremos trámite lo más pronto posible.');
    (event.target as HTMLFormElement).reset();
  }
}
