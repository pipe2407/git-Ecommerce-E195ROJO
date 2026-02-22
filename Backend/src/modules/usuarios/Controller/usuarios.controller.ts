import { Request, Response } from "express";
import { UsuariosService } from "../Services/usuarios.service";

const usuariosService = new UsuariosService();

// Función para registrar usuario
export const registrarUsuario = async (request: Request, response: Response) => {
    // Llamar al servicio
    const resultado = await usuariosService.registrarUsuario(request.body);
    response.status(200).json(resultado);
};

// Función para crear usuario
export const crearUsuario = async (request: Request, response: Response) => {
    // Llamar al servicio
    const resultado = await usuariosService.crearUsuario(request.body);
    response.status(200).json(resultado);
};

// Función para consultar usuario
export const consultarUsuario = async (request: Request, response: Response) => {
    // Llamar al servicio
    const resultado = await usuariosService.consultarUsuario(request.query);
    response.status(200).json(resultado);
};

// Función para login de usuario
export const loginUsuario = async (request: Request, response: Response) => {
    // Llamar al servicio
    const resultado = await usuariosService.loginUsuario(request.body);
    response.status(200).json(resultado);
};
