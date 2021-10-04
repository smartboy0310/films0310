const allGenres = [];
function genres (filmGenres) {
   for (let gen of filmGenres) {
      
      for (let allgen of gen.genres) {
         
         if(!allGenres.includes(allgen)) {
            allGenres.push(allgen);
         }
      }
   }
   
   for (let genre of allGenres) {
      const newOption = document.createElement('option');
      newOption.value = genre;
      newOption.textContent = genre;
      elSelect.appendChild(newOption);
   }
   
}


