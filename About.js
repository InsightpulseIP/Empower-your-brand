document.addEventListener("DOMContentLoaded", function () {
    function addVisibilityObserver(selector, threshold) {
        const elements = document.querySelectorAll(selector);

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: threshold });

        elements.forEach(function (element) {
            observer.observe(element);
        });
    }

    addVisibilityObserver(".section-container", 0.1);
    addVisibilityObserver(".footer", 0.1);
    addVisibilityObserver(".image-placeholder", 0.2);
});
