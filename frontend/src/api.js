import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const getTransaksi = () => axios.get(`${API_URL}/transaksi`);
export const getSaldo = () => axios.get(`${API_URL}/saldo`);
export const postTransaksi = (data) => axios.post(`${API_URL}/transaksi`, data);
