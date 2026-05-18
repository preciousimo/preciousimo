"use client";

const FACTS = [
  { key: "experience", val: "5+ years", note: "across fintech · health · media" },
  { key: "uptime_sla", val: "99.9%", note: "transaction success rate" },
  { key: "latency_delta", val: "-60%", note: "API latency reduction (ADA Global)" },
  { key: "cost_savings", val: "-25%", note: "cloud infra cost reduction" },
  { key: "test_coverage", val: "~95%", note: "automated test coverage (Axon)" },
  { key: "deploy_errors", val: "-80%", note: "via CI/CD pipeline discipline" },
  { key: "users_served", val: "3,700+", note: "across platforms built" },
  { key: "daily_requests", val: "2,000+", note: "handled at ADA Global" },
];

export default function About() {
  return (
    <section id="about" style={{padding:"5rem 0",borderBottom:"1px solid var(--line)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>01</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>ABOUT</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem"}}>
          <div>
            <p style={{
              fontFamily:"var(--body)",fontSize:15,color:"#888",
              lineHeight:1.9,marginBottom:"1.2rem",
            }}>
              I'm a <span style={{color:"var(--white)"}}>Software & DevOps Engineer</span> who builds systems that hold under pressure. Not just systems that work in staging — ones that stay up at 3am on Black Friday, handle 2,000+ daily requests, and recover from failure states without waking anyone up.
            </p>
            <p style={{fontFamily:"var(--body)",fontSize:15,color:"#888",lineHeight:1.9,marginBottom:"1.2rem"}}>
              My work spans <span style={{color:"var(--amber)"}}>fintech payment rails</span>, <span style={{color:"var(--blue)"}}>digital healthcare platforms</span>, <span style={{color:"var(--green)"}}>media licensing infrastructure</span>, and <span style={{color:"var(--white)"}}>agricultural automation</span>. The common thread: reliability, latency discipline, and infrastructure efficiency.
            </p>
            <p style={{fontFamily:"var(--body)",fontSize:15,color:"#888",lineHeight:1.9}}>
              Currently leading engineering at <span style={{color:"var(--white)"}}>The Republic</span> and serving as Platform Lead at <span style={{color:"var(--white)"}}>VitaNips</span>, building zero-downtime pipelines and healthcare backend services.
            </p>

            <div style={{marginTop:"2rem",display:"flex",gap:"1rem"}}>
              <a href="mailto:preciousimoniakemu@gmail.com" style={{
                fontFamily:"var(--mono)",fontSize:11,color:"var(--green)",
                border:"1px solid rgba(0,255,136,0.2)",padding:"8px 16px",
                borderRadius:4,textDecoration:"none",letterSpacing:"0.06em",
                transition:"all 0.2s",
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(0,255,136,0.08)"}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="transparent"}}
              >./hire_me</a>
              <a href="https://github.com/preciousimo" target="_blank" rel="noopener" style={{
                fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)",
                border:"1px solid var(--line2)",padding:"8px 16px",
                borderRadius:4,textDecoration:"none",letterSpacing:"0.06em",
                transition:"all 0.2s",
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.color="var(--white)";el.style.borderColor="var(--muted)"}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.color="var(--muted)";el.style.borderColor="var(--line2)"}}
              >./github ↗</a>
            </div>
          </div>

          {/* stats JSON */}
          <div style={{
            background:"var(--bg2)",border:"1px solid var(--line)",
            borderRadius:6,padding:"1.4rem",fontFamily:"var(--mono)",fontSize:11,
          }}>
            <div style={{color:"var(--muted)",marginBottom:"0.5rem",fontSize:10,letterSpacing:"0.08em"}}>
              $ node -e "console.log(engineer.metrics)"
            </div>
            <div style={{color:"var(--muted)"}}>{"{"}</div>
            {FACTS.map(f => (
              <div key={f.key} style={{paddingLeft:"1.2rem",lineHeight:2}}
                dangerouslySetInnerHTML={{__html:
                  `<span style="color:var(--blue)">"${f.key}"</span>` +
                  `<span style="color:var(--muted)">: </span>` +
                  `<span style="color:var(--green2)">"${f.val}"</span>` +
                  `<span style="color:var(--muted)">,</span>` +
                  `<span style="color:var(--muted2);font-size:10px"> // ${f.note}</span>`
                }}
              />
            ))}
            <div style={{color:"var(--muted)"}}>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
