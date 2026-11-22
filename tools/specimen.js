const { createCanvas, GlobalFonts } = require('@napi-rs/canvas');
const fs = require('fs');

const F = '/tmp/build/fonts';
GlobalFonts.registerFromPath(`${F}/inter-tight-latin-400.ttf`, 'ITight');
GlobalFonts.registerFromPath(`${F}/inter-tight-latin-500.ttf`, 'ITight5');
GlobalFonts.registerFromPath(`${F}/inter-tight-latin-600.ttf`, 'ITight6');
GlobalFonts.registerFromPath(`${F}/ibm-plex-mono-latin-400.ttf`, 'Plex');
GlobalFonts.registerFromPath(`${F}/ibm-plex-mono-latin-500.ttf`, 'Plex5');
GlobalFonts.registerFromPath(`${F}/ibm-plex-mono-latin-700.ttf`, 'Plex7');
GlobalFonts.registerFromPath(`${F}/newsreader-latin-400.ttf`, 'News');
// register arabic + latin under one family so '/' and digits resolve
GlobalFonts.registerFromPath(`${F}/vazirmatn-merged-400.ttf`, 'Vazir');
GlobalFonts.registerFromPath(`${F}/vazirmatn-merged-700.ttf`, 'Vazir7');

const S = 1600;
const T = {
  dark: {
    page:'#0B0B0C', raised:'#121214', sunken:'#08080A', inset:'#1A1A1D',
    hair:'#202024', strong:'#2E2E33',
    t1:'#EFEDEA', t2:'#A3A09B', t3:'#8A8681', t4:'#5A5752',
    accent:'#FF4A1C', ink:'#0B0B0C'
  },
  light: {
    page:'#F3F2F0', raised:'#FFFFFF', sunken:'#EAE8E5', inset:'#E6E4E1',
    hair:'#E0DEDA', strong:'#C6C2BC',
    t1:'#111112', t2:'#56534E', t3:'#6B6862', t4:'#B4B0AA',
    accent:'#F0430F', ink:'#0B0B0C'
  }
};

const cv = createCanvas(S, S);
const c = cv.getContext('2d');

const rect = (x,y,w,h,f)=>{ c.fillStyle=f; c.fillRect(x,y,w,h); };
const hair = (x,y,w,col)=>{ c.fillStyle=col; c.fillRect(Math.round(x), Math.round(y), Math.round(w), 1); };
const vhair= (x,y,h,col)=>{ c.fillStyle=col; c.fillRect(Math.round(x), Math.round(y), 1, Math.round(h)); };
const box  = (x,y,w,h,col)=>{ c.fillStyle=col; c.fillRect(x,y,w,1); c.fillRect(x,y+h-1,w,1); c.fillRect(x,y,1,h); c.fillRect(x+w-1,y,1,h); };
function dotted(x,y,w,col,pitch=4){ c.fillStyle=col; for(let i=0;i<w;i+=pitch) c.fillRect(Math.round(x+i), Math.round(y), 2, 2); }

function txt(s, x, y, o={}) {
  const {font='ITight', size=14, color='#fff', track=0, align='left', upper=false, rtl=false} = o;
  c.font = `${size}px ${font}`;
  c.fillStyle = color;
  c.textBaseline = 'alphabetic';
  const str = upper ? s.toUpperCase() : s;
  if (rtl) { c.direction='rtl'; c.textAlign=align; c.fillText(str,x,y); c.direction='ltr'; c.textAlign='left'; return; }
  if (!track) { c.textAlign = align; c.fillText(str, x, y); c.textAlign='left'; return c.measureText(str).width; }
  const chars = [...str];
  const total = chars.reduce((a,ch)=>a+c.measureText(ch).width+track, 0) - track;
  let cx = align==='right' ? x-total : align==='center' ? x-total/2 : x;
  for (const ch of chars) { c.fillText(ch, cx, y); cx += c.measureText(ch).width + track; }
  return total;
}
function rrect(x,y,w,h,r,fill){
  c.beginPath(); c.moveTo(x+r,y);
  c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r);
  c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath();
  c.fillStyle=fill; c.fill();
}

