const fs = require('fs');

const PROGRAMS = [
  {
    title: "AP STEM Bootcamps",
    desc: "Intensive classes to master the most difficult AP subjects.",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
    cta: "View Bootcamp Schedule",
    proof: "98% Pass Rate (Score of 4 or 5)",
    mockupHtml: `
        <div class="w-full h-full p-3 flex flex-col gap-2 z-10 text-foreground bg-slate-50/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/10 dark:border-white/10">
           <div class="flex justify-between items-center mb-1">
             <div class="font-bold text-sm">Bootcamp Schedule</div>
             <div class="flex gap-1 bg-muted/30 p-0.5 rounded-md">
                <div class="px-2 py-0.5 text-[8px] font-bold rounded bg-background shadow-sm">Agenda</div>
                <div class="px-2 py-0.5 text-[8px] font-bold text-muted-foreground">Month</div>
             </div>
           </div>
           <div class="flex-1 flex flex-col gap-2">
             <div class="text-[10px] font-bold text-muted-foreground mt-1 mb-1 uppercase tracking-widest text-center">Today</div>
             
             <!-- Session 1 -->
             <div class="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-sm relative group overflow-hidden">
               <div class="absolute left-0 top-0 bottom-0 w-1 text-emerald-600 dark:text-emerald-400" style="background-color: currentColor"></div>
               <div class="text-[10px] font-mono font-bold text-muted-foreground w-12">4:00<span class="text-[8px]">PM</span></div>
               
               <div class="flex-1 flex flex-col items-center text-center px-2">
                 <div class="text-[11px] font-bold text-foreground">AP Chemistry</div>
                 <div class="text-[10px] text-muted-foreground">Unit 4: Kinetics & Rates</div>
               </div>

               <div class="w-12 flex justify-end">
                  <div class="text-[9px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">Live</div>
               </div>
             </div>

             <!-- Session 2 -->
             <div class="flex items-center justify-between p-3 rounded-xl bg-white dark:bg-zinc-800 border border-black/10 dark:border-white/10 shadow-sm relative group overflow-hidden">
               <div class="text-[10px] font-mono font-bold text-muted-foreground w-12">5:30<span class="text-[8px]">PM</span></div>
               
               <div class="flex-1 flex flex-col items-center text-center px-2">
                 <div class="text-[11px] font-bold text-blue-700 dark:text-blue-300">AP Calc BC</div>
                 <div class="text-[10px] text-muted-foreground">Series Convergence</div>
               </div>
               
               <div class="w-12 flex justify-end"></div>
             </div>
           </div>
        </div>
    `
  },
  {
    title: "SAT Math Bootcamp",
    desc: "Targeted practice and strategies designed for a perfect 800.",
    iconColor: "text-blue-600 dark:text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>',
    cta: "See Upcoming Dates",
    proof: "Average +150 point increase",
    mockupHtml: `
        <div class="w-full h-full p-4 flex flex-col gap-3 z-10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/10 dark:border-white/10">
           <!-- Header -->
           <div class="flex justify-between items-end border-b border-border/50 pb-2">
              <div>
                 <div class="text-xs font-bold">SAT Math Performance</div>
                 <div class="text-[10px] text-muted-foreground mt-0.5">Diagnostic to Current</div>
              </div>
              <div class="text-right">
                 <div class="font-black text-xl text-foreground leading-none">790<span class="text-xs font-medium text-muted-foreground">/800</span></div>
                 <div class="text-[9px] font-bold text-emerald-500 mt-1">+140 Points</div>
              </div>
           </div>
           
           <!-- Chart Area -->
           <div class="flex-1 flex items-end gap-2 relative mt-2">
             <!-- Target Line -->
             <div class="absolute left-6 right-0 top-[10%] border-t border-dashed border-emerald-500/50 z-0">
               <span class="absolute -top-3.5 right-0 text-[8px] font-bold text-emerald-500 bg-background/80 px-1">Goal: 800</span>
             </div>
             <!-- Y-axis labels -->
             <div class="absolute left-0 top-0 bottom-4 flex flex-col justify-between text-[8px] font-mono text-muted-foreground z-0">
                <span>800</span>
                <span>700</span>
                <span>600</span>
                <span>500</span>
             </div>
             <!-- Bars -->
             <div class="ml-7 flex-1 flex items-end gap-2 h-full z-10">
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-0 group-hover:opacity-100 bg-background text-foreground border-border">650</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-40 hover:opacity-80 text-blue-600 dark:text-blue-400" style="height: 50%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-muted-foreground">PT1</span>
               </div>
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-0 group-hover:opacity-100 bg-background text-foreground border-border">680</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-40 hover:opacity-80 text-blue-600 dark:text-blue-400" style="height: 60%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-muted-foreground">PT2</span>
               </div>
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-0 group-hover:opacity-100 bg-background text-foreground border-border">720</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-40 hover:opacity-80 text-blue-600 dark:text-blue-400" style="height: 73.3%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-muted-foreground">PT3</span>
               </div>
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-0 group-hover:opacity-100 bg-background text-foreground border-border">750</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-40 hover:opacity-80 text-blue-600 dark:text-blue-400" style="height: 83.3%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-muted-foreground">PT4</span>
               </div>
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-0 group-hover:opacity-100 bg-background text-foreground border-border">770</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-40 hover:opacity-80 text-blue-600 dark:text-blue-400" style="height: 90%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-muted-foreground">PT5</span>
               </div>
               <div class="flex-1 flex flex-col items-center gap-1.5 h-full justify-end relative group">
                 <div class="absolute -top-5 text-[9px] font-bold transition-all px-1.5 py-0.5 rounded border shadow-sm z-20 opacity-100 bg-foreground text-background border-foreground">790</div>
                 <div class="w-full rounded-t-md relative transition-all opacity-100 text-blue-600 dark:text-blue-400" style="height: 96.6%; background-color: currentColor"></div>
                 <span class="text-[8px] font-bold uppercase text-foreground">PT6</span>
               </div>
             </div>
           </div>

           <!-- Skills Breakdown Footer -->
           <div class="grid grid-cols-3 gap-2 mt-1 border-t border-border/50 pt-2">
             <div class="flex flex-col gap-0.5">
                <div class="text-[8px] text-muted-foreground truncate">Heart of Algebra</div>
                <div class="w-full h-1 bg-muted rounded-full overflow-hidden"><div class="h-full w-full bg-emerald-500"></div></div>
             </div>
             <div class="flex flex-col gap-0.5">
                <div class="text-[8px] text-muted-foreground truncate">Adv. Math</div>
                <div class="w-full h-1 bg-muted rounded-full overflow-hidden"><div class="h-full w-[85%] bg-amber-500"></div></div>
             </div>
             <div class="flex flex-col gap-0.5">
                <div class="text-[8px] text-muted-foreground truncate">Data Analysis</div>
                <div class="w-full h-1 bg-muted rounded-full overflow-hidden"><div class="h-full w-[95%] bg-emerald-500"></div></div>
             </div>
           </div>
        </div>
    `
  },
  {
    title: "Mastery Engines",
    desc: "Self-guided, interactive practice courses. (AP Biology - Available Now!)",
    iconColor: "text-orange-500 dark:text-orange-400",
    glowColor: "rgba(249, 115, 22, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4 4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>',
    cta: "Preview Mastery Engine",
    proof: "Trusted by 500+ top students",
    mockupHtml: `
        <div class="w-full h-full p-4 flex z-10 text-foreground bg-slate-50/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-black/10 dark:border-white/10 items-center justify-center">
           <div class="w-full bg-white dark:bg-zinc-800 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm overflow-hidden flex">
              <!-- Left Side: Modules -->
              <div class="w-[120px] p-5 border-r border-black/10 dark:border-white/10 flex flex-col">
                 <div class="font-bold text-[11px] text-center text-foreground mb-4">Modules</div>
                 <div class="flex flex-col gap-3.5">
                    <div class="flex justify-between items-center text-[10px] font-bold">
                       <span class="text-foreground truncate w-[55px]">1. Cell ...</span>
                       <span class="text-emerald-500">100%</span>
                    </div>
                    <div class="flex justify-between items-center text-[10px] font-bold">
                       <span class="text-foreground truncate w-[55px]">2. Gene...</span>
                       <span class="text-amber-500">75%</span>
                    </div>
                    <div class="flex justify-between items-center text-[10px] font-bold">
                       <span class="text-muted-foreground truncate w-[55px]">3. Ecology</span>
                       <span class="text-muted-foreground">0%</span>
                    </div>
                 </div>
              </div>
              
              <!-- Right Side: Mastery -->
              <div class="flex-1 p-5 flex flex-col justify-center bg-black/[0.01] dark:bg-white/[0.01]">
                 <div class="flex items-center justify-center gap-5">
                    <!-- SVG Progress Ring -->
                    <div class="relative w-14 h-14 flex items-center justify-center">
                      <svg class="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path class="stroke-black/5 dark:stroke-white/5" stroke-width="3" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                        <path class="text-orange-500 dark:text-orange-400" style="stroke: currentColor" stroke-width="3.5" stroke-dasharray="85, 100" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path>
                      </svg>
                      <span class="text-[13px] font-black text-foreground relative z-10">85%</span>
                    </div>
                    
                    <div class="flex flex-col">
                       <div class="text-[11px] font-bold text-foreground">AP Biology</div>
                       <div class="text-[10px] text-muted-foreground">Mastery Level</div>
                    </div>
                 </div>
                 
                 <div class="w-full mt-5 pt-5 border-t border-slate-200 dark:border-white/10">
                    <div class="text-[10px] font-bold text-foreground mb-2 text-center">Current Topic: Punnett Squares</div>
                    <div class="w-full h-2.5 bg-slate-100 dark:bg-zinc-700 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                       <div class="h-full w-[85%] rounded-full text-orange-500 dark:text-orange-400" style="background-color: currentColor"></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    `
  },
  {
    title: "1-on-1 AP Mentorship",
    desc: "Private, individualized tutoring for maximum improvement.",
    iconColor: "text-purple-600 dark:text-purple-400",
    glowColor: "rgba(168, 85, 247, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
    cta: "Apply for Mentorship",
    proof: "Top 1% Mentors Worldwide",
    mockupHtml: `
        <div class="w-full h-full p-4 flex flex-col items-center justify-center gap-4 z-10 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/10 dark:border-white/10 text-center relative overflow-hidden">
           <div class="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
           <div class="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div class="w-[95%] max-w-[400px] bg-background border border-black/10 dark:border-white/10 rounded-2xl shadow-xl overflow-hidden relative z-10 flex group hover:border-emerald-500/30 transition-all duration-500 hover:shadow-emerald-500/10 hover:-translate-y-1">
              
              <!-- Left Side: Avatar & Name -->
              <div class="w-2/5 bg-gray-50 dark:bg-zinc-950 p-4 flex flex-col items-center justify-center border-r border-black/10 dark:border-white/10 relative">
                 <div class="absolute top-2 left-2">
                    <div class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 </div>
                 <div class="relative mb-2">
                    <div class="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-md p-0.5">
                       <div class="w-full h-full rounded-full overflow-hidden bg-muted">
                          <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Mentor" class="w-full h-full object-cover object-[center_10%]"/>
                       </div>
                    </div>
                    <!-- Rating Badge -->
                    <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-background border border-black/10 shadow-sm rounded-full px-1.5 py-0.5 flex items-center gap-0.5">
                       <svg class="lucide w-2 h-2 fill-emerald-500 text-emerald-500" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                       <span class="text-[8px] font-bold text-foreground">5.0</span>
                    </div>
                 </div>
                 <h3 class="font-bold text-xs text-foreground mt-2 text-center">Dr. Sherri, M.D.</h3>
                 <p class="text-[8px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5 uppercase tracking-wide">Top 1% Mentor</p>
              </div>

              <!-- Right Side: Info & Button -->
              <div class="w-3/5 p-4 flex flex-col justify-center">
                 <div class="flex flex-wrap gap-1.5 mb-2">
                    <span class="bg-gray-100 dark:bg-zinc-900 px-2 py-0.5 rounded text-[8px] font-bold text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/5 uppercase tracking-wider">M.D.</span>
                    <span class="bg-gray-100 dark:bg-zinc-900 px-2 py-0.5 rounded text-[8px] font-bold text-gray-600 dark:text-gray-300 border border-black/5 dark:border-white/5 uppercase tracking-wider">Medical Sciences</span>
                 </div>
                 <p class="text-[9px] text-muted-foreground leading-relaxed italic line-clamp-2 mb-3">"Expert 1-on-1 mentorship tailored to help you master your coursework."</p>
                 <div class="w-full h-8 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-1.5 cursor-pointer transition-colors shadow-md shadow-emerald-500/20">
                    <span class="text-[10px] font-bold tracking-wide">Book Session</span>
                 </div>
              </div>
           </div>
        </div>
    `
  },
  {
    title: "University Tutoring",
    desc: "Advanced support for difficult college-level courses.",
    iconColor: "text-blue-600 dark:text-blue-400",
    glowColor: "rgba(59, 130, 246, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    cta: "Find a Subject Expert",
    proof: "Supports 50+ College Courses",
    mockupHtml: `
        <div class="w-full h-full flex z-10 bg-white dark:bg-zinc-950 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/10 dark:border-white/10 overflow-hidden">
          <div class="w-1/3 flex flex-col gap-2 border-r border-black/10 dark:border-white/10 p-3 bg-gray-50 dark:bg-zinc-900">
             <div class="font-bold text-xs border-b border-black/10 dark:border-white/10 pb-2 text-muted-foreground">Syllabus</div>
             <div class="text-[9px] font-bold text-foreground">1. Kinematics</div>
             <div class="text-[9px] font-bold pl-2 border-l-2 text-blue-600 dark:text-blue-400" style="border-color: currentColor">1.1 Projectile Motion</div>
             <div class="text-[9px] font-medium pl-2 border-l-2 border-transparent text-muted-foreground">1.2 Circular Motion</div>
             <div class="text-[9px] font-bold text-foreground mt-1">2. Dynamics</div>
          </div>
          <div class="flex-1 flex flex-col p-4">
             <div class="font-black text-sm mb-1">1.1 Projectile Motion</div>
             <div class="text-[9px] text-muted-foreground mb-3">University Physics I • Advanced Support</div>
             
             <div class="flex-1 rounded border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 p-2 flex flex-col gap-1.5 shadow-sm">
                <div class="w-full h-2 bg-gray-200 dark:bg-zinc-800 rounded-sm"></div>
                <div class="w-5/6 h-2 bg-gray-200 dark:bg-zinc-800 rounded-sm"></div>
                <div class="w-4/5 h-2 bg-gray-200 dark:bg-zinc-800 rounded-sm mb-1"></div>
                <div class="w-full h-12 bg-gray-100 dark:bg-zinc-800 rounded border border-black/5 dark:border-white/5 flex items-center justify-center font-mono text-[10px] text-muted-foreground">
                   y = v_0t - (1/2)gt^2
                </div>
             </div>
          </div>
        </div>
    `
  },
  {
    title: "Olympiad & Contests",
    desc: "Preparation for highly competitive exams like AMC and Physics Olympiad.",
    iconColor: "text-red-600 dark:text-red-400",
    glowColor: "rgba(239, 68, 68, 0.12)",
    icon: '<svg class="lucide w-5 h-5" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>',
    cta: "Start Competitive Prep",
    proof: "Multiple AIME Qualifiers",
    mockupHtml: `
        <div class="w-full h-full p-4 flex flex-col z-10 bg-white dark:bg-zinc-950 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-black/10 dark:border-white/10 overflow-hidden relative font-sans">
           <div class="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div class="flex justify-between items-center mb-4 relative z-10">
              <div class="flex items-center gap-2">
                 <div class="w-6 h-6 rounded bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shadow-inner">
                    <svg class="lucide w-3.5 h-3.5 text-purple-500" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                 </div>
                 <span class="text-xs font-bold text-foreground">USAPhO Simulator</span>
              </div>
              <div class="bg-gray-100 dark:bg-zinc-800 border border-black/5 dark:border-white/5 text-[9px] font-bold text-muted-foreground px-2 py-1 rounded-md shadow-sm">
                 Difficulty: <span class="text-red-500">Hard</span>
              </div>
           </div>

           <div class="flex-1 bg-slate-700 rounded-[1.25rem] border border-slate-600 p-5 flex flex-col relative overflow-hidden shadow-inner">
              <div class="absolute inset-0 opacity-[0.12]" style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 12px 12px"></div>
              
              <div class="relative z-10">
                 <h4 class="text-[10px] font-bold text-purple-400 uppercase tracking-wider mb-2">Problem 2: Rotational Dynamics</h4>
                 <p class="text-[11px] text-slate-300 leading-relaxed font-medium">
                    A uniform solid cylinder of mass <span class="font-mono text-purple-300">M</span> and radius <span class="font-mono text-purple-300">R</span> rolls without slipping down an inclined plane of angle <span class="font-mono text-purple-300">θ</span>. Determine the minimum coefficient of static friction <span class="font-mono text-purple-300">μ_s</span> required.
                 </p>
                 
                 <div class="mt-4 bg-slate-950/80 rounded-md p-3 border border-slate-800 shadow-inner">
                    <div class="text-[10px] text-slate-400 font-mono flex flex-col gap-2">
                       <div class="flex gap-2 items-center">
                          <span class="text-slate-600 select-none">1</span>
                          <span class="text-slate-200">Mg sin(θ) - f = Ma</span>
                       </div>
                       <div class="flex gap-2 items-center">
                          <span class="text-slate-600 select-none">2</span>
                          <span class="text-slate-200">fR = Iα = (1/2 MR²) (a/R)</span>
                       </div>
                       <div class="flex gap-2 items-center">
                          <span class="text-slate-600 select-none">3</span>
                          <span class="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">f = (1/3) Mg sin(θ)</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div class="mt-auto relative z-10 flex gap-2 pt-4">
                 <div class="flex-1 bg-slate-950 border border-slate-700 rounded text-[10px] text-slate-300 px-3 py-2 font-mono flex items-center shadow-inner">
                    μ_s ≥ (1/3) tan(θ)
                    <div class="w-1.5 h-3 bg-purple-400 animate-pulse ml-1"></div>
                 </div>
                 <div class="bg-purple-600 hover:bg-purple-500 text-white rounded px-4 py-2 text-[10px] font-bold cursor-pointer transition-colors shadow-lg shadow-purple-500/20 flex items-center justify-center">
                    Verify
                 </div>
              </div>
           </div>
        </div>
    `
  }
];

