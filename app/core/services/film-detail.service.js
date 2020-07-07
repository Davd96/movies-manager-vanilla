'use strict';

const filmDetailService = {
    setFilm: (film) => {
        localStorage.setItem('detailFilm', JSON.stringify(film));
    },
    getFilm: () => {
        return JSON.parse(localStorage.getItem('detailFilm'));
    }
}