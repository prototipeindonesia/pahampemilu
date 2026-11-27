// ===== DEMO DATA STORE (localStorage) =====
const APStore = (function(){
  // Ubah angka versi (misal v3 -> v4) setiap kali Anda mengedit data seed di bawah ini
  // agar browser otomatis memperbarui data lama yang tersimpan di localStorage
  const KEY = 'aksi_perubahan_data_v3'; 

  const seed = {
    // ===== DATA VIDEO PEMBELAJARAN =====
    videos: [
      {
        id: 1, 
        judul: 'Kisah Heroik Mayor Oking: Pejuang Tangguh Tanah Bogor', 
        deskripsi: 'Meneladani perjuangan pahlawan nasional asal Bogor.', 
        kategori: 'Sejarah Pahlawan', 
        tipe: 'gdrive', 
        url: 'https://drive.google.com/file/d/1l_nqVkzULpRTIa3TZECHaZxQ7sX3r8d8/preview', 
        thumbnail: 'assets/gambar1.png',
        created_at: new Date().toISOString()
      },
      {
        id: 2, 
        judul: 'Siapa Tan Malaka? Bapak Republik yang Terlupakan', 
        deskripsi: 'Mengenal lebih dekat pemikiran dan perjuangan Tan Malaka.', 
        kategori: 'Sejarah Pahlawan', 
        tipe: 'gdrive', 
        url: 'https://drive.google.com/file/d/1CEzTWqOP9T1Q3Rs6nBcC_NwoNakoGuAG/preview', 
        thumbnail: 'assets/gambar2.png',
        created_at: new Date().toISOString()
      },
      {
        id: 3, 
        judul: 'Emmy Saelan: Srikandi Muda Pemberani dari Makassar', 
        deskripsi: 'Kisah perjuangan perempuan muda dari Indonesia Timur.', 
        kategori: 'Sejarah Pahlawan', 
        tipe: 'gdrive', 
        url: 'https://drive.google.com/file/d/1Vlzoxh9t6WQFiji3axoLXnDEgorDTX17/preview', 
        thumbnail: 'assets/gambar3.png',
        created_at: new Date().toISOString()
      },
      {
        id: 4, 
        judul: 'Dampak Tambang bagi Alam & Satwa Langka Indonesia', 
        deskripsi: 'Pelajaran lingkungan dan kedaulatan sumber daya alam.', 
        kategori: 'Lingkungan', 
        tipe: 'gdrive', 
        url: 'https://drive.google.com/file/d/1QmnfdopMK8__DAimBPLKkEAnrVmaoowf/preview', 
        thumbnail: 'assets/gambar4.png',
        created_at: new Date().toISOString()
      },
      {
        id: 5, 
        judul: 'Apa Itu KKN? Kenali Bahayanya Sejak Dini!', 
        deskripsi: 'Edukasi pencegahan Korupsi, Kolusi, dan Nepotisme.', 
        kategori: 'Anti-Korupsi', 
        tipe: 'gdrive', 
        url: 'https://drive.google.com/file/d/1Umpmicflmku41gCm-w6PBGy_jjpQy8oh/preview', 
        thumbnail: 'assets/gambar5.png',
        created_at: new Date().toISOString()
      }
    ],

    // ===== DATA ATURAN / REGULASI KEPEMILUAN =====
    rules: [
      {
        id: 1, 
        judul: 'PKPU No. 15 Tahun 2023', 
        deskripsi: 'Tentang Kampanye Pemilu', 
        kategori: 'Peraturan KPU', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        created_at: new Date().toISOString()
      },
      {
        id: 2, 
        judul: 'UU No. 7 Tahun 2017', 
        deskripsi: 'Tentang Pemilihan Umum', 
        kategori: 'Undang-Undang', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        created_at: new Date().toISOString()
      },
      {
        id: 3, 
        judul: 'PP No. 1 Tahun 2022', 
        deskripsi: 'Tentang Tahapan Penyelenggaraan Pemilu', 
        kategori: 'Peraturan Pemerintah', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        created_at: new Date().toISOString()
      }
    ],

    // ===== DATA REFERENSI BUKU =====
    // Isi kolom cover_path dengan link gambar sampul (contoh: 'assets/cover1.jpg' atau 'https://...')
    books: [
      {
        id: 1, 
        judul: 'Demokrasi untuk Semua', 
        penulis: 'Tim Penulis', 
        penerbit: 'KPU RI', 
        tahun: '2023', 
        deskripsi: 'Buku panduan demokrasi.', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        cover_path: '', // <-- Edit link gambar sampul Buku 1 di sini
        created_at: new Date().toISOString()
      },
      {
        id: 2, 
        judul: 'Pendidikan Pemilih', 
        penulis: 'Tim Penulis', 
        penerbit: 'KPU RI', 
        tahun: '2022', 
        deskripsi: 'Modul pendidikan pemilih.', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        cover_path: '', // <-- Edit link gambar sampul Buku 2 di sini
        created_at: new Date().toISOString()
      },
      {
        id: 3, 
        judul: 'Pemilu dan Partisipasi Masyarakat', 
        penulis: 'Tim Penulis', 
        penerbit: 'Bawaslu', 
        tahun: '2021', 
        deskripsi: 'Buku saku partisipasi.', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        cover_path: '', // <-- Edit link gambar sampul Buku 3 di sini
        created_at: new Date().toISOString()
      },
      {
        id: 4, 
        judul: 'Tata Kelola Pemilu di Indonesia', 
        penulis: 'Tim Penulis', 
        penerbit: 'KPU RI', 
        tahun: '2020', 
        deskripsi: 'Buku referensi tata kelola.', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        cover_path: '', // <-- Edit link gambar sampul Buku 4 di sini
        created_at: new Date().toISOString()
      },
      {
        id: 5, 
        judul: 'Generasi Muda dan Demokrasi', 
        penulis: 'Tim Penulis', 
        penerbit: 'Kemenpora', 
        tahun: '2023', 
        deskripsi: 'Buku tentang peran pemuda.', 
        file_path: 'https://drive.google.com/file/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs/view', 
        cover_path: '', // <-- Edit link gambar sampul Buku 5 di sini
        created_at: new Date().toISOString()
      }
    ]
  };

  function load(){
    const raw = localStorage.getItem(KEY);
    if(!raw){ save(seed); return JSON.parse(JSON.stringify(seed)); }
    try { return JSON.parse(raw); }
    catch(e){ save(seed); return JSON.parse(JSON.stringify(seed)); }
  }
  function save(data){ localStorage.setItem(KEY, JSON.stringify(data)); }

  return {
    getList: type => load()[type] || [],
    getById: (type, id) => load()[type].find(x => x.id === +id),
    add(type, item){
      const d = load();
      item.id = Math.max(0, ...d[type].map(x=>x.id)) + 1;
      item.created_at = new Date().toISOString();
      d[type].unshift(item);
      save(d);
      return item;
    },
    update(type, id, patch){
      const d = load();
      const i = d[type].findIndex(x => x.id === +id);
      if(i > -1){ d[type][i] = {...d[type][i], ...patch}; save(d); return d[type][i]; }
    },
    remove(type, id){
      const d = load();
      d[type] = d[type].filter(x => x.id !== +id);
      save(d);
    },
    reset(){ save(seed); }
  };
})();

// ===== HELPER URL MEDIA =====
function ytId(url){ 
  const m = String(url||'').match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/); 
  return m ? m[1] : null; 
}
function ytEmbed(url){ 
  const id = ytId(url); 
  return id ? 'https://www.youtube-nocookie.com/embed/' + id : null; 
}
function ytThumb(url){ 
  const id = ytId(url); 
  return id ? 'https://img.youtube.com/vi/' + id + '/hqdefault.jpg' : null; 
}
function gdriveEmbed(url){
  const str = String(url || '').trim();
  const m = str.match(/\/file\/d\/([^\/?#]+)/) || str.match(/[?&]id=([^&]+)/);
  return m ? 'https://drive.google.com/file/d/' + m[1] + '/preview' : str;
}
function esc(s){ 
  const d = document.createElement('div'); 
  d.textContent = s == null ? '' : String(s); 
  return d.innerHTML; 
}
