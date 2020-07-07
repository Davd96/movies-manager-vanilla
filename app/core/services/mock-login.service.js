'use strict';

const mockLoginService = {
    login: (body) => {
        return new Promise(function (resolve) {
            //response time simulation
            setTimeout(function () {
                resolve({
                    data: {
                        "id": 1001,
                        "email": body.email,
                        "key": "f12ba140"
                    }

                });
            }, 100);
        });
    },
    logout: () => {
        userService.deleteUser();
    },
    checkAuth: (href) => {
        return userService.getUser() || href === 'login' ? true : false
    }

}