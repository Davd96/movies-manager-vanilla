'use strict';

function switchStartIcon(film, isFavourite) {

    let imgElement = document.getElementById(film.imdbID);

    if (isFavourite) {
        if (document.getElementById("film-list") && document.getElementById("film-list").classList.contains('favourite'))
            return favouriteListController.showFilms();

        imgElement.setAttribute('onclick', `favouriteService.addFavourite(${JSON.stringify(film)})`);
        imgElement.src = 'assets/icon/star.svg';
    } else {
        imgElement.setAttribute('onclick', `favouriteService.delFavourite(${JSON.stringify(film)})`);
        imgElement.src = 'assets/icon/star-yellow.svg';
    }

}


const favouriteService = {

    addFavourite: (favouriteFilm) => {
        let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

        if (filmList.findIndex(film => film.imdbID === favouriteFilm.imdbID) < 0) {
            filmList.push(favouriteFilm);
            localStorage.setItem('filmList', JSON.stringify(filmList));
        }

        switchStartIcon(favouriteFilm, false);
    },

    delFavourite: (deleteFilm) => {
        let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

        filmList = filmList.filter((film) => film.imdbID !== deleteFilm.imdbID);
        localStorage.setItem('filmList', JSON.stringify(filmList));

        switchStartIcon(deleteFilm, true);
    },

    isFavourite: (film) => {
        let filmList = JSON.parse(localStorage.getItem('filmList')) || [];

        return filmList.findIndex(filmItem => filmItem.imdbID === film.imdbID) >= 0;
    },
    showStarIcon: (film) => {
        if (favouriteService.isFavourite(film)) {
            return `<img id='${film.imdbID}' onclick='favouriteService.delFavourite(${JSON.stringify(film)})' src='assets/icon/star-yellow.svg' />`;
        } else {
            return `<img id='${film.imdbID}' onclick='favouriteService.addFavourite(${JSON.stringify(film)})' src='assets/icon/star.svg' />`;
        }
    }

}