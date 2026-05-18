"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + "px";
        dotRef.current.style.top = my + "px";
      }
    };
    let active = true;
    const raf = () => {
      if (!active) return;
      rx += (mx - rx) * 0.15;
      ry += (my - ry) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = rx + "px";
        ringRef.current.style.top = ry + "px";
      }
      requestAnimationFrame(raf);
    };
    window.addEventListener("mousemove", move);
    requestAnimationFrame(raf);
    return () => {
      active = false;
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} style={{
        position:"fixed",width:5,height:5,background:"var(--green)",borderRadius:"50%",
        pointerEvents:"none",zIndex:99999,transform:"translate(-50%,-50%)",transition:"none"
      }} />
      <div ref={ringRef} style={{
        position:"fixed",width:32,height:32,border:"1px solid var(--green)",borderRadius:"50%",
        pointerEvents:"none",zIndex:99998,transform:"translate(-50%,-50%)",opacity:0.5,
        transition:"width 0.2s,height 0.2s,border-color 0.2s"
      }} />
    </>
  );
}
