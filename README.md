# Fullstack Infinity Scroll ReactJS

Aplikasi fullstack yang menampilkan daftar data personal dengan fitur infinite scroll menggunakan ReactJS untuk frontend dan Express.js untuk backend.

## Dibuat oleh
Triananda Fajar Ramadhan

## Teknologi yang Digunakan

### Frontend
- React.js
- React Bootstrap
- Axios
- React Infinite Scroll Component
- Vite

### Backend
- Express.js
- Prisma ORM
- PostgreSQL
- CORS
- Dotenv

## Prasyarat
- Node.js (versi 14 atau lebih tinggi)
- npm atau yarn
- PostgreSQL

## Cara Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/fullstack-infinity-scroll-reactjs.git
cd fullstack-infinity-scroll-reactjs
```

### 2. Setup Backend
```bash
# Masuk ke direktori backend
cd backend

# Install dependencies
npm install
# atau
yarn install

# Setup database
# Pastikan PostgreSQL sudah berjalan dan buat database baru
# Salin file .env.example ke .env dan sesuaikan konfigurasi database

# Generate Prisma client
npm run prisma:generate
# atau
yarn prisma:generate

# Jalankan migrasi database
npm run prisma:migrate
# atau
yarn prisma:migrate

# Jalankan server
npm start
# atau
yarn start
```

### 3. Setup Frontend
```bash
# Buka terminal baru
# Masuk ke direktori frontend
cd frontend

# Install dependencies
npm install
# atau
yarn install

# Jalankan aplikasi
npm run dev
# atau
yarn dev
```

## Struktur Proyek
```
fullstack-infinity-scroll-reactjs/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── utils/
│   │   └── index.js
│   ├── prisma/
│   │   └── schema.prisma
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── assets/
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

## Fitur
- Infinite scroll untuk menampilkan data
- Responsive design
- Real-time data loading
- Error handling
- Loading states
- Optimized performance

## API Endpoints

### GET /api/personals
Mendapatkan daftar data personal dengan pagination
- Query Parameters:
  - page: nomor halaman (default: 1)
  - limit: jumlah data per halaman (default: 10)

## Kontribusi
Silakan buat pull request untuk kontribusi. Untuk perubahan besar, harap buka issue terlebih dahulu untuk mendiskusikan perubahan yang diinginkan.

## Lisensi
[MIT](https://choosealicense.com/licenses/mit/)
