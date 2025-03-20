// scripts/neural-network.js
const canvas = document.getElementById('neural-network');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

// Adjust the number of nodes based on screen width
const nodeCount = window.innerWidth < 768 ? 50 : 100;

const nodes = Array.from({ length: nodeCount }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: Math.random() * 2 - 1,
  vy: Math.random() * 2 - 1
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const isDarkMode = document.body.classList.contains('dark-mode');
  const nodeColor = isDarkMode ? '#eee' : '#111';
  const lineColor = isDarkMode ? 'rgba(238, 238, 238,' : 'rgba(17, 17, 17,';

  nodes.forEach(node => {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
    if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
    ctx.beginPath();
    ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = nodeColor;
    ctx.fill();
  });

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) { // Reduced distance for fewer lines
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(nodes[j].x, nodes[j].y);
        ctx.strokeStyle = `${lineColor} ${1 - distance / 100})`;
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}

canvas.addEventListener('mousemove', (e) => {
  const navbar = document.querySelector('.navbar');
  const rect = navbar.getBoundingClientRect();
  const padding = 20; // Adjust padding as needed

  if (e.clientY > rect.bottom + padding || e.clientY < rect.top - padding || e.clientX > rect.right + padding || e.clientX < rect.left - padding) {
    nodes.push({ x: e.clientX, y: e.clientY, vx: Math.random() * 2 - 1, vy: Math.random() * 2 - 1 });
    if (nodes.length > nodeCount) nodes.shift();
  }
});

draw();