// ---------- topbar ----------
function topbar(xEnd, y, t, k=1){
  const h = 22*k, gap = 5*k, lw = 34*k;
  rect(xEnd-lw-gap-h, y, lw, h, t.inset); box(xEnd-lw-gap-h, y, lw, h, t.hair);
  txt('EN', xEnd-lw-gap-h+lw/2, y+h/2+3.2*k, {font:'Plex7', size:8*k, color:t.t4, track:0.5*k, align:'center'});
  rect(xEnd-h, y, h, h, t.inset); box(xEnd-h, y, h, h, t.hair);
  const cx = xEnd-h/2, cy = y+h/2;
  c.beginPath(); c.arc(cx, cy, 3.1*k, 0, Math.PI*2); c.fillStyle=t.t4; c.fill();
  c.strokeStyle=t.t4; c.lineWidth=Math.max(1, 1.05*k); c.lineCap='round';
  for(let i=0;i<8;i++){ const a=i*Math.PI/4, r1=5.2*k, r2=7.0*k;
    c.beginPath(); c.moveTo(cx+Math.cos(a)*r1, cy+Math.sin(a)*r1);
    c.lineTo(cx+Math.cos(a)*r2, cy+Math.sin(a)*r2); c.stroke(); }
}

// ---------- PRESENTATION 16:9 ----------
function presentation(x, y, w, h, t){
  rect(x,y,w,h,t.page); box(x,y,w,h,t.hair);
  const pad = w*0.072;
  topbar(x+w-pad, y+pad*0.68, t, 0.80);
  const ds = w*0.107;
  txt('Black is a', x+pad, y+h*0.47,      {font:'ITight6', size:ds, color:t.t1, track:-ds*0.03});
  txt('material.',  x+pad, y+h*0.47+ds*1.02, {font:'ITight6', size:ds, color:t.t1, track:-ds*0.03});
  const fy = y+h-pad*1.5;
  hair(x+pad, fy, w-pad*2, t.hair);
  txt('03 · METHOD', x+pad, fy+pad*0.78, {font:'Plex5', size:w*0.021, color:t.t3, track:w*0.0030, upper:true});
  txt('12', x+w-pad, fy+pad*0.78, {font:'Plex', size:w*0.021, color:t.t4, align:'right'});
  txt('PRESENTATION', x, y-13, {font:'Plex5', size:11, color:t.t3, track:1.8, upper:true});
}

// ---------- WEB ----------
function web(x, y, w, h, t){
  rect(x,y,w,h,t.page); box(x,y,w,h,t.hair);
  const pad = w*0.072;
  topbar(x+w-pad, y+pad*0.60, t, 0.70);

  const my = y+pad*2.05, mw = (w-pad*2)/3, mh = h*0.155;
  hair(x+pad, my, w-pad*2, t.strong);
  const ns = w*0.055;
  [['ITEMS','24'],['RISKS','06'],['OPEN','09']].forEach((m,i)=>{
    const x0 = x+pad+mw*i;
    if(i>0) vhair(x0, my+1, mh, t.hair);
    txt(m[0], x0+9, my+17, {font:'Plex5', size:w*0.0185, color:t.t3, track:w*0.0027, upper:true});
    const by = my+25;
    if(i===2){
      c.font = `${ns}px ITight6`;
      const tw = c.measureText(m[1]).width;
      const bw = tw+w*0.020, bh = ns*1.16;
      rect(x0+9, by, bw, bh, t.accent);
      txt(m[1], x0+9+bw/2, by+bh*0.80, {font:'ITight6', size:ns, color:t.ink, track:-ns*0.03, align:'center'});
    } else {
      txt(m[1], x0+9, by+ns*0.80, {font:'ITight6', size:ns, color:t.t1, track:-ns*0.03});
    }
  });

  let ry = my+mh+pad*1.15;
  const railW = w*0.205, rh = h*0.118;
  hair(x+pad, ry, w-pad*2, t.hair);
  [['OWNER · BA','Type is zoned into three registers'],
   ['OWNER · NA','Density comes from ruled rows'],
   ['OWNER · SP','Dark and light are one design']].forEach(r=>{
    txt(r[0], x+pad, ry+rh*0.63, {font:'Plex5', size:w*0.0175, color:t.t4, track:w*0.0025, upper:true});
    txt(r[1], x+pad+railW, ry+rh*0.63, {font:'ITight5', size:w*0.0315, color:t.t1, track:-w*0.0004});
    ry += rh; hair(x+pad, ry, w-pad*2, t.hair);
  });
  // section-closing hairline that bleeds wider than the content column
  hair(x+pad*0.34, ry+pad*0.85, w-pad*0.68, t.hair);
  txt('WEB', x, y-13, {font:'Plex5', size:11, color:t.t3, track:1.8, upper:true});
}

