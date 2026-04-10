// EC-002 — Login de usuario
// Vista para autenticación de usuarios existentes.
// Requisitos: Capturar credenciales, llamar al servicio de login, guardar token.

import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
    return (
        <div className="module-container">
            <Link to="/">← Volver al Inicio</Link>
            <h1>Iniciar Sesión</h1>
            <p>Formulario para EC-002 - Bienvenido de nuevo.</p>
            {/* TODO: Implementar formulario de login */}
        </div>
    );
};

export default LoginPage;
