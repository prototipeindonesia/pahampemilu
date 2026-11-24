// ===== DEMO DATA STORE (localStorage) =====
// Data disimpan di browser. Di versi production, ganti dengan API/PHP+MySQL.
const APStore = (function(){
  const KEY = 'aksi_perubahan_data_v1';
  const seed = {
    videos: [
      {id:1, judul:'Mengenal Pemilu Indonesia', deskripsi:'Pengenalan dasar tentang sistem pemilu di Indonesia untuk pemilih pemula. Cocok untuk siswa SMA/SMK.', kategori:'Pemilu', tipe:'youtube', url:'https://www.youtube.com/watch?v=jNQXAC9IVRw', created_at:new Date().toISOString()},
      {id:2, judul:'Sejarah Demokrasi di Indonesia', deskripsi:'Perjalanan demokrasi Indonesia dari masa orde lama hingga reformasi.', kategori:'Demokrasi', tipe:'youtube', url:'https://www.youtube.com/watch?v=9bZkp7q19f0', created_at:new Date().toISOString()},
      {id:3, judul:'Pendidikan Politik untuk Pemula', deskripsi:'Pentingnya pendidikan politik bagi generasi muda dan pemilih pemula.', kategori:'Pendidikan', tipe:'youtube', url:'https://www.youtube.com/watch?v=kJQP7kiw5Fk', created_at:new Date().toISOString()}
    ],
    rules: [
      {id:1, judul:'UU No. 7 Tahun 2017 tentang Pemilu', deskripsi:'Undang-undang dasar penyelenggaraan pemilu di Indonesia.', kategori:'Undang-Undang', file_path:'#', created_at:new Date().toISOString()},
      {id:2, judul:'PKPU No. 11 Tahun 2020', deskripsi:'Peraturan KPU tentang tata cara penyelenggaraan pemilu.', kategori:'PKPU', file_path:'#', created_at:new Date().toISOString()},
      {id:3, judul:'Peraturan Bawaslu No. 8 Tahun 2019', deskripsi:'Peraturan tentang pengawasan penyelenggaraan pemilu.', kategori:'Peraturan', file_path:'#', created_at:new Date().toISOString()}
    ],
    books: [
      {id:1, judul:'Demokrasi dan Pemilu di Indonesia', penulis:'Prof. Dr. Jimly Asshiddiqie', penerbit:'Sinar Grafika', tahun:'2020', deskripsi:'Buku referensi tentang demokrasi dan sistem pemilu Indonesia.', file_path:'#', cover_path:'', created_at:new Date().toISOString()},
      {id:2, judul:'Pendidikan Kewarganegaraan untuk SMA', penulis:'Dr. Winarno', penerbit:'Bumi Aksara', tahun:'2019', deskripsi:'Buku PKn untuk memahami hak dan kewajiban warga negara.', file_path:'#', cover_path:'', created_at:new Date().toISOString()},
      {id:3, judul:'Hukum Tata Negara Indonesia', penulis:'Prof. Dr. Jimly Asshiddiqie', penerbit:'Sinar Grafika', tahun:'2018', deskripsi:'Pemahaman mendalam tentang hukum tata negara Indonesia.', file_path:'#', cover_path:'', created_at:new Date().toISOString()}
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

// ===== HELPERS =====
function ytId(url){
  const m = String(url||'').match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}
function ytEmbed(url){ const id = ytId(url); return id ? 'https://www.youtube.com/embed/'+id : null; }
function ytThumb(url){ const id = ytId(url); return id ? 'https://img.youtube.com/vi/'+id+'/hqdefault.jpg' : null; }
function esc(s){ const d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }
