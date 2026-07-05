import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Produtos from "../pages/Produtos";
import Clientes from "../pages/Clientes";
import Pedidos from "../pages/Pedidos";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<MainLayout />}>

    <Route index element={<Dashboard />} />

    <Route path="produtos" element={<Produtos />} />

    <Route path="clientes" element={<Clientes />} />

    <Route path="pedidos" element={<Pedidos />} />

    </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
