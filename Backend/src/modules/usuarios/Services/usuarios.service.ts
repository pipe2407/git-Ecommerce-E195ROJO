import { UsuariosRepository } from "../Repository/usuarios.repository";
import { iCrearUsuario } from "../Models/usuarios.model";

export class UsuariosService {
    private usuariosRepository: UsuariosRepository;

    constructor() {
        this.usuariosRepository = new UsuariosRepository();
    }

    // Servicio para registrar usuario
    async registrarUsuario(data: any) {
        try {
            const resultado = await this.usuariosRepository.registrarUsuario(data);
            return resultado;
        } catch (error: any) {
            throw new Error(error.message || "Error al registrar usuario en el servicio");
        }
    }

    // Servicio para crear usuario
    async crearUsuario(data: iCrearUsuario) {
        try {
            const resultado = await this.usuariosRepository.crearUsuario(data);
            return resultado;
        } catch (error: any) {
            throw new Error(error.message || "Error al crear usuario en el servicio");
        }
    }

    // Servicio para consultar usuario
    async consultarUsuario(params: any) {
        try {
            const resultado = await this.usuariosRepository.consultarUsuario(params);
            return resultado;
        } catch (error: any) {
            throw new Error(error.message || "Error al consultar usuario en el servicio");
        }
    }

    // Servicio para login de usuario
    async loginUsuario(credentials: any) {
        try {
            const resultado = await this.usuariosRepository.loginUsuario(credentials);
            return resultado;
        } catch (error: any) {
            throw new Error(error.message || "Error al autenticar usuario en el servicio");
        }
    }
}
