(function () {
  var page = document.body.getAttribute('data-page') || '';

  var nav = [
    { key: 'dashboard',    label: 'Dashboard',      icon: 'fa-house',           href: 'dashboard.html' },
    { key: 'lessons',      label: 'My Lessons',     icon: 'fa-person-chalkboard', href: 'lessons.html' },
    { key: 'concept-map',  label: 'Concept Map',    icon: 'fa-diagram-project', href: 'concept-map.html' },
    { key: 'students',     label: 'Students',       icon: 'fa-users',          href: 'students.html' },
    { key: 'assessments',  label: 'Assessments',    icon: 'fa-clipboard-list', href: 'assessments.html' },
    { key: 'worksheets',   label: 'Worksheets',     icon: 'fa-file-lines',     href: 'worksheets.html' },
    { key: 'flashcards',   label: 'Flashcards',     icon: 'fa-layer-group',    href: 'flashcards.html' },
    { key: 'reports',      label: 'Reports',        icon: 'fa-chart-pie',      href: 'reports.html' },
    { key: 'messages',     label: 'Messages',       icon: 'fa-message',        href: 'messages.html', badge: '2' },
    { key: 'resources',    label: 'Resources',      icon: 'fa-folder-open',     href: 'resources.html' },
    { key: 'settings',     label: 'Settings',       icon: 'fa-gear',           href: 'settings.html' }
  ];

  var navHtml = nav.map(function (n) {
    var active = n.key === page;
    var cls = 'flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ' +
      (active ? 'bg-brand-red text-white' : 'text-brand-text hover:bg-gray-50');
    var inner = '<div class="flex items-center gap-3"><i class="fa-solid ' + n.icon + ' w-5 text-center"></i> ' + n.label + '</div>';
    if (n.badge) {
      inner += '<span class="bg-brand-red text-white text-xs font-bold px-2 py-0.5 rounded-full">' + n.badge + '</span>';
    }
    return '<a class="' + cls + '" href="' + n.href + '">' + inner + '</a>';
  }).join('');

  var sidebar =
    '<div>' +
      '<div class="p-6 flex items-center gap-3">' +
        '<div class="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center text-white text-xl font-bold"><i class="fa-solid fa-book-open"></i></div>' +
        '<div><h1 class="text-xl font-bold text-gray-900 leading-tight">VaaniSetu</h1>' +
        '<p class="text-[10px] text-brand-muted">From Translation to True Understanding</p></div>' +
      '</div>' +
      '<nav class="px-4 space-y-1">' + navHtml + '</nav>' +
    '</div>' +
    '<div class="p-6 relative z-10">' +
      '<div class="bg-red-50 border border-red-100 rounded-xl p-4 text-center">' +
        '<div class="flex justify-center mb-2"><i class="fa-solid fa-wifi text-brand-red text-xl"></i></div>' +
        '<h3 class="font-semibold text-brand-red mb-1">Offline Mode</h3>' +
        '<p class="text-xs text-brand-muted mb-4">You are working offline.<br/>Data will sync when<br/>Internet is available.</p>' +
        '<button class="w-full py-2 bg-white border border-brand-red text-brand-red rounded-lg font-medium text-sm hover:bg-red-50 transition-colors">Sync Now</button>' +
      '</div>' +
    '</div>' +
    '<div class="absolute bottom-0 left-0 w-full h-48 tribal-art pointer-events-none"></div>';

  var aside = document.getElementById('layout-sidebar');
  if (aside) {
    aside.className = 'w-64 bg-white border-r border-brand-border flex flex-col justify-between h-full z-20 flex-shrink-0 relative overflow-y-auto';
    aside.innerHTML = sidebar;
  }

  var topbar =
    '<header class="bg-white/80 backdrop-blur-md border-b border-brand-border h-20 flex items-center justify-between px-8 z-10 flex-shrink-0">' +
      '<div class="flex items-center gap-4">' +
        '<button id="sidebarToggle" class="text-gray-500 hover:text-gray-700 lg:hidden"><i class="fa-solid fa-bars text-xl"></i></button>' +
      '</div>' +
      '<div class="flex items-center gap-4">' +
        '<div class="flex items-center gap-2 bg-red-50 text-brand-red px-4 py-2 rounded-full text-sm font-medium"><i class="fa-solid fa-wifi"></i> Offline Mode</div>' +
        '<div class="hidden sm:flex items-center gap-2 bg-green-50 text-status-green px-4 py-2 rounded-full text-sm font-medium border border-green-100"><i class="fa-solid fa-circle-check"></i> All Systems Operational</div>' +
        '<div class="relative ml-2">' +
          '<button class="text-gray-500 hover:text-gray-700 relative p-2"><i class="fa-regular fa-bell text-xl"></i>' +
          '<span class="absolute top-0 right-0 w-4 h-4 bg-brand-red text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">3</span></button>' +
        '</div>' +
        '<div class="h-8 w-px bg-gray-200 mx-2"></div>' +
        '<div class="flex items-center gap-3 cursor-pointer">' +
          '<img alt="Meera Devi" class="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6aaviAIXWCvYU4_85UIo2NXNfrG8G-r2cxn8GmOleAKZi90P6ZHI1fCr37zTNn3MrJ5Yeb4SoNaB9qJfWg3_Eor6Ux-aU_lywAlzW2FD7ZDNoAhhOLbBWFffZEJwZbpeKTDXcS8KqGCgohNhyCrxBGkyi-a_hJUU6ng9LPUfk4c8Jgp-In31DnSU09qp2z_AEynpHa8pyPpwi7U768dckS_qehP2F3G4cZGUevHmTJHC4dYqM0f9WXg"/>' +
          '<div class="hidden md:block text-sm"><p class="font-semibold text-gray-900 leading-none">Meera Devi</p><p class="text-brand-muted text-xs mt-1">Teacher</p></div>' +
          '<i class="fa-solid fa-chevron-down text-gray-400 text-xs ml-1"></i>' +
        '</div>' +
      '</div>' +
    '</header>';

  var tb = document.getElementById('layout-topbar');
  if (tb) { tb.outerHTML = topbar; }

  var toggle = document.getElementById('sidebarToggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('sidebar-open');
    });
  }
})();
