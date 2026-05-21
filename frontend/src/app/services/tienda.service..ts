import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria, Libro } from '../tienda.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private http = inject(HttpClient);
  // URL de tu API de Spring Boot (H2 en memoria) [cite: 36]
  private apiUrl = 'http://localhost:8080/api';

  // --- OPERACIONES MÍNIMAS EXIGIDAS [cite: 45] ---

  // 1. Listar datos generales [cite: 47]
  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/libros`);
  }

  // 2. Ver detalle de un libro [cite: 48]
  getLibroPorId(id: number): Observable<Libro> {
    return this.http.get<Libro>(`${this.apiUrl}/libros/${id}`);
  }

  // 3. Crear nuevos registros [cite: 49]
  crearLibro(libro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${this.apiUrl}/libros`, libro);
  }

  // 4. Consultar relación: Listar libros por categoría (1:M) [cite: 50]
  getLibrosPorCategoria(categoriaId: number): Observable<Libro[]> {
    return this.http.get<Libro[]>(`${this.apiUrl}/categorias/${categoriaId}/libros`);
  }

  // Extra: Obtener categorías para rellenar el selector del formulario
  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}/categorias`);
  }
}
