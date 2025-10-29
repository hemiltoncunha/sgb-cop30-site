
function initCarousel(root){
  const track = root.querySelector('.carousel-track');
  const prev = root.querySelector('.prev');
  const next = root.querySelector('.next');
  let idx = 0;
  function step(dir){
    const cards = track.children.length;
    idx = Math.max(0, Math.min(idx + dir, Math.max(0, cards-1)));
    const slideW = track.children[0].getBoundingClientRect().width + 24; // gap = 24
    track.style.transform = `translateX(${-idx*slideW}px)`;
  }
  prev.addEventListener('click', ()=>step(-1));
  next.addEventListener('click', ()=>step(1));
}

document.querySelectorAll('.carousel').forEach(initCarousel);
