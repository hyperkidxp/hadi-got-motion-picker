// Hadi Got Motion picker, loaded by a two-line widget so Claude never re-types the form.
// Built by `python3 scripts/make_picker.py --js` (which fills {"base": "https://cdn.jsdelivr.net/gh/hyperkidxp/hadi-got-motion-picker@v1.13.0/docs/thumbs", "motion": [["let-claude-decide", "Let Claude decide"], ["cutout-farce", "Cut-out farce"], ["kinetic-editorial", "Kinetic editorial"], ["kinetic-swiss", "Kinetic Swiss"], ["editorial-collage", "Editorial collage"], ["period-print", "Period prints"], ["paper-theatre", "Paper theatre"], ["real-maps", "Real maps"], ["stat-hits", "Stat hits"], ["footage-led", "Footage-led"], ["silent-film", "Silent film"], ["title-sequence", "Title sequence"], ["object-diorama", "Object diorama"]], "maps": [["swiss-relief", "Swiss relief"], ["editorial-line", "Editorial line"], ["vintage-atlas", "Vintage atlas"], ["vox-documentary", "Vox documentary"], ["night-city", "Night city"], ["layered-paper", "Layered paper"], ["riso", "Riso"], ["topo-contour", "Topo contour"], ["pastel-diorama", "Pastel diorama"], ["globe-editorial", "Globe editorial"], ["blue-marble", "Blue marble"], ["walking-route", "Walking route"]], "icon": "<svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M11.586 2a1.5 1.5 0 0 1 1.06.44l2.914 2.914a1.5 1.5 0 0 1 .44 1.06V16.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.492-1.347L4 16.5v-13A1.5 1.5 0 0 1 5.5 2zM5.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 11 5.5V3zm7.04 10.304a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696m0-4a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696M12 5.5a.5.5 0 0 0 .5.5h2.293L12 3.207z\"/></svg>", "upload": "<svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M16.5 13a.5.5 0 0 1 .5.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5M10 3a.5.5 0 0 1 .374.168l4 4.5.059.082a.5.5 0 0 1-.732.65l-.075-.068L10.5 4.814V13.5a.5.5 0 0 1-1 0V4.814L6.374 8.332a.5.5 0 0 1-.748-.664l4-4.5.08-.071A.5.5 0 0 1 10 3\"/></svg>"}) and served from jsDelivr.
// Widget code: <div id="hgm-picker" data-title data-duration data-concept data-pace data-draft data-missing></div><script src=".../picker/picker.js"></script>
(() => {
  const D = {"base": "https://cdn.jsdelivr.net/gh/hyperkidxp/hadi-got-motion-picker@v1.13.0/docs/thumbs", "motion": [["let-claude-decide", "Let Claude decide"], ["cutout-farce", "Cut-out farce"], ["kinetic-editorial", "Kinetic editorial"], ["kinetic-swiss", "Kinetic Swiss"], ["editorial-collage", "Editorial collage"], ["period-print", "Period prints"], ["paper-theatre", "Paper theatre"], ["real-maps", "Real maps"], ["stat-hits", "Stat hits"], ["footage-led", "Footage-led"], ["silent-film", "Silent film"], ["title-sequence", "Title sequence"], ["object-diorama", "Object diorama"]], "maps": [["swiss-relief", "Swiss relief"], ["editorial-line", "Editorial line"], ["vintage-atlas", "Vintage atlas"], ["vox-documentary", "Vox documentary"], ["night-city", "Night city"], ["layered-paper", "Layered paper"], ["riso", "Riso"], ["topo-contour", "Topo contour"], ["pastel-diorama", "Pastel diorama"], ["globe-editorial", "Globe editorial"], ["blue-marble", "Blue marble"], ["walking-route", "Walking route"]], "icon": "<svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M11.586 2a1.5 1.5 0 0 1 1.06.44l2.914 2.914a1.5 1.5 0 0 1 .44 1.06V16.5a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.492-1.347L4 16.5v-13A1.5 1.5 0 0 1 5.5 2zM5.5 3a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h-2.5A1.5 1.5 0 0 1 11 5.5V3zm7.04 10.304a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696m0-4a.5.5 0 0 1 .92.392c-.295.69-.871 1.304-1.66 1.304-.487 0-.892-.234-1.2-.574-.309.34-.713.574-1.2.574-.486 0-.892-.233-1.2-.574-.31.34-.714.574-1.2.574a.5.5 0 0 1 0-1c.212 0 .52-.18.74-.696l.034-.067a.5.5 0 0 1 .886.067c.221.516.528.696.74.696.213 0 .52-.18.74-.696l.035-.067a.5.5 0 0 1 .885.067c.22.516.527.696.74.696s.519-.18.74-.696M12 5.5a.5.5 0 0 0 .5.5h2.293L12 3.207z\"/></svg>", "upload": "<svg viewBox=\"0 0 20 20\" fill=\"currentColor\"><path d=\"M16.5 13a.5.5 0 0 1 .5.5v2a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 15.5v-2a.5.5 0 0 1 1 0v2a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 .5-.5M10 3a.5.5 0 0 1 .374.168l4 4.5.059.082a.5.5 0 0 1-.732.65l-.075-.068L10.5 4.814V13.5a.5.5 0 0 1-1 0V4.814L6.374 8.332a.5.5 0 0 1-.748-.664l4-4.5.08-.071A.5.5 0 0 1 10 3\"/></svg>"};
  const root = document.getElementById('hgm-picker');
  if (!root) return;
  const cfg = root.dataset;
  const e = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const G = (x) => `<div class="hgm-group">${x}</div>`;
  const Q = (x) => `<label class="hgm-question">${x}</label>`;
  const PILL = (v) => `<button type="button" class="hgm-pill" data-value="${e(v)}">${e(v)}</button>`;
  const ROW = (ic, t, c = '') => `<div style="display:flex;gap:8px;align-items:center;font-size:13px;color:var(--text-secondary)"><i class="ti ${ic}" style="font-size:18px${c}" aria-hidden="true"></i>${e(t)}</div>`;
  const TILE = (kind, [id, v]) => `<button type="button" class="hgm-pill" data-value="${e(v)}" style="border-radius:12px;padding:8px;display:grid;gap:6px;justify-items:center;box-shadow:0 1px 2px rgba(0,0,0,0.04)"><img src="${D.base}/${kind}-${id}.jpg" alt="" style="width:100%;aspect-ratio:300/533;object-fit:cover;border-radius:6px"><span style="font-size:12px;font-weight:500">${e(v)}</span></button>`;
  const EXTRA = (v, ic, other) => `<button type="button" class="hgm-pill" data-value="${e(v)}"${other ? ' data-other' : ''} style="border-radius:12px;padding:8px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;min-height:120px"><i class="ti ${ic}" style="font-size:20px" aria-hidden="true"></i><span style="font-size:12px;font-weight:500">${e(v)}</span></button>`;
  const CARD = (v, ic, s) => `<button type="button" class="hgm-pill" data-value="${e(v)}" style="border-radius:12px;padding:12px 14px;display:flex;gap:10px;align-items:flex-start;text-align:left;min-width:180px;box-shadow:0 1px 2px rgba(0,0,0,0.04)"><i class="ti ${ic}" style="font-size:20px" aria-hidden="true"></i><span><span style="font-size:13px;font-weight:500">${e(v)}</span><br><span style="font-size:11px;color:var(--text-muted)">${e(s)}</span></span></button>`;
  const HF = (name, label, ph) => `<label style="display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--text-secondary)">${e(label)}<textarea class="hgm-textarea" data-name="${name}" rows="1" placeholder="${e(ph)}"></textarea></label>`;
  // The hook's two title lines, drafted from a WHAT IF title the way `hgm hook draft` does: a setup of 5 words at most, the rest huge.
  const draftHook = (title) => {
    const w = String(title || '').trim().toUpperCase().split(/\s+/);
    if (w[0] !== 'WHAT' || w[1] !== 'IF' || w.length < 3) return ['', ''];
    const rest = w.slice(2), nb = Math.max(rest.length - 3, Math.min(4, Math.ceil(rest.length / 2))), pay = rest.slice(-nb);
    if (!pay[pay.length - 1].endsWith('?')) pay[pay.length - 1] += '?';
    return [['WHAT', 'IF', ...rest.slice(0, -nb)].slice(0, 5).join(' '), pay.join(' ')];
  };
  const GRID = (name, kind, items, extras, pre = '') => `<div class="hgm-pills" data-name="${name}" data-multi="false" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(112px,1fr));gap:10px">${pre}${items.map((i) => TILE(kind, i)).join('')}${extras}</div>`;
  // Private styles exist only on the machine whose `hgm picker` passes data-private ({s: section title, l: [[id, name, line]]});
  // nothing about them is in this public file. Their thumbnails arrive AES-encrypted from data-pk ("owner/repo@commit#key").
  // Without a key, or if decryption fails, each tile shows its name on black.
  const PRIV = (() => { try { return JSON.parse(cfg.private || 'null'); } catch (_) { return null; } })();
  const LABEL = (t) => `<div style="grid-column:1/-1;font-size:12px;font-weight:500;color:var(--text-secondary)">${e(t)}</div>`;
  const PTILE = ([id, v, line]) => `<button type="button" class="hgm-pill" data-value="${e(v)} · private style" style="border-radius:12px;padding:8px;display:grid;gap:4px;justify-items:center;box-shadow:0 1px 2px rgba(0,0,0,0.04)"><canvas data-pt="${e(id)}" width="300" height="533" style="width:100%;aspect-ratio:300/533;border-radius:6px;background:#0b0b0b"></canvas><span style="font-size:12px;font-weight:500">${e(v)}</span><span style="font-size:11px;color:var(--text-muted);text-align:center;line-height:1.25">${e(line)}</span></button>`;
  const PRE = PRIV && PRIV.l && PRIV.l.length ? LABEL(PRIV.s || 'Your private styles') + PRIV.l.map(PTILE).join('') + LABEL('All styles') : '';

  function tools() {
    if (cfg.missing === undefined) return '';
    const rows = decodeURIComponent(cfg.missing || '').split('\n').filter((l) => l.includes('\t')).map((l) => l.split('\t'));
    const need = rows.filter(([id]) => id !== 'voice').map(([, t]) => t);
    const voice = rows.filter(([id]) => id === 'voice').map(([, t]) => t);
    const vrow = voice.length ? ROW('ti-microphone', voice[0]) : '';
    if (!need.length) return G(`<div style="display:flex;flex-direction:column;gap:6px">${ROW('ti-circle-check', 'All the tools are installed and ready', ';color:var(--text-success)')}${vrow}</div>`);
    return G(Q('A few tools are missing. Shall I install them now?') +
      `<div style="display:flex;flex-direction:column;gap:6px">${need.map((t) => ROW('ti-download', t)).join('')}${vrow}</div>` +
      `<div class="hgm-pills" data-name="tools" data-multi="false">${PILL("Install what's missing")}${PILL('Not now')}</div>`);
  }

  root.innerHTML =
    `<style>.hgm{border:1px solid var(--border);border-radius:16px;background:var(--surface-1);overflow:hidden}.hgm-header{display:flex;gap:10px;align-items:center;padding:14px 18px;border-bottom:1px solid var(--border);font-size:16px;font-weight:500}.hgm-header svg,.hgm-dropzone svg{width:20px;height:20px}.hgm-body{padding:4px 18px}.hgm-group{display:flex;flex-direction:column;gap:10px;padding:14px 0}.hgm-question{font-size:15px;font-weight:500;color:var(--text-primary)}.hgm-pills{display:flex;flex-wrap:wrap;gap:8px}.hgm-pill{font:inherit;font-size:13px;color:var(--text-primary);background:var(--surface-2);border:1px solid var(--border);border-radius:999px;padding:6px 14px;cursor:pointer}.hgm-pill:hover{border-color:var(--border-strong)}.hgm-pill[aria-pressed=true]{background:var(--bg-accent);border-color:var(--border-accent);color:var(--text-accent)}.hgm-textarea,.hgm-other{font:inherit;font-size:14px;width:100%;box-sizing:border-box;color:var(--text-primary);background:var(--surface-2);border:1px solid var(--border);border-radius:var(--radius);padding:10px}.hgm-dropzone{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:6px;width:120px;height:120px;border:1px dashed var(--border-strong);border-radius:12px;cursor:pointer;font-size:13px;color:var(--text-secondary)}.hgm-dropzone input{display:none}.hgm-footer{display:flex;justify-content:flex-end;gap:10px;padding:14px 18px;border-top:1px solid var(--border)}.hgm-footer button{font:inherit;font-size:14px;padding:8px 18px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-2);color:var(--text-primary);cursor:pointer}.hgm-footer .hgm-submit{background:var(--text-primary);color:var(--surface-2)}#hgm-picker input[type=range]{width:100%}</style><div class="hgm"><div class="hgm-header">${D.icon}<span>Motion graphic details</span></div><div class="hgm-body">` +
    tools() +
    G(Q("What's the film called?") + `<textarea class="hgm-textarea" data-name="title" rows="1" placeholder="Mr Pemberton's Mistake">${e(cfg.title)}</textarea>`) +
    G(Q('How long should it be (seconds)?') +
      `<input type="range" data-name="duration_seconds" min="10" max="90" step="5" value="${Number(cfg.duration) || 30}">` +
      `<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-muted)"><span>10 s teaser</span><span data-hgm-dur></span><span>90 s story</span></div>`) +
    G(Q('How fast should it move?') +
      '<div style="font-size:12px;color:var(--text-muted);margin-top:-2px">The pace of the script, the cuts and the motion together. Faster means more words, more scene changes and snappier moves in the same length.</div>' +
      `<input type="range" data-name="pacing" min="1" max="5" step="1" value="${Number(cfg.pace) || 3}">` +
      `<div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-muted)"><span>Slow, lingering</span><span data-hgm-pace></span><span>Rapid-fire</span></div>`) +
    G(Q("What's it about, and who is it for?") + `<textarea class="hgm-textarea" data-name="concept" placeholder="The grandfather paradox, told as a funny story for Instagram">${e(cfg.concept)}</textarea>`) +
    G(Q('Open on a “what if” hook?') +
      '<div style="font-size:12px;color:var(--text-muted);margin-top:-2px">The question opens the film, big at the top, then gets out of the way; a meter climbs with every beat, and the film cuts straight after the twist so it loops. Drafted from your title: edit any line, or leave them empty and I’ll write them.</div>' +
      `<div class="hgm-pills" data-name="hook" data-multi="false">${PILL('Hook on')}${PILL('No hook')}</div>` +
      `<div data-hgm-hookf style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:8px">${HF('hook_setup', 'Small line, 5 words at most', 'WHAT IF HALF OF')}${HF('hook_payoff', 'Huge line, 4 words at most', 'INDIA VANISHED?')}` +
      `${HF('hook_meter', 'What climbs on screen', 'A counter, a clock, a price or a %')}${HF('hook_end', 'The twist, or a question back to the viewer', 'Even halved, still No. 2 on Earth')}</div>`) +
    G(Q('Which motion style?') +
      '<div style="font-size:12px;color:var(--text-muted);margin-top:-2px">Each one moves its own way. Pick “Let Claude decide” and I’ll make every call myself, end to end, without more questions.</div>' +
      GRID('motion_style', 'motion', D.motion, EXTRA('Describe my own', 'ti-pencil', true), PRE) +
      '<input type="text" class="hgm-other" data-for="motion_style" placeholder="A 1970s Bollywood poster look" hidden>') +
    G(Q('Does it travel through real places? Pick a map look') + GRID('map_style', 'map', D.maps, EXTRA('No map', 'ti-map-off', false))) +
    G(Q('Do you have a script? Upload it or type it in') +
      `<div class="hgm-pills" data-name="script_mode" data-multi="false">${PILL('Write it for me')}${PILL('No voiceover')}</div>` +
      `<div class="hgm-files" data-name="script_file"><label class="hgm-dropzone">${D.upload}<span>Choose file</span><input type="file" multiple></label></div>` +
      '<textarea class="hgm-textarea" data-name="script_text" placeholder="…or type or paste your script here"></textarea>') +
    G(Q('Where should the images come from?') + '<div class="hgm-pills" data-name="images" data-multi="true">' +
      CARD('Free archives first', 'ti-building-museum', 'Public-domain prints and photos') +
      CARD('Connect ChatGPT images', 'ti-plug-connected', 'Needs an OpenAI API key') +
      CARD('Give me ChatGPT prompts', 'ti-clipboard-text', "I'll paste them into ChatGPT") + '</div>') +
    '</div><div class="hgm-footer"><button type="button" class="hgm-skip">Skip</button><button type="button" class="hgm-submit">Continue</button></div></div>';

  const range = root.querySelector('input[data-name=duration_seconds]');
  const durLabel = root.querySelector('[data-hgm-dur]');
  const showDur = () => { durLabel.textContent = `${range.value} s`; };
  range.addEventListener('input', showDur); showDur();
  const pace = root.querySelector('input[data-name=pacing]'), paceLabel = root.querySelector('[data-hgm-pace]');
  const PACES = ['', 'slow', 'unhurried', 'balanced', 'brisk', 'rapid-fire'];
  const showPace = () => { paceLabel.textContent = `${pace.value} · ${PACES[pace.value]}`; };
  pace.addEventListener('input', showPace); showPace();

  // Own classes and own wiring: the host's .elicit shell grabbed clicks on injected forms (v1.3.1), so stay clear of it.
  // Selection is painted inline: the host's own button styles outrank a stylesheet, but never an inline style.
  const paint = (p) => {
    const on = p.getAttribute('aria-pressed') === 'true';
    p.style.setProperty('outline', on ? '2px solid #2f7cf6' : 'none', 'important');
    p.style.setProperty('outline-offset', '1px', 'important');
    p.style.setProperty('background', on ? 'rgba(47,124,246,0.14)' : '', on ? 'important' : '');
  };
  const files = {};
  root.querySelectorAll('.hgm-pills').forEach((g) => {
    const multi = g.dataset.multi === 'true';
    g.querySelectorAll('.hgm-pill').forEach((p) => {
      p.setAttribute('aria-pressed', 'false');
      p.addEventListener('click', () => {
        const on = p.getAttribute('aria-pressed') !== 'true';
        if (!multi) g.querySelectorAll('.hgm-pill').forEach((o) => o.setAttribute('aria-pressed', 'false'));
        p.setAttribute('aria-pressed', String(multi ? on : true));
        g.querySelectorAll('.hgm-pill').forEach(paint);
        const other = root.querySelector(`.hgm-other[data-for="${g.dataset.name}"]`);
        if (other) other.hidden = !g.querySelector('[data-other][aria-pressed="true"]');
      });
    });
  });
  // Not every film opens on a title: the hook presses itself for a WHAT IF title and lets go otherwise, until they pick for themselves
  // (neither picked = Claude decides). The draft follows the title until they type in a hook line themselves.
  const hookG = root.querySelector('.hgm-pills[data-name="hook"]'), hookOn = hookG.querySelector('.hgm-pill'), hookF = root.querySelector('[data-hgm-hookf]');
  const noHook = () => hookOn.getAttribute('aria-pressed') !== 'true';
  const showHook = () => { hookF.style.display = noHook() ? 'none' : 'grid'; };
  hookG.addEventListener('click', () => { hookG.dataset.touched = '1'; setTimeout(showHook, 0); });
  const titleEl = root.querySelector('textarea[data-name=title]'), hs = root.querySelector('textarea[data-name=hook_setup]'), hp = root.querySelector('textarea[data-name=hook_payoff]');
  const redraft = () => {
    const [s, p] = draftHook(titleEl.value); if (!hs.dataset.touched) hs.value = s; if (!hp.dataset.touched) hp.value = p;
    if (!hookG.dataset.touched) { hookOn.setAttribute('aria-pressed', String(!!p)); paint(hookOn); showHook(); }
  };
  for (const el of [hs, hp]) el.addEventListener('input', () => { el.dataset.touched = '1'; });
  titleEl.addEventListener('input', redraft); redraft();
  root.querySelectorAll('.hgm-files').forEach((box) => {
    const input = box.querySelector('input[type=file]');
    input.addEventListener('change', async () => {
      files[box.dataset.name] = await Promise.all([...input.files].map(async (f) =>
        ({ name: f.name, text: /\.(txt|md|srt|vtt|rtf|fountain)$/i.test(f.name) ? await f.text() : null })));
      box.querySelector('span').textContent = [...input.files].map((f) => f.name).join(', ') || 'Choose file';
    });
  });

  // Draft memory: the app rebuilds a widget when you leave a chat and come back, which used to wipe the form. Every choice is kept
  // in this widget origin's storage under the form's own id (hgm picker stamps a fresh data-draft on each form) and put back on load.
  // If the host blocks storage, the form just behaves as before.
  const KEY = `hgm-picker:${cfg.draft || 'default'}`;
  const store = (() => { for (const s of ['localStorage', 'sessionStorage']) { try { const st = window[s]; st.setItem('hgm-t', '1'); st.removeItem('hgm-t'); return st; } catch (_) {} } return null; })();
  const FIELDS = 'textarea[data-name], input[type=range][data-name]';
  const save = () => {
    if (!store) return;
    const d = { pills: {}, fields: {} };
    root.querySelectorAll('.hgm-pills').forEach((g) => { d.pills[g.dataset.name] = [...g.querySelectorAll('.hgm-pill[aria-pressed="true"]')].map((p) => p.dataset.value); });
    d.hookPicked = !!hookG.dataset.touched;
    root.querySelectorAll(FIELDS).forEach((el) => { d.fields[el.dataset.name] = el.value; });
    root.querySelectorAll('.hgm-other').forEach((el) => { d.fields[`other:${el.dataset.for}`] = el.value; });
    try { store.setItem(KEY, JSON.stringify(d)); } catch (_) {}
  };
  let draft = null; try { draft = store && JSON.parse(store.getItem(KEY) || 'null'); } catch (_) {}
  if (draft) {
    root.querySelectorAll('.hgm-pills').forEach((g) => {
      const want = draft.pills?.[g.dataset.name]; if (!want) return;
      g.querySelectorAll('.hgm-pill').forEach((p) => { p.setAttribute('aria-pressed', String(want.includes(p.dataset.value))); paint(p); });
    });
    root.querySelectorAll(FIELDS).forEach((el) => { const v = draft.fields?.[el.dataset.name]; if (v != null) el.value = v; });
    root.querySelectorAll('.hgm-other').forEach((el) => {
      const v = draft.fields?.[`other:${el.dataset.for}`]; if (v != null) el.value = v;
      el.hidden = !root.querySelector(`.hgm-pills[data-name="${el.dataset.for}"] [data-other][aria-pressed="true"]`);
    });
    if (draft.hookPicked) hookG.dataset.touched = '1';
    showDur(); showPace(); showHook();
    const [s0, p0] = draftHook(titleEl.value); if (hs.value && hs.value !== s0) hs.dataset.touched = '1'; if (hp.value && hp.value !== p0) hp.dataset.touched = '1';
    redraft();
  }
  root.addEventListener('input', save); root.addEventListener('click', () => setTimeout(save, 0));

  const label = (n) => { const s = n.replace(/_text$/, '').replace(/_file$/, ' file').replace(/_other$/, ' (other)').replace(/_/g, ' '); return s[0].toUpperCase() + s.slice(1); };
  root.querySelector('.hgm-skip').addEventListener('click', () => sendPrompt('(Skipped the form — proceed with defaults or ask me in plain text)'));
  root.querySelector('.hgm-submit').addEventListener('click', () => {
    const parts = [], full = [];
    const add = (name, val) => {
      val = String(val ?? '').trim(); if (!val) return;
      const flat = val.replace(/\s*\n\s*/g, ' / ');
      if (val.length > 200) { parts.push(`${label(name)}: (${val.length} chars — see below)`); full.push(`${label(name)}:\n${val}`); }
      else parts.push(`${label(name)}: ${flat.length > 80 ? `"${flat}"` : flat}`);
    };
    root.querySelectorAll('.hgm-body > .hgm-group').forEach((grp) => {
      grp.querySelectorAll('[data-name]').forEach((el) => {
        const n = el.dataset.name;
        if (el.classList.contains('hgm-pills')) {
          const picked = [...el.querySelectorAll('.hgm-pill[aria-pressed="true"]')].map((p) => {
            const o = p.hasAttribute('data-other') && root.querySelector(`.hgm-other[data-for="${n}"]`);
            return o && o.value.trim() ? `${p.dataset.value} — ${o.value.trim()}` : p.dataset.value;
          });
          add(n, picked.join(', '));
        } else if (el.classList.contains('hgm-files')) {
          const fs = files[n] || [];
          add(n, fs.map((f) => (f.text == null ? `${f.name} (not read: attach it in chat)` : `${f.name} (included below)`)).join(', '));
          fs.filter((f) => f.text != null).forEach((f) => full.push(`${f.name}:\n${f.text}`));
        } else if (el.matches('textarea, input[type=range]')) { if (!(n.startsWith('hook_') && noHook())) add(n, el.value); }
      });
    });
    sendPrompt(`Motion graphic details — ${parts.join(' · ')}${full.length ? `\n--- Full content ---\n${full.join('\n\n')}` : ''}`);
  });
  async function privateThumbs() {
    const tiles = [...root.querySelectorAll('canvas[data-pt]')]; if (!tiles.length) return;
    for (const c of tiles) {
      const x = c.getContext('2d'); x.fillStyle = '#f3f1ec'; x.textAlign = 'center'; x.font = '600 30px system-ui, sans-serif';
      x.fillText(c.parentElement.querySelector('span').textContent, 150, 280);
    }
    const m = /^(.+)@([0-9a-f]{7,40})#(.+)$/.exec(cfg.pk || ''); if (!m) return;
    const b = (t) => Uint8Array.from(atob(t.replace(/-/g, '+').replace(/_/g, '/')), (ch) => ch.charCodeAt(0));
    try {
      await new Promise((ok, no) => { const s = document.createElement('script'); s.src = `https://cdn.jsdelivr.net/gh/${m[1]}@${m[2]}/x.js`; s.onload = ok; s.onerror = no; document.head.appendChild(s); });
      const raw = b(window.HGMX), key = await crypto.subtle.importKey('raw', b(m[3]), 'AES-GCM', false, ['decrypt']);
      const thumbs = JSON.parse(new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: raw.slice(0, 12) }, key, raw.slice(12))));
      for (const c of tiles) {
        if (!thumbs[c.dataset.pt]) continue;
        const bmp = await createImageBitmap(new Blob([b(thumbs[c.dataset.pt])], { type: 'image/jpeg' }));
        c.getContext('2d').drawImage(bmp, 0, 0, 300, 533);
      }
      root.dataset.privThumbs = 'ok';
    } catch (err) { root.dataset.privThumbs = `failed: ${err}`; }
  }
  privateThumbs();
})();
