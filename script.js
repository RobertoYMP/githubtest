document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');
    const roses = document.querySelectorAll('.rose');
    const btnNo = document.getElementById("btn-random");

    // Randomize rose positions
    roses.forEach(rose => {
        rose.style.left = `${Math.random() * 100}%`;
        rose.style.animationDuration = `${Math.random() * 10 + 5}s`;
    });

    // Try to autoplay music as soon as the page loads
    if (audio) {
        audio.play().catch(error => {
            // If autoplay is blocked, add a click listener to start music
            document.body.addEventListener('click', () => {
                audio.play().catch(error => {
                    console.log('Autoplay was prevented', error);
                });
            });
        });
    }

    // Function to move button randomly
    function moverAleatoriamente(btn) {
        btn.style.position = "absolute";
        btn.style.fontWeight = "bolder";
        btn.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        btn.style.left = Math.floor(Math.random() * 90 + 5) + "%";
    }
    
    if (btnNo) {
        btnNo.addEventListener("mouseenter", function (e) {
            moverAleatoriamente(e.target);
        });
    }
});