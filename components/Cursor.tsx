"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    let active = true;
    const raf = () => {
      if (!active) return;
      
      // Smooth interpolation for liquid feel
      cx += (mx - cx) * 0.15;
      cy += (my - cy) * 0.15;
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%) scale(${isHovering ? 4 : 1})`;
      }
      requestAnimationFrame(raf);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [role="button"]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    
    requestAnimationFrame(raf);

    return () => {
      active = false;
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [isHovering]);

  return (
    <>
      <div 
        ref={dotRef} 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          background: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
          transition: "transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          willChange: "transform"
        }} 
      />
    </>
  );
}
