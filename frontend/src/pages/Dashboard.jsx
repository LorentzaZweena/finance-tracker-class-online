import { useState, useEffect } from "react";
import { getTransaksi, getSaldo, postTransaksi } from "../api";
import Modal from "../components/Modal";
import SaldoBox from "../components/SaldoBox";
import TransaksiForm from "../components/TransaksiForm";
import TransaksiList from "../components/TransaksiList";

export default function Dashboard() {
  const [saldo, setSaldo] = useState(0);
  const [transaksiList, setTransaksiList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(null);

  const showModal = (type, message) => setModal({ type, message });

  useEffect(() => {
    fetchData();
    fetchSaldo();
  }, []);

  const fetchData = async () => {
    try {
      const response = await getTransaksi();
      setTransaksiList(response.data.data);
    } catch (error) {
      console.error("Gagal ambil data:", error);
      showModal("error", "Gagal terhubung ke server!");
    }
  };

  const fetchSaldo = async () => {
    try {
      const response = await getSaldo();
      setSaldo(response.data.saldo_akhir);
    } catch (error) {
      console.error("Gagal ambil saldo:", error);
    }
  };

  const handleSubmit = async (inputData) => {
    setLoading(true);
    try {
      await postTransaksi({
        deskripsi: inputData.deskripsi,
        nominal: parseInt(inputData.jumlah),
        tipe: inputData.tipe
      });
      await fetchData();
      await fetchSaldo();
      showModal("success", "Transaksi tersimpan ke Database!");
    } catch (error) {
      showModal(
        "error",
        "Gagal menyimpan: " + (error.response?.data?.message || "Server error")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal modal={modal} onClose={() => setModal(null)} />
      <SaldoBox saldo={saldo} />
      <TransaksiForm onSubmit={handleSubmit} loading={loading} />
      <TransaksiList transaksiList={transaksiList} />
    </>
  );
}
