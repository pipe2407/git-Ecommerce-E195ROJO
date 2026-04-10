// EC-009 — Gestión de publicaciones
// Panel para que el vendedor administre sus productos publicados.
// Requisitos: Editar productos, cambiar estado (activo/inactivo), eliminar publicación.

import React from 'react';

const ManagementPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Mis Publicaciones</h1>
            <p>Panel de administración de vendedor para EC-009.</p>
            {/* TODO: Listar productos del vendedor y añadir acciones de edición/borrado */}
        </div>
    );
};

export default ManagementPage;
