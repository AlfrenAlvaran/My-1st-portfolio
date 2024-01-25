document.addEventListener('DOMContentLoaded', function () {
   
    Animated()
    typing();
});



function typing() {
    var typed = new Typed(".text", {
        strings: ['Burden to the group', 'burden to the family', 'financially'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}
function Animated() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach(el => observer.observe(el));
}