// Browse-page client-side filter. Fetches /manifest.json and renders
// matching rows. Filters by free-text + category. URL `?q=...` populates
// the input so the home-page hero search can deep-link here.

(function () {
  const $q = document.getElementById('q');
  const $cat = document.getElementById('cat');
  const $rows = document.getElementById('rows');
  const $count = document.getElementById('count');

  const params = new URLSearchParams(location.search);
  if (params.get('q')) $q.value = params.get('q');
  if (params.get('cat')) $cat.value = params.get('cat');

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function render(entries) {
    if (!entries.length) {
      $rows.innerHTML = '<tr><td colspan="7" class="muted">No matches.</td></tr>';
    } else {
      $rows.innerHTML = entries.map(e => `
        <tr>
          <td>${e.thumbnail ? `<img class="thumb" src="${escapeHTML(e.thumbnail)}" alt="">` : ''}</td>
          <td><a href="${escapeHTML(e.url)}"><code>${escapeHTML(e.rmdb_id)}</code></a></td>
          <td>${escapeHTML(e.name)}</td>
          <td class="small authors" title="${escapeHTML(e.authors || '')}">${escapeHTML(e.authors || '')}</td>
          <td class="num">${e.construct_count || ''}</td>
          <td class="num">${e.data_points || ''}</td>
          <td class="small">${escapeHTML(e.creation_date || e.date || '')}</td>
        </tr>`).join('');
    }
    $count.textContent = `${entries.length} entr${entries.length === 1 ? 'y' : 'ies'}`;
  }

  function filter(all) {
    const q = ($q.value || '').toLowerCase().trim();
    const c = $cat.value;
    return all.filter(e => {
      if (c && e.category !== c) return false;
      if (!q) return true;
      const hay = [e.rmdb_id, e.name, e.authors, e.pub_title, e.pubmed, e.doi]
        .filter(Boolean).join(' ').toLowerCase();
      return hay.includes(q);
    });
  }

  fetch(window.MANIFEST_URL || '/manifest.json')
    .then(r => r.json())
    .then(all => {
      let sorted = all.slice().sort((a, b) =>
        (b.date || '').localeCompare(a.date || ''));
      const apply = () => render(filter(sorted));
      $q.addEventListener('input', apply);
      $cat.addEventListener('change', apply);
      apply();
    })
    .catch(err => {
      $rows.innerHTML = `<tr><td colspan="7" class="muted">Could not load manifest.json: ${escapeHTML(err.message)}</td></tr>`;
    });
})();
