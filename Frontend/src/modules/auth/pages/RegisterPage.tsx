// EC-001 — Registro de usuario
// Vista para que nuevos usuarios creen una cuenta (compradores o vendedores).
// Requisitos: Validación de campos (email, contraseña, etc.), manejo de errores del servidor.

import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
    return (
        <div className="module-container">
            <Link to="/">← Volver al Inicio</Link>
            <h1>Registro de Usuario</h1>
            <p>Formulario para EC-001 - Ingresa tus datos para empezar.</p>
            {/* TODO: Implementar formulario de registro */}
        </div>
    );
};

export default RegisterPage;
