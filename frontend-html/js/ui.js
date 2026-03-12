// Render satu item transaksi
function renderItem(item) {
  const tanggal = new Date(item.created_at).toLocaleDateString("id-ID");
  const prefix = item.tipe === "pemasukan" ? "+" : "-";
  const nominal = Math.abs(item.nominal).toLocaleString("id-ID");
  return `
    <div class="item ${item.tipe}">
      <div>
        <div class="item-desc">${item.deskripsi}</div>
        <div class="item-date">${tanggal}</div>
      </div>
      <div class="item-nominal">${prefix} Rp ${nominal}</div>
    </div>`;
}

// Tampilkan modal
function showModal(type, message) {
  const overlay = document.getElementById("modal-overlay");
  const icon    = document.getElementById("modal-icon");
  const msg     = document.getElementById("modal-message");
  icon.textContent = type === "success" ? "✅" : "❌";
  msg.textContent  = message;
  overlay.classList.remove("hidden");
}

// Tutup modal
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("modal-overlay");
  document.getElementById("modal-close").addEventListener("click", () => {
    overlay.classList.add("hidden");
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("hidden");
  });
});
