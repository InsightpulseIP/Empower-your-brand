
function toggleAnswer(id) {
    const answer = document.getElementById(id);
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.benefits, .features, .success-stories, .testimonials, .faqs, .cta');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});

