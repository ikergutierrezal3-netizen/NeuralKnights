package com.example.backend.controller;

import com.example.backend.model.Libro;
import com.example.backend.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/libros")
@CrossOrigin(origins = "http://localhost:4200")

public class LibroController {

    @Autowired
    private LibroRepository repo;

    
    // Get todos
    @GetMapping
    public List<Libro> getAll() {
        return repo.findAll();
    }


    // Get id
    @GetMapping("/{id}")
    public Libro getById(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    // Crear
    @PostMapping
    public Libro create(@RequestBody Libro libro) {
        return repo.save(libro);
    }

    // Actualizar
    @PutMapping("/{id}")
    public Libro update(@PathVariable Long id, @RequestBody Libro libro) {
        libro.setId(id);
        return repo.save(libro);
    }

    // Borrar
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repo.deleteById(id);
    }
}