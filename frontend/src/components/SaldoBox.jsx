export default function SaldoBox({ saldo }) {
  return (
    <div className="saldo-box">
      <h3>Total Saldo</h3>
      <h2>Rp {saldo.toLocaleString("id-ID")}</h2>
    </div>
  );
}
