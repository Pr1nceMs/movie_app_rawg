import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar">
      {/* <!-- Navbar --> */}
      <div class="nav-left">
        <button id="sidebar-toggle">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Rechercher..." />
      </div>

      <div class="nav-right">
        <div class="nav-item">
          <i class="fas fa-bell"></i>
          <span class="notification-badge">3</span>
        </div>
        <div class="nav-item">
          <i class="fas fa-cog"></i>
        </div>
        <div class="profile">
          <img src="https://via.placeholder.com/40" alt="Profile" />
          <i class="fa fa-user" aria-hidden="true"></i>

          <span id="john-name">Tendo</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
