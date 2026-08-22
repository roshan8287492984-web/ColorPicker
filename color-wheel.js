(() => {
  "use strict";

  const HARMONIES = {
    analogous: {
      name: "Analogous",
      desc: "Three nearby hues form a harmonious, cohesive palette. Each handle can be moved inward or outward to change saturation.",
      offsets: [-30, 0, 30]
    },
    monochromatic: {
      name: "Monochromatic",
      desc: "One hue with different saturation/lightness levels creates a calm, unified palette.",
      offsets: [0, 0, 0, 0, 0],
      mono: true
    },
    complementary: {
      name: "Complementary",
      desc: "Two opposite hues create strong contrast. Both handles can be moved independently toward or away from the center.",
      offsets: [0, 180]
    },
    triadic: {
      name: "Triadic",
      desc: "Three hues remain 120° apart, forming a triangle. Drag any of the three handles inward or outward independently.",
      offsets: [0, 120, 240]
    },
    split: {
      name: "Split Complementary",
      desc: "Three hues use a base color and the two hues beside its complement.",
      offsets: [0, 150, 210]
    },
    square: {
      name: "Square",
      desc: "Four hues remain 90° apart, forming a square. Drag any handle independently along its own harmony line.",
      offsets: [0, 90, 180, 270]
    },
    double: {
      name: "Double Complementary",
      desc: "Two complementary pairs create a richer four-color palette.",
      offsets: [-30, 30, 150, 210]
    },
    custom: {
      name: "Custom",
      desc: "Five independently adjustable saturation handles arranged around your chosen base hue.",
      offsets: [-60, -20, 0, 25, 65]
    }
  };

  const state = {
    hue: 262,
    saturation: 78,
    lightness: 53,
    harmony: "analogous",
    radii: [0.78, 0.78, 0.78, 0.78, 0.78],
    activeHandle: 1
  };

  const $ = id => document.getElementById(id);
  const wheelWrap = $("wheelWrap");
  const markerLayer = wheelWrap;
  const wheelLines = $("harmonyLines");
  const swatches = $("swatches");

  function clamp(n,a,b){ return Math.max(a,Math.min(b,n)); }
  function norm(h){ return ((h % 360) + 360) % 360; }

  function hslToHex(h,s,l){
    s/=100; l/=100;
    const k=n=>(n+h/30)%12;
    const a=s*Math.min(l,1-l);
    const f=n=>l-a*Math.max(-1,Math.min(k(n)-3,Math.min(9-k(n),1)));
    return "#" + [f(0),f(8),f(4)]
      .map(v=>Math.round(255*v).toString(16).padStart(2,"0"))
      .join("").toUpperCase();
  }

  function hexToRgb(hex){
    const h=hex.replace("#","").trim();
    if(!/^[0-9a-f]{6}$/i.test(h)) return null;
    return {
      r:parseInt(h.slice(0,2),16),
      g:parseInt(h.slice(2,4),16),
      b:parseInt(h.slice(4,6),16)
    };
  }

  function rgbToHsl(r,g,b){
    r/=255;g/=255;b/=255;
    const max=Math.max(r,g,b),min=Math.min(r,g,b);
    let h=0,s=0,l=(max+min)/2,d=max-min;
    if(d){
      s=l>.5 ? d/(2-max-min) : d/(max+min);
      if(max===r) h=(g-b)/d+(g<b?6:0);
      else if(max===g) h=(b-r)/d+2;
      else h=(r-g)/d+4;
      h*=60;
    }
    return {h,s:s*100,l:l*100};
  }

  function harmony(){
    return HARMONIES[state.harmony];
  }

  function activeOffsets(){
    return harmony().offsets;
  }

  /*
    Wheel geometry:
    - ANGLE = hue
    - RADIUS = saturation
    - Lightness is controlled separately.
    A handle is therefore allowed to travel from the outside edge all
    the way toward the center. This changes saturation without breaking
    the selected harmony's angular rule.
  */
  function getWheelGeometry(){
    const rect=wheelWrap.getBoundingClientRect();
    const size=Math.min(rect.width,rect.height);
    return {rect,size,cx:size/2,cy:size/2,radius:size*0.43};
  }

  function pointForHandle(i){
    const g=getWheelGeometry();
    const angle=(norm(state.hue+activeOffsets()[i])-90)*Math.PI/180;
    const r=g.radius*clamp(state.radii[i] ?? .78,0,.98);
    return {
      x:g.cx+Math.cos(angle)*r,
      y:g.cy+Math.sin(angle)*r
    };
  }

  function clearMarkers(){
    wheelWrap.querySelectorAll(".wheel-marker.dynamic").forEach(el=>el.remove());
  }

  function renderMarkers(){
    clearMarkers();
    const colors=getColors();
    activeOffsets().forEach((offset,i)=>{
      const p=pointForHandle(i);
      const marker=document.createElement("button");
      marker.type="button";
      marker.className="wheel-marker dynamic" + (i===state.activeHandle ? " active-handle" : "");
      marker.dataset.handle=String(i);
      marker.setAttribute("aria-label",`Harmony color ${i+1}: ${colors[i]}`);
      marker.style.left=p.x+"px";
      marker.style.top=p.y+"px";
      marker.style.background=colors[i];
      marker.addEventListener("pointerdown",startHandleDrag);
      marker.addEventListener("click",()=>{state.activeHandle=i;render();});
      markerLayer.appendChild(marker);
    });
  }

  function renderLines(){
    wheelLines.innerHTML="";
    const points=activeOffsets().map((_,i)=>pointForHandle(i));
    if(points.length<2)return;

    if(points.length===2){
      const line=document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("x1",points[0].x);line.setAttribute("y1",points[0].y);
      line.setAttribute("x2",points[1].x);line.setAttribute("y2",points[1].y);
      wheelLines.appendChild(line);
      return;
    }

    const polygon=document.createElementNS("http://www.w3.org/2000/svg","polygon");
    polygon.setAttribute("points",points.map(p=>`${p.x},${p.y}`).join(" "));
    wheelLines.appendChild(polygon);
  }

  function updateBaseUI(){
    const base=hslToHex(state.hue,state.saturation,state.lightness);
    $("hexInput").value=base;
    $("nativeColor").value=base;
    $("baseDot").style.background=base;
    $("hueValue").textContent=Math.round(state.hue)+"°";
    $("satValue").textContent=Math.round(state.saturation)+"%";
    $("lightValue").textContent=Math.round(state.lightness)+"%";
    $("satRange").value=Math.round(state.saturation);
    $("lightRange").value=Math.round(state.lightness);
    $("satRangeValue").textContent=Math.round(state.saturation)+"%";
    $("lightRangeValue").textContent=Math.round(state.lightness)+"%";
  }

  function getColors(){
    const rule=harmony();
    if(rule.mono){
      const ls=[
        clamp(state.lightness+27,5,95),
        clamp(state.lightness+13,5,95),
        state.lightness,
        clamp(state.lightness-14,5,95),
        clamp(state.lightness-28,5,95)
      ];
      return ls.map(l=>hslToHex(state.hue,state.saturation,l));
    }

    return rule.offsets.map((offset,i)=>{
      const saturation=clamp((state.radii[i] ?? .78)*100,0,100);
      return hslToHex(norm(state.hue+offset),saturation,state.lightness);
    });
  }

  function renderSwatches(){
    const colors=getColors(), rule=harmony();
    $("harmonyDescription").textContent=rule.desc;
    swatches.innerHTML="";
    colors.forEach((hex,i)=>{
      const card=document.createElement("div");
      card.className="swatch";
      card.title="Click to copy "+hex;
      card.innerHTML=
        `<div class="swatch-color" style="background:${hex}"></div>
         <div class="swatch-info">
           <div>
             <div class="swatch-name">${rule.name} ${i+1}</div>
             <div class="swatch-hex">${hex}</div>
           </div>
           <div class="swatch-copy">Copy</div>
         </div>`;
      card.addEventListener("click",()=>copyText(hex,card.querySelector(".swatch-copy")));
      swatches.appendChild(card);
    });
  }

  function render(){
    updateBaseUI();
    renderLines();
    renderMarkers();
    renderSwatches();
  }

  function hueFromPointer(e){
    const g=getWheelGeometry();
    const x=e.clientX-g.rect.left-g.cx;
    const y=e.clientY-g.rect.top-g.cy;
    let angle=Math.atan2(y,x)*180/Math.PI+90;
    return norm(angle);
  }

  function setBaseHueFromPointer(e){
    state.hue=hueFromPointer(e);
    render();
  }

  function updateHandleFromPointer(i,e){
    const g=getWheelGeometry();
    const x=e.clientX-g.rect.left-g.cx;
    const y=e.clientY-g.rect.top-g.cy;
    const distance=Math.hypot(x,y);
    const normalized=clamp(distance/g.radius,0,.98);

    /*
      Each harmony handle moves radially on its own fixed hue ray.
      This is what lets triangle/square handles all move independently
      while the triangle/square rule remains mathematically intact.
    */
    state.radii[i]=normalized;
    state.activeHandle=i;
    render();
  }


  /*
    UNIFIED FREE WHEEL DRAG
    -----------------------
    A single drag now changes BOTH:
      - Hue      = pointer angle around the wheel
      - Saturation = pointer distance from the center

    The user can start from ANY point on the wheel. They do not have to
    first move the cursor to the white center.

    If a harmony handle is dragged, the harmony rotates with it while
    that handle's saturation follows the pointer. Thus hue + color
    change happen at the same time in one movement.
  */
  let wheelDragging=false;
  let wheelDragHandle=1;

  function updateFreeHandleFromPointer(i,e){
    const g=getWheelGeometry();
    const x=e.clientX-g.rect.left-g.cx;
    const y=e.clientY-g.rect.top-g.cy;
    const distance=Math.hypot(x,y);

    // Pointer angle controls hue.
    const pointerHue=norm(Math.atan2(y,x)*180/Math.PI+90);

    // Pointer distance controls saturation.
    const radius=clamp(distance/g.radius,0,.98);

    // Preserve the selected harmony relationship.
    const offset=activeOffsets()[i] || 0;
    state.hue=norm(pointerHue-offset);
    state.radii[i]=radius;
    state.activeHandle=i;

    render();
  }

  function startHandleDrag(e){
    e.preventDefault();
    e.stopPropagation();

    const i=Number(e.currentTarget.dataset.handle);
    state.activeHandle=i;
    wheelDragHandle=i;
    wheelDragging=true;

    try { e.currentTarget.setPointerCapture(e.pointerId); } catch(_) {}

    updateFreeHandleFromPointer(i,e);
  }

  function startFreeWheelDrag(e){
    if(e.target.closest(".wheel-marker")) return;

    e.preventDefault();

    // Clicking anywhere on the wheel selects the currently active
    // harmony handle and immediately places it at the pointer position.
    wheelDragHandle=clamp(
      state.activeHandle,
      0,
      activeOffsets().length-1
    );

    wheelDragging=true;
    try { wheelWrap.setPointerCapture(e.pointerId); } catch(_) {}

    updateFreeHandleFromPointer(wheelDragHandle,e);
  }

  wheelWrap.addEventListener("pointerdown",startFreeWheelDrag);

  wheelWrap.addEventListener("pointermove",e=>{
    if(!wheelDragging) return;
    e.preventDefault();
    updateFreeHandleFromPointer(wheelDragHandle,e);
  });

  wheelWrap.addEventListener("pointerup",e=>{
    if(e.pointerId!==undefined){
      try { wheelWrap.releasePointerCapture(e.pointerId); } catch(_) {}
    }
    wheelDragging=false;
  });

  wheelWrap.addEventListener("pointercancel",()=>{
    wheelDragging=false;
  });

  $("hexInput").addEventListener("change",()=>{
    const rgb=hexToRgb($("hexInput").value);
    if(!rgb){
      $("hexInput").value=hslToHex(state.hue,state.saturation,state.lightness);
      return;
    }
    const hsl=rgbToHsl(rgb.r,rgb.g,rgb.b);
    state.hue=hsl.h;
    state.saturation=hsl.s;
    state.lightness=hsl.l;
    /* Keep the handles at their current saturation positions. */
    render();
  });

  $("nativeColor").addEventListener("input",()=>{
    const rgb=hexToRgb($("nativeColor").value);
    const hsl=rgbToHsl(rgb.r,rgb.g,rgb.b);
    state.hue=hsl.h;
    state.saturation=hsl.s;
    state.lightness=hsl.l;
    render();
  });

  $("satRange").addEventListener("input",()=>{
    state.saturation=Number($("satRange").value);
    state.radii[state.activeHandle]=state.saturation/100;
    render();
  });

  $("lightRange").addEventListener("input",()=>{
    state.lightness=Number($("lightRange").value);
    render();
  });

  document.querySelectorAll(".harmony-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      document.querySelectorAll(".harmony-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      state.harmony=btn.dataset.harmony;
      const count=HARMONIES[state.harmony].offsets.length;
      state.radii=Array.from({length:count},(_,i)=>state.radii[i] ?? .78);
      state.activeHandle=state.harmony==="monochromatic"?2:Math.min(state.activeHandle,count-1);
      render();
    });
  });

  async function copyText(text,element){
    try{
      await navigator.clipboard.writeText(text);
    }catch(e){
      const ta=document.createElement("textarea");
      ta.value=text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    if(element){
      const old=element.textContent;
      element.textContent="Copied!";
      setTimeout(()=>element.textContent=old,900);
    }
  }

  $("copyPalette").addEventListener("click",async()=>{
    const button=$("copyPalette");
    await copyText(getColors().join(", "),button);
    button.textContent="Copied!";
    setTimeout(()=>button.textContent="Copy Palette",1000);
  });

  /* Same theme storage key as the existing ColorPick website. */
  function applyTheme(theme){
    const dark=theme==="dark";
    document.body.classList.toggle("dark",dark);
    document.documentElement.classList.remove("dark-loading");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";// in the shared stylesheet, so it MUST be removed after the theme is applied.
    $("themeIcon").textContent=dark?"☀️":"🌙";
    $("themeBtn").setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode");
    $("themeBtn").setAttribute("aria-pressed",dark?"true":"false");
  }

  const savedTheme=localStorage.getItem("colorpick-theme")||"light";
  applyTheme(savedTheme);

  $("themeBtn").addEventListener("click",()=>{
    const next=document.body.classList.contains("dark")?"light":"dark";
    localStorage.setItem("colorpick-theme",next);
    applyTheme(next);
  });

  window.addEventListener("resize",render);
  render();
})();
