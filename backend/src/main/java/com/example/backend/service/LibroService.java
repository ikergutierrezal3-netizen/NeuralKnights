package com.example.backend.service;

import com.example.backend.model.Libro;
import java.util.List;

public interface LibroService {

    List<Libro> findAll();
    Libro findById(Long id);
    Libro save(Libro libro);
    Libro update(Long id, Libro libro);
    void delete(Long id);

}
