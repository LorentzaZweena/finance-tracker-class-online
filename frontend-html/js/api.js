const API_URL = "http://localhost:8000/api";

async function getTransaksi() {
  const res = await fetch(`${API_URL}/transaksi`);
  if (!res.ok) throw new Error("Gagal ambil transaksi");
  return res.json();
}

async function getSaldo() {
  const res = await fetch(`${API_URL}/saldo`);
  if (!res.ok) throw new Error("Gagal ambil saldo");
  return res.json();
}

async function postTransaksi(data) {
  const res = await fetch(`${API_URL}/transaksi`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data)
  });
  const json = await res.json();
  if (!res.ok) throw new Error(json.message || "Server error");
  return json;
}
