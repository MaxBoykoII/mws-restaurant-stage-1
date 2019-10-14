const cacheVersion = 'restaurant-reviews-v1';

console.log(`Running version ${cacheVersion}...`);

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheVersion).then((cache) =>
            cache.addAll([
                '/',
                'restaurant.html',
                'js/dbhelper.js',
                'js/main.js',
                'js/restaurant_info.js',
                'css/styles.css',
                'css/styles-sm.css',
                'css/styles-xs.css',
                'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
                'https://unpkg.com/leaflet@1.3.1/dist/leaflet.css',
                'img/1.jpg',
                'img/2.jpg',
                'img/3.jpg',
                'img/4.jpg',
                'img/5.jpg',
                'img/6.jpg',
                'img/7.jpg',
                'img/8.jpg',
                'img/9.jpg',
                'img/10.jpg'
            ]))
            .catch(e => console.log('There was a problem opening the cache...', e)));
});


self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request)));
});