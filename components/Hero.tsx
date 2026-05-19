"use client";
import { useEffect, useState, useRef } from "react";
import ParticleCanvas from "./ParticleCanvas";

const ASCII = `
██████╗  ██████╗    ██████╗ ███████╗██╗   ██╗
██╔══██╗██╔═══██╗   ██╔══██╗██╔════╝██║   ██║
██████╔╝██║   ██║   ██║  ██║█████╗  ██║   ██║
██╔═══╝ ██║   ██║   ██║  ██║██╔══╝  ╚██╗ ██╔╝
██║     ╚██████╔╝██╗██████╔╝███████╗ ╚████╔╝ 
╚═╝      ╚═════╝╚═╝╚═════╝ ╚══════╝  ╚═══╝  `;

const LINES = [
  { prompt: "❯", cmd: "ssh precious@devbox.lagos.ng", out: null },
  { prompt: null, cmd: null, out: "Connected. Welcome back, engineer." },
  { prompt: "❯", cmd: "uptime", out: "5+ years  load avg: 99.9% success, 60% faster" },
  { prompt: "❯", cmd: "cat /etc/role", out: "Software & DevOps Engineer — Fintech · HealthTech · Cloud" },
  { prompt: "❯", cmd: "docker ps --filter status=running", out: "axon-api · vitanips-core · the-republic-cms · farmtrack [UP]" },
  { prompt: "❯", cmd: "_", out: null },
];

const RESPONSES: Record<string, string> = {
  help: `Interactive AI Terminal v1.0.0. Available commands:
  neofetch    - Show system specs & tech inventory
  skills      - Print full list of engineering skills
  experience  - View core projects & high-impact achievements
  hire        - Initiate booking / contact pipelines
  clear       - Clear screen history
  
Or ask any question: e.g., "what's your remote availability?" or "tell me about Axon"`,

  neofetch: `          /\\          precious@devbox.lagos.ng
         /  \\         ------------------------
        /\\   \\        OS: PreciousOS v5.2.0-Lagos
       /  \\   \\       Uptime: 5+ years (continuous deployment)
      /    \\   \\      Shell: zsh (interactive-ai-agent)
     /______\\   \\     Resolution: 1920x1080 (Fluid Design)
     \\      /   /     Editor: Neovim / VS Code / Gemini
      \\    /   /      Latency: 42ms (reduced by 60%)
       \\  /   /       Uptime SLA: 99.9% (stable NestJS & AWS rails)
        \\/___/        Specialization: React · NestJS · Django · AWS`,

  skills: `[TECH STACK INVENTORY]
├── BACKEND:   NestJS (TS) ─ Python (Django, FastAPI) ─ Node.js
├── CLOUD:     AWS (ECS, Lambda, RDS, IAM, S3) ─ Docker ─ GCP
├── AI AGENTS: LangChain ─ CrewAI ─ Semantic Routing ─ Agentic Flow
├── DB/CACHE:  PostgreSQL ─ Redis ─ DynamoDB ─ MongoDB
├── CI/CD:     GitHub Actions ─ Blue-Green Deployments
├── FRONTEND:  React ─ Next.js (App Router) ─ Tailwind CSS
└── PAYMENTS:  Stripe ─ Paystack ─ Flutterwave ─ PayPal`,

  experience: `[EXPERIENCE LOG — HIGHLIGHTS]
* a3f9b1c (main) - feat(republic): AWS & NestJS-driven microservices
* 8e2d4f7 (main) - feat(vitanips): AI Agentic patient diagnostic pipelines
* c1a0e5d (main) - perf(axon): Idempotent NestJS payments + AWS scale
* 9f4a7b2 (main) - infra(ada): AWS cost optimization (25% reduction)`,

  hire: `[HIRING PROTOCOL INITIATED]
Availability: Active & open to Senior Full-Stack, Backend & Cloud roles.
Preferences:  Remote (Global) or Hybrid (Lagos, NG).
Email:        preciousimoniakemu@gmail.com
Status:       Available immediately for critical architecture upgrades.
Action:       Run command or use API Playground below to submit details!`,
};

