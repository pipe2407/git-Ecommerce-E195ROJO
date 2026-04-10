// EC-004 — Catálogo de productos
// Vista principal para mostrar todos los productos disponibles.
// Requisitos: Buscador, filtros por categoría/precio, paginación.

import React from 'react';

const CatalogPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Catálogo de Productos</h1>
            <p>Lista de productos para EC-004.</p>
            {/* TODO: Consumir API de productos y renderizar tarjetas */}
        </div>
    );
};

export default CatalogPage;
