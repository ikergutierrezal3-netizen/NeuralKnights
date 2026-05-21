<h1>Estructura</h1>
<p>NeuralKnights/<br>
├── frontend/   → Angular 21<br>
└── backend/    → Spring Boot + H2 en memoria</p>
<h2>Cómo ejecutar</h2>
<h3>Backend</h3>
<p>cd backend</p>
<p>mvn spring-boot:run</p>
<p>API disponible en http://localhost:8080/api/libros</p>

<h3>Frontend</h3>
<p>cd frontend</p>
<p>npm install</p>
<p>npm start</p>
<p>App disponible en http://localhost:4200</p>

<h3>Modelo de datos (relación 1:N)</h3>
<p>Autor tiene Libros</p>
<p>Autor: Id, nombre, nacionalidad</p>
<p>Libro: Id, titulo, autor, descripcion, precio, stock, categoria, fecha de creacion</p>
