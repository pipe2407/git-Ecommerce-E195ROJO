// EC-007 — Historial de compras
// Vista para que el comprador vea sus pedidos anteriores.
// Requisitos: Listar órdenes por fecha, estado del pedido, detalle de cada orden.

import React from 'react';

const HistoryPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Historial de Pedidos</h1>
            <p>Lista de tus compras anteriores para EC-007.</p>
            {/* TODO: Consultar historial de órdenes del usuario autenticado */}
        </div>
    );
};

export default HistoryPage;
