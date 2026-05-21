package com.example.backend.service;

import com.example.backend.model.Libro;
import com.example.backend.repository.LibroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibroServiceImpl implements LibroService {

    @Autowired
    private LibroRepository repo;

    @Override
    public List<Libro> findAll() {
        return repo.findAll();
    }

    @Override
    public Libro findById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Libro no encontrado"));
    }

    @Override
    public Libro save(Libro libro) {
        return repo.save(libro);
    }

    @Override
    public Libro update(Long id, Libro libro) {
        Libro l = findById(id);
        l.setTitulo(libro.getTitulo());
        l.setAutor(libro.getAutor());
        l.setPrecio(libro.getPrecio());
        l.setCategoria(libro.getCategoria());
        return repo.save(l);
    }

    @Override
    public void delete(Long id) {
        repo.deleteById(id);
    }
}