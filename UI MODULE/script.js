document.getElementById('btn').addEventListener('click', function(){
  alert('Welcome to the homepage!');
});


// Add hover effect to steps
const steps = document.querySelectorAll('.step');
steps.forEach((step) => {
  step.addEventListener('mouseover', () => {
    step.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
  });
  step.addEventListener('mouseout', () => {
    step.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  });
});

// Add hover effect to branches
const branches = document.querySelectorAll('.branch');
branches.forEach((branch) => {
  branch.addEventListener('mouseover', () => {
    branch.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
  });
  branch.addEventListener('mouseout', () => {
    branch.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
  });
});

document.getElementById('constructionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    const constructionType = document.querySelector('input[name="constructionType"]:checked');
    if (constructionType) {
        alert('You selected');
        // Here you can add logic to proceed to the next step
    } else {
        alert('Please select a type of construction.');
    }
});


let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to cart!`);
    console.log(cart);
}


//fur-slider
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
