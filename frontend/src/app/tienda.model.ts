export interface Categoria {
  id?: number;
  nombre: string;
  descripcion: string;
}

export interface Libro {
  id?: number;
  titulo: string;
  autor: string;
  precio: number;
  sinopsis: string;
  categoriaId: number;
  categoria?: Categoria;
}
