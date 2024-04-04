document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');

    // Function to create a new ball
    function createBall(x, y) {
        const ball = document.createElement('div');
        ball.classList.add('ball');
        ball.style.left = x + 'px';
        ball.style.top = y + 'px';
        header.appendChild(ball);

        // Randomize color
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        ball.style.backgroundColor = randomColor;

        // Remove ball after animation
        setTimeout(() => {
            ball.remove();
        }, 1000);
    }

    // Event listener to track cursor movement
    header.addEventListener('mousemove', function(event) {
        const x = event.clientX;
        const y = event.clientY;
        createBall(x, y);
    });
});
