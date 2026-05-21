import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TiendaService } from '../../services/tienda.service.';
import { Libro } from '../../tienda.model';

@Component({
  selector: 'app-libro-lista',
  standalone: true,
  imports: [RouterLink], // Para el botón de "Ver Detalle"
  templateUrl: './libro-lista.html',
  styleUrl: './libro-lista.css'
})
export class LibroListaComponent implements OnInit {
  private tiendaService = inject(TiendaService);

  // 💡 USANDO SIGNALS: Creamos un estado reactivo para almacenar los libros
  libros = signal<Libro[]>([]);
  cargando = signal<boolean>(true);

  ngOnInit(): void {
    // Consumimos el servicio REST mediante el Observable
    this.tiendaService.getLibros().subscribe({
      next: (data) => {
        this.libros.set(data); // Asignamos el valor al Signal
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al traer los libros del backend:', err);
        this.cargando.set(false);
      }
    });
  }
}

