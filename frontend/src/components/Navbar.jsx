import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* TOP HEADER */}
      <header className="app-header">
        <span className="header-brand">💰 Finance Tracker</span>
      </header>

      {/* BOTTOM TAB BAR */}
      <nav className="bottom-nav">
        <NavLink to="/" end className={({ isActive }) => `tab-item${isActive ? " active" : ""}`}>
          <span className="tab-icon">🏠</span>
          <span className="tab-label">Dashboard</span>
        </NavLink>
        <NavLink to="/laporan" className={({ isActive }) => `tab-item${isActive ? " active" : ""}`}>
          <span className="tab-icon">📊</span>
          <span className="tab-label">Laporan</span>
        </NavLink>
      </nav>
    </>
  );
}
