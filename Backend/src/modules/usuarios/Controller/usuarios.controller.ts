import { Request, Response } from "express";
import { UsuariosService } from "../Services/usuarios.service";

const usuariosService = new UsuariosService();

// Función para registrar usuario
export const registrarUsuario = async (request: Request, response: Response) => {
    try {
        // Llamar al servicio
        const resultado = await usuariosService.registrarUsuario(request.body);
        response.status(201).json(resultado);
    } catch (error: any) {
        response.status(500).json({ 
            error: "Error al registrar usuario", 
            mensaje: error.message || "Error interno del servidor" 
        });
    }
};

// Función para crear usuario
export const crearUsuario = async (request: Request, response: Response) => {
    try {
        // Llamar al servicio
        const resultado = await usuariosService.crearUsuario(request.body);
        response.status(201).json(resultado);
    } catch (error: any) {
        response.status(500).json({ 
            error: "Error al crear usuario", 
            mensaje: error.message || "Error interno del servidor" 
        });
    }
};

// Función para consultar usuario
export const consultarUsuario = async (request: Request, response: Response) => {
    try {
        // Llamar al servicio
        const resultado = await usuariosService.consultarUsuario(request.query);
        response.status(200).json(resultado);
    } catch (error: any) {
        response.status(500).json({ 
            error: "Error al consultar usuario", 
            mensaje: error.message || "Error interno del servidor" 
        });
    }
};

// Función para login de usuario
export const loginUsuario = async (request: Request, response: Response) => {
    try {
        // Llamar al servicio
        const resultado = await usuariosService.loginUsuario(request.body);
        response.status(200).json(resultado);
    } catch (error: any) {
        response.status(401).json({ 
            error: "Error al autenticar usuario", 
            mensaje: error.message || "Credenciales inválidas" 
        });
    }
};