function generateProgramsHTML() {
  let mobileAccordionHTML = '<div class="flex flex-col gap-3 lg:hidden">';
  PROGRAMS.forEach((prog, idx) => {
    let isActive = idx === 0;
    mobileAccordionHTML += `
        <div class="program-acc-item rounded-[1.5rem] border overflow-hidden transition-all duration-500 relative ${isActive ? 'bg-card border-border shadow-xl' : 'bg-transparent border-border/30'}" data-index="${idx}">
          <button class="program-acc-btn w-full p-5 flex items-center justify-between text-left relative z-10" onclick="setActiveProgram(${idx})">
            <div class="flex items-center gap-3">
                <div class="program-acc-icon w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 ${isActive ? prog.iconColor + ' bg-background shadow-md border border-border' : 'text-muted-foreground bg-muted'}">
                  ${prog.icon}
                </div>
                <h3 class="program-acc-title font-black text-lg transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}">${prog.title}</h3>
            </div>
          </button>
          
          <div class="program-acc-content overflow-hidden transition-all duration-300" style="max-height: ${isActive ? '500px' : '0px'}; opacity: ${isActive ? '1' : '0'};">
             <div class="p-5 pt-0 pb-6 relative z-10 flex flex-col items-center text-center">
                <div class="absolute inset-0 opacity-20 mix-blend-screen pointer-events-none" style="background: radial-gradient(circle at 50% 0%, ${prog.glowColor.replace('0.12', '0.4')}, transparent 80%)"></div>
                <p class="text-muted-foreground text-base mb-6 leading-relaxed relative z-10">${prog.desc}</p>
                <button class="bg-foreground text-background w-full py-3.5 rounded-xl font-bold active:scale-[0.98] transition-transform flex items-center justify-center gap-2 shadow-xl relative z-10 text-sm">
                  ${prog.cta} <svg class="lucide w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
             </div>
          </div>
        </div>
    `;
  });
  mobileAccordionHTML += '</div>';

  let listHTML = '';
  PROGRAMS.forEach((prog, idx) => {
    let isActive = idx === 0;
    listHTML += `
          <div class="program-list-item p-6 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden ${isActive ? 'bg-muted/50 border-border shadow-sm' : 'border-transparent hover:bg-muted/20 opacity-60 hover:opacity-100'}" data-index="${idx}" onmouseenter="setActiveProgram(${idx})" onclick="setActiveProgram(${idx})">
            <div class="flex items-center gap-4 relative z-10">
                <div class="program-list-icon w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ${isActive ? prog.iconColor + ' bg-background shadow-sm border border-border' : 'text-muted-foreground bg-muted'}">
                  ${prog.icon}
                </div>
                <div>
                  <h3 class="program-list-title font-bold text-lg transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground'}">${prog.title}</h3>
                  <p class="program-list-desc text-sm text-muted-foreground mt-2 leading-relaxed overflow-hidden transition-all duration-300" style="max-height: ${isActive ? '100px' : '0px'}; opacity: ${isActive ? '1' : '0'};">
                    ${prog.desc}
                  </p>
                </div>
            </div>
            <!-- Progress indicator -->
            <div class="program-progress absolute bottom-0 left-0 h-[2px] bg-indigo-500/50 z-0 transition-none" style="width: ${isActive ? '0%' : '0%'}"></div>
          </div>
    `;
  });

  const desktopSplitHTML = `
    <div class="hidden lg:grid grid-cols-12 gap-24 items-center">
      
      <!-- Left Column: Interactive List -->
      <div class="lg:col-span-5 flex flex-col gap-4 relative" id="programs-list" onmouseenter="isPaused = true" onmouseleave="isPaused = false">
        ${listHTML}
      </div>

      <!-- Right Column: The Stage -->
      <div class="lg:col-span-7 h-[500px] lg:h-[600px] bg-card border border-border/50 rounded-[2rem] overflow-hidden flex items-center justify-center shadow-2xl relative sticky top-32">
         <!-- Abstract geometric grid background -->
         <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"></div>
         
         <!-- Slow-moving floating orbs -->
         <div id="stage-orb-1" class="absolute -inset-1/2 opacity-40 pointer-events-none mix-blend-normal dark:mix-blend-screen z-0 transition-colors duration-1000" style="background: radial-gradient(circle at 40% 40%, ${PROGRAMS[0].glowColor.replace('0.12', '0.5')}, transparent 60%); animation: float-slow 15s ease-in-out infinite;"></div>
         <div id="stage-orb-2" class="absolute -inset-1/2 opacity-30 pointer-events-none mix-blend-normal dark:mix-blend-screen z-0 transition-colors duration-1000" style="background: radial-gradient(circle at 60% 60%, ${PROGRAMS[0].glowColor.replace('0.12', '0.3')}, transparent 50%); animation: float-fast 18s ease-in-out infinite;"></div>

         <!-- Content -->
         <div id="stage-content" class="absolute inset-0 flex flex-col items-center justify-center p-12 text-center z-10 transition-all duration-300 opacity-100 translate-y-0 scale-100">
           <div class="relative z-10 flex flex-col items-center w-full justify-center">
               
               <!-- Mockup Visualization -->
               <div class="relative w-full max-w-sm mb-10">
                  <div class="absolute -top-6 -right-8 z-30 bg-background/95 backdrop-blur-md border border-border px-4 py-2 rounded-full shadow-xl flex items-center gap-2 animate-fade-in-up">
                    <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span id="stage-proof" class="text-xs font-bold text-foreground whitespace-nowrap">${PROGRAMS[0].proof}</span>
                  </div>
                  
                  <div class="relative w-full aspect-[16/10] bg-background/60 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col p-4">
                     <div class="flex gap-1.5 mb-4 opacity-50">
                       <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                       <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                       <div class="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                     </div>
                     <div class="flex-1 flex items-center justify-center relative">
                       <div id="stage-mockup-bg" class="absolute inset-0 opacity-30 z-0 transition-colors duration-500" style="background: radial-gradient(circle at center, ${PROGRAMS[0].glowColor.replace('0.12', '1')}, transparent 60%)"></div>
                       <div id="stage-mockup-container" class="w-full h-full relative z-10">
                          ${PROGRAMS[0].mockupHtml}
                       </div>
                     </div>
                  </div>
               </div>
               
               <h3 id="stage-title" class="text-3xl font-black text-foreground mb-4">${PROGRAMS[0].title}</h3>
               <p id="stage-desc" class="text-muted-foreground text-lg mb-8 max-w-sm mx-auto">${PROGRAMS[0].desc}</p>
               
               <button id="stage-cta" class="bg-foreground text-background px-8 py-3.5 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2 mx-auto shadow-xl">
                 ${PROGRAMS[0].cta} <svg class="lucide w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
               </button>
           </div>
         </div>
      </div>
    </div>
  `;

  let jsArrayStr = JSON.stringify(PROGRAMS.map(p => {
    return {
       title: p.title, desc: p.desc, iconColor: p.iconColor, glowColor: p.glowColor, cta: p.cta, proof: p.proof 
    };
  }));

  let jsMockupStr = JSON.stringify(PROGRAMS.map(p => p.mockupHtml));

  const scriptLogic = `
    <script>
      const PROGRAMS_DATA = ${jsArrayStr};
      const PROGRAMS_MOCKUPS = ${jsMockupStr};
      let activeProgram = 0;
      let isPaused = false;
      let progressTimer;
      let progressVal = 0;
      
      function setActiveProgram(idx) {
        if (activeProgram === idx) return;
        activeProgram = idx;
        progressVal = 0;
        updateUI();
      }

      function updateUI() {
        // Update Desktop List
        document.querySelectorAll('.program-list-item').forEach((item, idx) => {
          const isActive = idx === activeProgram;
          const prog = PROGRAMS_DATA[idx];
          
          item.className = 'program-list-item p-6 rounded-2xl cursor-pointer transition-all duration-300 border relative overflow-hidden ' + (isActive ? 'bg-muted/50 border-border shadow-sm' : 'border-transparent hover:bg-muted/20 opacity-60 hover:opacity-100');
          
          const icon = item.querySelector('.program-list-icon');
          icon.className = 'program-list-icon w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0 ' + (isActive ? prog.iconColor + ' bg-background shadow-sm border border-border' : 'text-muted-foreground bg-muted');
          
          item.querySelector('.program-list-title').className = 'program-list-title font-bold text-lg transition-colors ' + (isActive ? 'text-foreground' : 'text-muted-foreground');
          
          const desc = item.querySelector('.program-list-desc');
          if (isActive) {
            desc.style.maxHeight = '100px';
            desc.style.opacity = '1';
          } else {
            desc.style.maxHeight = '0px';
            desc.style.opacity = '0';
          }
          
          // Reset progress bar
          item.querySelector('.program-progress').style.width = '0%';
        });

        // Update Mobile Accordion
        document.querySelectorAll('.program-acc-item').forEach((item, idx) => {
          const isActive = idx === activeProgram;
          const prog = PROGRAMS_DATA[idx];
          
          item.className = 'program-acc-item rounded-[1.5rem] border overflow-hidden transition-all duration-500 relative ' + (isActive ? 'bg-card border-border shadow-xl' : 'bg-transparent border-border/30');
          
          const icon = item.querySelector('.program-acc-icon');
          icon.className = 'program-acc-icon w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 ' + (isActive ? prog.iconColor + ' bg-background shadow-md border border-border' : 'text-muted-foreground bg-muted');
          
          item.querySelector('.program-acc-title').className = 'program-acc-title font-black text-lg transition-colors duration-300 ' + (isActive ? 'text-foreground' : 'text-muted-foreground');
          
          const content = item.querySelector('.program-acc-content');
          if (isActive) {
            content.style.maxHeight = '500px';
            content.style.opacity = '1';
          } else {
            content.style.maxHeight = '0px';
            content.style.opacity = '0';
          }
        });

        // Update Stage with Animation
        const stageContent = document.getElementById('stage-content');
        if (stageContent) {
           stageContent.style.opacity = '0';
           stageContent.style.transform = 'translateY(20px) scale(0.95)';
           
           setTimeout(() => {
             const prog = PROGRAMS_DATA[activeProgram];
             document.getElementById('stage-orb-1').style.background = 'radial-gradient(circle at 40% 40%, ' + prog.glowColor.replace('0.12', '0.5') + ', transparent 60%)';
             document.getElementById('stage-orb-2').style.background = 'radial-gradient(circle at 60% 60%, ' + prog.glowColor.replace('0.12', '0.3') + ', transparent 50%)';
             document.getElementById('stage-proof').innerText = prog.proof;
             document.getElementById('stage-mockup-bg').style.background = 'radial-gradient(circle at center, ' + prog.glowColor.replace('0.12', '1') + ', transparent 60%)';
             document.getElementById('stage-mockup-container').innerHTML = PROGRAMS_MOCKUPS[activeProgram];
             document.getElementById('stage-title').innerText = prog.title;
             document.getElementById('stage-desc').innerText = prog.desc;
             document.getElementById('stage-cta').innerHTML = prog.cta + ' <svg class="lucide w-4 h-4" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
             
             stageContent.style.opacity = '1';
             stageContent.style.transform = 'translateY(0) scale(1)';
           }, 300);
        }
      }

      // Auto-advance logic
      setInterval(() => {
        if (!isPaused && window.innerWidth >= 1024) { // Only run progress on desktop
          progressVal += 1; // 1% every 50ms = 5s total
          
          const activeItem = document.querySelectorAll('.program-list-item')[activeProgram];
          if (activeItem) {
             const progBar = activeItem.querySelector('.program-progress');
             progBar.style.width = progressVal + '%';
          }

          if (progressVal >= 100) {
            progressVal = 0;
            activeProgram = (activeProgram + 1) % PROGRAMS_DATA.length;
            updateUI();
          }
        }
      }, 50);
    </script>
  `;

  return mobileAccordionHTML + desktopSplitHTML + scriptLogic;
}

const finalHtml = generateProgramsHTML();
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<div id="programs-container"></div>', '<div id="programs-container">' + finalHtml + '</div>');
fs.writeFileSync('index.html', html);
console.log('Programs section generated and inserted successfully.');
