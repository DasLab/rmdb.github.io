// Browse-page client-side filter + column sort. Fetches /manifest.json,
// renders matching rows, and lets the user sort by clicking a header.
// URL `?q=...` / `?cat=...` populate the controls so the home-page hero
// search can deep-link here.

(function () {
  const $q = document.getElementById('q');
  const $cat = document.getElementById('cat');
  const $rows = document.getElementById('rows');
  const $count = document.getElementById('count');
  const $headers = document.querySelectorAll('.browse-table th.sortable');

  // Default sort: most recent first.
  let sortKey = 'date';
  let sortDir = 'desc';

  const params = new URLSearchParams(location.search);
  if (params.get('q')) $q.value = params.get('q');
  if (params.get('cat')) $cat.value = params.get('cat');
  if (params.get('sort')) sortKey = params.get('sort');
  if (params.get('dir')) sortDir = params.get('dir');

  function escapeHTML(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function compare(a, b, key, type) {
    const va = a[key], vb = b[key];
    const aMissing = va == null || va === '';
    const bMissing = vb == null || vb === '';
    if (aMissing && bMissing) return 0;
    if (aMissing) return 1;   // missing sorts last regardless of dir
    if (bMissing) return -1;
    if (type === 'num') return (+va) - (+vb);
    return String(va).localeCompare(String(vb), undefined, { numeric: true });
  }

  function setHeaderArrows() {
    $headers.forEach(h => {
      const active = h.dataset.key === sortKey;
      h.dataset.sortState = active ? sortDir : '';
      h.setAttribute('aria-sort',
        active ? (sortDir === 'asc' ? 'ascending' : 'descending') : 'none');
    });
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
      const sortAndRender = () => {
        const headerForKey = [...$headers].find(h => h.dataset.key === sortKey);
        const type = headerForKey ? headerForKey.dataset.type : 'text';
        const filtered = filter(all);
        filtered.sort((a, b) => {
          const c = compare(a, b, sortKey, type);
          return sortDir === 'desc' ? -c : c;
        });
        setHeaderArrows();
        render(filtered);
      };
      $q.addEventListener('input', sortAndRender);
      $cat.addEventListener('change', sortAndRender);
      $headers.forEach(h => {
        h.addEventListener('click', () => {
          const key = h.dataset.key;
          if (key === sortKey) {
            sortDir = sortDir === 'asc' ? 'desc' : 'asc';
          } else {
            sortKey = key;
            // Numeric and date columns default to descending (newest/biggest first);
            // text columns default to ascending.
            sortDir = (h.dataset.type === 'num' || key === 'date') ? 'desc' : 'asc';
          }
          sortAndRender();
        });
      });
      sortAndRender();
    })
    .catch(err => {
      $rows.innerHTML = `<tr><td colspan="7" class="muted">Could not load manifest.json: ${escapeHTML(err.message)}</td></tr>`;
    });
})();
