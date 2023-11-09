// script.js

// Function to stop all other audio elements when one is played
function stopOtherPlayers(currentPlayer) {
    const audioPlayers = document.querySelectorAll('.myaudi');
    audioPlayers.forEach(player => {
        if (player !== currentPlayer) {
            player.pause();
        }
    });
}

// Function to handle play/pause
function togglePlayback(player) {
    if (player.paused) {
        stopOtherPlayers(player);
        player.play();
    } else {
        player.pause();
    }
}
