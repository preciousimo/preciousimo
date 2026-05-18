"use client";
import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("xgoqegog");

  const copy = () => {
    navigator.clipboard.writeText("preciousimoniakemu@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" style={{padding:"5rem 0"}}>
      <div style={{maxWidth:1100,margin:"0 auto",padding:"0 2rem"}}>
        <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"3rem"}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)"}}>06</span>
          <h2 style={{fontFamily:"var(--display)",fontSize:"clamp(1.8rem,4vw,3rem)",color:"var(--white)",letterSpacing:"0.02em"}}>CONTACT</h2>
          <div style={{flex:1,height:1,background:"var(--line)"}} />
        </div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"4rem",alignItems:"start"}}>
          <div>
            <h3 style={{
              fontFamily:"var(--display)",fontSize:"clamp(2rem,5vw,3.5rem)",
              color:"var(--white)",lineHeight:0.95,marginBottom:"1.5rem",letterSpacing:"0.02em",
            }}>
              LET'S BUILD<br />
              <span style={{color:"var(--green)"}}>SOMETHING</span><br />
              THAT HOLDS.
            </h3>
            <p style={{fontFamily:"var(--body)",fontSize:14,color:"#888",lineHeight:1.8,marginBottom:"2rem"}}>
              Open to engineering roles, contracts, and technical partnerships — especially in fintech, healthtech, or infrastructure-heavy environments.
            </p>

            {!showForm ? (
              <button 
                onClick={() => setShowForm(true)}
                style={{
                  display:"inline-block",fontFamily:"var(--mono)",fontSize:12,fontWeight:700,
                  background:"var(--green)",color:"#000",border:"none",cursor:"pointer",
                  padding:"12px 28px",borderRadius:4,
                  letterSpacing:"0.08em",transition:"all 0.2s",
                }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="var(--green2)"}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="var(--green)"}}
              >
                ./initiate_contact →
              </button>
            ) : (
              <form onSubmit={handleSubmit} style={{
                background:"var(--bg2)",border:"1px solid var(--line)",borderRadius:6,
                padding:"1.6rem",marginTop:"1rem",
                display:"flex",flexDirection:"column",gap:"1.1rem",
              }}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid var(--line)",paddingBottom:"0.4rem",marginBottom:"0.4rem"}}>
                  <span style={{fontFamily:"var(--mono)",fontSize:10,color:"var(--green)"}}>❯ SECURE_COMMUNICATION_PROTOCOL</span>
                  <button 
                    type="button"
                    onClick={() => setShowForm(false)}
                    style={{background:"transparent",border:"none",color:"var(--muted)",fontFamily:"var(--mono)",fontSize:10,cursor:"pointer"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="var(--amber)"}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="var(--muted)"}}
                  >
                    [CLOSE]
                  </button>
                </div>

                {state.succeeded ? (
                  <div style={{fontFamily:"var(--mono)",fontSize:11,color:"var(--green)",lineHeight:1.6,padding:"1.5rem 0",textAlign:"center"}}>
                    <div style={{fontSize:20,marginBottom:"0.5rem"}}>✓</div>
                    <div style={{fontWeight:700,letterSpacing:"0.1em"}}>TRANSMISSION SUCCESSFUL</div>
                    <div style={{color:"var(--muted)",marginTop:"0.5rem",fontSize:10}}>Your message has been routed to Precious's secure server.</div>
                    <button 
                      type="button" 
                      onClick={() => { setShowForm(false); setName(""); setEmail(""); setSubject(""); setMessage(""); }}
                      style={{
                        marginTop:"1.2rem",background:"transparent",border:"1px solid var(--green)",
                        color:"var(--green)",fontFamily:"var(--mono)",fontSize:9,padding:"5px 12px",
                        borderRadius:4,cursor:"pointer",transition:"all 0.2s"
                      }}
                      onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="var(--green)";el.style.color="#000"}}
                      onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="transparent";el.style.color="var(--green)"}}
                    >
                      ./reset_terminal
                    </button>
                  </div>
                ) : (
                  <>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.8rem"}}>
                      <div>
                        <label style={{display:"block",fontFamily:"var(--mono)",fontSize:8,color:"var(--muted)",marginBottom:4,letterSpacing:"0.06em"}}>NAME</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={name}
                          onChange={e=>setName(e.target.value)}
                          placeholder="e.g. John Doe"
                          style={{
                            width:"100%",background:"var(--bg3)",border:"1px solid var(--line2)",
                            borderRadius:4,padding:"8px 10px",color:"var(--white)",fontFamily:"var(--mono)",
                            fontSize:11,outline:"none",transition:"border-color 0.2s"
                          }}
                          onFocus={e=>{e.currentTarget.style.borderColor="var(--green)"}}
                          onBlur={e=>{e.currentTarget.style.borderColor="var(--line2)"}}
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} style={{color:"var(--amber)",fontSize:8,fontFamily:"var(--mono)"}} />
                      </div>
                      <div>
                        <label style={{display:"block",fontFamily:"var(--mono)",fontSize:8,color:"var(--muted)",marginBottom:4,letterSpacing:"0.06em"}}>EMAIL</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                          placeholder="e.g. john@company.com"
                          style={{
                            width:"100%",background:"var(--bg3)",border:"1px solid var(--line2)",
                            borderRadius:4,padding:"8px 10px",color:"var(--white)",fontFamily:"var(--mono)",
                            fontSize:11,outline:"none",transition:"border-color 0.2s"
                          }}
                          onFocus={e=>{e.currentTarget.style.borderColor="var(--green)"}}
                          onBlur={e=>{e.currentTarget.style.borderColor="var(--line2)"}}
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} style={{color:"var(--amber)",fontSize:8,fontFamily:"var(--mono)"}} />
                      </div>
                    </div>

                    <div>
                      <label style={{display:"block",fontFamily:"var(--mono)",fontSize:8,color:"var(--muted)",marginBottom:4,letterSpacing:"0.06em"}}>SUBJECT</label>
                      <input 
                        type="text" 
                        name="_subject"
                        required
                        value={subject}
                        onChange={e=>setSubject(e.target.value)}
                        placeholder="e.g. Technical Partnership / Engineering Role"
                        style={{
                          width:"100%",background:"var(--bg3)",border:"1px solid var(--line2)",
                          borderRadius:4,padding:"8px 10px",color:"var(--white)",fontFamily:"var(--mono)",
                          fontSize:11,outline:"none",transition:"border-color 0.2s"
                        }}
                        onFocus={e=>{e.currentTarget.style.borderColor="var(--green)"}}
                        onBlur={e=>{e.currentTarget.style.borderColor="var(--line2)"}}
                      />
                      <ValidationError prefix="Subject" field="_subject" errors={state.errors} style={{color:"var(--amber)",fontSize:8,fontFamily:"var(--mono)"}} />
                    </div>

                    <div>
                      <label style={{display:"block",fontFamily:"var(--mono)",fontSize:8,color:"var(--muted)",marginBottom:4,letterSpacing:"0.06em"}}>MESSAGE BODY</label>
                      <textarea 
                        name="message"
                        required
                        rows={4}
                        value={message}
                        onChange={e=>setMessage(e.target.value)}
                        placeholder="Type details of your request..."
                        style={{
                          width:"100%",background:"var(--bg3)",border:"1px solid var(--line2)",
                          borderRadius:4,padding:"8px 10px",color:"var(--white)",fontFamily:"var(--mono)",
                          fontSize:11,outline:"none",transition:"border-color 0.2s",resize:"none"
                        }}
                        onFocus={e=>{e.currentTarget.style.borderColor="var(--green)"}}
                        onBlur={e=>{e.currentTarget.style.borderColor="var(--line2)"}}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} style={{color:"var(--amber)",fontSize:8,fontFamily:"var(--mono)"}} />
                    </div>

                    {state.errors && (
                      <div style={{
                        background:"rgba(255, 170, 0, 0.05)",
                        border:"1px solid var(--amber)",
                        borderRadius:4,
                        padding:"10px 14px",
                        marginBottom:"1rem",
                        fontFamily:"var(--mono)",
                        fontSize:10,
                        lineHeight:1.5
                      }}>
                        <span style={{color:"var(--amber)",fontWeight:700,display:"block",marginBottom:4}}>❯ ERROR: TRANSMISSION_BLOCKED (403)</span>
                        <ValidationError errors={state.errors} style={{color:"var(--white2)"}} />
                      </div>
                    )}

                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      style={{
                        background:state.submitting ? "var(--bg3)" : "var(--green)",
                        color:"#000",border:"none",fontFamily:"var(--mono)",fontSize:11,
                        fontWeight:700,padding:"10px 0",borderRadius:4,cursor:"pointer",
                        letterSpacing:"0.1em",transition:"all 0.2s",
                      }}
                      onMouseEnter={e=>{if(!state.submitting) (e.currentTarget as HTMLElement).style.background="var(--green2)"}}
                      onMouseLeave={e=>{if(!state.submitting) (e.currentTarget as HTMLElement).style.background="var(--green)"}}
                    >
                      {state.submitting ? "TRANSMITTING DATA..." : "./transmit_message →"}
                    </button>
                  </>
                )}
              </form>
            )}
          </div>

          <div style={{fontFamily:"var(--mono)",fontSize:12}}>
            {[
              {label:"email",val:"preciousimoniakemu@gmail.com",href:"mailto:preciousimoniakemu@gmail.com",copyable:true},
              {label:"phone",val:"+234 814 996 0190",href:"tel:+2348149960190",copyable:false},
              {label:"github",val:"github.com/preciousimo",href:"https://github.com/preciousimo",copyable:false},
              {label:"linkedin",val:"in/precious-imoniakemu",href:"https://www.linkedin.com/in/precious-imoniakemu-80654b271/",copyable:false},
              {label:"location",val:"Lagos, Nigeria · Remote OK",href:null,copyable:false},
            ].map(item => (
              <div key={item.label} style={{
                display:"flex",alignItems:"center",gap:"1rem",
                padding:"1rem 0",borderBottom:"1px solid var(--line)",
              }}>
                <span style={{color:"var(--muted)",width:70,flexShrink:0,fontSize:10,letterSpacing:"0.08em"}}>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined}
                    rel="noopener" style={{color:"var(--white2)",textDecoration:"none",flex:1,fontSize:12,transition:"color 0.2s"}}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.color="var(--green)"}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.color="var(--white2)"}}
                  >{item.val}</a>
                ) : (
                  <span style={{color:"var(--white2)",flex:1,fontSize:12}}>{item.val}</span>
                )}
                {item.copyable && (
                  <button onClick={copy} style={{
                    fontFamily:"var(--mono)",fontSize:9,color:copied?"var(--green)":"var(--muted)",
                    background:"transparent",border:"1px solid var(--line2)",
                    padding:"3px 8px",borderRadius:3,cursor:"pointer",letterSpacing:"0.06em",
                    transition:"all 0.2s",
                  }}>
                    {copied ? "✓ copied" : "copy"}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{
        maxWidth:1100,margin:"4rem auto 0",padding:"2rem 2rem 0",
        borderTop:"1px solid var(--line)",
        display:"flex",justifyContent:"space-between",alignItems:"center",
        fontFamily:"var(--mono)",fontSize:10,color:"var(--muted)",
      }}>
        <span>© 2025 Precious Imoniakemu</span>
        <span style={{color:"var(--muted2)"}}>built with precision · deployed with intent</span>
        <span><span style={{color:"var(--green2)"}}>●</span> Lagos, NG</span>
      </footer>
    </section>
  );
}
