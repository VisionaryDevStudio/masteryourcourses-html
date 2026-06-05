const fs = require('fs');

const MENTORS = [
  { 
    name: "Dr. Hossein Piri", 
    role: "Healthcare Operations & AI Expert", 
    avatar: "mentors/Dr.piri.jpg",
    bio: "Dr. Piri works at the intersection of healthcare operations research, machine learning, and behavioral operations. He focuses on practical systems that improve care delivery, including patient-centered warning systems and AI-driven approaches for addressing healthcare disparities.",
    accolades: ["40 Under 40 (2026)", "Dean's Research Scholar, UCalgary", "Killam Teaching Award, UBC"],
    availability: "Waitlist Only",
    availabilityColor: "bg-rose-500",
    availabilityTextColor: "text-rose-500",
    availabilityBorderColor: "border-rose-500/30"
  },
  { 
    name: "Elena Z.", 
    role: "Honors Biology, UWaterloo", 
    avatar: "mentors/elena zhou.jpg",
    bio: "Elena is an Honors Biology powerhouse who has successfully cracked the code to top-percentile academic performance with a 4.0 GPA. As a Research Assistant at Sunnybrook Hospital, she loves breaking down complex sciences into highly digestible, university-level concepts.",
    accolades: ["Bruce Weyler Kelley Memorial Prize", "President's Scholarship of Distinction (>95%)"],
    availability: "2 Spots Left",
    availabilityColor: "bg-amber-500",
    availabilityTextColor: "text-amber-500",
    availabilityBorderColor: "border-amber-500/30"
  },
  { 
    name: "Dr. Sherri Sadr", 
    role: "Dental Graduate, UBC", 
    avatar: "mentors/sadr.jpeg",
    bio: "Sherri is a dental graduate from UBC with a strong science and research foundation. Her combination of academic rigor, undergraduate mentorship through UBC's REX program, and real-world health service helps her coach students with clarity, structure, and high standards.",
    accolades: ["Biological Safety Certificate", "Laser & Chemical Safety", "Animal Care Training"],
    availability: "Available",
    availabilityColor: "bg-emerald-500",
    availabilityTextColor: "text-emerald-500",
    availabilityBorderColor: "border-emerald-500/30"
  }
];

const SCORE_IMPROVEMENTS = [
  { name: "Duncan", exam: "SAT", before: "1280", after: "1500", quote: "Got into my dream school because of the bootcamp." },
  { name: "Ari", exam: "ACT", before: "33", after: "36", quote: "The strategies they teach are next level." },
  { name: "Kaitlyn", exam: "SAT", before: "1400", after: "1510", quote: "Finally broke the 1500 barrier!" },
  { name: "Sakina", exam: "SAT", before: "1370", after: "1540", quote: "My confidence went through the roof." },
  { name: "David", exam: "AP BIO", before: "3", after: "5", quote: "The mastery engines made studying actually fun." },
  { name: "Emma", exam: "SAT", before: "1350", after: "1560", quote: "Best investment my parents made for college." },
];

