// Countdown Timer Script
const countdown = () => {
    const targetDate = new Date("2025-01-31T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    if (difference < 0) {
        clearInterval(timer);
        document.querySelector(".description").textContent = "The wait is over! Stay tuned!";
    }
};

const timer = setInterval(countdown, 1000);
countdown();
