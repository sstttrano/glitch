var w = window.screen.availWidth;
if(w > 1000){
	let text__text = document.querySelector('.text__text');
	let figure__text = document.querySelector('.figure__text');
	window.addEventListener('mousemove', function(e) {
	    let x = e.clientX / window.innerWidth;
	    let y = e.clientY / window.innerHeight;  
	    text__text.style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
	    figure__text.style.transform = 'translate(+' + x * 20 + 'px, +' + y * 20 + 'px)';
	});
};