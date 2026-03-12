document.addEventListener("DOMContentLoaded", async () => {
  const listEl   = document.getElementById("transaksi-list");
  const filterBtns = document.querySelectorAll(".filter-btn");

  let allTransaksi = [];
  let activeFilter = "semua";

  // Load semua data
  try {
    const [saldoData, transaksiData] = await Promise.all([getSaldo(), getTransaksi()]);
    allTransaksi = transaksiData.data;

    // Isi stat cards
    document.getElementById("stat-pemasukan").textContent =
      "Rp " + saldoData.detail.total_pemasukan.toLocaleString("id-ID");
    document.getElementById("stat-pengeluaran").textContent =
      "Rp " + saldoData.detail.total_pengeluaran.toLocaleString("id-ID");

    const saldo = saldoData.saldo_akhir;
    const saldoEl = document.getElementById("stat-saldo");
    saldoEl.textContent = "Rp " + saldo.toLocaleString("id-ID");
    saldoEl.style.color = saldo >= 0 ? "#667eea" : "#f56565";

    renderList();
  } catch (err) {
    listEl.innerHTML = `<p class="empty-state">Gagal memuat laporan</p>`;
  }

  // Filter buttons
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.dataset.filter;
      renderList();
    });
  });

  function renderList() {
    const filtered =
      activeFilter === "semua"
        ? allTransaksi
        : allTransaksi.filter((t) => t.tipe === activeFilter);

    if (filtered.length === 0) {
      listEl.innerHTML = `<p class="empty-state">Tidak ada transaksi</p>`;
      return;
    }
    listEl.innerHTML = filtered.map(renderItem).join("");
  }
});
