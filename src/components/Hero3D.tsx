import { useEffect, useRef } from "react";

function FloatingLeaf({ delay, duration, x, size, opacity }: {
  delay: number;
  duration: number;
  x: number;
  size: number;
  opacity: number;
}) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        bottom: "-10%",
        animation: `floatLeaf ${duration}s ease-in-out ${delay}s infinite`,
        opacity,
      }}
    >
      <svg
        width={size}
        height={size * 1.5}
        viewBox="0 0 24 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: `spinLeaf ${duration * 0.7}s linear ${delay}s infinite`,
        }}
      >
        <path
          d="M12 2C12 2 2 10 2 20C2 27 6.5 33 12 34C17.5 33 22 27 22 20C22 10 12 2 12 2Z"
          fill="url(#leafGrad)"
          opacity="0.8"
        />
        <line x1="12" y1="34" x2="12" y2="8" stroke="#2D6A4F" strokeWidth="0.5" opacity="0.6" />
        <defs>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#52B788" />
            <stop offset="100%" stopColor="#1B4332" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Particle({ delay, duration, x, y, size }: {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(82,183,136,0.4) 0%, rgba(27,67,50,0) 70%)`,
        animation: `pulse ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

const leaves = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: (i * 1.3) % 8,
  duration: 8 + (i % 5) * 2,
  x: (i * 5.5 + 3) % 95,
  size: 14 + (i % 4) * 6,
  opacity: 0.3 + (i % 3) * 0.15,
}));

const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  delay: (i * 0.7) % 5,
  duration: 3 + (i % 4) * 1.5,
  x: (i * 4.1 + 2) % 98,
  y: (i * 3.7 + 5) % 90,
  size: 40 + (i % 5) * 30,
}));

export default function Hero3D() {
  return (
    <>
      <style>{`
        @keyframes floatLeaf {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 0.6; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes spinLeaf {
          0% { transform: rotate(0deg) translateX(0px); }
          25% { transform: rotate(90deg) translateX(15px); }
          50% { transform: rotate(180deg) translateX(0px); }
          75% { transform: rotate(270deg) translateX(-15px); }
          100% { transform: rotate(360deg) translateX(0px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(0.8); opacity: 0.2; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }
        @keyframes orbitGlow {
          0% { transform: rotate(0deg) translateX(180px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(180px) rotate(-360deg); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.15; }
          50% { transform: scale(1.08); opacity: 0.25; }
        }
        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Atmospheric glow layers */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(27,75,50,0.25) 0%, transparent 70%)",
            animation: "breathe 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 40% 40% at 30% 60%, rgba(82,183,136,0.08) 0%, transparent 60%)",
            animation: "breathe 8s ease-in-out 2s infinite",
          }}
        />

        {/* Central orb / earth sphere (CSS) */}
        <div
          className="absolute"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 320,
            height: 320,
          }}
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(82,183,136,0.12) 0%, rgba(27,67,50,0.06) 60%, transparent 100%)",
              animation: "breathe 5s ease-in-out infinite",
              transform: "scale(1.4)",
            }}
          />
          {/* Sphere body */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(82,183,136,0.25) 0%, rgba(15,26,21,0.9) 60%, rgba(10,20,15,0.95) 100%)",
              boxShadow: "0 0 60px rgba(82,183,136,0.15), inset 0 0 40px rgba(0,0,0,0.5)",
              animation: "breathe 7s ease-in-out 1s infinite",
            }}
          />
          {/* Grid lines overlay */}
          <svg
            className="absolute inset-0 w-full h-full rounded-full opacity-20"
            viewBox="0 0 320 320"
            style={{ animation: "slowRotate 40s linear infinite" }}
          >
            {[30, 60, 90, 120, 150].map((r, i) => (
              <circle key={i} cx="160" cy="160" r={r} fill="none" stroke="#52B788" strokeWidth="0.5" />
            ))}
            {[0, 30, 60, 90, 120, 150].map((angle, i) => (
              <line
                key={i}
                x1="160" y1="10"
                x2="160" y2="310"
                stroke="#52B788"
                strokeWidth="0.5"
                transform={`rotate(${angle}, 160, 160)`}
              />
            ))}
          </svg>
          {/* Orbiting dot */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              width: 8,
              height: 8,
              marginTop: -4,
              marginLeft: -4,
              animation: "orbitGlow 10s linear infinite",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "#95D5B2",
                boxShadow: "0 0 12px 4px rgba(149,213,178,0.6)",
              }}
            />
          </div>
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              width: 5,
              height: 5,
              marginTop: -2.5,
              marginLeft: -2.5,
              animation: "orbitGlow 14s linear infinite reverse",
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                background: "#D4A843",
                boxShadow: "0 0 8px 3px rgba(212,168,67,0.5)",
              }}
            />
          </div>
        </div>

        {/* Ambient glow particles */}
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}

        {/* Floating leaves */}
        {leaves.map((leaf) => (
          <FloatingLeaf key={leaf.id} {...leaf} />
        ))}
      </div>
    </>
  );
}
