"use client";
import { useEffect, useRef, useState } from "react";

function useInterval(fn: () => void, ms: number) {
  useEffect(() => { const id = setInterval(fn, ms); return () => clearInterval(id); }, [fn, ms]);
}

function Sparkline({ data, color }: { data: number[]; color: string }) {
  const W = 120, H = 36;
  const max = Math.max(...data, 1);
  const pts = data.map((v, i) => `${(i/(data.length-1))*W},${H - (v/max)*H}`).join(" ");
  return (
    <svg width={W} height={H} style={{overflow:"visible"}}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round" />
      <line x1={data.length > 1 ? (((data.length-1)/(data.length-1))*W) : 0}
            x2={data.length > 1 ? (((data.length-1)/(data.length-1))*W) : 0}
            y1={0} y2={H} stroke={color} strokeWidth={1} opacity={0.3} />
    </svg>
  );
}

function MetricCard({ label, value, unit, sub, color, data }: {
  label:string;value:number;unit:string;sub:string;color:string;data:number[];
}) {
  return (
    <div className="glass-panel" style={{
      borderRadius:6,
      padding:"1.2rem 1.4rem",position:"relative",overflow:"hidden",
    }}>
      <div style={{
        position:"absolute",top:0,left:0,right:0,height:2,
        background:`linear-gradient(90deg, ${color}44, ${color})`,
      }} />
      <div style={{fontSize:10,letterSpacing:"0.1em",color:"var(--muted)",marginBottom:"0.5rem",fontFamily:"var(--mono)"}}>{label}</div>
      <div style={{display:"flex",alignItems:"flex-end",gap:6,marginBottom:"0.4rem"}}>
        <span style={{fontFamily:"var(--display)",fontSize:36,color,lineHeight:1}}>{value}</span>
        <span style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--muted)",marginBottom:4}}>{unit}</span>
      </div>
      <div style={{fontSize:10,color:"var(--muted)",fontFamily:"var(--mono)",marginBottom:"0.8rem"}}>{sub}</div>
      <Sparkline data={data} color={color} />
    </div>
  );
}

