"use client";
import { useState } from "react";

const ENDPOINTS = [
  {
    method:"GET",path:"/api/v1/engineer/profile",
    desc:"Returns full engineer profile and metadata",
    response:{
      status:200,data:{
        name:"Precious Imoniakemu",role:"Software & DevOps Engineer",
        experience_years:5,location:"Lagos, NG",
        uptime_sla:"99.9%",latency_reduced:"60%",
        specializations:["Fintech","HealthTech","Cloud Infrastructure","CI/CD"],
        available_for_hire:true,
      }
    }
  },
  {
    method:"GET",path:"/api/v1/engineer/stack",
    desc:"Returns full tech stack inventory",
    response:{
      status:200,data:{
        cloud:["AWS (ECS, Lambda, RDS, S3)","GCP","Docker","Terraform"],
        backend:["NestJS","Python","Django","FastAPI","Node.js"],
        ai_agents:["LangChain","CrewAI","Semantic Routing","Vector Search"],
        databases:["PostgreSQL","Redis","DynamoDB"],
        cicd:["GitHub Actions","automated-pipelines"],
        frontend:["React","Next.js","Tailwind CSS"],
      }
    }
  },
  {
    method:"POST",path:"/api/v1/engineer/hire",
    desc:"Initiate a hiring request",
    body:`{\n  "company": "Your Company",\n  "role": "Senior Backend Engineer",\n  "message": "Let's build something."\n}`,
    response:{
      status:201,data:{
        request_id:"hire_a3f9b1c",
        status:"accepted",
        response_time:"< 24h",
        contact:"preciousimoniakemu@gmail.com",
        next_step:"Technical discussion → System design → Offer",
      }
    }
  },
  {
    method:"GET",path:"/api/v1/engineer/metrics",
    desc:"Returns performance metrics from past projects",
    response:{
      status:200,data:{
        transaction_success_rate:"99.9%",
        api_latency_reduced:"30-60%",
        cloud_cost_reduction:"25%",
        test_coverage:"~95%",
        deployment_errors_reduced:"80%",
        users_served:3700,
        daily_requests_handled:2000,
        monthly_payment_volume:"$4K+",
      }
    }
  },
];

