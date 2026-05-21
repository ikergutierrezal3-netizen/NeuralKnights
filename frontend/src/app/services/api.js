const API_URL = "http://localhost:4200/api";

export async function getLibros() {
  const response = await fetch(`${API_URL}/libros`);
  return response.json();
}

export async function crearLibro(libro) {
  const response = await fetch(`${API_URL}/libros`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(libro),
  });

  return response.json();
}

export async function getAutores() {
  const response = await fetch(`${API_URL}/autores`);
  return response.json();
}

export async function getCategorias() {
  const response = await fetch(`${API_URL}/categorias`);
  return response.json();
}