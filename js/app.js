// Setup Panning Physics
interact('#world').draggable({
  listeners: {
    move(event) {
      const target = event.target;
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      target.style.transform = `translate(${x}px, ${y}px)`;
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  }
});

// Start Function: Transitions from Envelope to Desk
function start() {
  document.getElementById('envelope-overlay').style.opacity = '0';
  setTimeout(() => {
    document.getElementById('envelope-overlay').style.display = 'none';
  }, 500);

  const world = document.getElementById('world');

  // Calculate center based on screen size
  const x = -(1000 - window.innerWidth / 2);
  const y = -(1000 - window.innerHeight / 2);

  world.style.transform = `translate(${x}px, ${y}px)`;
  world.setAttribute('data-x', x);
  world.setAttribute('data-y', y);
}

// Modal View Controllers
function show(src, title, txt) {
  document.getElementById('m-img').src = src;
  document.getElementById('m-title').innerText = title;
  document.getElementById('m-text').innerText = txt;
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('viewport').style.filter = 'blur(4px)';
}

function hide() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('modal').style.display = 'none';
  document.getElementById('viewport').style.filter = 'none';
}
