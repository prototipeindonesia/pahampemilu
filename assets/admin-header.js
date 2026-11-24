sidebar.innerHTML = `
  <div class="side-brand">
    <div class="side-icon">PP</div>
    <div><b>Paham Pemilu</b><br><small>Panel Admin</small></div>
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