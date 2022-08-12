

const soundOn = (e)=>{
    const audio = document.querySelector(`audio[data-no="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-no="${e.keyCode}"]`);
    audio.currentTime = 0;
    if (!audio) return;
    audio.play();
    key.classList.add('playing');
}

function removeit(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}
const keys  = document.querySelectorAll('.key');
keys.forEach(no => no.addEventListener('transitionend', removeit))
window.addEventListener('keydown',soundOn )
