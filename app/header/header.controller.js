'use strict';

function headerSubmitEventListener() {
    document.getElementById('searchForm').addEventListener('submit', function (event) {
        event.preventDefault();

        routeTo('films');

    });
}

const headerController = {

    showHeader: async () => {
        if (!document.getElementById('header').hasChildNodes()) {
            let response = await fetch('app/header/header.template.html');
            let body = await response.text();

            document.getElementById('header').innerHTML = body;
            headerSubmitEventListener();
        }
    },

    hideHeader: () => {
        let header = document.getElementById('header');

        if (header)
            header.innerHTML = '';
    }

}
