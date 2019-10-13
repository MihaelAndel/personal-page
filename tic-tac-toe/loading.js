function hide() {
	let cover = document.querySelector('#cover');
	let loading = document.querySelector('#loading');

	cover.style.display = 'none';
	loading.style.display = 'none';
}

window.addEventListener('load', () => {
	hide();
});

setTimeout(hide, 5000);
