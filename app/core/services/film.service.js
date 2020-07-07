'use strict';

const filmService = {

    getFilmByName: async (name) => {
        const key = userService.getUser().key;
        let response = await fetch(`http://omdbapi.com/?apikey=${key}&s=${name}`);

        return (await response.json());
    }

}