export default function APIPlayground() {
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<object | null>(null);
  const [requestTime, setRequestTime] = useState<number | null>(null);

  const hit = () => {
    setLoading(true);
    setResponse(null);
    const start = Date.now();
    const delay = Math.floor(Math.random()*80+20);
    setTimeout(() => {
      setResponse(ENDPOINTS[active].response);
      setRequestTime(Date.now()-start);
      setLoading(false);
    }, delay);
  };

  const ep = ENDPOINTS[active];
  const methodColor = ep.method === "GET" ? "var(--green)" : ep.method === "POST" ? "var(--amber)" : "var(--blue)";

  return (
    <section id="api" style={{padding:"5rem 0",borderBottom:"1px solid var(--line)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>04</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>API PLAYGROUND</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
          <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)"}}>LIVE · try it</div>
        </div>

        <div className="api-playground-grid">
          {/* endpoint list */}
          <div className="card-panel" style={{overflow:"hidden"}}>
            <div style={{padding:"0.8rem 1rem",borderBottom:"1px solid var(--line)",fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",letterSpacing:"0.08em"}}>
              ENDPOINTS
            </div>
            {ENDPOINTS.map((e,i) => (
              <div key={i} onClick={()=>{setActive(i);setResponse(null);setRequestTime(null);}}
                style={{
                  padding:"0.8rem 1rem",borderBottom:"1px solid var(--line)",cursor:"pointer",
                  background:active===i?"rgba(0,255,136,0.04)":"transparent",
                  transition:"background 0.15s",
                }}
                onMouseEnter={ev=>{if(active!==i)(ev.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.02)"}}
                onMouseLeave={ev=>{if(active!==i)(ev.currentTarget as HTMLElement).style.background="transparent"}}
              >
                <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:"0.2rem"}}>
                  <span style={{
                    fontFamily:"var(--mono)",fontSize:9,fontWeight:700,
                    color:e.method==="GET"?"var(--green)":e.method==="POST"?"var(--amber)":"var(--blue)",
                    background:e.method==="GET"?"rgba(0,255,136,0.1)":e.method==="POST"?"rgba(245,166,35,0.1)":"rgba(56,189,248,0.1)",
                    padding:"1px 5px",borderRadius:2,
                  }}>{e.method}</span>
                </div>
                <div style={{fontFamily:"var(--mono)",fontSize:10,color:active===i?"var(--green)":"var(--muted2)",wordBreak:"break-all"}}>{e.path}</div>
              </div>
            ))}
          </div>

          {/* request/response */}
          <div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            {/* request bar */}
            <div className="card-panel" style={{
              padding:"1rem 1.2rem",display:"flex",alignItems:"center",gap:"1rem",
            }}>
              <span style={{
                fontFamily:"var(--mono)",fontSize:11,fontWeight:700,color:methodColor,
                background:`${methodColor}18`,padding:"4px 10px",borderRadius:3,
              }}>{ep.method}</span>
              <div style={{flex:1,fontFamily:"var(--mono)",fontSize:12,color:"var(--white2)"}}>{ep.path}</div>
              <button onClick={hit} disabled={loading} style={{
                fontFamily:"var(--mono)",fontSize:11,
                background:loading?"var(--muted2)":"var(--green)",
                color:loading?"var(--muted)":"#000",fontWeight:700,
                border:"none",padding:"8px 18px",borderRadius:4,cursor:loading?"not-allowed":"pointer",
                letterSpacing:"0.06em",transition:"all 0.2s",
              }}>
                {loading ? "sending..." : "▶ send"}
              </button>
            </div>

            <div style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)",paddingLeft:2}}>{ep.desc}</div>

            {/* body if POST */}
            {ep.body && (
              <div className="card-panel" style={{
                overflow:"hidden",
              }}>
                <div style={{padding:"0.6rem 1rem",borderBottom:"1px solid var(--line)",fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)"}}>REQUEST BODY</div>
                <pre style={{padding:"1rem",fontFamily:"var(--mono)",fontSize:11,color:"var(--amber)",overflow:"auto"}}>{ep.body}</pre>
              </div>
            )}

            {/* response */}
            <div className="card-panel" style={{
              overflow:"hidden",flex:1,
            }}>
              <div style={{
                padding:"0.6rem 1rem",borderBottom:"1px solid var(--line)",
                display:"flex",justifyContent:"space-between",alignItems:"center",
                fontFamily:"var(--mono)",fontSize:10,
              }}>
                <span style={{color:"var(--muted)"}}>RESPONSE</span>
                {response && (
                  <div style={{display:"flex",gap:"1rem"}}>
                    <span style={{color:"var(--green)"}}>200 OK</span>
                    <span style={{color:"var(--muted)"}}>{requestTime}ms</span>
                  </div>
                )}
              </div>
              <pre style={{
                padding:"1.2rem",fontFamily:"var(--mono)",fontSize:11,
                color:"var(--white2)",overflow:"auto",minHeight:160,
                lineHeight:1.7,
              }}>
                {loading && <span style={{color:"var(--muted)"}}>Connecting to devbox.lagos.ng...</span>}
                {!loading && !response && <span style={{color:"var(--muted)"}}>// Hit "send" to make a request</span>}
                {!loading && response && (
                  <span dangerouslySetInnerHTML={{__html:
                    JSON.stringify(response, null, 2)
                      .replace(/"([^"]+)":/g, '<span style="color:var(--blue)">"$1"</span>:')
                      .replace(/: "([^"]+)"/g, ': <span style="color:var(--green2)">"$1"</span>')
                      .replace(/: (\d+\.?\d*)/g, ': <span style="color:var(--amber)">$1</span>')
                      .replace(/: (true|false)/g, ': <span style="color:var(--red)">$1</span>')
                  }} />
                )}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
