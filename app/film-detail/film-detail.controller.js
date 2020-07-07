'use strict';

const filmDetailController = {

    showDetail: () => {

        const film = filmDetailService.getFilm();

        document.getElementById('film-detail-big-title').innerHTML = film.Title;

        document.getElementById('film-detail-poster').src = film.Poster;

        document.getElementById('film-detail-title').innerHTML = film.Title;

        document.getElementById('film-detail-type').innerHTML = film.Type;

        document.getElementById('film-detail-year').innerHTML = film.Year;

        document.getElementById('film-detail-favourite').innerHTML = favouriteService.showStarIcon(film);

    }

}