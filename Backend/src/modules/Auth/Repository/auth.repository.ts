import { prismaClient } from "../../../prisma/prisma.client";
import { iUsuario } from "../../usuarios/Models/usuarios.model";

export class UsuariosRepository {
    prismaClient = prismaClient;
    
    constructor() {}
    
    async guardarTokenUsuario (user:iUsuario, token:string, tipoToken:('REFRESH' | 'ACCESS'), ip:string, user_agent:string, fecha_expiracion_token:Date) {
        try{
            const resultCreacion = await this.prismaClient.usuarios_token.create({
                data: {
                    usuario_crea_fk: user.id,
                    usuario_modifica_fk:  user.id,
                    fecha_crea: new Date(),
                    fecha_modifica:  new Date(),
                    usuario_fk:  user.id,
                    token: token,
                    tipo: tipoToken,
                    ip_origen: ip,
                    user_agent: user_agent,
                    fecha_expiracion: fecha_expiracion_token,
                }
            });
            return resultCreacion;
        }catch(error){
            console.log("error creando usuario:" + error);
            throw new Error('Error guardando el usuario.');
        }
    }

}