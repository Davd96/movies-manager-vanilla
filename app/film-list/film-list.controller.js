'use strict';

function card(film) {

    const startImg = favouriteService.showStarIcon(film);

    return `    
        <div class="card">
           
            <img src="${film.Poster}" onclick='goToDetails(${JSON.stringify(film)})'  style="width:100%; height: 250px">
      
            <div class="container">

                <h4><b>${film.Title}</b></h4>

                <div class="card-footer">
                    <span>${film.Year}</span>
                    ${startImg}
                </div>

            </div>
        </div> 
    `;
}

function empty(text) {
    return `<div class="search-empty"><p class="search-empty-text">${text}</p></div>`;
}

function goToDetails(film) {
    filmDetailService.setFilm(film);
    routeTo('detail');
}

const filmListController = {
    clearFilms: () => {
        let filmsDiv = document.getElementById('film-list');
        filmsDiv.innerHTML = '';
    }

}
