let scale = 1; // 1 is normal size

interact('#world').draggable({
  listeners: {
    move(event) {
      const target = event.target;
      // We divide the movement by the scale so that dragging
      // feels consistent even when zoomed in/out
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + (event.dx / scale);
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + (event.dy / scale);

      updateTransform(target, x, y, scale);
    }
  }
});

interact('#world').gesturable({
  listeners: {
    move(event) {
      const world = document.getElementById('world');
      const x = parseFloat(world.getAttribute('data-x')) || 0;
      const y = parseFloat(world.getAttribute('data-y')) || 0;

      scale = scale * (1 + event.ds);

      scale = Math.max(0.5, Math.min(scale, 2));

      updateTransform(world, x, y, scale);
    }
  }
});

function updateTransform(target, x, y, s) {
  target.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
  target.setAttribute('data-x', x);
  target.setAttribute('data-y', y);
}

window.addEventListener('wheel', (e) => {
  const world = document.getElementById('world');
  const x = parseFloat(world.getAttribute('data-x')) || 0;
  const y = parseFloat(world.getAttribute('data-y')) || 0;

  if (e.deltaY < 0) {
    scale = Math.min(scale + 0.1, 2); // Zoom in (max 2x)
  } else {
    scale = Math.max(scale - 0.1, 0.5); // Zoom out (min 0.5x)
  }

  updateTransform(world, x, y, scale);
}, { passive: false });

// Start Function: Transitions from Envelope to Desk
function start() {
  // Fades out the sticky note
  const overlay = document.getElementById('intro-overlay');
  overlay.style.opacity = '0';
  overlay.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    overlay.style.display = 'none';

    // World centering logic
    const world = document.getElementById('world');
    const cx = -(1000 - window.innerWidth / 2);
    const cy = -(1000 - window.innerHeight / 2);
    world.style.transform = `translate(${cx}px, ${cy}px) scale(1)`;
    world.setAttribute('data-x', cx);
    world.setAttribute('data-y', cy);
  }, 500);

  const world = document.getElementById('world');

  // Coordinates for the Header
  const targetX = 1000;
  const targetY = 450;

  // Offset calculation for screen center
  const centerX = -(targetX - window.innerWidth / 2);
  const centerY = -(targetY - window.innerHeight / 2);

  // Smooth "glide" into the desk
  world.style.transition = "transform 1.8s cubic-bezier(0.19, 1, 0.22, 1)";
  updateTransform(world, centerX, centerY, 1);

  // Update global drag variables
  currentX = centerX;
  currentY = centerY;
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

// Add this to your script.js to make notes movable
interact('.colored-note').draggable({
  listeners: {
    move (event) {
      const target = event.target;
      // Logical position tracking
      const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
      const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

      // Update the element's style
      target.style.transform = `translate(${x}px, ${y}px) rotate(${target.style.transform.split('rotate(')[1] || '0deg'}`;
      target.setAttribute('data-x', x);
      target.setAttribute('data-y', y);
    }
  }
});
