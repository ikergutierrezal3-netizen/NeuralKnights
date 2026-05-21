import { Component, OnInit, signal, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TiendaService } from '../../services/tienda.service.';
import { Categoria } from '../../tienda.model';

@Component({
  selector: 'app-libro-form',
  standalone: true,
  imports: [ReactiveFormsModule], // Requisito: Formulario reactivo [cite: 29]
  templateUrl: './libro-form.html',
  styleUrl: './libro-form.css'
})
export class LibroFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private tiendaService = inject(TiendaService);
  private router = inject(Router);

  libroForm!: FormGroup;
  categorias = signal<Categoria[]>([]); // Requisito: Signals [cite: 28]

  ngOnInit(): void {
    // Inicializamos las validaciones [cite: 13, 66]
    this.libroForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      autor: ['', [Validators.required]],
      precio: [0, [Validators.required, Validators.min(1)]],
      sinopsis: ['', [Validators.required]],
      categoriaId: ['', [Validators.required]] // Relación 1:M [cite: 15, 37]
    });

    // Cargamos categorías desde el Observable del servicio [cite: 31]
    this.tiendaService.getCategorias().subscribe(data => this.categorias.set(data));
  }

  enviar(): void {
    if (this.libroForm.valid) {
      this.tiendaService.crearLibro(this.libroForm.value).subscribe({
        next: () => {
          alert('¡Libro creado con éxito!');
          this.router.navigate(['/libros']);
        },
        error: (err) => console.error('Error al conectar con el backend', err)
      });
    }
  }
}
