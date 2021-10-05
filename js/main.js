// Selected element from html

const elForm = document.querySelector('.header-right__list__item__form');
const elSelect = document.querySelector('.header-right__list__item__form__select');
const elList = document.querySelector('.list');

// Render element to html

function renderFilms(arr, node) {
	elList.innerHTML = null;
	arr.forEach((film) => {
		const newLi = document.createElement('li');
		const newHeading = document.createElement('h3');
		const newImage = document.createElement('img');
		const newInfo = document.createElement('div');
		const newParagraph = document.createElement('p');
		const newTime = document.createElement('time');
		const newGenreList = document.createElement('ul');
		const newBtn = document.createElement('button');
		const newBtnImg = document.createElement('img')
		
		newHeading.textContent = film.title;
		newParagraph.textContent =
		film.overview.split(' ').slice(0, 30).join(' ') + '...';
		newTime.textContent = normalizeDate(film.release_date);
		
		for (let genre of film.genres) {
			const newGenreLi = document.createElement('li');
			newGenreLi.setAttribute('class', 'list__item__sublist__item');
			newGenreLi.textContent = genre;
			newGenreList.appendChild(newGenreLi);
		}
		
		newLi.setAttribute('class', 'list__item film');
		newHeading.setAttribute('class', 'film__heading');
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newImage.setAttribute('width', '200');
		newImage.setAttribute('height', '200');
		newInfo.setAttribute('class', 'list__item__info');
		newParagraph.setAttribute('class', 'list__item__paragraph');
		newTime.setAttribute('class', 'list__item__time');
		newGenreList.setAttribute('class', 'list__item__sublist');
		newBtn.setAttribute('class', 'film__btn');
		newBtn.setAttribute('type', 'button')
		newBtnImg.setAttribute('class', 'film__btn-image');
		newBtnImg.setAttribute('src', './images/favorite.svg');
		newBtnImg.setAttribute('alt', 'favorite icon');
		newBtnImg.setAttribute('width', '20');
		newBtnImg.setAttribute('height', '20');
		
		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newBtn.appendChild(newBtnImg);
		newInfo.appendChild(newParagraph);
		newInfo.appendChild(newTime);
		newInfo.appendChild(newGenreList);
		newInfo.appendChild(newBtn);
		newLi.appendChild(newInfo);
		
		node.appendChild(newLi);
	});
}
// Apply to Function

renderFilms(films, elList);
genres(films);

// Listening form

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
	const selectOption = elSelect.value.trim();
	
	if(selectOption === 'allgenres') {
		renderFilms(films, elList);
	}
	else {
		
		let result = films.filter(e => e.genres.includes(selectOption));
		renderFilms(result, elList);
	}
})
let elNewBtn = document.querySelectorAll('.film__btn');

for(let i = 0; i < films.length; i++) {
elNewBtn[i].addEventListener('click', function() {
	films[i].favorite = true;
	elNewBtn[i].classList.toggle('favorite-btn');
})

}