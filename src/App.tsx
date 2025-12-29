import { Github, Linkedin, Mail, ExternalLink, BarChart3, Code2, Database, Terminal } from 'lucide-react';

const App = () => {
  // 기술 스택 (사용자가 남겨둔 핵심 스택만 반영)
  const skills = [
    { name: "Frontend", icon: <Code2 size={18} />, items: ["React", "TypeScript", "Tailwind CSS"], color: "from-blue-500 to-cyan-400" },
    { name: "Data Science", icon: <BarChart3 size={18} />, items: ["Python", "Pandas", "Matplotlib", "Chart.js"], color: "from-purple-500 to-pink-400" },
    { name: "Backend", icon: <Database size={18} />, items: ["Python", "Node.js", "FastAPI", "MySQL"], color: "from-indigo-500 to-blue-400" },
    { name: "Tools", icon: <Terminal size={18} />, items: ["Git", "Cursor", "Vercel"], color: "from-slate-500 to-slate-400" }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* 배경 장식: 데이터 그리드 느낌의 미세한 패턴 */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-4xl mx-auto px-6 py-20 lg:px-8">
        
        {/* 히어로 섹션 */}
        <header className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Remote Opportunities
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-white mb-4">
            Sang Won Park
          </h1>
          <p className="text-xl text-indigo-300 font-medium mb-8">
            Data-Driven Frontend Developer
          </p>
          <p className="text-lg leading-relaxed max-w-2xl text-slate-400">
            I’m a junior developer passionate about crafting <span className="text-white">data-driven</span>, user-friendly interfaces. 
            My favorite work lies at the <span className="text-white">intersection of data visualization and frontend development</span>, 
            creating performance-optimized experiences that turn complex information into intuitive designs.
          </p>
          
          <div className="mt-10 flex gap-6">
            <a href="#" className="p-2 hover:text-white transition-colors"><Github size={22} /></a>
            <a href="#" className="p-2 hover:text-white transition-colors"><Linkedin size={22} /></a>
            <a href="#" className="p-2 hover:text-white transition-colors"><Mail size={22} /></a>
          </div>
        </header>

        {/* 핵심 역량 섹션 */}
        <section className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 mb-10 flex items-center gap-3">
            <div className="h-px w-8 bg-indigo-500/50"></div>
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4 text-white">
                  <div className={`p-2 rounded-lg bg-linear-to-br ${skill.color} text-white`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map(item => (
                    <span key={item} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 group-hover:text-indigo-200 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 프로젝트 섹션 - 영문 소개글 반영 */}
        <section className="mb-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-400 mb-10 flex items-center gap-3">
            <div className="h-px w-8 bg-indigo-500/50"></div>
            Featured Work
          </h2>
          <div className="space-y-12">
            <div className="group relative">
              <div className="flex flex-col md:flex-row gap-8 p-6 rounded-3xl bg-slate-900/20 border border-transparent hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-500">
                <div className="w-full md:w-2/5 aspect-video rounded-xl bg-slate-800 overflow-hidden flex items-center justify-center text-slate-600 text-sm italic">
                  [Project Image Placeholder]
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    E-commerce Dashboard Project
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Developed an advanced e-commerce platform integrated with a data analytics dashboard to provide actionable business insights. 
                    Focused on harmonizing intuitive UI/UX with complex data visualization for administrative efficiency.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["React", "JavaScript", "Chart.js", "MySQL"].map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border border-slate-700 text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© 2025 Sang Won. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
};

export default App;