const getAIResponse = (cmd: string): string => {
  const query = cmd.toLowerCase().trim();
  
  if (query.includes("axon") || query.includes("payment") || query.includes("transaction")) {
    return `[AI AGENT SEARCH: AXON]
At Axon, Precious engineered highly scalable, idempotent transaction rails utilizing NestJS and AWS. By building multi-stage Redis caching layers and optimizing relational database operations, he achieved a 99.9% transaction success rate and reduced database response latency by 30-60%.`;
  }
  if (query.includes("vitanips") || query.includes("telemedicine") || query.includes("health") || query.includes("doctor")) {
    return `[AI AGENT SEARCH: VITANIPS]
For VitaNips, Precious architected HIPAA-grade telemedicine pipelines, utilizing FastAPI and NestJS microservices. He designed custom AI Agents powered by LangChain and CrewAI to orchestrate autonomous medical transcription and intelligent patient routing.`;
  }
  if (query.includes("republic") || query.includes("deploy") || query.includes("pipeline") || query.includes("ci/cd")) {
    return `[AI AGENT SEARCH: THE REPUBLIC]
Precious migrated The Republic's architecture to a containerized AWS ECS setup. He engineered automated GitHub Actions CI/CD pipelines, transitioning release cycles from weekly to daily and cutting deployment times by 50% without downtime.`;
  }
  if (query.includes("aws") || query.includes("cloud") || query.includes("infra") || query.includes("cost") || query.includes("optim")) {
    return `[AI AGENT SEARCH: AWS & CLOUD]
Precious is an AWS cloud specialist, routinely working with ECS (Fargate), Lambda, S3, RDS, DynamoDB, and VPC networking. He optimized infrastructure for ADA Global, cutting monthly hosting costs by 25% while maintaining a 99.9% system uptime SLA.`;
  }
  if (query.includes("nest") || query.includes("nestjs")) {
    return `[AI AGENT SEARCH: NESTJS]
Precious is an expert in NestJS and TypeScript. He utilizes Nest's modular architecture, dependency injection, and microservices packages to build secure, highly structured, testable, and enterprise-grade backend systems.`;
  }
  if (query.includes("agent") || query.includes("ai") || query.includes("crewai") || query.includes("langchain")) {
    return `[AI AGENT SEARCH: AI AGENTS]
Precious builds next-generation AI Agentic architectures using LangChain, CrewAI, vector stores, and custom semantic routers. He implements multi-agent orchestrations, memory state management, and autonomous self-correcting backend workflows.`;
  }
  if (query.includes("contact") || query.includes("email") || query.includes("reach") || query.includes("phone")) {
    return `[AI AGENT SEARCH: CONTACT]
You can contact Precious directly via email at preciousimoniakemu@gmail.com, or submit a form in the Contact section at the bottom of the page!`;
  }
  if (query.includes("who") || query.includes("precious") || query.includes("about")) {
    return `[AI AGENT SEARCH: PRECIOUS]
Precious Imoniakemu is a seasoned Software & DevOps Engineer specializing in AWS cloud infrastructure, NestJS and Python backends, and advanced AI Agent system development.`;
  }
  
  return `[AI AGENT RESPONSE]
Interesting query! Precious specializes in AWS, NestJS, and AI Agents. He builds secure backend systems and autonomous workflows. For details, try typing 'skills', 'experience', or ask specifically about 'AWS', 'NestJS', or 'AI Agents'!`;
};

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState("");
  const [currentLine, setCurrentLine] = useState(0);

  // Interactive CLI state
  const [interactive, setInteractive] = useState(false);
  const [history, setHistory] = useState<{type: "cmd" | "out" | "agent", text: string}[]>([]);
  const [inputVal, setInputVal] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamedText, setStreamedText] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let li = 0;
    const showNext = () => {
      if (li >= LINES.length) {
        setInteractive(true);
        setHistory([
          { type: "out", text: "Connected. Welcome back, engineer." },
          { type: "out", text: "uptime: 5+ years  load avg: 99.9% success, 60% faster" },
          { type: "out", text: "role: Software & DevOps Engineer — Fintech · HealthTech · Cloud" },
          { type: "out", text: "status: axon-api · vitanips-core · the-republic-cms · farmtrack [UP]" },
          { type: "out", text: "devbox.lagos.ng — Interactive AI Terminal active.\nType 'help' or ask anything about Precious Imoniakemu." }
        ]);
        return;
      }
      const line = LINES[li];
      if (line.cmd && line.prompt) {
        let ci = 0;
        const typeInterval = setInterval(() => {
          ci++;
          setTyped(line.cmd!.slice(0, ci));
          if (ci >= line.cmd!.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
              setVisibleLines(prev => prev + 1);
              setCurrentLine(prev => prev + 1);
              setTyped("");
              li++;
              setTimeout(showNext, 300);
            }, 200);
          }
        }, 40);
      } else {
        setVisibleLines(prev => prev + 1);
        setCurrentLine(prev => prev + 1);
        li++;
        setTimeout(showNext, 400);
      }
    };
    setTimeout(showNext, 600);
  }, []);

  // Auto scroll terminal
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, streamedText, isStreaming, interactive]);

  const streamText = (fullText: string) => {
    setIsStreaming(true);
    setStreamedText("");
    
    let index = 0;
    const interval = setInterval(() => {
      setStreamedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
        setIsStreaming(false);
        setHistory(prev => [...prev, { type: "out", text: fullText }]);
        setStreamedText("");
      }
    }, 6);
  };

  const executeCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    setHistory(prev => [...prev, { type: "cmd", text: cmd }]);

    if (cleanCmd === "clear") {
      setHistory([
        { type: "out", text: "devbox.lagos.ng — Interactive AI Terminal active.\nType 'help' or ask anything about Precious Imoniakemu." }
      ]);
      return;
    }

    const response = RESPONSES[cleanCmd];
    if (response) {
      streamText(response);
    } else {
      setHistory(prev => [
        ...prev,
        { type: "agent", text: "[ai-agent] Analyzing query semantics..." }
      ]);
      
      setTimeout(() => {
        setHistory(prev => [
          ...prev,
          { type: "agent", text: `[ai-agent] Searching vector DB for matching context...` }
        ]);
        
        setTimeout(() => {
          const aiResponse = getAIResponse(cmd);
          streamText(aiResponse);
        }, 500);
      }, 300);
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isStreaming || !inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal("");
  };

  const handleTerminalClick = () => {
    if (interactive && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <section style={{
      minHeight:"100vh",display:"flex",alignItems:"center",
      position:"relative",overflow:"hidden",
      borderBottom:"1px solid var(--line)",paddingTop:52,
    }}>
      <ParticleCanvas />

      {/* Grid dots bg */}
      <div style={{
        position:"absolute",inset:0,
        backgroundImage:"radial-gradient(circle, #161616 1px, transparent 1px)",
        backgroundSize:"28px 28px",zIndex:0,opacity:0.6,
      }} />

      <div className="hero-grid" style={{
        position:"relative",zIndex:1,width:"100%",maxWidth:1100,
        margin:"0 auto",padding:"0 2rem",
      }}>
        {/* LEFT */}
        <div>
          <pre style={{
            fontFamily:"var(--mono)",fontSize:"clamp(5px,1vw,8px)",
            color:"var(--green)",lineHeight:1.2,marginBottom:"2rem",
            opacity:0.7,letterSpacing:"-0.01em",
          }}>{ASCII}</pre>

          <div style={{marginBottom:"0.5rem",fontFamily:"var(--mono)",fontSize:11,color:"var(--muted)",letterSpacing:"0.1em"}}>
            PRECIOUS IMONIAKEMU
          </div>

          <h1 style={{
            fontFamily:"var(--display)",
            fontSize:"clamp(3rem,7vw,6rem)",
            lineHeight:0.9,
            color:"var(--white)",
            marginBottom:"1.5rem",
            letterSpacing:"0.02em",
          }}>
            SOFTWARE AND<br />
            <span style={{color:"var(--green)",WebkitTextStroke:"1px var(--green)"}}>DEVOPS</span><br />
            ENGINEER
          </h1>

          <p style={{
            fontFamily:"var(--body)",fontSize:14,color:"var(--white2)",
            lineHeight:1.8,marginBottom:"2rem",maxWidth:380,
          }}>
            I build dynamic full-stack platforms that stay up. Seamless React/Next.js interfaces backed by bulletproof NestJS, Django, and AWS infrastructure.
          </p>

          <div style={{display:"flex",gap:"1rem"}}>
            <a href="#api" style={{
              fontFamily:"var(--mono)",fontSize:12,
              background:"var(--green)",color:"#000",fontWeight:700,
              padding:"10px 20px",borderRadius:4,textDecoration:"none",
              letterSpacing:"0.06em",transition:"all 0.2s",
            }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="var(--green2)"}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--green)"}}
            >
              ./try_api →
            </a>
            <a href="#metrics" style={{
              fontFamily:"var(--mono)",fontSize:12,
              background:"transparent",color:"var(--muted)",
              border:"1px solid var(--line2)",
              padding:"10px 20px",borderRadius:4,textDecoration:"none",
              letterSpacing:"0.06em",transition:"all 0.2s",
            }}
            onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--amber)";el.style.color="var(--amber)"}}
            onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="var(--line2)";el.style.color="var(--muted)"}}
            >
              ./view_metrics
            </a>
          </div>
        </div>

        {/* RIGHT — terminal */}
        <div 
          onClick={handleTerminalClick}
          className="glass-panel"
          style={{
            borderRadius:8,overflow:"hidden",fontFamily:"var(--mono)",fontSize:12,
            cursor: interactive ? "text" : "default",
          }}
        >
          <div style={{
            background:"var(--bg3)",padding:"10px 14px",
            display:"flex",alignItems:"center",gap:8,
            borderBottom:"1px solid var(--line)",
          }}>
            {["#ff5f57","#febc2e","#28c840"].map(c => (
              <div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}} />
            ))}
            <span style={{flex:1,textAlign:"center",fontSize:11,color:"var(--muted)"}}>
              precious@devbox — bash
            </span>
            <span style={{fontSize:10,color:"var(--green2)",animation:"pulse-ring 2s infinite"}}>● LIVE</span>
          </div>
          <div 
            ref={terminalBodyRef}
            style={{padding:"1.2rem 1.4rem",height:300,overflowY:"auto",scrollBehavior:"smooth"}}
          >
            {!interactive ? (
              <>
                {LINES.slice(0, visibleLines).map((line, i) => (
                  <div key={i} style={{marginBottom:"0.3rem",lineHeight:1.6}}>
                    {line.prompt && <span style={{color:"var(--green)"}}>❯ </span>}
                    {line.cmd && i < visibleLines - 1 && <span style={{color:"var(--white)"}}>{line.cmd}</span>}
                    {line.cmd && i === visibleLines - 1 && !line.out && (
                      <span style={{color:"var(--white)"}}>{typed}<span className="term-blink" /></span>
                    )}
                    {line.out && <div style={{color:"var(--muted)",paddingLeft: line.prompt ? "0" : "0",marginTop:"0.1rem"}}>{line.out}</div>}
                  </div>
                ))}
                {visibleLines < LINES.length && LINES[visibleLines].prompt && (
                  <div style={{marginBottom:"0.3rem"}}>
                    <span style={{color:"var(--green)"}}>❯ </span>
                    <span style={{color:"var(--white)"}}>{typed}<span className="term-blink" /></span>
                  </div>
                )}
              </>
            ) : (
              <>
                {history.map((line, i) => (
                  <div key={i} style={{marginBottom:"0.4rem",lineHeight:1.6}}>
                    {line.type === "cmd" && (
                      <div>
                        <span style={{color:"var(--green)"}}>❯ </span>
                        <span style={{color:"var(--white)"}}>{line.text}</span>
                      </div>
                    )}
                    {line.type === "out" && (
                      <div style={{color:"var(--white2)",whiteSpace:"pre-wrap"}}>{line.text}</div>
                    )}
                    {line.type === "agent" && (
                      <div style={{color:"var(--green2)",fontFamily:"var(--mono)"}}>{line.text}</div>
                    )}
                  </div>
                ))}
                {isStreaming && (
                  <div style={{color:"var(--white2)",whiteSpace:"pre-wrap",marginBottom:"0.4rem",lineHeight:1.6}}>
                    {streamedText}
                    <span className="term-blink" />
                  </div>
                )}
                {!isStreaming && (
                  <form onSubmit={onSubmit} style={{display:"flex",alignItems:"center",marginTop:"0.4rem"}}>
                    <span style={{color:"var(--green)",marginRight:6}}>❯</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputVal}
                      onChange={e=>setInputVal(e.target.value)}
                      style={{
                        flex:1,background:"transparent",border:"none",outline:"none",
                        color:"var(--white)",fontFamily:"var(--mono)",fontSize:12,
                        caretColor:"var(--green)",
                      }}
                      placeholder="Type help or ask anything..."
                      autoFocus
                    />
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
