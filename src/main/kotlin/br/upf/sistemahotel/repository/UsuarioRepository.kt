package br.upf.sistemahotel.repository

import br.upf.sistemahotel.model.Usuario
import org.springframework.data.jpa.repository.JpaRepository

import org.springframework.stereotype.Repository

@Repository
interface UsuarioRepository: JpaRepository<Usuario, Long> {

}
