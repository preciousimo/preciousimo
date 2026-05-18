"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#about", label: "about" },
  { href: "#metrics", label: "metrics" },
  { href: "#experience", label: "log" },
  { href: "#api", label: "api" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => { clearInterval(id); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <nav className="nav-container" style={{
      position:"fixed",top:0,left:0,right:0,zIndex:1000,
      height:52,display:"flex",alignItems:"center",justifyContent:"space-between",
      padding:"0 2rem",
      background: scrolled ? "rgba(5,5,5,0.95)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition:"all 0.3s",fontFamily:"var(--mono)",fontSize:12,
    }}>
      <div style={{color:"var(--green)",fontWeight:700,letterSpacing:"0.05em"}}>
        <span style={{color:"var(--muted)"}}>~/</span>precious<span style={{color:"var(--amber)"}}>.</span>dev
      </div>
      <div className="nav-links" style={{display:"flex",gap:"2rem"}}>
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            color:"var(--muted)",textDecoration:"none",letterSpacing:"0.06em",transition:"color 0.2s"
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--green)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >
            <span style={{color:"var(--muted2)"}}>./</span>{l.label}
          </a>
        ))}
      </div>
      <div className="nav-time" style={{color:"var(--muted)",fontSize:11}}>
        <span style={{color:"var(--green2)"}}>●</span> {time} <span style={{color:"var(--muted2)"}}>WAT</span>
      </div>
    </nav>
  );
}
