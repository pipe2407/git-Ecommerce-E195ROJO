// EC-010 — Informes admin
// Panel de control para administradores de la plataforma.
// Requisitos: Estadísticas de ventas, métricas de usuarios, reportes de actividad.

import React from 'react';

const ReportsPage: React.FC = () => {
    return (
        <div className="module-container">
            <h1>Informes de Administración</h1>
            <p>Panel de control y métricas para EC-010.</p>
            {/* TODO: Integrar gráficas y tablas de reportes (ej. Chart.js o Recharts) */}
        </div>
    );
};

export default ReportsPage;
