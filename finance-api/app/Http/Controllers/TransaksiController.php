<?php

namespace App\Http\Controllers;

use App\Models\Transaksi;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    // GET /api/transaksi - Ambil semua data
    public function index()
    {
        $data = Transaksi::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'data' => $data
        ]);
    }

    // POST /api/transaksi - Simpan data baru
    public function store(Request $request)
    {
        // VALIDASI KETAT
        $request->validate([
            'deskripsi' => 'required|string|max:255',
            'nominal'   => 'required|integer|min:0',
            'tipe'      => 'required|in:pemasukan,pengeluaran'
        ]);

        $transaksi = Transaksi::create([
            'deskripsi' => $request->deskripsi,
            'nominal'   => $request->nominal,
            'tipe'      => $request->tipe
        ]);

        return response()->json([
            'success' => true,
            'message' => 'Transaksi berhasil disimpan',
            'data'    => $transaksi
        ], 201); // 201 Created
    }

    // GET /api/saldo - Hitung total saldo
    public function hitungSaldo()
    {
        $pemasukan   = Transaksi::where('tipe', 'pemasukan')->sum('nominal');
        $pengeluaran = Transaksi::where('tipe', 'pengeluaran')->sum('nominal');
        $saldo       = $pemasukan - $pengeluaran;

        return response()->json([
            'success'    => true,
            'saldo_akhir' => $saldo,
            'detail'     => [
                'total_pemasukan'   => $pemasukan,
                'total_pengeluaran' => $pengeluaran
            ]
        ]);
    }
}
