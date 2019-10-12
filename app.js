function hide() {
	let cover = document.querySelector('#cover');
	let loading = document.querySelector('#loading');
	let fadingElements = document.querySelectorAll('.fade');
	let title = document.querySelector('#title');

	cover.style.display = 'none';
	loading.style.display = 'none';

	title.style.animationName = 'title-animation';

	fadingElements.forEach(element => {
		element.style.animationName = 'fade';
	});
}

window.addEventListener('load', () => {
	hide();
});

setTimeout(hide, 5000);
