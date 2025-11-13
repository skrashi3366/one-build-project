let slides = document.querySelectorAll('.slide');
        let dots = document.querySelectorAll('.dot');
        let currentSlide = 0;

        // Function to show a slide
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
                dots[i].classList.toggle('active', i === index);
            });
        }

        // Auto-slide every 3 seconds
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }, 3000);

        // Add event listeners to dots
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                showSlide(currentSlide);
            });
        });