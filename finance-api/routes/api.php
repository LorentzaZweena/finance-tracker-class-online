<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransaksiController;

// CORS Middleware sudah dihandle Laravel 11+
Route::get('/transaksi', [TransaksiController::class, 'index']);
Route::post('/transaksi', [TransaksiController::class, 'store']);
Route::get('/saldo', [TransaksiController::class, 'hitungSaldo']);
