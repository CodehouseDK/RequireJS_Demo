define(['jquery'], function ($) {
    return function (message) {
        var jumbotron = $('#imhere');
        jumbotron.text(message);
        jumbotron.removeClass('hidden');

    };
});