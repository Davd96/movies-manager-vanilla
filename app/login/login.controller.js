'use strict';

function loginSubmitEventListener() {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        let emailInput = document.getElementById('email-login-input');
        let passwordInput = document.getElementById('password-login-input');

        if (emailInput && passwordInput) {
            mockLoginService.login({ email: emailInput }).then((response) => {
                userService.setUser(response.data);
                document.location.href = '#favourite';
            });
        }
    });
}


const loginController = {

    init: () => {
        
        routeTo('favourite'); //if auth go to default screen

        loginSubmitEventListener();
    }

}