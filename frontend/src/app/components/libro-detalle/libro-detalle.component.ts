import { Component, OnInit, signal, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TiendaService } from '../../services/tienda.service.';
import { Libro } from '../../tienda.model';

@Component({
  selector: 'app-libro-detalle',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './libro-detalle.html',
  styleUrl: './libro-detalle.css'
})
export class LibroDetalleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private tiendaService = inject(TiendaService);

  // Requisito: Uso de Signals para el estado [cite: 28]
  libro = signal<Libro | null>(null);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      // Requisito: Llamada con Observables para ver detalle [cite: 31, 48]
      this.tiendaService.getLibroPorId(id).subscribe({
        next: (data) => this.libro.set(data),
        error: (err) => console.error('Libro no encontrado', err)
      });
    }
  }
}