const VIDEOS = [
  { 
    student: "Shivam Maji", 
    school: "Admitted to NYU", 
    youtubeId: "OXvoto-nhnY",
    quote: "I was struggling in my core classes, but the 1-on-1 mentorship completely turned things around. Jumping from a C to an A+ gave me the confidence to apply to NYU—and I got in!" 
  },
  { 
    student: "Edrik", 
    school: "Scored a 5 on AP Exam", 
    youtubeId: "cEfGnov3ykU", 
    quote: "The practice questions were the best, especially the ones for every unit and the practice exams leading up to the actual exam. I think I would have been surprised if I did not get a five." 
  },
  { 
    student: "Sawar and Sanj", 
    school: "Scored a 5 on AP Bio", 
    youtubeId: "Q9d0cr_SZig", 
    quote: "MasterYourCourses gave us everything our school class didn't—clear explanations, tons of practice, and a positive space to ask questions. The mix of short content lessons, weekly Q&As, and constant MCQ/FRQ drills pushed our grades from the B- range to consistent A+ 100s, and we walked into the exam confident. We both came out with a 5 on AP Bio—something that felt impossible before this program." 
  },
  { 
    student: "Esther", 
    school: "Scored a 5 on AP Exam", 
    youtubeId: "u5SM9AtcJd0", 
    quote: "Master Your Courses was really helpful. The study guide and the prep tests for every unit helped a lot with prepping for the AP exam. The mock exams and live classes were especially beneficial because I could ask questions. These resources definitely prepared me well, and getting a 5 was definitely a big accomplishment for me." 
  },
  { 
    student: "Seema", 
    school: "Parent of Sameepa", 
    youtubeId: "--BvlNsYR94", 
    quote: "I wanted a mentor who teaches concepts, not shortcuts. MasterYourCourses showed Sameepa how to think through problems instead of memorising formulas. Her confidence exploded—she earned a 5 on AP Physics at just 14 and dove straight into computer science at 15." 
  },
  { 
    student: "Aryan", 
    school: "Scored a 5 on AP Physics", 
    youtubeId: "QQX4S97b_j0", 
    quote: "I liked that he gave lots of challenging practice problems. In class we moved much slower, but here I learned ahead, knew exactly what I was doing, and gained deeper intuition. I scored a 5 on AP Physics and now Im preparing for F=ma exam." 
  },
  { 
    student: "Rizwan", 
    school: "Parent of Nabeel", 
    youtubeId: "TzrkTogLW80", 
    quote: "Before we met MasterYourCourses, Nabeel dreaded physics and was stuck at a C. Within five weeks the one-on-one coaching, gentle guidance, and perfectly matched practice raised his class grade to an A. He now looks forward to every session—and even asks for more problems. He scored a 5 on the AP Exam." 
  },
  { 
    student: "Bobby", 
    school: "AP Student", 
    youtubeId: "BKex7kU8LZo", 
    quote: "MasterYourCourses gave me questions that looked just like my teacher's—heavy on application—and the chat feature meant I could get help even when class wasn't in session. My grade rose fast, and those tough AP problems finally started to make sense." 
  },
  { 
    student: "Nisha & Maya", 
    school: "Parent & AP Biology Student", 
    youtubeId: "cUZIoMVWJos", 
    quote: "Maya was overwhelmed by the sheer volume of AP Biology content, but the 1-on-1 mentorship broke it down into manageable, structured lessons. Her grades improved instantly, and the personalized guidance was a lifesaver. We couldn't have survived the year without it!"
  }
];

