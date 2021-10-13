// Selected element from html

const elForm = document.querySelector('.header-right__list__item__form');
const elSelect = document.querySelector('.header-right__list__item__form__select');
const elList = document.querySelector('.list');
const elFavoriteBtn = document.querySelector('.bookmark--all__btn');
const elSort = document.querySelector('.header-right__list__item__form__select-sort');
const elSearch = document.querySelector('.header-right__list__item__form__search-input');
const elBookmarksList = document.querySelector('.bookmarks--list');
const elModal = document.querySelector('.modal--film');
const elModalInfo = document.querySelector('.modal--film__info');

const bookmarksFilms = [];



// Render element to html


// Apply to Function

renderFilms(films, elList);
genres(films);

// Sort films 
const sortFilms = {
	0: (a, b) => {
		if(a.title > b.title) {
			return 1;
		}
		if(a.title < b.title) {
			return -1;
		}
		return 0;
	},
	1: (a, b) => {
		if(a.title > b.title) {
			return -1;
		}
		if(a.title < b.title) {
			return 1;
		}
		return 0;
	},
	2: (a, b) => a.release_date - b.release_date, 
	
	3: (a, b) => b.release_date - a.release_date,
}
// Listening form

elForm.addEventListener('submit',  (evt) => {
	evt.preventDefault();
	
	const selectOption = elSelect.value.trim();
	const searchInput = elSearch.value.trim();
	const sortValue = elSort.value.trim();
	elSearch.value = null;
	const searchResult = new RegExp(searchInput, 'gi');
	// Filter flims
	let resultFlims = []
	if(selectOption === 'allgenres' && searchInput) {
		resultFlims = films.filter(search => search.title.match(searchResult));;
	}
	else if (selectOption !== 'allgenres'){
		resultFlims = films
		.filter(film => film.genres.includes(selectOption))
		.filter(search => search.title.match(searchResult));
		
	}
	else {
		resultFlims = films;
	}
	resultFlims.sort(sortFilms[sortValue]);
	renderFilms(resultFlims, elList);
})

elList.addEventListener('click', (evt) => {
	const isBoookmarks = evt.target.matches('.film__bookmarksBtn');
	const isMore = evt.target.matches('.film__moreBtn');
	if(isBoookmarks) {
		const filmId = evt.target.dataset.bookmarksId;
		const foundFilm = films.find((film) => film.id === filmId);
		if(!bookmarksFilms.includes(foundFilm)) {
			bookmarksFilms.push(foundFilm);
		}
		bookmarksRender(bookmarksFilms, elBookmarksList);
		
	}
	
})

elBookmarksList.addEventListener('click', (evt) => {
	if (evt.target.matches('.bookmarks--delete-btn')) {
		const filmId = evt.target.dataset.deleteId;
		const foundFilmIndex = bookmarksFilms.findIndex((film) => film.id === filmId);
		bookmarksFilms.splice(foundFilmIndex, 1);
		bookmarksRender(bookmarksFilms, elBookmarksList);
	}
	else if(evt.target.matches('.bookmarks--more--btn')){
		elModal.classList.add('modal--show');
		const filmId = evt.target.dataset.moreId;
		const filmMore = [];
		const foundFilm = films.find((row) => row.id === filmId);
		filmMore.push(foundFilm);
		moreRender(foundFilm, elModalInfo);
	}
	else if(evt.target.matches('.bookmark--all__btn')){
		
		renderFilms(bookmarksFilms, elList);
		
		}
	else if (evt.target.matches('.bookmark--back__btn')){
		renderFilms(films, elList);
	}
})

elModal.addEventListener('click', (evt) => {
	const isTargetRemover =
	evt.target.matches('.modal--film') ||
	evt.target.matches('.modal--film__btn-img');
	
	if (isTargetRemover) {
		evt.currentTarget.classList.remove('modal--show');
	}
});
elFavoriteBtn.addEventListener('click', (evt) => {
	if(evt.target.matches('.bookmark--all__btn')){
	renderFilms(bookmarksFilms, elList);
	
	}
})