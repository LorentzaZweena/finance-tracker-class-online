import { useState, useEffect } from "react";
import { getTransaksi, getSaldo } from "../api";
import StatCard from "../components/StatCard";
import TransaksiList from "../components/TransaksiList";

export default function Laporan() {
  const [detail, setDetail] = useState({ total_pemasukan: 0, total_pengeluaran: 0 });
  const [saldo, setSaldo] = useState(0);
  const [transaksiList, setTransaksiList] = useState([]);
  const [filter, setFilter] = useState("semua");

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      const [saldoRes, transaksiRes] = await Promise.all([getSaldo(), getTransaksi()]);
      setSaldo(saldoRes.data.saldo_akhir);
      setDetail(saldoRes.data.detail);
      setTransaksiList(transaksiRes.data.data);
    } catch (error) {
      console.error("Gagal ambil laporan:", error);
    }
  };

  const filtered =
    filter === "semua"
      ? transaksiList
      : transaksiList.filter((t) => t.tipe === filter);

  return (
    <>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: 20 }}>
        📊 Laporan Keuangan
      </h1>

      {/* STAT CARDS */}
      <div className="stat-grid">
        <StatCard
          label="Total Pemasukan"
          value={detail.total_pemasukan}
          color="#48bb78"
          icon="📈"
        />
        <StatCard
          label="Total Pengeluaran"
          value={detail.total_pengeluaran}
          color="#f56565"
          icon="📉"
        />
        <StatCard
          label="Saldo Bersih"
          value={saldo}
          color={saldo >= 0 ? "#667eea" : "#f56565"}
          icon="💳"
        />
      </div>

      {/* FILTER */}
      <div className="card">
        <div className="filter-row">
          {["semua", "pemasukan", "pengeluaran"].map((f) => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      <TransaksiList transaksiList={filtered} />
    </>
  );
}
