// Countdown Timer
function updateCountdown() {
    // Set target date to Ramadhan 2024 (adjust as needed)
    const targetDate = new Date('March 11, 2024 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const stars = document.getElementById('stars');
    const mosque = document.getElementById('mosque');
    const parallax = document.getElementById('parallax');

    if (stars) {
        stars.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
    if (mosque) {
        mosque.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
    if (parallax) {
        parallax.style.backgroundPositionY = `${scrolled * 0.7}px`;
    }
});

// Floating Particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 5 + 5 + 's';
    particle.style.opacity = Math.random();
    particle.style.background = `hsl(${Math.random() * 60 + 45}, 100%, 50%)`;
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000);
}

setInterval(createParticle, 200);

// Message Functions
function showMessage(message) {
    alert(message);
}

function showRandomGreeting() {
    const greetings = [
        "Marhaban ya Ramadhan! 🌙",
        "Selamat menunaikan ibadah puasa! 🤲",
        "Mohon maaf lahir dan batin! ❤️",
        "Semoga Ramadhan kali ini lebih berkah! ✨",
        "Selamat berpuasa, semoga lancar hingga Idul Fitri! 🌟"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    alert(randomGreeting);
}

// Interactive Mouse Movement Effect
document.addEventListener('mousemove', (e) => {
    const lanterns = document.querySelectorAll('.lantern');
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    lanterns.forEach((lantern, index) => {
        const speed = index + 1;
        const x = (mouseX * speed * 20) - 10;
        const y = (mouseY * speed * 20) - 10;
        lantern.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// Update prayer times (simulated)
function updatePrayerTimes() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Simulate dynamic prayer times
    document.getElementById('imsak').textContent = '04:30';
    document.getElementById('subuh').textContent = '04:40';
    document.getElementById('dzuhur').textContent = '12:00';
    document.getElementById('ashar').textContent = '15:15';
    document.getElementById('maghrib').textContent = '18:05';
    document.getElementById('isya').textContent = '19:20';
}

updatePrayerTimes();

// Intersection Observer for fade-in effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .prayer-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(50px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Click counter for interactive element
let clickCount = 0;
const greetingButton = document.querySelector('.greeting-message');
greetingButton.addEventListener('click', () => {
    clickCount++;
    if (clickCount % 5 === 0) {
        alert('✨ Anda telah mendapatkan berkah Ramadhan! ✨');
    }
});

// Add moon phase effect
function updateMoonPhase() {
    const moon = document.querySelector('.crescent');
    const date = new Date();
    const day = date.getDate();
    
    // Simple moon phase simulation
    if (day < 7) {
        moon.style.transform = 'rotate(-45deg)';
    } else if (day < 14) {
        moon.style.transform = 'rotate(0deg)';
    } else if (day < 21) {
        moon.style.transform = 'rotate(45deg)';
    } else {
        moon.style.transform = 'rotate(90deg)';
    }
}

updateMoonPhase();

// Initialize audio greeting (optional)
function initAudioGreeting() {
    // Uncomment to add audio greeting
    // const audio = new Audio('audio/ramadhan-greeting.mp3');
    // document.querySelector('.greeting-message').addEventListener('dblclick', () => {
    //     audio.play();
    // });
}

initAudioGreeting();

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic background color change based on time
function updateBackgroundByTime() {
    const hours = new Date().getHours();
    const bgLayer = document.querySelector('.bg-layer');
    
    if (hours >= 5 && hours < 12) {
        // Morning
        bgLayer.style.background = 'linear-gradient(135deg, #f6d1a5, #e6b87e, #c99a6b)';
    } else if (hours >= 12 && hours < 17) {
        // Afternoon
        bgLayer.style.background = 'linear-gradient(135deg, #87CEEB, #5F9EA0, #4682B4)';
    } else if (hours >= 17 && hours < 19) {
        // Evening
        bgLayer.style.background = 'linear-gradient(135deg, #FF7F50, #FF6347, #FF4500)';
    } else {
        // Night
        bgLayer.style.background = 'linear-gradient(135deg, #0a2f1f, #1a472a, #2d5a3a)';
    }
}

// Call time-based background update
updateBackgroundByTime();
setInterval(updateBackgroundByTime, 3600000); // Update every hour