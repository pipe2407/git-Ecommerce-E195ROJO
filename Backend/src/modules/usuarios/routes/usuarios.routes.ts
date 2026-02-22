import { Router } from "express";
import { 
    registrarUsuario, 
    crearUsuario, 
    consultarUsuario, 
    loginUsuario 
} from "../Controller/usuarios.controller";

const usuariosRoutes = Router();

// Endpoint para registrar usuario
usuariosRoutes.post('/registrar', registrarUsuario);

// Endpoint para crear usuario
usuariosRoutes.post('/crear', crearUsuario);

// Endpoint para consultar usuario
usuariosRoutes.get('/consultar', consultarUsuario);

// Endpoint para login
usuariosRoutes.post('/login', loginUsuario);

export default usuariosRoutes;
