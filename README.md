# 💰 Finance Tracker — Fullstack (React + Laravel)

Aplikasi pencatat keuangan pribadi dengan frontend React dan backend Laravel API.

---

## Struktur Project

```
finance-tracker/
├── frontend/               # React App
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
│
└── backend/                # Laravel App (file kustom)
    ├── app/
    │   ├── Http/Controllers/
    │   │   └── TransaksiController.php
    │   └── Models/
    │       └── Transaksi.php
    ├── config/
    │   └── cors.php
    ├── database/migrations/
    │   └── 2026_03_10_000000_create_transaksis_table.php
    └── routes/
        └── api.php
```

---

## Cara Menjalankan

### Step 1 — Backend (Laravel)

```bash
# 1. Buat project Laravel baru
composer create-project laravel/laravel finance-api
cd finance-api

# 2. Copy file-file backend ke lokasi yang sesuai:
#    - backend/app/Models/Transaksi.php          → app/Models/
#    - backend/app/Http/Controllers/...php       → app/Http/Controllers/
#    - backend/routes/api.php                    → routes/
#    - backend/config/cors.php                   → config/
#    - backend/database/migrations/...php        → database/migrations/

# 3. Konfigurasi database di .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=finance_tracker
DB_USERNAME=root
DB_PASSWORD=

# 4. Buat database terlebih dahulu (via MySQL/phpMyAdmin)
#    CREATE DATABASE finance_tracker;

# 5. Jalankan migration
php artisan migrate

# 6. Jalankan development server
php artisan serve
# ✅ Server berjalan di http://localhost:8000
```

### Step 2 — Frontend (React)

```bash
# Dari folder frontend/
cd frontend
npm install
npm start
# ✅ App berjalan di http://localhost:3000
```

> **Catatan:** Pastikan `API_URL` di `src/App.js` mengarah ke `http://localhost:8000/api`.

---

## API Endpoints

| Method | Endpoint         | Deskripsi              |
|--------|------------------|------------------------|
| GET    | /api/transaksi   | Ambil semua transaksi  |
| POST   | /api/transaksi   | Tambah transaksi baru  |
| GET    | /api/saldo       | Hitung total saldo     |

### Contoh POST Body (`/api/transaksi`)
```json
{
  "deskripsi": "Gaji Bulanan",
  "nominal": 5000000,
  "tipe": "pemasukan"
}
```

---

## Fitur

| Fitur | Status |
|-------|--------|
| Form Input Transaksi | ✅ React + Validasi |
| Simpan ke Database | ✅ Laravel + MySQL |
| Hitung Saldo Otomatis | ✅ Backend Calculation |
| Data Persisten | ✅ Tidak hilang saat refresh |
| Validasi Input | ✅ Nominal > 0, Tipe enum |
| Loading State | ✅ UX saat submit |
| Color Coding | ✅ Hijau (pemasukan) / Merah (pengeluaran) |

---

## Troubleshooting

- **Error CORS** → Pastikan `config/cors.php` sudah di-set `allowed_origins => ['*']`
- **Gagal terhubung ke server** → Pastikan `php artisan serve` sudah berjalan
- **500 Server Error** → Cek `storage/logs/laravel.log` untuk detail error
- **Migration gagal** → Pastikan database sudah dibuat dan kredensial `.env` benar
