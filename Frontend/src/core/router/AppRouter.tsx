import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Importación de módulos (Muestras)
import RegisterPage from '../../modules/auth/pages/RegisterPage';
import LoginPage from '../../modules/auth/pages/LoginPage';
import CatalogPage from '../../modules/catalog/pages/CatalogPage';
import ProductDetailPage from '../../modules/catalog/pages/ProductDetailPage';
import CheckoutPage from '../../modules/checkout/pages/CheckoutPage';
import HistoryPage from '../../modules/account/pages/HistoryPage';
import PublishPage from '../../modules/publisher/pages/PublishPage';
import ManagementPage from '../../modules/publisher/pages/ManagementPage';
import ReportsPage from '../../modules/admin/pages/ReportsPage';

// Componente de Bienvenida (Dashboard simple)
const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>¡Bienvenido a la Plataforma E-Commerce!</h1>
    <p>Selecciona un módulo para empezar a trabajar:</p>
    
    <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}>
      <Link to="/register"><button>EC-001 Registro</button></Link>
      <Link to="/login"><button>EC-002 Login</button></Link>
      <Link to="/catalog"><button>EC-004 Catálogo</button></Link>
      <Link to="/checkout"><button>EC-006 Checkout</button></Link>
      <Link to="/orders"><button>EC-007 Historial</button></Link>
      <Link to="/publish"><button>EC-008 Publicar</button></Link>
      <Link to="/admin/reports"><button>EC-010 Informes</button></Link>
    </nav>
  </div>
);

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rutas de Auth */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rutas de Catálogo */}
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        
        {/* Rutas de Checkout */}
        <Route path="/checkout" element={<CheckoutPage />} />
        
        {/* Rutas de Cuenta */}
        <Route path="/orders" element={<HistoryPage />} />
        
        {/* Rutas de Vendedor */}
        <Route path="/publish" element={<PublishPage />} />
        <Route path="/my-listings" element={<ManagementPage />} />
        
        {/* Rutas de Admin */}
        <Route path="/admin/reports" element={<ReportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
