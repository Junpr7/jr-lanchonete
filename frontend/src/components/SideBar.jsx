import { Link } from "react-router-dom";
import "./SideBar.css";

function SideBar() {
  return (
    <aside className="aside">
      <h3>Menu</h3>

      <ul className="listaMain">
          <li>
            <Link to="/">Dashboard</Link>
          </li>

          <li>
            <Link to="/produtos">Produtos</Link>
          </li>

          <li>
            <Link to="/clientes">Clientes</Link>
          </li>

          <li>
            <Link to="/pedidos">Pedidos</Link>
          </li>
</ul>
    </aside>
  );
}

export default SideBar;
