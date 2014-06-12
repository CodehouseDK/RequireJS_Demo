requirejs.config({
    baseUrl: '/scripts/lib',
    paths: {
        app: '../app',
        modules: '../modules'
    }
});
require(['crossroads', './app/home/main', './app/about/main', './app/contact/main'], function (router, home, about, contact) {
   
    router.addRoute('/', home);
    router.addRoute('/home/about', about);
    router.addRoute('/home/contact', contact);

    var currentPath = document.location.pathname + document.location.search;
    router.parse(currentPath);
});