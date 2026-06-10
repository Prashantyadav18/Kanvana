import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* ── initial hidden states ── */
      gsap.set("#sky-dawn", { opacity: 0 });
      gsap.set("#sun-orb", { opacity: 0, scale: 0, transformOrigin: "center center" });
      gsap.set("#sun-rays path", { opacity: 0, scaleX: 0, transformOrigin: "left center" });
      gsap.set("#grass-layer", { scaleY: 0, transformOrigin: "bottom center" });
      gsap.set("#trunk-path", { scaleY: 0, transformOrigin: "bottom center" });
      gsap.set(".branch-l, .branch-r", { scale: 0, opacity: 0 });
      gsap.set(".leaf-shape", { scale: 0, opacity: 0 });
      gsap.set(".pollen", { opacity: 0, y: 0, scale: 0 });
      gsap.set("#title-line", { opacity: 0, y: 40, letterSpacing: "0.3em" });
      gsap.set("#tag-line", { opacity: 0, y: 20 });
      gsap.set("#ground-line", { scaleX: 0, transformOrigin: "center center" });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 1.4,
            ease: "power2.inOut",
            onComplete,
          });
        },
      });

      tl
        /* 1 — sky lights up like dawn */
        .to("#sky-dawn", { opacity: 1, duration: 1.2, ease: "power1.in" })

        /* 2 — sun rises */
        .to("#sun-orb", { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.5)" }, "-=0.4")
        .to("#sun-rays path", { opacity: 1, scaleX: 1, duration: 0.6, stagger: 0.07, ease: "power2.out" }, "-=0.5")

        /* 3 — ground appears */
        .to("#ground-line", { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.2")
        .to("#grass-layer", { scaleY: 1, duration: 0.5, ease: "power2.out" }, "-=0.3")

        /* 4 — trunk grows up */
        .to("#trunk-path", { scaleY: 1, duration: 1.2, ease: "power2.inOut" }, "-=0.1")

        /* 5 — branches unfurl */
        .to(".branch-l", { scale: 1, opacity: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.6)" }, "-=0.5")
        .to(".branch-r", { scale: 1, opacity: 1, duration: 0.55, stagger: 0.1, ease: "back.out(1.6)" }, "<")

        /* 6 — leaves bloom */
        .to(".leaf-shape", { scale: 1, opacity: 1, duration: 0.4, stagger: 0.04, ease: "back.out(2)" }, "-=0.3")

        /* 7 — pollen/light particles float up */
        .to(".pollen", { opacity: 1, scale: 1, y: -60, duration: 2, stagger: { amount: 1.5, from: "random" }, ease: "power2.out" }, "-=0.5")

        /* 8 — title sweeps in */
        .to("#title-line", { opacity: 1, y: 0, letterSpacing: "0.15em", duration: 1, ease: "power3.out" }, "-=1.5")
        .to("#tag-line", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }, "-=0.5")

        /* 9 — breathe moment */
        .to({}, { duration: 1.3 });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  /* leaf data — tip-to-base teardrop shapes rotated around the canopy */
  const leaves = [
    { cx: 200, cy: 88,  rx: 24, ry: 42, rot: 0,   c: "#1a7a3a" },
    { cx: 172, cy: 100, rx: 20, ry: 36, rot: -30,  c: "#22994a" },
    { cx: 228, cy: 100, rx: 20, ry: 36, rot: 30,   c: "#1d8742" },
    { cx: 155, cy: 122, rx: 18, ry: 30, rot: -55,  c: "#2aad56" },
    { cx: 245, cy: 122, rx: 18, ry: 30, rot: 55,   c: "#27a050" },
    { cx: 142, cy: 148, rx: 16, ry: 26, rot: -75,  c: "#1c7f3e" },
    { cx: 258, cy: 148, rx: 16, ry: 26, rot: 75,   c: "#219044" },
    { cx: 190, cy: 70,  rx: 18, ry: 32, rot: -15,  c: "#2db562" },
    { cx: 210, cy: 70,  rx: 18, ry: 32, rot: 15,   c: "#28a859" },
    { cx: 200, cy: 58,  rx: 16, ry: 28, rot: 0,    c: "#3dcc72" },
    { cx: 178, cy: 68,  rx: 14, ry: 22, rot: -40,  c: "#33b864" },
    { cx: 222, cy: 68,  rx: 14, ry: 22, rot: 40,   c: "#2fad5e" },
    { cx: 160, cy: 96,  rx: 13, ry: 20, rot: -60,  c: "#248c48" },
    { cx: 240, cy: 96,  rx: 13, ry: 20, rot: 60,   c: "#229046" },
    { cx: 133, cy: 130, rx: 12, ry: 18, rot: -82,  c: "#1c7338" },
    { cx: 267, cy: 130, rx: 12, ry: 18, rot: 82,   c: "#1c7338" },
    { cx: 200, cy: 46,  rx: 12, ry: 20, rot: 0,    c: "#52cc7a" },
    { cx: 185, cy: 52,  rx: 10, ry: 16, rot: -20,  c: "#44bb6a" },
    { cx: 215, cy: 52,  rx: 10, ry: 16, rot: 20,   c: "#44bb6a" },
  ];

  const pollenDots = [
    { x: 175, y: 200 }, { x: 225, y: 205 }, { x: 190, y: 210 },
    { x: 215, y: 195 }, { x: 200, y: 215 }, { x: 162, y: 185 },
    { x: 238, y: 190 }, { x: 183, y: 188 }, { x: 217, y: 200 },
    { x: 206, y: 182 }, { x: 194, y: 198 }, { x: 145, y: 200 },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "#040f07" }}
    >
      {/* ── Sky gradient (dawn glow) ── */}
      <div
        id="sky-dawn"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 50% 38%,
              rgba(255,200,80,0.18) 0%,
              rgba(120,210,120,0.14) 35%,
              rgba(20,80,40,0.22) 70%,
              transparent 100%
            ),
            radial-gradient(ellipse 100% 50% at 50% 100%,
              rgba(20,90,45,0.5) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* ── Tree SVG ── */}
      <svg
        viewBox="0 0 400 380"
        style={{ width: "min(520px, 92vw)", height: "auto", position: "relative", zIndex: 10 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#fff9c4" stopOpacity="1" />
            <stop offset="40%"  stopColor="#ffd54f" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ff9800" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="groundGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#52b788" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#52b788" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="trunkGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#3b2204" />
            <stop offset="40%"  stopColor="#6d3a0a" />
            <stop offset="70%"  stopColor="#8b5a1a" />
            <stop offset="100%" stopColor="#5a3208" />
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="8" result="blur"/>
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="leafShadow">
            <feDropShadow dx="2" dy="3" stdDeviation="3" floodColor="#0a2010" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* ── Sun ── */}
        <g id="sun-orb" filter="url(#softGlow)" style={{ transformOrigin: "200px 50px" }}>
          <circle cx="200" cy="50" r="28" fill="url(#sunGrad)" />
          <circle cx="200" cy="50" r="16" fill="#fffde7" opacity="0.9" />
        </g>

        {/* ── Sun rays ── */}
        <g id="sun-rays" stroke="#ffd54f" strokeLinecap="round" opacity="0.55">
          {[0,30,60,90,120,150,210,240,270,300,330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 36;
            const y1 = 50  + Math.sin(rad) * 36;
            const x2 = 200 + Math.cos(rad) * 56;
            const y2 = 50  + Math.sin(rad) * 56;
            return (
              <path
                key={i}
                d={`M${x1},${y1} L${x2},${y2}`}
                strokeWidth={i % 2 === 0 ? 2 : 1.2}
                style={{ transformOrigin: `${x1}px ${y1}px` }}
              />
            );
          })}
        </g>

        {/* ── Ground glow ── */}
        <ellipse cx="200" cy="258" rx="130" ry="24" fill="url(#groundGlow)" />

        {/* ── Ground line ── */}
        <line id="ground-line" x1="40" y1="258" x2="360" y2="258" stroke="#52b788" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

        {/* ── Grass blades ── */}
        <g id="grass-layer" style={{ transformOrigin: "200px 258px" }}>
          {[...Array(22)].map((_, i) => {
            const x = 60 + i * 14;
            const h = 8 + (i % 3) * 5;
            const lean = (i % 5 - 2) * 3;
            return (
              <path
                key={i}
                d={`M${x},258 Q${x + lean},${258 - h / 2} ${x + lean * 0.5},${258 - h}`}
                stroke="#2d7a3a"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
            );
          })}
        </g>

        {/* ── Trunk ── */}
        <path
          id="trunk-path"
          d="M188,258 C185,230 182,195 185,165 C188,140 190,110 194,78 L206,78 C210,110 212,140 215,165 C218,195 215,230 212,258 Z"
          fill="url(#trunkGrad)"
          style={{ transformOrigin: "200px 258px" }}
        />
        {/* bark texture */}
        <g opacity="0.4" fill="none" strokeLinecap="round">
          <path d="M193,240 Q196,220 192,200" stroke="#2a1504" strokeWidth="1" />
          <path d="M205,235 Q208,215 207,195" stroke="#2a1504" strokeWidth="0.8" />
          <path d="M195,200 Q198,180 194,158" stroke="#2a1504" strokeWidth="0.8" />
        </g>

        {/* ── Branches LEFT ── */}
        <g fill="none" stroke="#5a3208" strokeLinecap="round">
          <path className="branch-l" d="M192,215 Q170,205 148,192 Q130,182 112,168" strokeWidth="4" style={{ transformOrigin: "192px 215px" }} />
          <path className="branch-l" d="M190,185 Q165,172 140,155 Q122,142 106,126" strokeWidth="3.2" style={{ transformOrigin: "190px 185px" }} />
          <path className="branch-l" d="M188,155 Q162,140 138,122 Q120,108 108,90" strokeWidth="2.6" style={{ transformOrigin: "188px 155px" }} />
          <path className="branch-l" d="M187,126 Q165,110 148,92 Q137,80 132,64" strokeWidth="2" style={{ transformOrigin: "187px 126px" }} />
          <path className="branch-l" d="M187,100 Q170,86 158,70" strokeWidth="1.6" style={{ transformOrigin: "187px 100px" }} />
        </g>

        {/* ── Branches RIGHT ── */}
        <g fill="none" stroke="#6d3a0a" strokeLinecap="round">
          <path className="branch-r" d="M208,215 Q230,205 252,192 Q270,182 288,168" strokeWidth="4" style={{ transformOrigin: "208px 215px" }} />
          <path className="branch-r" d="M210,185 Q235,172 260,155 Q278,142 294,126" strokeWidth="3.2" style={{ transformOrigin: "210px 185px" }} />
          <path className="branch-r" d="M212,155 Q238,140 262,122 Q280,108 292,90" strokeWidth="2.6" style={{ transformOrigin: "212px 155px" }} />
          <path className="branch-r" d="M213,126 Q235,110 252,92 Q263,80 268,64" strokeWidth="2" style={{ transformOrigin: "213px 126px" }} />
          <path className="branch-r" d="M213,100 Q230,86 242,70" strokeWidth="1.6" style={{ transformOrigin: "213px 100px" }} />
        </g>

        {/* ── Leaf shadow blur ── */}
        <g opacity="0.25" filter="url(#leafShadow)">
          {leaves.map((l, i) => (
            <ellipse key={i} cx={l.cx + 5} cy={l.cy + 7} rx={l.rx} ry={l.ry}
              fill="#051a0a"
              transform={`rotate(${l.rot}, ${l.cx + 5}, ${l.cy + 7})`}
            />
          ))}
        </g>

        {/* ── Leaves — teardrop ellipses ── */}
        {leaves.map((l, i) => (
          <ellipse
            key={i}
            className="leaf-shape"
            cx={l.cx} cy={l.cy}
            rx={l.rx} ry={l.ry}
            fill={l.c}
            transform={`rotate(${l.rot}, ${l.cx}, ${l.cy})`}
            style={{ transformOrigin: `${l.cx}px ${l.cy}px` }}
          />
        ))}

        {/* ── Canopy highlight (sunlit top) ── */}
        <ellipse className="leaf-shape" cx="200" cy="62" rx="28" ry="18" fill="#85e6a2" opacity="0.22" style={{ transformOrigin: "200px 62px" }} />
        <ellipse className="leaf-shape" cx="188" cy="72" rx="18" ry="10" fill="#b7f5c8" opacity="0.14" style={{ transformOrigin: "188px 72px" }} />

        {/* ── Pollen / morning-light dots ── */}
        {pollenDots.map((p, i) => (
          <circle
            key={i}
            className="pollen"
            cx={p.x} cy={p.y}
            r={i % 3 === 0 ? 3 : 2}
            fill={i % 2 === 0 ? "#ffd54f" : "#95e6b5"}
            style={{
              filter: "drop-shadow(0 0 5px rgba(255,213,79,0.8))",
              transformOrigin: `${p.x}px ${p.y}px`,
            }}
          />
        ))}
      </svg>

      {/* ── Text beneath the tree ── */}
      <div className="relative z-10 text-center select-none" style={{ marginTop: "-10px" }}>
        <h1
          id="title-line"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 5vw, 2.8rem)",
            fontWeight: 700,
            color: "#d8f3dc",
            textShadow: "0 0 50px rgba(82,183,136,0.5), 0 2px 12px rgba(0,0,0,0.7)",
          }}
        >
          KANVANA FOUNDATION
        </h1>
        <p
          id="tag-line"
          style={{
            marginTop: "0.6rem",
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
            letterSpacing: "0.28em",
            color: "#95d5b2",
            fontWeight: 400,
            textTransform: "uppercase",
            textShadow: "0 0 20px rgba(149,213,178,0.4)",
          }}
        >
          Rooted in Nature · Growing Together
        </p>
      </div>
    </div>
  );
}
