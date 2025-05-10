const groups = document.querySelectorAll('.text-group');
const scroll = document.querySelector('.text-scroll');

console.log(groups);

groups.forEach((group) => {
    scroll.addEventListener('mouseover', () => {
        for (let i = 0; i < groups.length; i++) {
            groups[i].style.transitionDelay = `${i * 0.05}s`;
        }
        group.style.transition = 'transform 0.6s ease';
        group.style.transform = 'translateY(-5rem)';
    });
});