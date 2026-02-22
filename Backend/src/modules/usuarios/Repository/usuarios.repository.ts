import { PrismaClientOptions } from "@prisma/client/runtime/client";
import { PrismaClient } from "../../../generated/prisma/client";
import { iCrearUsuario } from "../Models/usuarios.model";

export class UsuariosRepository {
    prismaClient: PrismaClient;
    
    constructor() {
        this.prismaClient = new PrismaClient({} as any);
    }

    // Repositorio para registrar usuario
    async registrarUsuario(data: any) {
        try {
            return { mensaje: "Usuario registrado", data };
        } catch (error: any) {
            console.log("error registrando usuario:" + error);
            throw new Error('Error registrando el usuario.');
        }
    }

    // Repositorio para crear usuario
    async crearUsuario(data: iCrearUsuario) {
        try{
            const resultCreacion = await this.prismaClient.usuarios.create({
                data: {
                    usuario_crea_fk: data.usuario_crea_fk,
                    usuario_modifica_fk: data.usuario_modifica_fk,
                    nombre_usuario: data.nombre_usuario,
                    primer_nombre: data.primer_nombre,
                    segundo_nombre: data.segundo_nombre,
                    primer_apellido: data.primer_apellido, 
                    segundo_apellido: data.segundo_apellido,
                    numero_identificacion: data.numero_identificacion, 
                    email: data.email,
                    contrasena: data.contrasena,
                }
            });
            return resultCreacion;
        }catch(error){
            console.log("error creando usuario:" + error);
            throw new Error('Error guardando el usuario.');
        }
    }

    // Repositorio para consultar usuario
    async consultarUsuario(params: any) {
        try {
            return { mensaje: "Usuario consultado", params };
        } catch (error: any) {
            console.log("error consultando usuario:" + error);
            throw new Error('Error consultando el usuario.');
        }
    }

    // Repositorio para login de usuario
    async loginUsuario(credentials: any) {
        try {
            return { mensaje: "Login procesado", credentials };
        } catch (error: any) {
            console.log("error en login de usuario:" + error);
            throw new Error('Error procesando el login.');
        }
    }
}
