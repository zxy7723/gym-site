/* ============================================================
   健身力量训练动作图鉴 —— 交互逻辑
   ============================================================ */
(function(){
  "use strict";

  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  /* ---------- 工具 ---------- */
  function el(tag, cls, html){
    const e = document.createElement(tag);
    if(cls) e.className = cls;
    if(html != null) e.innerHTML = html;
    return e;
  }

  /* 健身房主题装饰：哑铃线条 + 能量柱（用于视频/媒体框两侧） */
  function deco(side, color){
    const d = el('div','deco deco-'+side);
    d.style.setProperty('--ec', color||'#ff3b3b');
    d.innerHTML =
      '<span class="deco-name">'+(side==='L'?'POWER':'ENERGY')+'</span>'+
      '<span class="deco-gauge"><i></i><i></i><i></i><i></i><i></i></span>'+
      '<svg viewBox="0 0 30 44" class="deco-dumbbell" aria-hidden="true">'+
        '<rect x="12" y="0" width="6" height="44" rx="3" fill="currentColor"/>'+
        '<rect x="2" y="4" width="26" height="5" rx="2.5" fill="currentColor"/>'+
        '<rect x="2" y="35" width="26" height="5" rx="2.5" fill="currentColor"/>'+
      '</svg>';
    return d;
  }

  /* 安全创建 img，加载失败自动降级为占位 */
  function makeImg(src, cls, alt, warnKey){
    const img = el('img', cls);
    img.alt = alt || '';
    img.loading = 'lazy';
    img.onerror = function(){
      // 降级为本地占位图，避免破图
      if(this.dataset.retry) return;
      this.dataset.retry = 1;
      this.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#141823"/><g fill="none" stroke="#3a4155" stroke-width="2"><circle cx="200" cy="120" r="40"/><line x1="200" y1="160" x2="150" y2="230"/><line x1="200" y1="160" x2="250" y2="230"/></g><text x="200" y="265" font-size="16" fill="#6b7490" text-anchor="middle" font-family="sans-serif">素材加载中/可自行替换</text></svg>'
      );
      if(warnKey) showMediaNote(warnKey);
    };
    if(src) img.src = src;
    return img;
  }

  let notesShown = {};
  function showMediaNote(key){
    if(notesShown[key]) return;
    notesShown[key] = 1;
    const note = $('#mediaNote');
    note.textContent = '部分动作素材来自网络图库，如加载缓慢或失败属正常，可自行在 assets/data.js 中替换为本地图片/视频。';
    note.classList.add('show');
  }

  /* ---------- 状态 ---------- */
  let activeCat = null;      // 当前展开的板块 id
  let demoFrames = {};       // 动画定时器

  /* ---------- 渲染 Hero ---------- */
  function renderHero(){
    const d = GYM_DATA.hero;
    $('#heroTag').textContent = d.tag;
    $('#heroTitle').textContent = d.title;
    $('#heroSub').textContent = d.subtitle     ;

    const total = GYM_DATA.categories.reduce((n,c)=>n+c.exercises.length,0);
    const cats = GYM_DATA.categories.length;
    const stats = el('div','hero-stats');
    stats.innerHTML =
      '<div class="stat"><b>'+cats+'</b><span>大板块</span></div>'+
      '<div class="stat"><b>'+total+'</b><span>精选动作</span></div>'+
      '<div class="stat"><b>5</b><span>训练部位</span></div>';
    $('#heroStats').appendChild(stats);
  }

  /* ---------- 渲染导航 ---------- */
  function renderNav(){
    const wrap = $('#navLinks');
    wrap.innerHTML='';
    GYM_DATA.categories.forEach(c=>{
      const a = el('a', '', c.name+'部位');
      a.href = '#category-'+c.id;
      a.dataset.cat = c.id;
      a.addEventListener('click', ()=> setActiveCat(c.id, true));
      wrap.appendChild(a);
    });
    // 移动端
    $('#navToggle').addEventListener('click', ()=> wrap.classList.toggle('show'));
  }

  /* ---------- 渲染板块 ---------- */
  function renderCategories(){
    const wrap = $('#categories');
    wrap.innerHTML='';
    GYM_DATA.categories.forEach((c,idx)=>{
      const sec = el('section','category fade-in');
      sec.id = 'category-'+c.id;
      sec.style.setProperty('--ec', c.color || '#fff');

      const head = el('div','cat-head');
      head.innerHTML =
        '<div class="cat-icon" style="background:linear-gradient(135deg,'+c.color+',rgba(0,0,0,.4));--catsh:'+c.color+'33">'+c.icon+'</div>'+
        '<div class="cat-titles">'+
          '<div class="cat-name"><span class="cat-num">'+(idx+1)+'</span>'+c.name+' <span style="color:'+c.color+';font-size:14px">'+c.en+'</span></div>'+
          '<div class="cat-en">'+c.subtitle+'</div>'+
          (c.motiv?'<div class="cat-motiv">'+c.motiv+'</div>':'')+
        '</div>'+
        '<div class="cat-arrow">▼</div>';
      head.addEventListener('click', ()=> toggleCat(c.id));
      sec.appendChild(head);

      const grid = el('div','cat-grid');
      c.exercises.forEach(ex=>{
        grid.appendChild(buildCard(c, ex));
      });
      sec.appendChild(grid);

      // 默认展开第一个板块
      if(idx===0){ sec.classList.add('open'); activeCat=c.id; grid.removeAttribute('hidden'); }
      wrap.appendChild(sec);
    });
  }

  /* 构建动作卡片 */
  function buildCard(cat, ex){
    const card = el('div','ex-card');
    card.style.setProperty('--ec', cat.color||'#fff');

    // 媒体区
    const media = el('div','ex-media');
    const cover = ex.cover;
    const img = makeImg(cover, '', ex.name, cat.id);
    media.appendChild(img);

    // 播放角标：有演示媒体的显示播放按钮，否则提示点击查看
    const hasDemo = !!ex.demo;
    if(hasDemo){
      const play = el('div','ex-play','▶');
      media.appendChild(play);
    }
    const badge = el('div','ex-badge', ex.en.split(' ').slice(0,2).join(' ') );
    media.appendChild(badge);
    card.appendChild(media);

    // 信息区
    const info = el('div','ex-info');
    info.innerHTML =
      '<div class="ex-name">'+ex.name+'</div>'+
      '<div class="ex-en">'+ex.en+'</div>'+
      '<div class="ex-target">'+ex.target.map(t=>'<span class="chip">'+t+'</span>').join('')+'</div>';
    card.appendChild(info);

    card.addEventListener('click', ()=> openModal(cat, ex));
    return card;
  }

  /* ---------- 板块展开/收起 ---------- */
  function toggleCat(id){
    const same = (activeCat === id);
    // 收起所有
    $$('.category').forEach(s=>{
      const g = s.querySelector('.cat-grid');
      if(g) g.hidden = true;
      s.classList.remove('open');
    });
    if(!same){
      const sec = $('#category-'+id);
      const g = sec.querySelector('.cat-grid');
      if(g) g.hidden = false;
      sec.classList.add('open');
      activeCat = id;
    } else {
      activeCat = null;
    }
    updateNavActive();
  }
  function setActiveCat(id, scroll){
    toggleCat(this && false || id);
    if(scroll){
      const sec = $('#category-'+id);
      if(sec) setTimeout(()=>sec.scrollIntoView({behavior:'smooth'}),50);
    }
  }
  function updateNavActive(){
    $$('.nav-links a').forEach(a=>{
      a.classList.toggle('active', a.dataset.cat===activeCat);
    });
  }

  /* ---------- 打开动作详情 ---------- */
  function openModal(cat, ex){
    const body = $('#modalBody');
    body.innerHTML='';

    // 头部
    const hero = el('div','m-hero');
    const img = makeImg(ex.cover,'', ex.name);
    hero.appendChild(img);
    hero.appendChild(el('div','m-cover'));
    hero.appendChild(el('div','m-hero-text',
      '<div class="m-en">'+ex.en+'</div>'+
      '<div class="m-name">'+ex.name+'</div>'
    ));
    body.appendChild(hero);

    // 内容
    const content = el('div','m-content');
    content.innerHTML =
      '<div class="m-meta">'+ex.target.map(t=>'<span class="chip" style="color:#fff;background:'+cat.color+'22;border-color:'+cat.color+'55">'+t+'</span>').join('')+'</div>';

    // 演示媒体
    content.appendChild(buildDemo(cat, ex));

    // 步骤
    content.appendChild(el('div','m-title','📋 标准动作要领'));
    const ul = el('ol','steps');
    ex.steps.forEach(s=>{ ul.appendChild(el('li','', s)); });
    content.appendChild(ul);

    // 要点vs易错点
    content.appendChild(el('div','m-title','💡 要点与易错点'));
    const split = el('div','split');
    const good = el('div','panel good','<h4>✅ 要点 &amp; 正确做法</h4><ul>'+ex.tips.good.map(i=>'<li>'+i+'</li>').join('')+'</ul>');
    const bad = el('div','panel bad','<h4>⚠️ 常见易错点</h4><ul>'+ex.tips.mistakes.map(i=>'<li>'+i+'</li>').join('')+'</ul>');
    split.appendChild(good);
    split.appendChild(bad);
    content.appendChild(split);

    body.appendChild(content);

    // 显示弹层
    $('#modalOverlay').classList.add('show');
    document.body.style.overflow='hidden';

    // 关掉视频播放器（如果开着）
    closePlayer();
  }

  /* 构建演示媒体（视频 或 序列图动效 或 静态图） */
  function buildDemo(cat, ex){
    const wrap = el('div','m-demo');
    const head = el('div','demo-head','🎬 动作示范');
    wrap.appendChild(head);

    const box = el('div','demo-box');
    box.style.setProperty('--ec', cat.color||'#fff');

    // 视频/媒体框左右两侧的健身房主题装饰（哑铃 + 能量柱）
    const stage = el('div','demo-stage');
    stage.style.setProperty('--ec', cat.color||'#fff');
    stage.appendChild(deco('L', cat.color));
    stage.appendChild(box);
    stage.appendChild(deco('R', cat.color));

    const demo = ex.demo;
    if(demo && demo.type==='video'){
      const video = document.createElement('video');
      video.muted = true;
      video.playsinline = true;
      video.preload = 'metadata';
      video.poster = demo.poster || ex.cover;
      const src = document.createElement('source');
      src.src = demo.src;
      src.type = demo.mime || 'video/mp4';
      video.appendChild(src);
      box.appendChild(video);
      // 点击播放
      const play = el('div','demo-play','▶');
      box.appendChild(play);
      box.addEventListener('click', ()=>openPlayer(ex, demo.src, demo.poster||ex.cover, demo.mime));
      wrap.appendChild(stage);
      wrap.appendChild(el('div','demo-hint','点击播放示范视频'));
      // 视频加载失败提示
      video.addEventListener('error', ()=> showMediaNote(cat.id));
    }
    else if(demo && demo.type==='sequence' && ex.coverAlt){
      // 两张关键帧交替 = 简单"动起来"演示
      let show0 = true;
      const img = makeImg(ex.cover,'', ex.name);
      img.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .3s';
      box.appendChild(img);
      const img2 = document.createElement('img');
      img2.src = ex.coverAlt;
      img2.alt = ex.name+' (2)';
      img2.style.cssText='position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:0;transition:opacity .3s';
      box.appendChild(img2);

      const play = el('div','demo-play','▶');
      box.appendChild(play);
      box.addEventListener('click', function(){
        if(!this.dataset.frames){
          this.dataset.frames = 1;
          demoFrames[ex.id] = setInterval(function(){
            show0 = !show0;
            img.style.opacity = show0?1:0;
            img2.style.opacity= show0?0:1;
          }, 900);
          play.textContent = '⏸';
        } else {
          clearInterval(demoFrames[ex.id]);
          delete demoFrames[ex.id];
          delete this.dataset.frames;
          show0 = true; img.style.opacity=1; img2.style.opacity=0;
          play.textContent='▶';
        }
      });
      wrap.appendChild(stage);
      wrap.appendChild(el('div','demo-hint','点击播放「关键帧动效」演示'));
    }
    else {
      // 静态图片演示，点击放大
      const img = makeImg(ex.cover,'', ex.name);
      img.style.cssText='width:100%;height:100%;object-fit:cover';
      box.appendChild(img);
      wrap.appendChild(stage);
      wrap.appendChild(el('div','demo-hint','点击查看大图'));
    }
    return wrap;
  }

  /* ---------- 视频播放器 ---------- */
  function openPlayer(ex, src, poster, mime){
    const v = $('#playerVideo');
    v.poster = poster || '';
    // 清空并重建 source
    while(v.firstChild) v.removeChild(v.firstChild);
    const s = document.createElement('source');
    s.src = src;
    s.type = mime || 'video/mp4';
    v.appendChild(s);
    v.load();
    $('#playerLabel').textContent = ex.name + ' · 动作示范视频';
    $('#playerOverlay').classList.add('show');
    document.body.style.overflow='hidden';
    const p = v.play();
    if(p && p.then) p.then(()=>{}).catch(()=>{});
  }
  function closePlayer(){
    const v = $('#playerVideo');
    v.pause();
    v.removeAttribute('src');
    v.load();
    $('#playerOverlay').classList.remove('show');
    if(!$('#modalOverlay').classList.contains('show')){
      document.body.style.overflow='';
    }
  }

  /* ---------- 关闭事件 ---------- */
  function bindClose(){
    $('#modalClose').addEventListener('click', ()=>{
      $('#modalOverlay').classList.remove('show');
      // 清理演示动画
      Object.keys(demoFrames).forEach(k=>{ clearInterval(demoFrames[k]); delete demoFrames[k]; });
      // 重建分类网格 animation state? 直接刷新当前卡片
      document.body.style.overflow='';
    });
    $('#modalOverlay').addEventListener('click', e=>{
      if(e.target===e.currentTarget) $('#modalClose').click();
    });
    $('#playerClose').addEventListener('click', closePlayer);
    $('#playerOverlay').addEventListener('click', e=>{
      if(e.target===e.currentTarget) closePlayer();
    });
    document.addEventListener('keydown', e=>{
      if(e.key==='Escape'){
        if($('#playerOverlay').classList.contains('show')) closePlayer();
        else if($('#modalOverlay').classList.contains('show')) $('#modalClose').click();
      }
    });
  }

  /* ---------- 导航栏滚动效果 ---------- */
  function initScroll(){
    const nav = $('#navbar');
    let ticking=false;
    window.addEventListener('scroll', ()=>{
      if(!ticking){ requestAnimationFrame(()=>{ nav.style.boxShadow = window.scrollY>40?'0 4px 20px rgba(0,0,0,.4)':'none'; ticking=false; }); ticking=true; }
    });
  }

  /* ---------- 激励元素：名言轮播 + 滚动横幅 ---------- */
  function initQuotes(){
    const quotes = GYM_DATA.hero.quotes || [];
    const motto = GYM_DATA.hero.motto || '';

    // Hero 中央名言轮播
    const quoteText = $('#heroQuoteText');
    let qi = 0;
    function showQ(i){
      if(!quotes.length) return;
      quoteText.textContent = quotes[i % quotes.length];
      quoteText.classList.remove('show');
      // 强制重绘后淡入
      void quoteText.offsetWidth;
      quoteText.classList.add('show');
    }
    if(quotes.length){
      showQ(0);
      setInterval(()=>{ qi++; showQ(qi); }, 4600);
    }

    // 滚动激励横幅（复制两次实现无缝滚动）
    const track = $('#quoteTrack');
    if(track){
      const items = [];
      // 用总体 motto + 各例句拼出滚动内容
      const segs = [motto].concat(quotes).filter(Boolean);
      while(segs.length < 8) segs.push.apply(segs, quotes);
      const half = segs.slice(0, segs.length/2);
      const render = arr => arr.map(q=> '<span>🔥 <b>'+(q.split(/[，。]/)[0])+'</b> — '+q+'</span>').join('');
      track.innerHTML = render(segs.slice(0, 6)) + render(segs.slice(0, 6));
    }
  }

  /* ---------- 初始化 ---------- */
  function initPlayerDeco(){
    $$('[data-deco]').forEach(host=>{
      if(host.firstChild) return;
      const side = host.getAttribute('data-deco') || 'L';
      host.appendChild(deco(side, '#ff3b3b'));
    });
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    renderHero();
    renderNav();
    renderCategories();
    bindClose();
    initScroll();
    initQuotes();
    initPlayerDeco();
  });
})();
