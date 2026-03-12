document.addEventListener("DOMContentLoaded", async () => {
  const saldoEl  = document.getElementById("saldo");
  const listEl   = document.getElementById("transaksi-list");
  const form     = document.getElementById("form-transaksi");
  const btnSubmit = document.getElementById("btn-submit");

  // Load data awal
  await loadSaldo();
  await loadTransaksi();

  async function loadSaldo() {
    try {
      const data = await getSaldo();
      saldoEl.textContent = "Rp " + data.saldo_akhir.toLocaleString("id-ID");
    } catch {
      saldoEl.textContent = "Gagal ambil saldo";
    }
  }

  async function loadTransaksi() {
    try {
      const data = await getTransaksi();
      const list = data.data;
      if (list.length === 0) {
        listEl.innerHTML = `<p class="empty-state">Belum ada transaksi</p>`;
        return;
      }
      listEl.innerHTML = list.map(renderItem).join("");
    } catch {
      listEl.innerHTML = `<p class="empty-state">Gagal memuat data</p>`;
    }
  }

  // Submit form
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    btnSubmit.disabled = true;
    btnSubmit.textContent = "Menyimpan...";

    const deskripsi = document.getElementById("deskripsi").value.trim();
    const jumlah    = parseInt(document.getElementById("jumlah").value);
    const tipe      = document.getElementById("tipe").value;

    try {
      await postTransaksi({ deskripsi, nominal: jumlah, tipe });
      await loadSaldo();
      await loadTransaksi();
      form.reset();
      showModal("success", "Transaksi tersimpan ke Database!");
    } catch (err) {
      showModal("error", "Gagal menyimpan: " + err.message);
    } finally {
      btnSubmit.disabled = false;
      btnSubmit.textContent = "💾 Simpan Transaksi";
    }
  });
});
