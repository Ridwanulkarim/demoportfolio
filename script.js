const DEFAULT_PROJECTS = [
      {
        id: "proj_1",
        mockupType: "safety",
        category: "Safety & Civic Tech",
        title: "Women Safety Mobile & Web Application",
        description: "A community-centric safety platform designed to provide rapid distress assistance. Features real-time GPS coordinate dispatch, family emergency notifications, verified emergency helpline directory, and a high-contrast emergency UI.",
        tags: ["React", "Tailwind CSS", "Firebase", "Geolocation API"],
        link: "#contact"
      },
      {
        id: "proj_2",
        mockupType: "course",
        category: "Enterprise Systems",
        title: "IIUC Course Management API",
        description: "A comprehensive backend architecture for managing university courses, prerequisite graphs, student enrollment, and faculty course assignments. Engineered with enterprise Java standards and optimized relational database queries.",
        tags: ["Java", "Spring Boot", "Maven", "MySQL"],
        link: "#contact"
      },
      {
        id: "proj_3",
        mockupType: "calculator",
        category: "Algorithms & Utility Tools",
        title: "Scientific Calculator & Number Theory Suite",
        description: "Precision mathematical computing engine featuring arbitrary-precision floating-point arithmetic, expression parsing via Shunting-yard algorithm, and modular arithmetic utilities for competitive programming.",
        tags: ["Java", "Algorithms", "Data Structures", "OOP"],
        link: "#contact"
      },     
    ];
    const DEFAULT_SKILLS = [
      {
        id: "skill_1",
        category: "Programming Languages",
        badge: "PL",
        badgeColor: "purple",
        items: [
          { name: "C Language", level: "Foundations" },
          { name: "Java", level: "OOP & Core" },
          { name: "JavaScript (ES6+)", level: "Modern JS" },
          { name: "HTML5 & CSS3", level: "Semantic" },
          { name: "SQL", level: "Queries" }
        ]
      },
      {
        id: "skill_2",
        category: "Frontend & Web Stack",
        badge: "UI",
        badgeColor: "blue",
        items: [
          { name: "React", level: "UI Library" },
          { name: "Vite", level: "Tooling" },
          { name: "Tailwind CSS", level: "Utility-First" },
          { name: "Responsive UI", level: "Mobile-First" },
          { name: "DOM Manipulation", level: "Standard" }
        ]
      },
      {
        id: "skill_3",
        category: "Backend & Database",
        badge: "BE",
        badgeColor: "emerald",
        items: [
          { name: "Spring Boot", level: "Framework" },
          { name: "Maven", level: "Build Tool" },
          { name: "Node.js & Express", level: "APIs" },
          { name: "MySQL", level: "RDBMS" },
          { name: "Firebase", level: "Auth & DB" }
        ]
      },
      {
        id: "skill_4",
        category: "Algorithms & Problem Solving",
        badge: "ALG",
        badgeColor: "amber",
        items: [
          { name: "Data Structures", level: "Core Graphs/Trees" },
          { name: "Competitive Prog.", level: "Online Judges" },
          { name: "Asymptotic Analysis", level: "Big-O Time" },
          { name: "Dynamic Programming", level: "Optimization" },
          { name: "Graph Theory", level: "BFS/DFS/Dijkstra" }
        ]
      },
      {
        id: "skill_6",
        category: "Tools & Interests",
        badge: "DEV",
        badgeColor: "rose",
        items: [
          { name: "Git & GitHub", level: "Version Ctrl" },
          { name: "VS Code & IntelliJ", level: "IDEs" },
          { name: "Data Science", level: "Focus Area" },
          { name: "Algorithms & CP", level: "Problem Solv" },
          { name: "Software Engineering", level: "Architecture" }
        ]
      }
    ];
    const DEFAULT_EXPERIENCES = [
      {
        id: "exp_1",
        year: "2024 – 2025",
        title: "Competitive Programming",
        description: "Practiced algorithmic problem solving, time complexity analysis, standard template libraries, and core data structures through competitive programming and online judge platforms.",
        isCurrent: false
      },
      {
        id: "exp_2",
        year: "2025",
        title: "Object Oriented Programming",
        description: "Mastered fundamental OOP concepts including encapsulation, inheritance, polymorphism, and abstraction. Designed modular software architectures and practiced clean code principles in Java.",
        isCurrent: false
      },
      {
        id: "exp_3",
        year: "2025 – Present",
        title: "Full Stack Web Development",
        description: "Active development and continuous learning across frontend and backend technologies. Building responsive web applications with Tailwind CSS and JavaScript, alongside scalable REST APIs.",
        isCurrent: true
      }  
    ];
    function getStorage(key, defaultVal) {
      const stored = localStorage.getItem(key);
      if (!stored) {
        localStorage.setItem(key, JSON.stringify(defaultVal));
        return defaultVal;
      }
      try {
        const parsed = JSON.parse(stored);
        if (key === 'portfolio_experiences' && Array.isArray(parsed) && parsed.length && parsed[0].title === 'Foundation in Computer Science & Problem Solving') {
          localStorage.setItem(key, JSON.stringify(defaultVal));
          return defaultVal;
        }
        return parsed;
      } catch (e) {
        console.error("Failed to parse " + key + " from localStorage:", e);
        return defaultVal;
      }
    }
    function setStorage(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
      console.log("[LocalStorage Saved]", key, value);
    }
    function getMockupHtml(project) {
      if (project.mockupType === "safety") {
        return `
          <div class="rounded-2xl bg-white p-5 text-slate-900 shadow-xl overflow-hidden">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200 text-xs">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-rose-500"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span class="font-bold text-slate-800 ml-1">SOS Safety Portal</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">LIVE ACTIVE</span>
            </div>
            <div class="mt-4 grid grid-cols-2 gap-3">
              <div class="p-3 rounded-xl bg-slate-100 border border-slate-200">
                <span class="text-[10px] text-slate-500 uppercase font-semibold">Current GPS</span>
                <p class="text-xs font-mono font-bold text-slate-800 mt-1">22.3569° N, 91.7832° E</p>
              </div>
              <div class="p-3 rounded-xl bg-rose-50 border border-rose-200">
                <span class="text-[10px] text-rose-600 uppercase font-semibold">SOS Trigger</span>
                <p class="text-xs font-bold text-rose-700 mt-1">Instant Alert Armed</p>
              </div>
            </div>
            <div class="mt-3 p-3 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">MR</div>
                <div>
                  <p class="text-xs font-bold text-slate-800">Mohammad Ridwanul Karim</p>
                  <p class="text-[10px] text-slate-500">Emergency Dispatcher &bull; Chattogram</p>
                </div>
              </div>
              <span class="text-[10px] px-2 py-1 rounded bg-purple-200 text-purple-800 font-bold">Verified</span>
            </div>
          </div>
        `;     
      } else if (project.mockupType === "course") {
        return `
          <div class="rounded-2xl bg-white p-5 text-slate-900 shadow-xl overflow-hidden">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-lg bg-pink-600 text-white font-bold text-xs flex items-center justify-center">IIUC</div>
                <span class="font-bold text-slate-800 text-xs">Course Management API</span>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 font-bold text-[10px]">HTTP 200 OK</span>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-pink-500 to-rose-400 text-white flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-pink-500/30">
                5th
              </div>
              <div class="flex-1 space-y-1.5">
                <p class="text-xs font-bold text-slate-800">B.Sc. in CSE Semester 5</p>
                <div class="text-[11px] text-slate-600 space-y-0.5">
                  <div class="flex justify-between"><span>Core Credits:</span><span class="font-bold">21.0</span></div>
                  <div class="flex justify-between"><span>Enrolled Students:</span><span class="font-bold">184</span></div>
                </div>
              </div>
            </div>
            <div class="mt-4 p-2.5 rounded-xl bg-slate-100 font-mono text-[11px] text-slate-700 flex items-center justify-between">
              <span>GET /api/v1/courses/semester?id=5</span>
              <span class="text-pink-600 font-bold">JSON</span>
            </div>
          </div>
        `;     
      } else if (project.mockupType === "calculator") {
        return `
          <div class="flex justify-center">
            <div class="w-60 rounded-3xl bg-[#11131c] border-2 border-slate-700 p-4 shadow-2xl">
              <div class="h-14 flex items-end justify-end p-2 bg-[#090a0f] rounded-xl text-right mb-4">
                <span class="font-mono text-2xl font-bold text-white tracking-wider">3.14159265</span>
              </div>
              <div class="grid grid-cols-4 gap-2 text-xs font-bold">
                <div class="h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">C</div>
                <div class="h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">&plusmn;</div>
                <div class="h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">%</div>
                <div class="h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">&divide;</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">7</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">8</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">9</div>
                <div class="h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">&times;</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">4</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">5</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">6</div>
                <div class="h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">&minus;</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">1</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">2</div>
                <div class="h-9 rounded-lg bg-slate-700 text-white flex items-center justify-center">3</div>
                <div class="h-9 rounded-lg bg-amber-500 text-white flex items-center justify-center">+</div>
              </div>
            </div>
          </div>
        `;     
      } else {
        return `
          <div class="rounded-2xl bg-slate-50 border border-indigo-100 p-6 shadow-md flex flex-col justify-between space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-purple-600"></span>
                <span class="text-xs font-mono font-bold text-slate-800">Custom Project</span>
              </div>
              <span class="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px]">LOCALSTORAGE</span>
            </div>
            <div class="space-y-2">
              <p class="text-sm font-bold text-slate-900">${project.title}</p>
              <p class="text-xs text-slate-600 leading-relaxed line-clamp-3">${project.description}</p>
            </div>
            <div class="pt-2 flex items-center justify-between text-[11px] text-purple-600 font-mono font-bold">
              <span>Status: Active</span>
              <span>ID: ${project.id}</span>
            </div>
          </div>
        `;
      }
    }
    function renderProjects() {
      const container = document.getElementById('projectsContainer');
      if (!container) return;
      const projects = getStorage('portfolio_projects', DEFAULT_PROJECTS);
      
      container.innerHTML = projects.map(proj => {
        const tagsHtml = (proj.tags || []).map(t => `<span class="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs text-indigo-700 font-medium">${t}</span>`).join('');
        const mockupHtml = getMockupHtml(proj);
        return `
          <div class="rounded-3xl bg-white border border-indigo-100 shadow-xl shadow-indigo-950/5 p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group relative hover:border-purple-300 hover:shadow-2xl transition-all">
            <div class="lg:col-span-6">
              ${mockupHtml}
            </div>
            <div class="lg:col-span-6 flex flex-col space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold tracking-wider text-purple-600 uppercase">${proj.category || 'Project'}</span>
                <div class="flex items-center gap-2">
                  <button onclick="editCrudItem('project', '${proj.id}')" title="Edit in LocalStorage" class="p-1.5 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-500 hover:text-purple-700 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button onclick="deleteCrudItem('project', '${proj.id}')" title="Delete from LocalStorage" class="p-1.5 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600 transition-colors">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900">${proj.title}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">${proj.description}</p>
              <div class="flex flex-wrap gap-2 pt-1">
                ${tagsHtml}
              </div>
              <div class="pt-3">
                <a href="${proj.link || '#contact'}" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-purple-700 text-white font-bold text-xs tracking-tight shadow-md transition-all">
                  <span>View Project</span>
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
    function renderSkills() {
      const container = document.getElementById('skillsContainer');
      if (!container) return;
      const skills = getStorage('portfolio_skills', DEFAULT_SKILLS);
      container.innerHTML = skills.map(cat => {
        const rowsHtml = (cat.items || []).map(item => `
          <div class="flex justify-between items-center pt-2">
            <span class="text-slate-700">${item.name}</span>
            <span class="text-purple-600 font-semibold">${item.level}</span>
          </div>
        `).join('');
        return `
          <div class="p-6 rounded-2xl bg-white border border-indigo-100 shadow-lg shadow-indigo-950/5 flex flex-col justify-between hover:border-purple-300 hover:shadow-xl transition-all group">
            <div>
              <div class="flex items-center justify-between pb-5 border-b border-slate-100">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 font-bold flex items-center justify-center text-xs">${cat.badge || '</>'}</div>
                  <h3 class="font-bold text-slate-900 text-base">${cat.category}</h3>
                </div>
                <div class="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onclick="editCrudItem('skill', '${cat.id}')" title="Edit category" class="p-1 rounded bg-slate-100 hover:bg-purple-100 text-slate-500 hover:text-purple-700">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button onclick="deleteCrudItem('skill', '${cat.id}')" title="Delete category" class="p-1 rounded bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
              <div class="divide-y divide-slate-100 text-xs font-medium pt-3 space-y-2">
                ${rowsHtml}
              </div>
            </div>
          </div>
        `;
      }).join('');
    }
    function renderExperiences() {
      const container = document.getElementById('journeyContainer');
      if (!container) return;
      const experiences = getStorage('portfolio_experiences', DEFAULT_EXPERIENCES);
      container.innerHTML = experiences.map(exp => {
        const dotBg = exp.isCurrent ? 'bg-emerald-500' : 'bg-purple-600';
        const yearColor = exp.isCurrent ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' : 'text-purple-700 bg-purple-50 border border-purple-200';
        return `
          <div class="relative group">
            <div class="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full ${dotBg} border-4 border-white shadow-sm"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <div class="flex items-center gap-3">
                <h3 class="text-base sm:text-lg font-bold text-slate-900">${exp.title}</h3>
                <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onclick="editCrudItem('experience', '${exp.id}')" title="Edit experience" class="p-1 rounded bg-slate-100 hover:bg-purple-100 text-slate-500 hover:text-purple-700">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
                  </button>
                  <button onclick="deleteCrudItem('experience', '${exp.id}')" title="Delete experience" class="p-1 rounded bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-600">
                    <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>
              <span class="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${yearColor}">${exp.year}</span>
            </div>
            <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">${exp.description}</p>
          </div>
        `;
      }).join('');
    }
    function openCrudModal(section, id = null) {
      document.getElementById('crudSection').value = section;
      document.getElementById('crudItemId').value = id || '';
      const pFields = document.getElementById('projectFields');
      const sFields = document.getElementById('skillFields');
      const eFields = document.getElementById('experienceFields');
      pFields.classList.add('hidden');
      sFields.classList.add('hidden');
      eFields.classList.add('hidden');
      const modalTitle = document.getElementById('modalTitle');
      const badge = document.getElementById('modalSectionBadge');
      if (section === 'project') {
        pFields.classList.remove('hidden');
        badge.innerText = 'Project CRUD';
        modalTitle.innerText = id ? 'Edit Project' : 'Add New Project';
        if (id) {
          const list = getStorage('portfolio_projects', DEFAULT_PROJECTS);
          const item = list.find(x => x.id === id);
          if (item) {
            document.getElementById('projectTitleInput').value = item.title || '';
            document.getElementById('projectCategoryInput').value = item.category || '';
            document.getElementById('projectDescInput').value = item.description || '';
            document.getElementById('projectTagsInput').value = (item.tags || []).join(', ');
          }
        } else {
          document.getElementById('projectTitleInput').value = '';
          document.getElementById('projectCategoryInput').value = '';
          document.getElementById('projectDescInput').value = '';
          document.getElementById('projectTagsInput').value = '';
        }
      } else if (section === 'skill') {
        sFields.classList.remove('hidden');
        badge.innerText = 'Skills CRUD';
        modalTitle.innerText = id ? 'Edit Skill Group' : 'Add Skill Group';
        if (id) {
          const list = getStorage('portfolio_skills', DEFAULT_SKILLS);
          const item = list.find(x => x.id === id);
          if (item) {
            document.getElementById('skillCategoryInput').value = item.category || '';
            document.getElementById('skillBadgeInput').value = item.badge || '';
            document.getElementById('skillItemsInput').value = (item.items || []).map(i => `${i.name}: ${i.level}`).join('\n');
          }
        } else {
          document.getElementById('skillCategoryInput').value = '';
          document.getElementById('skillBadgeInput').value = '';
          document.getElementById('skillItemsInput').value = '';
        }
      } else if (section === 'experience') {
        eFields.classList.remove('hidden');
        badge.innerText = 'Experience CRUD';
        modalTitle.innerText = id ? 'Edit Experience' : 'Add Experience';
        if (id) {
          const list = getStorage('portfolio_experiences', DEFAULT_EXPERIENCES);
          const item = list.find(x => x.id === id);
          if (item) {
            document.getElementById('experienceYearInput').value = item.year || '';
            document.getElementById('experienceTitleInput').value = item.title || '';
            document.getElementById('experienceDescInput').value = item.description || '';
            document.getElementById('experienceCurrentInput').checked = !!item.isCurrent;
          }
        } else {
          document.getElementById('experienceYearInput').value = '';
          document.getElementById('experienceTitleInput').value = '';
          document.getElementById('experienceDescInput').value = '';
          document.getElementById('experienceCurrentInput').checked = false;
        }
      }
      document.getElementById('crudModal').classList.remove('hidden');
    }
    function closeCrudModal() {
      document.getElementById('crudModal').classList.add('hidden');
    }
    function editCrudItem(section, id) {
      openCrudModal(section, id);
    }
    function deleteCrudItem(section, id) {
      if (!confirm('Are you sure you want to delete this item from LocalStorage?')) return;
      if (section === 'project') {
        let list = getStorage('portfolio_projects', DEFAULT_PROJECTS);
        list = list.filter(x => x.id !== id);
        setStorage('portfolio_projects', list);
        renderProjects();
      } else if (section === 'skill') {
        let list = getStorage('portfolio_skills', DEFAULT_SKILLS);
        list = list.filter(x => x.id !== id);
        setStorage('portfolio_skills', list);
        renderSkills();
      } else if (section === 'experience') {
        let list = getStorage('portfolio_experiences', DEFAULT_EXPERIENCES);
        list = list.filter(x => x.id !== id);
        setStorage('portfolio_experiences', list);
        renderExperiences();
      }
    }
    function handleCrudSubmit(e) {
      e.preventDefault();
      const section = document.getElementById('crudSection').value;
      const itemId = document.getElementById('crudItemId').value;
      if (section === 'project') {
        const title = document.getElementById('projectTitleInput').value.trim();
        const category = document.getElementById('projectCategoryInput').value.trim();
        const desc = document.getElementById('projectDescInput').value.trim();
        const tags = document.getElementById('projectTagsInput').value.split(',').map(s => s.trim()).filter(Boolean);
        if (!title) return alert('Please provide a project title');
        let list = getStorage('portfolio_projects', DEFAULT_PROJECTS);
        if (itemId) {
          list = list.map(item => item.id === itemId ? { ...item, title, category, description: desc, tags } : item);
        } else {
          list.unshift({
            id: 'proj_' + Date.now(),
            mockupType: 'custom',
            category: category || 'Web Project',
            title,
            description: desc || 'Custom project added via LocalStorage CRUD interface.',
            tags: tags.length ? tags : ['Web Development', 'JavaScript'],
            link: '#contact'
          });
        }
        setStorage('portfolio_projects', list);
        renderProjects();
      } else if (section === 'skill') {
        const category = document.getElementById('skillCategoryInput').value.trim();
        const badge = document.getElementById('skillBadgeInput').value.trim() || '</>';
        const lines = document.getElementById('skillItemsInput').value.split('\n').filter(Boolean);
        const items = lines.map(line => {
          const parts = line.split(':');
          return {
            name: parts[0] ? parts[0].trim() : 'Skill',
            level: parts[1] ? parts[1].trim() : 'Proficient'
          };
        });
        if (!category) return alert('Please provide a category name');
        let list = getStorage('portfolio_skills', DEFAULT_SKILLS);
        if (itemId) {
          list = list.map(cat => cat.id === itemId ? { ...cat, category, badge, items } : cat);
        } else {
          list.unshift({
            id: 'skill_' + Date.now(),
            category,
            badge,
            badgeColor: 'purple',
            items: items.length ? items : [{ name: 'Custom Skill', level: 'Intermediate' }]
          });
        }
        setStorage('portfolio_skills', list);
        renderSkills();
      } else if (section === 'experience') {
        const year = document.getElementById('experienceYearInput').value.trim();
        const title = document.getElementById('experienceTitleInput').value.trim();
        const desc = document.getElementById('experienceDescInput').value.trim();
        const isCurrent = document.getElementById('experienceCurrentInput').checked;
        if (!title) return alert('Please provide a milestone title');
        let list = getStorage('portfolio_experiences', DEFAULT_EXPERIENCES);
        if (itemId) {
          list = list.map(exp => exp.id === itemId ? { ...exp, year, title, description: desc, isCurrent } : exp);
        } else {
          list.unshift({
            id: 'exp_' + Date.now(),
            year: year || '2026',
            title,
            description: desc || 'New milestone added through LocalStorage CRUD.',
            isCurrent
          });
        }
        setStorage('portfolio_experiences', list);
        renderExperiences();
      }
      closeCrudModal();
    }
    function resetPortfolioData() {
      if (!confirm('Reset all Projects, Skills, and Experience to original defaults?')) return;
      localStorage.setItem('portfolio_projects', JSON.stringify(DEFAULT_PROJECTS));
      localStorage.setItem('portfolio_skills', JSON.stringify(DEFAULT_SKILLS));
      localStorage.setItem('portfolio_experiences', JSON.stringify(DEFAULT_EXPERIENCES));
      renderProjects();
      renderSkills();
      renderExperiences();
      console.log('[Portfolio Reset] LocalStorage restored to defaults.');
    }
    window.portfolio = {
      getProjects: () => getStorage('portfolio_projects', DEFAULT_PROJECTS),
      getSkills: () => getStorage('portfolio_skills', DEFAULT_SKILLS),
      getExperiences: () => getStorage('portfolio_experiences', DEFAULT_EXPERIENCES),
      addProject: (p) => {
        const list = getStorage('portfolio_projects', DEFAULT_PROJECTS);
        list.unshift({ id: 'proj_' + Date.now(), mockupType: 'custom', ...p });
        setStorage('portfolio_projects', list);
        renderProjects();
        return list;
      },
      deleteProject: (id) => {
        deleteCrudItem('project', id);
      },
      resetAll: resetPortfolioData
    };
    document.addEventListener('DOMContentLoaded', () => {
      renderProjects();
      renderSkills();
      renderExperiences();
      const btn = document.getElementById('menuToggleBtn');
      const menu = document.getElementById('mobileMenu');
      if (btn && menu) {
        btn.addEventListener('click', () => {
          menu.classList.toggle('hidden');
        });
        menu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            menu.classList.add('hidden');
          });
        });
      }
    });