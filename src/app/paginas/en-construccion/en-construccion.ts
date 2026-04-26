import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-en-construccion',
  imports: [RouterLink],
  templateUrl: './en-construccion.html',
  styleUrl: './en-construccion.css'
})
export class EnConstruccion {
  private route = inject(ActivatedRoute);

  titulo = '';
  seccion = '';
  icono = '';
  descripcion = '';

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.titulo = data['titulo'] || 'Página';
      this.seccion = data['seccion'] || '';
      this.icono = data['icono'] || 'fas fa-tools';
      this.descripcion = data['descripcion'] || 'Esta sección está siendo preparada con contenido institucional actualizado.';
    });
  }
}
