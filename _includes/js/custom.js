
window.jtd.onReady(() => {
  const nav = document.getElementById('site-nav');
  const scrollTopCache = Number(window.localStorage.getItem('jtd_nav_scroll_top') || 0);
  nav.scrollTop = scrollTopCache;
  nav.addEventListener('scroll', () => {
    window.localStorage.setItem('jtd_nav_scroll_top', nav.scrollTop + '')
  })
})