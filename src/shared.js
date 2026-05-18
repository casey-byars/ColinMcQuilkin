export const navHTML = `
  <nav class="border-b border-neutral-800">
    <div class="flex items-center justify-between px-6 md:px-10 py-6">
      <a href="/" class="text-xl tracking-[0.3em] font-light text-white hover:text-neutral-300 transition-colors">CMDESIGN</a>
      <button id="menu-toggle" class="md:hidden flex flex-col gap-1.5 p-2">
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
        <span class="block w-6 h-px bg-white transition-all"></span>
      </button>
      <div class="hidden md:flex gap-10 text-xs tracking-[0.2em] text-neutral-400 uppercase">
        <a href="/" class="nav-link hover:text-white transition-colors" data-page="experiences">Experiences</a>
        <a href="/creative-collective.html" class="nav-link hover:text-white transition-colors" data-page="creative-collective">Creative Collective</a>
        <a href="/platforms.html" class="nav-link hover:text-white transition-colors" data-page="platforms">Platforms</a>
        <a href="/immersive-systems.html" class="nav-link hover:text-white transition-colors" data-page="immersive-systems">Immersive Systems</a>
        <a href="/ai-360-lab.html" class="nav-link hover:text-white transition-colors" data-page="ai-360-lab">AI 360 Lab</a>
      </div>
    </div>
    <div id="mobile-menu" class="hidden md:hidden flex-col px-6 pb-6 gap-5 text-xs tracking-[0.2em] text-neutral-400 uppercase">
      <a href="/" class="nav-link hover:text-white transition-colors" data-page="experiences">Experiences</a>
      <a href="/creative-collective.html" class="nav-link hover:text-white transition-colors" data-page="creative-collective">Creative Collective</a>
      <a href="/platforms.html" class="nav-link hover:text-white transition-colors" data-page="platforms">Platforms</a>
      <a href="/immersive-systems.html" class="nav-link hover:text-white transition-colors" data-page="immersive-systems">Immersive Systems</a>
      <a href="/ai-360-lab.html" class="nav-link hover:text-white transition-colors" data-page="ai-360-lab">AI 360 Lab</a>
    </div>
  </nav>
`

export function initPage(activePage) {
  // Highlight active nav link
  document.querySelectorAll('.nav-link').forEach(a => {
    if (a.dataset.page === activePage) {
      a.classList.add('text-white')
      a.classList.remove('text-neutral-400')
    }
  })

  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('mobile-menu')
    menu.classList.toggle('hidden')
    menu.classList.toggle('flex')
  })

  const isMobile = () => window.innerWidth < 768

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target.querySelector('.card-video')
      if (!video) return
      if (entry.isIntersecting) { video.play() }
      else { video.pause(); video.currentTime = 0.001 }
    })
  }, { threshold: 0.5 })

  document.querySelectorAll('.project-card').forEach(card => {
    const video = card.querySelector('.card-video')
    if (!video) return
    video.preload = 'metadata'
    video.addEventListener('loadedmetadata', () => { video.currentTime = 0.001 })
    if (isMobile()) {
      observer.observe(card)
    } else {
      card.addEventListener('mouseenter', () => video.play())
      card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0.001 })
    }
  })
}
