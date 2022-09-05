'use strict'

let imgs = document.getElementsByClassName('img__item');
let text = document.getElementsByClassName('name__img');
let closeBtn = document.querySelector('.close');
let modalWndw = document.querySelector('.modal__window');
let modalImg = document.querySelector('.modal__img');
let modalText = document.querySelector('.text');

for (let i = 0; i < imgs.length; i++){
	imgs[i].addEventListener('click', () => {
		modalWndw.style.display = 'block';
		let src = imgs[i].getAttribute('src');
		modalImg.setAttribute('src', src);

		let spanText = text[i].textContent;
		modalText.textContent = spanText; 
	})

	closeBtn.addEventListener('click', () => {
		modalWndw.style.display = 'none';
	})
}
