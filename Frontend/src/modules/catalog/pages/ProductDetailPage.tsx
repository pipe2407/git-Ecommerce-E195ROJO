// EC-005 — Detalle de producto
// Vista para ver la información completa de un producto específico.
// Requisitos: Galería de imágenes, descripción, precio, botón de añadir al carrito.

import React from 'react';

const ProductDetailPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Detalle del Producto</h1>
            <p>Información detallada para EC-005.</p>
            {/* TODO: Obtener ID de la URL y cargar datos del producto */}
        </div>
    );
};

export default ProductDetailPage;