// ---------- POSTER (A-series) ----------
function poster(x, y, w, h, t){
  rect(x,y,w,h,t.page); box(x,y,w,h,t.hair);
  const pad = w*0.095, railW = w*0.25;
  vhair(x+pad+railW, y+pad, h-pad*2, t.hair);
  txt('01',   x+pad, y+pad+15, {font:'Plex5', size:w*0.058, color:t.t3, track:w*0.002});
  txt('2026', x+pad, y+pad+34, {font:'Plex',  size:w*0.042, color:t.t4});
  txt('A2',   x+pad, y+h-pad-3, {font:'Plex5', size:w*0.042, color:t.t4, track:w*0.003, upper:true});

  const cx0 = x+pad+railW+pad*0.85, cw = x+w-pad-cx0;
  const ds = w*0.168;
  ['RULED','LABEL','QUIET'].forEach((s,i)=>
    txt(s, cx0, y+pad+ds*(1.0+i*0.92), {font:'ITight6', size:ds, color:t.t1, track:-ds*0.035}));

  // example of a single accent zone; additional meaningful accents are permitted up to 15% of visible content units
  const py = y+pad+ds*3.30, pw = cw*0.72, ph = w*0.088;
  rrect(cx0, py, pw, ph, ph/2, t.accent);
  txt('NOW', cx0+pw/2, py+ph*0.72, {font:'Plex7', size:w*0.045, color:t.ink, track:w*0.004, align:'center'});

  // dotted remaining-track
  const ty = py+ph+w*0.075;
  c.fillStyle = t.t2; c.fillRect(Math.round(cx0), Math.round(ty), Math.round(cw*0.42), 2);
  dotted(cx0+cw*0.42, ty, cw*0.58, t.t4, 5);

  let ry = y+h-pad-w*0.245;
  hair(cx0, ry, cw, t.hair);
  ['Hairlines','No shadow','Orange ≤15%'].forEach(s=>{
    ry += w*0.082;
    txt(s, cx0, ry-4, {font:'ITight', size:w*0.052, color:t.t2});
    hair(cx0, ry, cw, t.hair);
  });
  txt('POSTER', x, y-13, {font:'Plex5', size:11, color:t.t3, track:1.8, upper:true});
}

// ---------- BAND ----------
function band(y0, bh, t, title, note){
  rect(0, y0, S, bh, t.page);
  const M = 80;
  txt(title, M, y0+44, {font:'Plex7', size:13, color:t.t2, track:2.1, upper:true});
  txt(note,  S-M, y0+44, {font:'Plex', size:12, color:t.t4, track:0.9, align:'right', upper:true});
  hair(M, y0+60, S-M*2, t.hair);
  const H = 330;
  const wP = Math.round(H*16/9), wW = Math.round(H*1.6), wPo = Math.round(H*0.707);
  const gap = 34, total = wP+wW+wPo+gap*2;
  let x = Math.round((S-total)/2), y = y0+128;
  presentation(x, y, wP, H, t); x += wP+gap;
  web(x, y, wW, H, t);          x += wW+gap;
  poster(x, y, wPo, H, t);
}

// ================= COMPOSE =================
const TITLE = 96, H1 = 540, H2 = 540;
const Y1 = TITLE, Y2 = TITLE+H1, Y3 = TITLE+H1+H2;

