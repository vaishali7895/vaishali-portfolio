'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Check, ChevronRight, Download, Code2, BriefcaseBusiness, Mail, Menu, Moon, Send, Sun, X } from 'lucide-react'
import { education, profile, projects, services, skills } from '@/data/portfolio'

const navItems = ['About', 'Skills', 'Projects', 'Education', 'Resume', 'Contact']

export function Portfolio() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    window.setTimeout(() => { setSending(false); setSent(true); event.currentTarget.reset() }, 700)
  }

  return <div className={dark ? 'site dark' : 'site light'}>
    <header className="nav-wrap"><nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" aria-label="Vaishali Gupta home"><span>VG</span><b>VAISHALI GUPTA</b></a>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </div>
      <div className="nav-actions">
        <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 size={17} /></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><BriefcaseBusiness size={17} /></a>
        <button className="icon-button" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
        <button className="mobile-menu icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </div>
    </nav></header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" />{profile.eyebrow}</p><h1>Hi, I&apos;m <em>Vaishali</em><br />Gupta.</h1><p className="hero-lede">I build modern and responsive<br className="desktop-only" /> web applications.</p><p className="hero-text">Web Developer focused on creating clean user interfaces, interactive web experiences and full-stack applications using modern web technologies.</p><div className="hero-buttons"><a className="button primary" href="#projects">View My Projects <ArrowUpRight size={16} /></a><a className="button secondary" href="#contact">Let&apos;s Work Together <ArrowUpRight size={16} /></a></div><div className="social-row"><span>FIND ME ON</span><a href={profile.github} target="_blank" rel="noreferrer"><Code2 size={16} /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><BriefcaseBusiness size={16} /> LinkedIn</a><a href={`mailto:${profile.email}`}><Mail size={16} /> Email</a></div></div>
        <div className="hero-visual"><div className="image-frame"><Image src="/images/profile.png" alt="Professional portrait of Vaishali Gupta" fill priority sizes="(max-width: 768px) 80vw, 420px" /><div className="image-label">AVAILABLE FOR OPPORTUNITIES <span /></div></div><div className="tech-tag tag-one">React <span>◎</span></div><div className="tech-tag tag-two">JavaScript <span>JS</span></div><div className="tech-tag tag-three">Next.js <span>↗</span></div><div className="tech-tag tag-four">Git <span>⌘</span></div></div>
      </section>

      <section id="about" className="section container about"><SectionIntro number="01" title="About Me" /><div className="about-grid"><div><p className="large-copy">I&apos;m a Web Developer interested in building practical, user-friendly web applications that make complex things feel simple.</p><p className="body-copy">My work spans frontend development, responsive UI, JavaScript, React, backend development and database integration. I enjoy solving problems with clean code, learning continuously, and turning ideas into thoughtful digital experiences.</p><a className="text-link" href="#contact">Let&apos;s connect <ArrowUpRight size={15} /></a></div><div className="info-grid"><InfoCard label="CURRENT FOCUS" value="Web Development"/><InfoCard label="EDUCATION" value="MCA — COER University"/><InfoCard label="PRIMARY INTERESTS" value="Frontend & Full Stack Development"/></div></div></section>

      <section id="skills" className="section container"><SectionIntro number="02" title="Skills & Tools" /><div className="skills-grid">{Object.entries(skills).map(([group, items]) => <div className="skill-group" key={group}><h3>{group}</h3><div className="skill-list">{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>

      <section id="projects" className="section container projects"><SectionIntro number="03" title="Featured Projects" /><p className="section-lede">A selection of practical web experiences focused on usability, responsiveness and clean implementation.</p><div className="project-list">{projects.map((project, i) => <article className={`project-card project-${i}`} key={project.name}><div className="project-visual"><Image src={project.image} alt={`${project.name} project preview`} fill sizes="(max-width: 768px) 100vw, 50vw" /></div><div className="project-content"><div className="project-meta"><span>{project.type}</span><span>{project.date}</span></div><h3>{project.name}</h3><p>{project.description}</p><div className="chips">{project.stack.map(item => <span key={item}>{item}</span>)}</div><ul>{project.features.map(feature => <li key={feature}><Check size={14} />{feature}</li>)}</ul><div className="project-actions">{project.live && <a className="button primary small" href={project.live} target="_blank" rel="noreferrer">Live Website <ArrowUpRight size={15} /></a>}<a className="case-link" href="#contact">View Case Study <ChevronRight size={15} /></a></div></div></article>)}</div></section>

      <section id="education" className="section container education"><SectionIntro number="04" title="Education" /><div className="timeline">{education.map((item, i) => <div className="timeline-item" key={item.degree}><div className="timeline-marker">0{i + 1}</div><div><p className="timeline-date">{item.dates}</p><h3>{item.degree}</h3><p>{item.school}{item.location && ` · ${item.location}`}</p></div></div>)}</div></section>

      <section className="section container build"><SectionIntro number="05" title="What I Build" /><div className="service-grid">{services.map((service, i) => <div className="service" key={service}><span>0{i + 1}</span><h3>{service}</h3><ArrowUpRight size={17} /></div>)}</div></section>

      <section id="resume" className="section container resume"><div className="resume-box"><div><p className="eyebrow">05 / RESUME</p><h2>A closer look at<br /><em>my work.</em></h2><p>Explore my education, projects, technical skills and development experience.</p></div><div className="resume-actions"><span className="resume-note">Resume PDF can be added at <code>/public/resume.pdf</code>.</span></div></div></section>

      <section id="contact" className="section container contact"><SectionIntro number="06" title="Let&apos;s Build Something" /><div className="contact-grid"><div><p className="large-copy">Have a project, opportunity or collaboration in mind?</p><p className="body-copy">If you&apos;d like to discuss a project, opportunity or collaboration, feel free to get in touch.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={16} /></a></div><form onSubmit={submitContact} className="contact-form"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Subject<input name="subject" required placeholder="How can I help?" /></label><label>Message<textarea name="message" required placeholder="Tell me a little about your project..." rows={4} /></label><button className="button primary" disabled={sending}>{sending ? 'Sending...' : sent ? 'Message Ready' : <><Send size={16} /> Send Message</>}</button>{sent && <p className="form-success" role="status">Thanks — your message is ready to be connected to a backend.</p>}</form></div></section>
    </main>

    <footer className="footer"><div className="container footer-top"><div><a className="brand" href="#home"><span>VG</span><b>VAISHALI GUPTA</b></a><p>Web Developer</p></div><div className="footer-links"><p>QUICK LINKS</p>{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div><div className="footer-links"><p>SOCIAL</p><a href={profile.github}>GitHub</a><a href={profile.linkedin}>LinkedIn</a><a href={`mailto:${profile.email}`}>Email</a></div></div><div className="container footer-bottom"><span>© 2026 Vaishali Gupta. All rights reserved.</span><span>Built with modern web technologies.</span></div></footer>
  </div>
}

function SectionIntro({ number, title }: { number: string; title: string }) { return <div className="section-intro"><span>{number} /</span><h2>{title}</h2></div> }
function InfoCard({ label, value }: { label: string; value: string }) { return <div className="info-card"><span>{label}</span><strong>{value}</strong></div> }
