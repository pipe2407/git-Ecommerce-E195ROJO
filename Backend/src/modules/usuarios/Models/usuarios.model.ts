export interface iCrearUsuario {
    usuario_crea_fk:number,
    usuario_modifica_fk:number,
    nombre_usuario:string,
    primer_nombre:string,
    segundo_nombre:string | null,
    primer_apellido:string, 
    segundo_apellido:string | null,
    numero_identificacion:string, 
    email:string,
    contrasena:string,
}