// title strip
rect(0,0,S,TITLE,T.dark.sunken);
txt('ART DIRECTION', 80, 56, {font:'Plex7', size:15, color:T.dark.t1, track:2.6, upper:true});
txt('a black document that reads like paper, structured like an instrument', S-80, 56,
    {font:'Plex', size:12, color:T.dark.t4, track:0.9, align:'right', upper:true});
hair(0, TITLE-1, S, T.dark.strong);

band(Y1, H1, T.dark,  'Dark — canonical', 'default state');
band(Y2, H2, T.light, 'Light — derived',  'same design, swapped variables');
hair(0, Y2, S, T.dark.strong);

// ---- band 3 : tokens ----
const t = T.dark, M = 80;
rect(0, Y3, S, S-Y3, t.sunken);
hair(0, Y3, S, T.light.strong);

let y = Y3+52;
txt('Palette', M, y, {font:'Plex7', size:13, color:t.t2, track:2.1, upper:true});
txt('every value is a token · no literal color anywhere', S-M, y,
    {font:'Plex', size:12, color:t.t4, track:0.9, align:'right', upper:true});
y += 16; hair(M, y, S-M*2, t.hair); y += 24;

const chips = [
  ['page','#0B0B0C','#F3F2F0'], ['raised','#121214','#FFFFFF'],
  ['inset','#1A1A1D','#E6E4E1'], ['line','#202024','#E0DEDA'],
  ['text','#EFEDEA','#111112'],  ['accent','#FF4A1C','#F0430F'],
];
const cw = Math.floor((S-M*2 - 5*18)/6), chH = 34;
chips.forEach((ch,i)=>{
  const x = M + i*(cw+18);
  rect(x, y, cw, chH, ch[1]); box(x, y, cw, chH, t.hair);
  rect(x, y+chH+5, cw, chH, ch[2]); box(x, y+chH+5, cw, chH, t.hair);
  txt(ch[0], x, y+chH*2+27, {font:'Plex5', size:11, color:t.t2, track:1.7, upper:true});
  txt(ch[1], x, y+chH*2+44, {font:'Plex', size:10.5, color:t.t4, track:0.4});
  txt(ch[2], x, y+chH*2+59, {font:'Plex', size:10.5, color:t.t4, track:0.4});
});

// ---- type row : four columns ----
y += chH*2 + 84;
hair(M, y, S-M*2, t.hair);
y += 40;

const col = (S-M*2)/4;
const spec = [
  ['Aa','ITight6', 34, 'Inter Tight',   'display · numerals'],
  ['Aa','Plex',    31, 'IBM Plex Mono', 'all metadata'],
  ['Aa','News',    34, 'Newsreader',    'once per artifact'],
];
spec.forEach((s,i)=>{
  const x = M + col*i;
  txt(s[0], x, y+11, {font:s[1], size:s[2], color:t.t1, track:s[1]==='ITight6'?-1.1:0});
  txt(s[3], x+62, y-3, {font:'Plex5', size:11, color:t.t2, track:1.7, upper:true});
  txt(s[4], x+62, y+14, {font:'ITight', size:13, color:t.t3});
});
// Persian column — laid out RTL
txt('نمونه', S-M, y+11, {font:'Vazir7', size:32, color:t.t1, rtl:true, align:'right'});
txt('VAZIRMATN', S-M-108, y-3, {font:'Plex5', size:11, color:t.t2, track:1.7, align:'right'});
txt('۱۴۰۵/۰۵/۲۳', S-M-108, y+15, {font:'Vazir', size:14, color:t.t3, rtl:true, align:'right'});

// ---- laws footer ----
y += 46; hair(M, y, S-M*2, t.hair); y += 30;
txt('No shadows  ·  1px hairlines + 2–6% luminance steps  ·  purposeful orange ≤15% of elements  ·  ruled rows, never card grids  ·  logical properties only',
    S/2, y, {font:'Plex', size:12.5, color:t.t3, track:0.85, align:'center', upper:true});

fs.writeFileSync('/tmp/build/art-direction-specimen.jpg', cv.encodeSync('jpeg', 94));
console.log('written', fs.statSync('/tmp/build/art-direction-specimen.jpg').size, 'lastY', y);
