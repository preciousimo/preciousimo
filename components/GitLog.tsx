"use client";
import { useState } from "react";

const commits = [
  {
    hash:"a3f9b1c",date:"2025-07",branch:"main",
    message:"feat(republic): zero-downtime CI/CD pipeline — 50% faster releases",
    detail:"Established GitHub Actions workflows with blue-green deployment. Reduced release cycles from weekly to daily.",
    tags:["CI/CD","DevOps","GitHub Actions"],
    co:"The Republic",impact:"50% release cycle reduction",
  },
  {
    hash:"8e2d4f7",date:"2025-02",branch:"main",
    message:"feat(vitanips): telemedicine backend architecture — end-to-end healthcare",
    detail:"Designed scalable backend services for patient-doctor-pharmacy connections. HIPAA-grade authentication and digital prescription workflows.",
    tags:["Healthcare","FastAPI","PostgreSQL"],
    co:"VitaNips",impact:"Multi-stakeholder platform",
  },
  {
    hash:"c1a0e5d",date:"2024-08",branch:"main",
    message:"perf(axon): idempotent transactions + Redis caching — 30% latency drop",
    detail:"Built idempotent transaction processing preventing duplicate ops. Implemented Redis caching layer. Achieved 99.9% transaction success rate.",
    tags:["Fintech","Redis","Python"],
    co:"Axon",impact:"99.9% success rate",
  },
  {
    hash:"f7b3c9a",date:"2024-04",branch:"feat/axon-testing",
    message:"test(axon): 95% automated coverage across 8 major backend features",
    detail:"Implemented comprehensive test suites. CI/CD pipelines cut deployment errors by 80%.",
    tags:["Testing","CI/CD","Quality"],
    co:"Axon",impact:"80% fewer deploy errors",
  },
  {
    hash:"2d8e1f3",date:"2023-06",branch:"main",
    message:"feat(farmtrack): real-time crop monitoring for 200+ farmers",
    detail:"Built automation and real-time alert system. Improved operational visibility across the farming cooperative.",
    tags:["AgriTech","WebSockets","Node.js"],
    co:"Solvic Global",impact:"200+ farmers served",
  },
  {
    hash:"9f4a7b2",date:"2022-06",branch:"main",
    message:"infra(ada): cloud cost optimisation — 25% cost reduction, 60% latency drop",
    detail:"Restructured cloud infrastructure serving 1,100+ users across Africa and Latin America. Handling 2,000+ daily requests.",
    tags:["AWS","Infrastructure","Optimization"],
    co:"ADA Global",impact:"25% cost reduction",
  },
];

export default function GitLog() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="experience" style={{padding:"5rem 0",borderBottom:"1px solid var(--line)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>03</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>GIT LOG --experience</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
        </div>

        {/* git log header */}
        <div style={{
          display:"grid",gridTemplateColumns:"80px 80px 1fr",gap:"1rem",
          fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",letterSpacing:"0.08em",
          paddingBottom:"0.5rem",borderBottom:"1px solid var(--line2)",marginBottom:"0.5rem",
        }}>
          <span>HASH</span><span>DATE</span><span>MESSAGE</span>
        </div>

        {commits.map(c => (
          <div key={c.hash}>
            <div
              onClick={() => setExpanded(expanded === c.hash ? null : c.hash)}
              style={{
                display:"grid",gridTemplateColumns:"80px 80px 1fr",gap:"1rem",
                padding:"0.8rem 0",borderBottom:"1px solid var(--line)",
                cursor:"pointer",transition:"all 0.15s",
                background: expanded === c.hash ? "rgba(0,255,136,0.03)" : "transparent",
              }}
              onMouseEnter={e=>(e.currentTarget.style.background="rgba(255,255,255,0.02)")}
              onMouseLeave={e=>(e.currentTarget.style.background=expanded===c.hash?"rgba(0,255,136,0.03)":"transparent")}
            >
              <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--amber)"}}>
                {c.hash}
              </span>
              <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)"}}>
                {c.date}
              </span>
              <div>
                <div style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--white)",marginBottom:"0.3rem"}}>
                  <span style={{color: c.message.startsWith("feat")?"var(--green)":c.message.startsWith("perf")?"var(--blue)":c.message.startsWith("infra")?"var(--amber)":"var(--red)"}}>
                    {c.message.split(":")[0]}:
                  </span>
                  {c.message.split(":").slice(1).join(":")}
                </div>
                <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap",alignItems:"center"}}>
                  <span style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--blue)"}}>
                    ⎇ {c.branch}
                  </span>
                  <span style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)"}}>·</span>
                  <span style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)"}}>
                    {c.co}
                  </span>
                  <span style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--green2)",marginLeft:"auto"}}>
                    ↗ {c.impact}
                  </span>
                </div>
              </div>
            </div>
            {expanded === c.hash && (
              <div style={{
                background:"var(--bg2)",borderBottom:"1px solid var(--line)",
                padding:"1.2rem 1.4rem 1.2rem calc(80px + 80px + 2rem + 2rem)",
                fontFamily:"var(--mono)",fontSize:11,
              }}>
                <p style={{color:"var(--muted)",lineHeight:1.8,marginBottom:"0.8rem"}}>{c.detail}</p>
                <div style={{display:"flex",gap:"0.4rem",flexWrap:"wrap"}}>
                  {c.tags.map(t => (
                    <span key={t} style={{
                      color:"var(--green2)",border:"1px solid rgba(0,255,136,0.15)",
                      borderRadius:3,padding:"2px 7px",fontSize:10,
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
