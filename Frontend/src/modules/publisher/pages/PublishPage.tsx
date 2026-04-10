// EC-008 — Publicación de producto
// Formulario para que vendedores publiquen nuevos productos.
// Requisitos: Carga de imágenes, campos de descripción, precio, categoría.

import React from 'react';

const PublishPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Publicar Nuevo Producto</h1>
            <p>Formulario de creación para EC-008.</p>
            {/* TODO: Implementar formulario con FormData y manejo de archivos */}
        </div>
    );
};

export default PublishPage;
