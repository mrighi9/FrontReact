package br.upf.sistemahotel.converters

import br.upf.sistemahotel.dtos.UsuarioDTO
import br.upf.sistemahotel.dtos.UsuarioResponseDTO
import br.upf.sistemahotel.model.Usuario
import org.springframework.stereotype.Component

@Component
class UsuarioConverter {
    fun toUsuarioResponseDTO(usuario: Usuario): UsuarioResponseDTO {
        return UsuarioResponseDTO(
            id = usuario.id,
            nome = usuario.nome,
            cidade = usuario.cidade,
            telefone = usuario.telefone
        )
    }

    fun toUsuario(dto: UsuarioDTO): Usuario {
        return Usuario(
            nome = dto.nome,
            cidade = dto.cidade,
            telefone = dto.telefone
        )
    }
}