function generateHTML() {
  let html = '';

  // 1. Team & Mentors
  html += `
        <!-- ----------------- Team & Mentors ----------------- -->
        <section class="bg-muted/30 border-t border-border/50 py-16 md:py-32">
          <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-12 md:mb-20">
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4">Meet The Mentors</h2>
              <p class="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">Learn directly from Olympiad medalists, medical doctors, and top-percentile experts.</p>
            </div>

             <div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
  `;

  MENTORS.forEach((mentor, idx) => {
    let accoladesHTML = mentor.accolades.map(acc => 
      `<div class="text-[10px] font-bold text-muted-foreground bg-muted/50 border border-border/50 px-2.5 py-1.5 rounded-md flex items-center gap-1.5 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-colors">
         <svg class="lucide w-3 h-3 text-amber-400 group-hover:rotate-12 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
         ${acc}
       </div>`
    ).join('');

    html += `
                  <div class="relative group flex flex-col h-full w-full cursor-pointer">
                     <!-- Blooming shadow effect -->
                     <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none z-0"></div>
                     
                     <div class="relative z-10 bg-background border border-border p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] text-left shadow-sm flex flex-col h-full transition-all duration-500 group-hover:border-indigo-500/30 group-hover:shadow-2xl group-hover:-translate-y-1">

                         <div class="flex flex-row items-center gap-4 mb-5 md:mb-6 mt-4">
                           <div class="relative shrink-0">
                             <div class="absolute inset-0 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                             <img src="${mentor.avatar}" alt="Portrait of ${mentor.name}" loading="lazy" decoding="async" class="relative w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-background shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 object-[center_10%]">
                           </div>
                           <div>
                             <h3 class="text-lg md:text-xl font-black">${mentor.name}</h3>
                             <p class="text-[10px] md:text-xs font-bold uppercase tracking-widest text-indigo-500 mt-1">${mentor.role}</p>
                           </div>
                         </div>
                         <p class="text-muted-foreground text-sm leading-relaxed flex-grow">${mentor.bio}</p>
                         
                         <!-- Floating Accolade Badges -->
                         <div class="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-border/50">
                            <div class="flex flex-wrap gap-2">
                               ${accoladesHTML}
                            </div>
                         </div>
                         
                         <!-- View Profile Action -->
                         <div class="mt-6 flex items-center justify-between text-xs font-bold text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Full Profile <svg class="lucide w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                         </div>
                     </div>
                  </div>
    `;
  });

  html += `
             </div>
          </div>
        </section>
  `;

  // 2. Results & Quotes Ticker
  html += `
        <!-- ----------------- Results & Quotes Ticker ----------------- -->
        <section class="bg-slate-950 overflow-hidden relative flex items-center py-8">
          <div class="relative w-full flex items-center">
            <!-- Scrolling Track (Slowed down to 80s) -->
            <div class="animate-marquee flex gap-12 pr-12 items-center" style="animation-duration: 80s">
  `;

  const repeatScores = [...SCORE_IMPROVEMENTS, ...SCORE_IMPROVEMENTS, ...SCORE_IMPROVEMENTS, ...SCORE_IMPROVEMENTS];
  repeatScores.forEach((score) => {
    html += `
                <div class="flex items-center gap-6 shrink-0 bg-white/5 border border-white/10 py-3 px-6 rounded-full hover:bg-white/10 transition-colors">
                   <div class="flex items-center gap-3">
                     <div class="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center font-black text-sm">
                        ${score.name.charAt(0)}
                     </div>
                     <div class="flex flex-col">
                        <span class="font-bold text-white leading-none mb-1">${score.name}</span>
                        <div class="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-white/50 uppercase">
                           <span>${score.exam}</span>
                           <span>${score.before}</span>
                           <svg class="lucide w-3 h-3 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                           <span class="text-emerald-400">${score.after}</span>
                        </div>
                     </div>
                   </div>
                   <!-- Vertical Divider -->
                   <div class="w-[1px] h-8 bg-white/10"></div>
                   <!-- The Quote -->
                   <span class="text-white/80 italic font-medium">"${score.quote}"</span>
                </div>
    `;
  });

  html += `
            </div>
          </div>
        </section>
  `;

  // 3. Verified Impact & Video Testimonials
  html += `
        <!-- ----------------- Verified Impact & Video Testimonials ----------------- -->
        <section class="pt-16 pb-16 md:py-32 max-w-7xl mx-auto px-6">
          <div class="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter mb-4">The Track Record</h2>
              <p class="text-lg md:text-xl text-muted-foreground max-w-2xl">We let the results do the talking. Undeniable data, followed by the students who lived it.</p>
            </div>
            <a href="#" class="w-full md:w-auto justify-center bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap flex items-center gap-2 shadow-sm text-sm md:text-base">
               View All Testimonials <svg class="lucide w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Cinematic Spotlight Video Gallery -->
          <div class="bg-slate-950 rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 relative overflow-hidden shadow-2xl border border-slate-800">
             <!-- Subtle glow behind video -->
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-indigo-500/20 blur-[100px] pointer-events-none"></div>
             
             <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
                <!-- Main Spotlight Video & Info -->
                <div class="lg:col-span-2 flex flex-col">
                   <div class="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 relative group mb-8 md:mb-10">
                      <iframe id="main-video-iframe" class="w-full h-full absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity duration-500" src="https://www.youtube.com/embed/${VIDEOS[0].youtubeId}?rel=0" title="Testimonial from ${VIDEOS[0].student}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                   </div>
                   
                   <!-- Text Info Moved Under Video -->
                   <div class="px-2 md:px-6">
                      <div class="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-400 text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                         Featured Story
                      </div>
                      <h3 id="main-video-student" class="text-2xl md:text-3xl font-black text-white mb-2">${VIDEOS[0].student}</h3>
                      <p id="main-video-school" class="text-indigo-400 font-bold uppercase tracking-widest text-xs md:text-sm mb-6">${VIDEOS[0].school}</p>
                      <div class="relative">
                         <span class="absolute -top-4 -left-3 text-5xl text-white/10 font-serif leading-none">"</span>
                         <p id="main-video-quote" class="text-slate-300 italic leading-relaxed text-lg md:text-xl relative z-10 pl-4 border-l-2 border-indigo-500/50">
                            ${VIDEOS[0].quote}
                         </p>
                      </div>
                   </div>
                </div>

                <!-- Video Thumbnails List -->
                <div class="flex flex-col gap-3 lg:pr-2 lg:h-[650px] overflow-y-auto scrollbar-hide" id="video-thumbnails-container">
  `;

  let jsVideosDataStr = JSON.stringify(VIDEOS);

  VIDEOS.forEach((vid, idx) => {
    html += `
                   <div class="video-thumbnail-item group cursor-pointer relative p-3 rounded-2xl transition-all duration-300 border overflow-hidden ${idx === 0 ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'}" data-index="${idx}" onclick="setActiveVideo(${idx})">
                      <div class="flex gap-4 relative z-10">
                         <div class="w-32 aspect-video rounded-xl overflow-hidden relative shrink-0">
                            <img src="https://img.youtube.com/vi/${vid.youtubeId}/mqdefault.jpg" alt="${vid.student}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                               <div class="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform group-hover:scale-110">
                                 <svg class="lucide w-4 h-4 text-white fill-white ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                               </div>
                            </div>
                         </div>
                         <div class="flex flex-col justify-center flex-1 min-w-0">
                            <h4 class="text-white font-bold text-sm truncate mb-1">${vid.student}</h4>
                            <p class="text-indigo-300 text-[10px] font-bold uppercase tracking-widest truncate mb-2">${vid.school}</p>
                            <p class="text-slate-400 text-xs italic line-clamp-2 leading-relaxed">"${vid.quote}"</p>
                         </div>
                      </div>
                   </div>
    `;
  });

  html += `
                </div>
             </div>
          </div>
        </section>
  `;

  html += `
    <script>
      const VIDEOS_DATA = ${jsVideosDataStr};
      let activeVideoIndex = 0;

      function setActiveVideo(idx) {
        if(activeVideoIndex === idx) return;
        activeVideoIndex = idx;
        
        const vid = VIDEOS_DATA[idx];
        document.getElementById('main-video-iframe').src = "https://www.youtube.com/embed/" + vid.youtubeId + "?rel=0";
        document.getElementById('main-video-student').innerText = vid.student;
        document.getElementById('main-video-school').innerText = vid.school;
        document.getElementById('main-video-quote').innerText = vid.quote;

        document.querySelectorAll('.video-thumbnail-item').forEach((item, index) => {
          if (index === idx) {
             item.className = 'video-thumbnail-item group cursor-pointer relative p-3 rounded-2xl transition-all duration-300 border overflow-hidden bg-white/10 border-white/20 shadow-lg';
          } else {
             item.className = 'video-thumbnail-item group cursor-pointer relative p-3 rounded-2xl transition-all duration-300 border overflow-hidden bg-transparent border-transparent hover:bg-white/5 hover:border-white/10';
          }
        });
      }
    </script>
  `;

  return html;
}

let indexHtml = fs.readFileSync('index.html', 'utf8');
if (indexHtml.includes('<!-- MENTORS_AND_RESULTS_INSERTED -->')) {
  // Already inserted once, do not re-insert the placeholder logic, but we can replace if we made a placeholder.
  // I will just use </main> replacing logic safely
} else {
  let toInsert = generateHTML() + '\n<!-- MENTORS_AND_RESULTS_INSERTED -->\n';
  indexHtml = indexHtml.replace('</main>', toInsert + '</main>');
  fs.writeFileSync('index.html', indexHtml);
  console.log('Mentors and Results sections generated and inserted successfully.');
}
