// Show timeline items as you scroll down
const items = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

items.forEach(item => observer.observe(item));