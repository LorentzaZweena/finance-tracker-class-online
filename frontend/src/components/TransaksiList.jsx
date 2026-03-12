export default function TransaksiList({ transaksiList }) {
  return (
    <div className="card">
      <h3>📋 Riwayat Transaksi</h3>
      {transaksiList.length === 0 && (
        <p style={{ textAlign: "center", color: "#666" }}>
          Belum ada transaksi
        </p>
      )}

      {transaksiList.map((item) => (
        <div key={item.id} className={`item ${item.tipe}`}>
          <div>
            <strong>{item.deskripsi}</strong>
            <br />
            <small style={{ color: "#666" }}>
              {new Date(item.created_at).toLocaleDateString("id-ID")}
            </small>
          </div>
          <span
            style={{
              color: item.tipe === "pemasukan" ? "#48bb78" : "#f56565",
              fontWeight: "bold"
            }}
          >
            {item.tipe === "pemasukan" ? "+" : "-"} Rp{" "}
            {Math.abs(item.nominal).toLocaleString("id-ID")}
          </span>
        </div>
      ))}
    </div>
  );
}
