import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminUser from './pages/AdminUser';
import AdminOS from './pages/AdminOS';
import AdminEstoque from './pages/AdminEstoque';
import './pages/apps.css'; // Importa o arquivo CSS para o estilo

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navigation">
          <button className="nav-button">
            <Link to="/admin-user" className="nav-link">Admin User</Link>
          </button>
          <button className="nav-button">
            <Link to="/admin-os" className="nav-link">Admin OS</Link>
          </button>
          <button className="nav-button">
            <Link to="/admin-estoque" className="nav-link">Admin Estoque</Link>
          </button>
        </nav>
        
        <Routes>
          <Route path="/admin-user" element={<AdminUser />} />
          <Route path="/admin-os" element={<AdminOS />} />
          <Route path="/admin-estoque" element={<AdminEstoque />} />
          <Route path="/" element={<h1>Bem-vindo ao Admin Panel</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
