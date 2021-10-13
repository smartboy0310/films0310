function renderFilms(arr, node) {
	elList.innerHTML = null;
	arr.forEach((film) => {
		const newLi = document.createElement('li');
		const newHeading = document.createElement('h3');
		const newImage = document.createElement('img');
		const newMoreBtn = document.createElement('button');
		const newBookmarksBtn = document.createElement('button');
		const newParagraph = document.createElement('p');
		
		newHeading.textContent = film.title;
		newParagraph.textContent =
		film.overview.split(' ').slice(0, 10).join(' ') + '...';
		newMoreBtn.textContent = "More";
		newBookmarksBtn.textContent = "Bookmarks";
		
		newLi.setAttribute('class', 'list__item');
		newHeading.setAttribute('class', 'film__heading');
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newImage.setAttribute('width', '200');
		newImage.setAttribute('height', '200');
		newMoreBtn.setAttribute('class', 'film__moreBtn');
		newMoreBtn.setAttribute('type', 'button');
		newMoreBtn.dataset.moreId = film.id;
		newBookmarksBtn.setAttribute('class', 'film__bookmarksBtn');
		newBookmarksBtn.setAttribute('type', 'button');
		newBookmarksBtn.dataset.bookmarksId = film.id;
		
		
		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newParagraph);
		newLi.appendChild(newBookmarksBtn);
		newLi.appendChild(newMoreBtn);
		
		node.appendChild(newLi);
	})
}

function bookmarksRender(arr, node) {
	node.innerHTML = null;
	const newHeadingItem = document.createElement('h2')
	const newAllBtn = document.createElement('button');
   const newBackBtn = document.createElement('button');

	newHeadingItem.textContent = 'Bookmarks';
	newAllBtn.textContent = 'Show bookmarks';
   newBackBtn.textContent = 'Back';
	
	newAllBtn.classList.add('bookmark--all__btn');
	newAllBtn.setAttribute('type', 'button');
   newBackBtn.classList.add('bookmark--back__btn');
	newBackBtn.setAttribute('type', 'button');
	
		elBookmarksList.appendChild(newHeadingItem);
	
	arr.forEach((film) => {
		const newLi = document.createElement('li');
		
		const newHeading = document.createElement("h3");
		const newDeleteBtn = document.createElement('button');
		const newImage = document.createElement('img');
				
		
		newHeading.textContent = film.title;
		newDeleteBtn.textContent = "Delete";
		
		
		
		newImage.setAttribute('class', 'film__image');
		newImage.setAttribute('src', film.poster);
		newImage.setAttribute('alt', film.title + ' poster');
		newImage.setAttribute('width', '100');
		newImage.setAttribute('height', '100');
		newLi.setAttribute('class', "bookmarks--list__item");
		newHeading.setAttribute('class', "bookmarks--list__heading");
		newDeleteBtn.setAttribute('class',"bookmarks--delete-btn");
		newDeleteBtn.dataset.deleteId = film.id;
			
		newLi.appendChild(newHeading);
		newLi.appendChild(newImage);
		newLi.appendChild(newDeleteBtn);
		node.appendChild(newLi);
	})
	elBookmarksList.appendChild(newAllBtn);
   elBookmarksList.appendChild(newBackBtn);
}
function moreRender (film, node) {
	node.innerHTML = null;
	const newExitBtn = document.createElement('button')
	const newExitImg = document.createElement('img');  
	const newLi = document.createElement('li');
	const newHeading = document.createElement('h3');
	const newImage = document.createElement('img');
	const newParagraph = document.createElement('p');
	
	newExitBtn.classList.add('modal--film__btn')
	newExitBtn.setAttribute('type', 'button');
	newExitImg.setAttribute('class', 'modal--film__btn-img');
	newExitImg.setAttribute('src', './images/exit.svg');
	newExitImg.setAttribute('alt', 'modal exit image');
	newExitImg.setAttribute('width', '30');
	newExitImg.setAttribute('height', '30');
	
	newHeading.textContent = film.title;
	newParagraph.textContent =film.overview;
	newLi.setAttribute('class', 'list__item');
	newHeading.setAttribute('class', 'film__heading');
	newImage.setAttribute('class', 'film__image');
	newImage.setAttribute('src', film.poster);
	newImage.setAttribute('alt', film.title + ' poster');
	newImage.setAttribute('width', '200');
	newImage.setAttribute('height', '200');
	
	newLi.appendChild(newHeading);
	newLi.appendChild(newImage);
	newLi.appendChild(newParagraph);
	newExitBtn.appendChild(newExitImg);
	newLi.appendChild(newExitBtn);
	
	
	node.appendChild(newLi);
	
}