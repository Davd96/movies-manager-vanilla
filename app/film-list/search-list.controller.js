'use strict';

const searchListController = {

    showFilms: async () => {
        let filmsDiv = document.getElementById('film-list');
        let searchValue = document.getElementById('seachFilmInput').value;

        filmsDiv.className = "search";

        filmListController.clearFilms();

        if (searchValue.length > 0) {
            let data = await filmService.getFilmByName(searchValue);

            filmsDiv.innerHTML = `<div class="title-container"><p class="title">Search results for: ${searchValue} </p></div>`;

            data.Search ? data.Search.forEach(film => filmsDiv.innerHTML += card(film)) : filmsDiv.innerHTML += empty(data.Error);
        }
    }

}