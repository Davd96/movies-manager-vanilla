'use strict';

const favouriteListController = {

    showFilms: () => {
        let filmsList = JSON.parse(localStorage.getItem('filmList')) || [];
        let filmsDiv = document.getElementById('film-list');

        filmsDiv.className = "favourite";


        filmListController.clearFilms();

        filmsDiv.innerHTML += '<div class="title-container"><p class="title"> Favorites </p></div>';


        filmsList.length > 0 ? filmsList.forEach(film => filmsDiv.innerHTML += card(film))
            : filmsDiv.innerHTML += empty("You don't have any favorite movies yet!");
    }

}


