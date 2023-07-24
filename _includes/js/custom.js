
window.jtd.onReady(() => {
  const nav = document.getElementById('site-nav');
  const scrollTopCache = Number(window.localStorage.getItem('jtd_nav_scroll_top') || 0);
  nav.scrollTop = scrollTopCache;
  nav.addEventListener('scroll', () => {
    window.localStorage.setItem('jtd_nav_scroll_top', nav.scrollTop + '')
  })
  window.jtd.addEvent(document, 'click', function(e){
    var target = e.target;
    while (target && !(target.classList && target.classList.contains('nav-list-expander-item'))) {
      target = target.parentNode;
    }
    if (target) {
      e.preventDefault();
      target.parentNode.classList.toggle('active');
    }
  });
})