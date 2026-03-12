import { useState } from "react";

export default function TransaksiForm({ onSubmit, loading }) {
  const [inputData, setInputData] = useState({
    deskripsi: "",
    jumlah: "",
    tipe: "pengeluaran"
  });

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(inputData);
    setInputData({ deskripsi: "", jumlah: "", tipe: "pengeluaran" });
  };

  return (
    <div className="card">
      <h3>Tambah Transaksi</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="deskripsi"
          value={inputData.deskripsi}
          onChange={handleChange}
          placeholder="Deskripsi (contoh: Gaji, Makan)"
          required
        />

        <input
          name="jumlah"
          type="number"
          value={inputData.jumlah}
          onChange={handleChange}
          placeholder="Jumlah (Rp)"
          required
        />

        <select name="tipe" value={inputData.tipe} onChange={handleChange}>
          <option value="pengeluaran">Pengeluaran (-)</option>
          <option value="pemasukan">Pemasukan (+)</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? "Menyimpan..." : "💾 Simpan Transaksi"}
        </button>
      </form>
    </div>
  );
}
