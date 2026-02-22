import { UsuariosRepository } from "../Repository/usuarios.repository";

export class UsuariosService {
    private usuariosRepository: UsuariosRepository;

    constructor() {
        this.usuariosRepository = new UsuariosRepository();
    }

    // Servicio para registrar usuario
    async registrarUsuario(data: any) {
        const resultado = await this.usuariosRepository.registrarUsuario(data);
        return resultado;
    }

    // Servicio para crear usuario
    async crearUsuario(data: any) {
        const resultado = await this.usuariosRepository.crearUsuario(data);
        return resultado;
    }

    // Servicio para consultar usuario
    async consultarUsuario(params: any) {
        const resultado = await this.usuariosRepository.consultarUsuario(params);
        return resultado;
    }

    // Servicio para login de usuario
    async loginUsuario(credentials: any) {
        const resultado = await this.usuariosRepository.loginUsuario(credentials);
        return resultado;
    }
}
