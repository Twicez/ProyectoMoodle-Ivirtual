import React, { useState } from 'react';
import '../styles/HomePage.css';

function HomePage() {
  const [isSidebarHidden, setSidebarHidden] = useState(false);
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    if (isSidebarHidden) {
        sidebar.style.transform = 'translateX(0)'; /* Muestra el sidebar */
    } else {
        sidebar.style.transform = 'translateX(-100%)'; /* Oculta el sidebar */
    }
    setSidebarHidden(!isSidebarHidden);
};

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <form action="#" method="get">
          <input type="search" name="search" placeholder="Buscar..." />
          <button type="submit">Buscar</button>
        </form>
        <div className="logo-circle">
          {/* Logo aquí */}
        </div>
        <button onClick={toggleSidebar}>
          {isSidebarHidden ? 'Menu' : 'Menu'}
        </button>
      </header>

      <div className={`container ${isSidebarHidden ? 'hidden' : ''}`}>
        <aside className="sidebar">
          <ul>
            <li><a href="#">Categoría 1</a></li>
            <li><a href="#">Subcategoría 1.1</a></li>
            <li><a href="#">Subcategoría 1.2</a></li>
            <li><a href="#">Categoría 2</a></li>
            <li><a href="#">Subcategoría 2.1</a></li>
            <li><a href="#">Subcategoría 2.2</a></li>
          </ul>
        </aside>

        <main className="context">
          {/* Contenido aquí */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;