function RequestsChart({ requests }: { requests: number[] }) {
  const max = Math.max(...requests, 1);
  return (
    <div className="glass-panel" style={{
      borderRadius:6,
      padding:"1.4rem",
    }}>
      <div style={{
        display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.2rem"
      }}>
        <div>
          <div style={{fontSize:10,letterSpacing:"0.1em",color:"var(--muted)",fontFamily:"var(--mono)"}}>REQUESTS / SEC</div>
          <div style={{fontFamily:"var(--display)",fontSize:28,color:"var(--blue)"}}>
            {requests[requests.length-1]} <span style={{fontFamily:"var(--mono)",fontSize:12,color:"var(--muted)"}}>req/s</span>
          </div>
        </div>
        <div style={{textAlign:"right",fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)"}}>
          <div style={{color:"var(--green)"}}>● 99.9% uptime</div>
          <div>avg latency: 42ms</div>
        </div>
      </div>
      <div style={{display:"flex",alignItems:"flex-end",gap:3,height:80}}>
        {requests.map((r, i) => (
          <div key={i} style={{
            flex:1,background:`rgba(56,189,248,${0.15 + (r/max)*0.5})`,
            borderRadius:"2px 2px 0 0",
            height:`${(r/max)*100}%`,
            borderTop:`1px solid rgba(56,189,248,${0.3+(r/max)*0.5})`,
            transition:"height 0.5s ease",
          }} />
        ))}
      </div>
      <div style={{display:"flex",justifyContent:"space-between",marginTop:6,fontFamily:"var(--mono)",fontSize:9,color:"var(--muted)"}}>
        <span>-60s</span><span>-40s</span><span>-20s</span><span>now</span>
      </div>
    </div>
  );
}

const LOG_TEMPLATES = [
  { service: "axon-payment-api (NestJS)", type: "INFO", msg: "NestJS core payment controller initialized" },
  { service: "axon-payment-api (NestJS)", type: "SUCCESS", msg: "NestJS microservice payment txn settled in 24ms" },
  { service: "vitanips-ai-agent", type: "INFO", msg: "LangChain diagnostic agent analyzing patient chart..." },
  { service: "vitanips-ai-agent", type: "SUCCESS", msg: "CrewAI sub-agent successfully parsed and routed records" },
  { service: "republic-media-svc", type: "INFO", msg: "AWS S3 object synchronization completed successfully" },
  { service: "republic-media-svc", type: "SUCCESS", msg: "AWS CloudFront edge distribution cache purged" },
  { service: "farmtrack-alerts", type: "WARN", msg: "AWS Lambda execution capacity usage at 82%" },
  { service: "farmtrack-alerts", type: "INFO", msg: "AWS DynamoDB write throughput successfully scaled up" }
];

export default function MetricsDashboard() {
  const [cpu, setCpu] = useState<number[]>([42,45,38,52,48,44,50,46,43,55]);
  const [mem, setMem] = useState<number[]>([68,67,69,71,70,68,72,71,69,73]);
  const [lat, setLat] = useState<number[]>([38,42,35,44,40,38,46,41,39,43]);
  const [reqs, setReqs] = useState<number[]>([
    1311, 1420, 1580, 1390, 1620, 1750, 1490, 1320, 1680, 1550,
    1790, 1850, 1610, 1470, 1520, 1690, 1730, 1580, 1640, 1810
  ]);
  const [logs, setLogs] = useState<{time:string, service:string, type:string, msg:string}[]>([
    { time: "16:51:00", service: "axon-payment-api", type: "INFO", msg: "Starting auth verification..." },
    { time: "16:51:02", service: "axon-payment-api", type: "SUCCESS", msg: "Webhook verified successfully" },
    { time: "16:51:05", service: "vitanips-core", type: "INFO", msg: "Database connection pools established" },
    { time: "16:51:08", service: "republic-media-svc", type: "SUCCESS", msg: "Static server pre-rendered successfully" },
  ]);

  const logsEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logsEndRef.current) {
      logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
    }
  }, [logs]);

  useInterval(() => {
    setCpu(a => [...a.slice(-9), Math.floor(Math.random() * 20 + 38)]);
    setMem(a => [...a.slice(-9), Math.floor(Math.random() * 10 + 65)]);
    setLat(a => [...a.slice(-9), Math.floor(Math.random() * 15 + 34)]);
    setReqs(a => [...a.slice(-19), Math.floor(Math.random() * 800 + 1200)]);

    const now = new Date();
    const timeStr = now.toTimeString().split(' ')[0];
    const template = LOG_TEMPLATES[Math.floor(Math.random() * LOG_TEMPLATES.length)];
    setLogs(prev => [...prev.slice(-19), { time: timeStr, ...template }]);
  }, 1500);

  return (
    <section id="metrics" style={{padding:"5rem 0",borderBottom:"1px solid var(--line)"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>02</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>SYSTEM METRICS</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
          <div style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--green2)"}}>● LIVE</div>
        </div>

        <div className="metrics-cards" style={{marginBottom:"1rem"}}>
          <MetricCard label="CPU USAGE" value={cpu[cpu.length-1]} unit="%" sub={`peak: ${Math.max(...cpu)}%`} color="var(--green)" data={cpu} />
          <MetricCard label="MEMORY" value={mem[mem.length-1]} unit="%" sub="8GB / 11.7GB used" color="var(--amber)" data={mem} />
          <MetricCard label="AVG LATENCY" value={lat[lat.length-1]} unit="ms" sub="p99: 120ms" color="var(--blue)" data={lat} />
          <MetricCard label="ERROR RATE" value={0.1} unit="%" sub="SLA: < 0.5%" color="var(--red)" data={[0.1,0.1,0.2,0.1,0.1,0.0,0.1,0.1,0.1,0.1]} />
        </div>
        <div className="metrics-lower-grid">
          <RequestsChart requests={reqs} />
          <div className="glass-panel" style={{
            borderRadius:6,padding:"1.4rem",
          }}>
            <div style={{fontSize:10,letterSpacing:"0.1em",color:"var(--muted)",marginBottom:"1rem",fontFamily:"var(--mono)"}}>SERVICE HEALTH</div>
            {[
              {name:"axon-payment-api (NestJS)",status:"UP",lat:24,method:"POST /v1/payments"},
              {name:"vitanips-ai-agent",status:"UP",lat:120,method:"POST /agent/diagnose"},
              {name:"republic-media-svc",status:"UP",lat:19,method:"GET /assets"},
              {name:"farmtrack-alerts",status:"UP",lat:55,method:"WS /stream"},
            ].map(s => (
              <div key={s.name} style={{
                display:"flex",alignItems:"center",justifyContent:"space-between",
                padding:"0.5rem 0",borderBottom:"1px solid var(--line)",
                fontFamily:"var(--mono)",fontSize:11,
              }}>
                <div style={{display:"flex",alignItems:"center",gap:8}}>
                  <div style={{width:6,height:6,borderRadius:"50%",background:"var(--green)",
                    boxShadow:"0 0 6px var(--green)",animation:"pulse-ring 2s infinite"}} />
                  <div>
                    <div style={{color:"var(--white)",fontSize:11}}>{s.name}</div>
                    <div style={{color:"var(--muted)",fontSize:9}}>{s.method}</div>
                  </div>
                </div>
                <div style={{color:"var(--muted)",fontSize:10}}>{s.lat}ms</div>
              </div>
            ))}
          </div>

          {/* SYSTEM LOGS TERMINAL */}
          <div style={{
            background:"var(--bg2)",border:"1px solid var(--line)",borderRadius:6,padding:"1.4rem",
            display:"flex",flexDirection:"column",height:"100%",minHeight:240,
          }}>
            <div style={{
              display:"flex",justifyContent:"space-between",alignItems:"center",
              marginBottom:"1rem",borderBottom:"1px solid var(--line)",paddingBottom:"0.4rem"
            }}>
              <span style={{fontSize:10,letterSpacing:"0.1em",color:"var(--muted)",fontFamily:"var(--mono)"}}>SYSTEM ACTIVITY LOGS</span>
              <span style={{fontSize:9,fontFamily:"var(--mono)",color:"var(--green)"}}>● RUNNING</span>
            </div>
            <div 
              ref={logsEndRef}
              style={{
                flex:1,overflowY:"auto",fontFamily:"var(--mono)",fontSize:10,
                color:"var(--white2)",lineHeight:1.6,maxHeight:160,
                display:"flex",flexDirection:"column",gap:4
              }}
            >
              {logs.map((log, i) => (
                <div key={i} style={{wordBreak:"break-all"}}>
                  <span style={{color:"var(--muted)"}}>[{log.time}]</span>{" "}
                  <span style={{color:
                    log.service.includes("axon") ? "var(--amber)" :
                    log.service.includes("vitanips") ? "var(--blue)" :
                    log.service.includes("republic") ? "var(--green)" : "var(--white)"
                  }}>{log.service}</span>{" "}
                  <span style={{color: 
                    log.type === "SUCCESS" ? "var(--green)" : 
                    log.type === "WARN" ? "var(--amber)" : "var(--white)"
                  }}>{log.type}:</span>{" "}
                  {log.msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
