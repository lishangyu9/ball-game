document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('ball');
    const hole = document.getElementById('hole');
    const gameContainer = document.querySelector('.game-container');

    let ballPosition = 0;
    let gameSpeed = 5;

    function updateGame() {
        ballPosition += gameSpeed;
        ball.style.transform = `translateY(${ballPosition}px)`;

        if (ballPosition > gameContainer.clientHeight) {
            gameOver();
        }

        if (isBallInHole()) {
            gameOver();
        } else {
            requestAnimationFrame(updateGame);
        }
    }

    function isBallInHole() {
        const ballRect = ball.getBoundingClientRect();
        const holeRect = hole.getBoundingClientRect();

        return (
            ballRect.top < holeRect.bottom &&
            ballRect.right > holeRect.left &&
            ballRect.bottom > holeRect.top &&
            ballRect.left < holeRect.right
        );
    }

    function gameOver() {
        alert('Game Over! Your score: ' + ballPosition);
        resetGame();
    }

    function resetGame() {
        ballPosition = 0;
        ball.style.transform = 'translateY(0)';
        requestAnimationFrame(updateGame);
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === ' ') {
            // Space key pressed
            gameSpeed = -gameSpeed;
        }
    });

    requestAnimationFrame(updateGame);
});
