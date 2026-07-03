const envelope = document.getElementById('envelope');
const uploadBtn = document.getElementById('uploadBtn');
const musicUpload = document.getElementById('musicUpload');
const audioPlayer = document.getElementById('audioPlayer');
const songName = document.getElementById('songName');

envelope.addEventListener('click', () => {
    envelope.classList.toggle('open');
});

uploadBtn.addEventListener('click', () => {
    musicUpload.click();
});

musicUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        audioPlayer.src = fileURL;
        songName.textContent = file.name;
        songName.style.color = '#d64b7b';
    }
});

