var CACHE_NAME = 'my-site-cache_2ss003e';
var urlsToCache = [
  '/',
  '/index.js',
  '/assets/**.jpg'
];

var errResponseContent = `
<html>
  <body>
    <head>
      <meta charset="UTF-8">
      <title>service+worker异常</title>
      <style>body{color:red;font-size:18px;}</style>
    </head>
    <h2>service worker异常的处理</h2>
  </body>
  </html>
`

self.addEventListener('install', function(e) {
  // Perform install steps
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache); // 向缓存中添加文件
      }).catch((err) => {
        console.log(err);
      })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      if (response) { // 命中缓存
        return response
      }
      var fetchRequest = e.request.clone();
      return fetch(fetchRequest).then(
        function(response) {
          if(!response || response.status !== 200 || response.type !== 'basic') { 
            // 失败的请求，以及非自身发起的请求不进行缓存
            return response;
          }

          // 进行页面缓存
          var responseToCache = response.clone();
          caches.open(CACHE_NAME)
          .then(function(cache) {
            cache.put(e.request, responseToCache);
          });
          return response;
        }
      )
    }).catch(function(e) { // 如果出现错误就显示配置的页面
      console.log(e);
      return new Response(
        errResponseContent,
        {headers: {"Content-Type": "text/html"}}
      )  
    })
  );
})

self.addEventListener("activate", function(e) {
  e.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (CACHE_NAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
});