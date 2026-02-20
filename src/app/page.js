"use client";

import Image from "next/image";
import { Github, Mail, ExternalLink, Code2, Server, Database, Zap, Terminal } from "lucide-react";
import LeetCodeProgress from "./LeetCodeProgress/page";

export default function Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap');

        :root {
          --accent: #6c63ff;
          --accent2: #00d4aa;
          --green: #00d4aa;
        }

        body { font-family: 'DM Sans', sans-serif; }
        .font-syne { font-family: 'Syne', sans-serif; }
        .font-mono-jb { font-family: 'JetBrains Mono', monospace; }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1000;
          opacity: 0.4;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,212,170,0.4); }
          50% { opacity: 0.8; box-shadow: 0 0 0 6px rgba(0,212,170,0); }
        }

        .animate-fade-up { animation: fadeUp 0.6s ease forwards; }
        .animate-fade-up-1 { animation: fadeUp 0.6s ease forwards 0.1s; opacity: 0; }
        .animate-fade-up-2 { animation: fadeUp 0.6s ease forwards 0.2s; opacity: 0; }
        .animate-fade-up-3 { animation: fadeUp 0.6s ease forwards 0.3s; opacity: 0; }
        .animate-fade-up-4 { animation: fadeUp 0.6s ease forwards 0.4s; opacity: 0; }
        .animate-fade-up-5 { animation: fadeUp 0.6s ease forwards 0.5s; opacity: 0; }
        .animate-fade-up-6 { animation: fadeUp 0.6s ease forwards 0.6s; opacity: 0; }

        .badge-dot { animation: pulse-dot 2s infinite; }

        .grad-text {
          background: linear-gradient(135deg, #6c63ff, #00d4aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .grad-text-muted {
          background: linear-gradient(135deg, #f0f0f5, #8888aa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photo-glow {
          position: absolute;
          inset: -1px;
          border-radius: 21px;
          background: linear-gradient(135deg, rgba(108,99,255,0.4), rgba(0,212,170,0.3));
          z-index: -1;
          filter: blur(8px);
          opacity: 0.6;
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, rgba(255,255,255,0.15), transparent);
        }

        .bar-fill {
          height: 100%;
          background: linear-gradient(to right, #6c63ff, #00d4aa);
          border-radius: 2px;
        }

        .contact-glow::before {
          content: '';
          position: absolute;
          top: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(108,99,255,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hover-card {
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .hover-card:hover {
          border-color: rgba(255,255,255,0.15);
          box-shadow: 0 8px 40px rgba(0,0,0,0.3);
        }

        .hover-skill:hover {
          transform: translateY(-3px);
          border-color: rgba(108,99,255,0.3) !important;
          box-shadow: 0 12px 40px rgba(108,99,255,0.1);
        }

        .hover-project:hover {
          transform: translateY(-3px);
          border-color: rgba(108,99,255,0.3) !important;
          box-shadow: 0 12px 40px rgba(0,0,0,0.4);
        }

        .hover-project:hover .proj-arrow {
          opacity: 1;
          color: #00d4aa;
          transform: translate(3px, -3px);
        }

        .hover-project:hover .skill-tag-inner {
          border-color: rgba(108,99,255,0.3);
          color: #a8a4ff;
        }

        .proj-arrow {
          opacity: 0.5;
          transition: all 0.2s;
        }

        .hover-routine:hover {
          border-color: rgba(255,255,255,0.15);
          transform: translateX(4px);
        }

        .btn-primary-custom {
          background: linear-gradient(135deg, #6c63ff, #5a52e0);
          box-shadow: 0 4px 20px rgba(108, 99, 255, 0.35);
          transition: all 0.2s;
        }
        .btn-primary-custom:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 28px rgba(108, 99, 255, 0.5);
        }

        .btn-outline-custom {
          transition: all 0.2s;
        }
        .btn-outline-custom:hover {
          background: #1a1a26;
          border-color: rgba(255,255,255,0.2);
          transform: translateY(-1px);
        }

        .nav-link-custom {
          transition: color 0.2s, background 0.2s, border-color 0.2s;
        }
      `}</style>

      {/* Ambient Glows */}
      <div className="fixed -top-50 w-auto h-auto pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.12) 0%, transparent 70%)' }} />
      <div className="fixed -bottom-50 -left-25 w-auto h-auto pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.08) 0%, transparent 70%)' }} />

      <div className="w-full max-w-full bg-[#0a0a0f] min-h-screen text-[#f0f0f5] overflow-x-hidden px-6 sm:px-8 pb-24">

        {/* NAV */}
        <nav className="flex items-center justify-between flex-wrap gap-3 mb-14 pt-7 animate-fade-up">
          <span className="font-mono-jb text-lg font-semibold tracking-wide" style={{ color: '#00d4aa' }}>
            Jashandeep Singh
          </span>
          <div className="flex gap-2 flex-wrap">
            {['#projects', '#skills', '#contact'].map((href, i) => (
              <a key={href} href={href}
                className="nav-link-custom font-medium px-3 py-1.5 text-[#8888aa] text-xl hover:underline hover:decoration-[#00d4aa] hover:decoration-2 hover:underline-offset-4">
                {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
              </a>
            ))}
          </div>
        </nav>

        {/* HERO */}
        <div className="mb-18 animate-fade-up-1">
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-10 sm:gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="flex items-center gap-2.5 mb-5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full border font-mono-jb tracking-[0.01em]"
                  style={{ background: 'rgba(0,212,170,0.08)', border: '1px solid rgba(0,212,170,0.25)', color: '#00d4aa' }}>
                  <span className="badge-dot w-1.75 h-1.75 rounded-full shrink-0" style={{ background: '#00d4aa' }} />
                  Available for hire
                </span>
              </div>

              {/* Name */}
              <h1 className="font-syne font-extrabold leading-[1.05]  mb-3 text-6xl">
                Jashandeep<br />
                <span>Singh</span>
              </h1>

              {/* Role */}
              <div className="font-mono-jb text-[#8888aa] mb-5 tracking-[0.02em]">
                <span style={{ color: '#00d4aa' }}>// </span>
                Full Stack Developer · BCA 4th Semester
              </div>

              {/* Bio */}
              <p className="text-[#8888aa] leading-[1.75] mb-7 max-w-220"
                style={{ fontSize: 'clamp(15px, 2.5vw, 17px)' }}>
                I&apos;m a <strong className="text-[#f0f0f5] font-semibold">self-taught full stack developer</strong> building real products —{' '}
                <strong className="text-[#f0f0f5] font-semibold">ScriptFit</strong> and{' '}
                <strong className="text-[#f0f0f5] font-semibold">BeatMusic</strong>.
                My focus is backend engineering: APIs, databases, and real deployments that actually ship.
              </p>

              {/* Links */}
              <div className="flex gap-3 flex-wrap">
                <a href="mailto:dhimanjashan548@gmail.com"
                  className="btn-primary-custom inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.75 rounded-[10px] text-white no-underline font-sans cursor-pointer">
                  <Mail size={15} /> Email Me
                </a>
                <a href="https://github.com/dhimanjashan" target="_blank" rel="noopener noreferrer"
                  className="btn-outline-custom inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.75 rounded-[10px] text-[#f0f0f5] no-underline border border-[rgba(255,255,255,0.15)] bg-[#12121a] cursor-pointer">
                  <Github size={15} /> GitHub
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="relative shrink-0">
              <div className="photo-glow" />
              <div className="w-80 sm:w-105 h-50 sm:h-125 rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.15)] relative">
                <Image src="/homePageAvatr.jpeg" alt="Jashan Singh" fill style={{ objectFit: 'cover' }} priority />
              </div>
            </div>
          </div>
        </div>

        {/* ABOUT */}
        <div className="py-10 animate-fade-up-2">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>About</span>
            <span className="section-line" />
          </div>
          <div className="hover-card bg-[#12121a] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7">
            <p className="text-lg text-[#8888aa] leading-[1.8] mb-6">
              I started coding to build real things, not just to pass exams. I learn by doing —
              every concept I study goes straight into a project. I&apos;m looking for my first real role
              where I can <strong className="text-[#f0f0f5] font-semibold">contribute, grow fast, and keep building</strong>.
            </p>
            <div className="grid  grid-cols-2 sm:grid-cols-4 gap-3.5">
              {[
                { icon: <Code2 size={16} />, label: 'Education', val: 'BCA — 4th Semester' },
                { icon: <Server size={16} />, label: 'Focus', val: 'Backend & Full Stack' },
                { icon: <Zap size={16} />, label: 'Learning', val: 'Flutter, System Design' },
                { icon: <Terminal size={16} />, label: 'Daily Practice', val: '5–6 hours every day' },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex flex-col gap-1.5 p-3.5 bg-[#1a1a26] rounded-xl border border-[rgba(255,255,255,0.07)]">
                  <div className="w-8.5 h-8.5 rounded-[9px] flex items-center justify-center mb-1"
                    style={{ color: '#6c63ff', background: 'rgba(108,99,255,0.12)' }}>
                    {icon}
                  </div>
                  <div className="text-xs font-semibold text-[#8888aa] tracking-[0.05em] uppercase">{label}</div>
                  <div className="text-sm text-[#f0f0f5] font-medium leading-snug">{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="py-10 animate-fade-up-3" id="skills">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>Skills</span>
            <span className="section-line" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: <Code2 size={18} />, name: 'Frontend', tags: ['Next.js', 'React', 'Tailwind', 'JavaScript'] },
              { icon: <Server size={18} />, name: 'Backend', tags: ['Node.js', 'Express', 'REST API'] },
              { icon: <Database size={18} />, name: 'Database', tags: ['MongoDB', 'Atlas', 'Mongoose'] },
            ].map(({ icon, name, tags }) => (
              <div key={name} className="hover-card hover-skill bg-[#12121a] border border-[rgba(255,255,255,0.07)] rounded-2xl p-5.5 cursor-default">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center mb-3.5"
                  style={{ color: '#6c63ff', background: 'rgba(108,99,255,0.12)' }}>
                  {icon}
                </div>
                <div className="font-syne text-lg font-bold text-[#f0f0f5] mb-3">{name}</div>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map(tag => (
                    <span key={tag} className="skill-tag-inner font-mono-jb text-sm bg-[#1a1a26] border border-[rgba(255,255,255,0.07)] text-[#8888aa] px-2 py-1 rounded-md transition-all duration-150">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div className="py-10 animate-fade-up-4" id="projects">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>Projects</span>
            <span className="section-line" />
          </div>
          <div className="flex flex-col gap-3.5">
            {[
              {
                num: '01 / music app', title: 'BeatMusic', status: 'Deployed',
                desc: 'Full-stack music streaming app with user authentication and database integration. Backend hosted on Render, database on MongoDB Atlas. Taught me the full lifecycle of taking a project from local dev to real deployment.',
                tags: ['React.js', 'Node.js', 'MongoDB', 'Render'],
              },
              {
                num: '02 / e-commerce', title: 'ScriptFit', status: 'Live',
                desc: 'E-commerce platform with cart management, checkout flow, and order tracking. Built to deeply understand full-stack data flow — from client state to API to database and back.',
                tags: ['Next.js', 'Node.js', 'MongoDB', 'Express'],
              },
            ].map(({ num, title, status, desc, tags }) => (
              <div key={title} className="hover-card hover-project bg-[#12121a] border border-[rgba(255,255,255,0.07)] rounded-2xl p-6 cursor-pointer flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="font-mono-jb text-xs text-[#8888aa] mb-2 opacity-60">{num}</div>
                  <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                    <span className="font-syne text-xl font-bold text-[#f0f0f5] tracking-[-0.01em]">{title}</span>
                    {status && (
                      <span className="text-sm font-semibold px-2.5 py-0.5 rounded-full border"
                        style={{ background: 'rgba(0,212,170,0.08)', color: '#00d4aa', border: '1px solid rgba(0,212,170,0.25)' }}>
                        {status}
                      </span>
                    )}
                  </div>
                  <p className="text-lg text-[#8888aa] leading-[1.7] mb-3.5 max-w-180">{desc}</p>
                  <div className="flex gap-1.5 flex-wrap">
                    {tags.map(tag => (
                      <span key={tag} className="font-mono-jb text-sm px-2 py-1 rounded-md"
                        style={{ background: 'rgba(108,99,255,0.1)', color: '#a8a4ff', border: '1px solid rgba(108,99,255,0.2)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <ExternalLink size={16} className="proj-arrow shrink-0 mt-1" />
              </div>
            ))}
          </div>
        </div>

        <div className="py-10 animate-fade-up-4" id="projects">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>Leetcode Progress</span>
            <span className="section-line" />
          </div>
       <LeetCodeProgress/>
        </div>

        {/* DAILY ROUTINE */}
        <div className="py-10 animate-fade-up-5">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>Daily Routine</span>
            <span className="section-line" />
          </div>
          <div className="hover-card bg-[#12121a] border border-[rgba(255,255,255,0.07)] rounded-2xl p-7">
            <p className="text-sm text-[#8888aa] italic mb-5 pb-5 border-b border-[rgba(255,255,255,0.07)]">
              Consistent, every single day — no exceptions.
            </p>
            <div className="flex flex-col gap-2">
              {[
                { hours: '2h', label: 'Data structures and algorithms', pct: 80 },
                { hours: '2h', label: 'Web development', pct: 55 },
                { hours: '1h', label: 'Interview prep (DSA & concepts)', pct: 30 },
                { hours: '1h', label: 'English communication practice', pct: 30 },
                { hours: '20m', label: 'Reading about tech trends', pct: 10 },
              ].map(({ hours, label, pct }) => (
                <div key={label} className="hover-routine flex items-center gap-4 px-4.5 py-3.5 rounded-[10px] bg-[#1a1a26] border border-[rgba(255,255,255,0.07)] transition-all duration-200">
                  <span className="font-mono-jb text-lg font-semibold min-w-11 shrink-0" style={{ color: '#00d4aa' }}>
                    {hours}
                  </span>
                  <div className="flex-1 h-0.75 bg-[rgba(255,255,255,0.07)] rounded-sm overflow-hidden hidden sm:block">
                    <div className="bar-fill h-full rounded-sm" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-lg text-[#f0f0f5] font-medium text-right sm:text-left">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="py-10 animate-fade-up-6" id="contact">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="font-mono-jb text-lg font-semibold tracking-[0.18em] uppercase whitespace-nowrap" style={{ color: '#00d4aa' }}>Contact</span>
            <span className="section-line" />
          </div>
          <div className="contact-glow hover-card bg-[#12121a] border border-[rgba(255,255,255,0.07)] rounded-2xl px-8 py-12 text-center relative overflow-hidden">
            <h2 className="font-syne font-extrabold mb-3 tracking-[-0.02em] grad-text-muted"
              style={{ fontSize: 'clamp(24px, 5vw, 36px)' }}>
              Let&apos;s build something.
            </h2>
            <p className="text-base text-[#8888aa] mb-7 leading-[1.7] max-w-100 mx-auto">
              Actively looking for internships and entry-level developer roles.
              If you&apos;re hiring or just want to talk tech, I&apos;d love to hear from you.
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="mailto:dhimanjashan548@gmail.com"
                className="btn-primary-custom inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.75 rounded-[10px] text-white no-underline cursor-pointer">
                <Mail size={15} /> dhimanjashan548@gmail.com
              </a>
              <a href="https://github.com/dhimanjashan" target="_blank" rel="noopener noreferrer"
                className="btn-outline-custom inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.75 rounded-[10px] text-[#f0f0f5] no-underline border border-[rgba(255,255,255,0.15)] bg-[#12121a] cursor-pointer">
                <Github size={15} /> github.com/dhimanjashan
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="text-center font-mono-jb text-lg text-[#8888aa] mt-16 pt-6 border-t border-[rgba(255,255,255,0.07)] opacity-50">
          built by Jashandeep Singh · 2025
        </div>

      </div>
    </>
  );
}