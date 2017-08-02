;(function () {
    var userName = prompt('Кто идет?');

    if (userName == 'Админ') {

        var pass = prompt('Пароль?');

        if (pass == "Черный Властелин") {
            alert('Welcome');
        }
        else if (pass == null) {
            alert('Вход не выполнен');
        }
        else {
            alert('Пароль введен неверно!');
        }

    } else if (userName == null) {
        alert('Вход не выполнен');
    }
    else {
        alert('Вы кто-то другой!');
    }
})();