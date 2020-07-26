'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b347cf7f1aa6514f6329ef6c9391da8d",
"/": "b347cf7f1aa6514f6329ef6c9391da8d",
"main.dart.js": "a81189c9e3655b608e79676d2ac2d8c2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "62741b710c144cf937be33fd97bcba0c",
"assets/LICENSE": "1325f59ddf4faf4047850c1a8466bf31",
"assets/images/hemanth.jpg": "4cf1a7467509e4a517413310305cd641",
"assets/images/about_me.jpg": "50985ba685ed1b7d235b30f80425f70b",
"assets/images/home.png": "73d17752cd62ea8d4504e62dce0cab7d",
"assets/images/background.jpg": "ddf4e951e926f1f2486ebe511bea86f6",
"assets/images/unnamed.webp": "eaee898baea7632c3da43d0da2a27b4c",
"assets/images/now_playing.png": "bba2a13b66b3d971ab9aa8c9355d4f35",
"assets/images/about_me.jpeg": "3a8025f685ebe305959c5243a34e2d80",
"assets/AssetManifest.json": "c70b744c6f0a94d2554ad2675ab27fbb",
"assets/FontManifest.json": "7b98d9f1fafa209fcc02bf78b2070c0b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Product%2520Sans%2520Regular.ttf": "eae9c18cee82a8a1a52e654911f8fe83"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
