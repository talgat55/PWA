importScripts('cache-polyfill.js');

var CACHE_VERSION = 'app-v1';
var CACHE_FILES = [
    './',
    'images/favicon.png',
    'images/logo_black.png',
    'images/logo_white.png',
    'images/cart1.jpg',
    'images/cart2.jpg',
    'images/image1.jpg',
    'images/image2.jpg',
    'images/web.png',
    'images/phones.png',
    'images/software.png',
    'images/cdv2r.png',
    'images/main.png',
    'images/parallax.jpg',
    'images/portfolio.jpg',
    'images/portfolio2.jpg',
    'images/portfolio4.jpg',
    'images/portfolio5.jpg',
    'images/portfolio6.jpg',
    'images/portfolio3.jpg',
    'images/portfolio9.jpg',
    'images/portfolio10.jpg',
    'images/team.jpg',
    'images/team2.jpg',
    'images/team3.jpg',
    'images/team4.jpg',
    'images/image_1.jpg',
    'images/image_2.jpg',
    'images/image_3.jpg',
    'images/image_4.jpg',
    'images/story.jpg',
    'images/logo2.png',
    'images/logo4.png',
    'images/close.png',
    'images/next.png',
    'images/prev.png',
    'images/footer-logo.png',
    'images/footer-image1.jpg',
    'images/footer-image2.jpg',
    'images/footer-image3.jpg',
    'images/footer-image4.jpg',
    'images/footer-image5.jpg',
    'images/footer-image6.jpg',
    'images/loading.GIF',
    'js/app.js',
    'js/jquery.js',
    'js/lightbox.js',
    'js/plugins.js',
    'js/default_js.js',
    'js/swiperslider.js',
    'js/skrollr.js',
    'js/serviceslider.js',
    'js/jquery-ui.min.js',
    'css/styles.css',
    'css/bootstrap.css',
    'css/lightbox.css',
    'css/font-awesome.min.css',
    'http://fonts.googleapis.com/css?family=Dosis:300,600,700,800'
];


self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_VERSION)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(CACHE_FILES);
            })
    );
});

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function(keys){
            return Promise.all(keys.map(function(key, i){
                if(key !== CACHE_VERSION){
                    return caches.delete(keys[i]);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function(res){
            if(res){
                return res;
            }
            requestBackend(event);
        })
    )
});

function requestBackend(event){
    var url = event.request.clone();
    return fetch(url).then(function(res){
        //if not a valid response send the error
        if(!res || res.status !== 200 || res.type !== 'basic'){
            return res;
        }

        var response = res.clone();

        caches.open(CACHE_VERSION).then(function(cache){
            cache.put(event.request, response);
        });

        return res;
    })
}