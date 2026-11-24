// Cek auth — redirect jika belum login
if (sessionStorage.getItem('ap_admin') !== '1') {
  location.replace('index.html');
}

window.logout = function(){
  sessionStorage.removeItem('ap_admin');
  sessionStorage.removeItem('ap_admin_nama');
  location.href = 'index.html';
};

document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const page = document.body.dataset.page || '';
  const name = sessionStorage.getItem('ap_admin_nama') || 'Admin';

  const nameEl = document.getElementById('adminName');
  if (nameEl) nameEl.textContent = name;

  sidebar.innerHTML = `
    <div class="side-brand">
      <div class="side-icon">AP</div>
      <div><b>Aksi Perubahan</b><br><small>Panel Admin</small></div>
    </div>
    <nav>
      <a href="dashboard.html" class="${page==='dashboard'?'active':''}">📊 Dashboard</a>
      <a href="videos.html" class="${page==='videos'?'active':''}">🎬 Video</a>
      <a href="rules.html" class="${page==='rules'?'active':''}">📋 Aturan</a>
      <a href="books.html" class="${page==='books'?'active':''}">📚 Buku</a>
    </nav>
    <div class="side-footer">
      <a href="../index.html" target="_blank">🌐 Lihat Website</a>
      <a href="#" onclick="logout(); return false;" class="logout">🚪 Logout</a>
    </div>`;
});

// Toast / flash helper
window.showFlash = function(msg, type='success'){
  const wrap = document.getElementById('flash');
  if (!wrap) return;
  wrap.innerHTML = `<div class="alert ${type}">${esc(msg)}</div>`;
  setTimeout(() => { wrap.innerHTML = ''; }, 3500);
};