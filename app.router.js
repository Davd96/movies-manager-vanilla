'use strict';

const routes = {
    default: 'favourites',
    films: {
        template: 'app/film-list/film-list.template.html',
        load: searchListController.showFilms,
        header: true
    },
    favourites: {
        template: 'app/film-list/film-list.template.html',
        load: favouriteListController.showFilms,
        header: true
    },
    detail: {
        template: 'app/film-detail/film-detail.template.html',
        load: filmDetailController.showDetail,
        header: true
    },
    login: {
        template: 'app/login/login.template.html',
        load: loginController.init,
        header: false
    }
}


function routeTo(href, isUrlChanged = false) {

    if (!mockLoginService.checkAuth(href)) {
        return document.location.href = '#login';
    }

    const route = routes[href] || routes[[routes.default]]

    if (route.header)
        headerController.showHeader();
    else if (!route.header)
        headerController.hideHeader();



    if (document.location.href.split('#')[1] === href && !isUrlChanged && document.getElementById('app').hasChildNodes()) {
        route.load();
    } else {
        window.history.pushState("", "", `/#${href}`);

        fetch(route.template)
            .then(function (response) {
                return response.text();
            })
            .then(function (body) {
                document.getElementById('app').innerHTML = body;
                route.load();
            });
    }
}

function loadRouter() {


    let href = document.location.href.split('#')[1] || 'login';
    if (href)
        routeTo(href);

    window.addEventListener('hashchange', function (e) {
        const href = e.newURL.split('#')[1];
        routeTo(href, true);
    });
}