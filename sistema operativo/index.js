// Scroll Navbar Effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Back to Top Button
window.addEventListener('scroll', function() {
    const backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Inicializar tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// Gráfico de goles por club
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('clubChart').getContext('2d');
    const clubChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Udinese', 'Barcelona', 'Arsenal', 'Man United', 'Inter', 'Marsella', 'Chile'],
            datasets: [{
                label: 'Goles',
                data: [39, 47, 80, 5, 30, 18, 51],
                backgroundColor: [
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)',
                    'rgba(220, 53, 69, 0.7)'
                ],
                borderColor: [
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)',
                    'rgba(220, 53, 69, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

// Animaciones al hacer scroll
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (itemPosition < screenPosition) {
            item.classList.add('animate__fadeIn');
        }
    });
});