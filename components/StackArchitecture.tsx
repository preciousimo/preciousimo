"use client";
import { useState } from "react";

const NODES = [
  // Row 0 - clients
  {id:"web",label:"Web Client",sub:"React/Next.js",x:200,y:40,color:"var(--blue)"},
  {id:"mobile",label:"Mobile",sub:"React Native",x:400,y:40,color:"var(--blue)"},
  {id:"api-client",label:"API Client",sub:"Postman/SDK",x:600,y:40,color:"var(--blue)"},
  // Row 1 - gateway
  {id:"gateway",label:"API Gateway",sub:"Rate Limiting · Auth",x:400,y:150,color:"var(--amber)"},
  // Row 2 - services
  {id:"auth",label:"Auth Service",sub:"JWT · RBAC",x:120,y:270,color:"var(--green)"},
  {id:"core",label:"Core API",sub:"Django · FastAPI",x:320,y:270,color:"var(--green)"},
  {id:"pay",label:"Payment Svc",sub:"Idempotent txns",x:520,y:270,color:"var(--green)"},
  {id:"media",label:"Media Svc",sub:"S3 · Licensing",x:720,y:270,color:"var(--green)"},
  // Row 3 - data
  {id:"pg",label:"PostgreSQL",sub:"Primary DB",x:220,y:390,color:"var(--red)"},
  {id:"redis",label:"Redis",sub:"Cache · Queue",x:420,y:390,color:"var(--red)"},
  {id:"s3",label:"S3 / GCS",sub:"Object Store",x:620,y:390,color:"var(--red)"},
  // Row 4 - infra
  {id:"ci",label:"CI/CD",sub:"GitHub Actions",x:200,y:500,color:"var(--muted)"},
  {id:"docker",label:"Docker",sub:"Containerized",x:400,y:500,color:"var(--muted)"},
  {id:"monitor",label:"Monitoring",sub:"Logs · Alerts",x:600,y:500,color:"var(--muted)"},
];

const EDGES = [
  ["web","gateway"],["mobile","gateway"],["api-client","gateway"],
  ["gateway","auth"],["gateway","core"],["gateway","pay"],["gateway","media"],
  ["auth","pg"],["core","pg"],["core","redis"],["pay","pg"],["pay","redis"],["media","s3"],
  ["pg","docker"],["redis","docker"],["docker","ci"],["docker","monitor"],
];

export default function StackArchitecture() {
  const [hovered, setHovered] = useState<string|null>(null);
  const W=840, H=560;

  const nodeMap = Object.fromEntries(NODES.map(n=>[n.id,n]));

  return (
    <section id="stack" style={{padding:"5rem 0",borderBottom:"1px solid var(--line)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>05</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>SYSTEM ARCHITECTURE</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
        </div>

        <div style={{
          background:"var(--bg2)",border:"1px solid var(--line)",borderRadius:8,
          padding:"2rem",overflow:"auto",
        }}>
          <svg viewBox={`0 0 ${W} ${H}`} style={{width:"100%",height:"auto",fontFamily:"var(--mono)"}}>
            <defs>
              <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="#333" />
              </marker>
            </defs>

            {/* edges */}
            {EDGES.map(([a,b],i) => {
              const na=nodeMap[a], nb=nodeMap[b];
              if(!na||!nb) return null;
              const isHot = hovered===a||hovered===b;
              return (
                <line key={i}
                  x1={na.x} y1={na.y+20}
                  x2={nb.x} y2={nb.y-20}
                  stroke={isHot?"#444":"#1e1e1e"} strokeWidth={isHot?1.5:1}
                  markerEnd="url(#arrow)"
                  style={{transition:"all 0.2s"}}
                />
              );
            })}

            {/* nodes */}
            {NODES.map(n => {
              const isHot = hovered===n.id;
              return (
                <g key={n.id} transform={`translate(${n.x},${n.y})`}
                  onMouseEnter={()=>setHovered(n.id)}
                  onMouseLeave={()=>setHovered(null)}
                  style={{cursor:"pointer"}}>
                  <rect x={-60} y={-22} width={120} height={44}
                    rx={4} ry={4}
                    fill={isHot?"#1a1a1a":"#111"}
                    stroke={isHot?n.color:"#1e1e1e"}
                    strokeWidth={isHot?1.5:1}
                    style={{transition:"all 0.2s"}}
                  />
                  <text x={0} y={-4} textAnchor="middle" fontSize={10}
                    fill={isHot?n.color:"#888"} fontWeight="600"
                    style={{transition:"fill 0.2s"}}>
                    {n.label}
                  </text>
                  <text x={0} y={10} textAnchor="middle" fontSize={8} fill="#444">
                    {n.sub}
                  </text>
                </g>
              );
            })}

            {/* layer labels */}
            {[
              {y:40,label:"CLIENT LAYER"},
              {y:150,label:"GATEWAY"},
              {y:270,label:"SERVICES"},
              {y:390,label:"DATA LAYER"},
              {y:500,label:"INFRASTRUCTURE"},
            ].map(l => (
              <text key={l.y} x={W-10} y={l.y+5} textAnchor="end" fontSize={8} fill="#2a2a2a" letterSpacing="0.08em">
                {l.label}
              </text>
            ))}
          </svg>
        </div>

        {/* skills grid */}
        <div className="stack-grid">
          {[
            {g:"AWS & Cloud",items:["AWS (ECS/Lambda)","GCP","Docker","K8s"]},
            {g:"Backend",items:["NestJS (TS)","Python","Django","FastAPI"]},
            {g:"AI Agents",items:["LangChain","CrewAI","Vector DBs","Agentic Flows"]},
            {g:"DB & Cache",items:["PostgreSQL","Redis","DynamoDB"]},
            {g:"CI/CD & DevOps",items:["GitHub Actions","Zero-downtime","Terraform"]},
            {g:"Payments",items:["Stripe","Paystack","Flutterwave"]},
          ].map(sg => (
            <div key={sg.g} className="glass-panel" style={{
              borderRadius:6,padding:"1rem",
            }}>
              <div style={{fontFamily:"var(--mono)",fontSize:9,color:"var(--green)",letterSpacing:"0.08em",marginBottom:"0.6rem"}}>
                #{sg.g.toUpperCase().replace(" ","_")}
              </div>
              {sg.items.map(item => (
                <div key={item} style={{
                  fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",
                  padding:"2px 0",borderBottom:"1px solid var(--line2)",
                }}>{item}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
