const keys = document.querySelectorAll('.keys');


function removeTransition(e) {
	if (e.propertyName !== 'transform') {
		return;
	}
	e.target.classList.remove('playing');
}

function playSound(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stop the function
	audio.currentTime = 0; //rewind to the start
	audio.play();
	key.classList.add('playing');
}

document.addEventListener('keydown', playSound);
keys.forEach(key =>	key.addEventListener('transitionend', removeTransition));

