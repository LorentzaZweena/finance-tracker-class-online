export default function StatCard({ label, value, color, icon }) {
  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-icon">{icon}</div>
      <div>
        <p className="stat-label">{label}</p>
        <p className="stat-value" style={{ color }}>
          Rp {value.toLocaleString("id-ID")}
        </p>
      </div>
    </div>
  );
}
