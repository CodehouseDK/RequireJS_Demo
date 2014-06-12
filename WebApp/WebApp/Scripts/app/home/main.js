define(['jquery'], function ($) {
    return function() {
        var jumbotron = $('#imhere');
        jumbotron.text('You are home');
        jumbotron.removeClass('hidden');
        
    };
});