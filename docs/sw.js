/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-8f3c274bd3fbb0d48f2d.js"
  },
  {
    "url": "styles.22aa8ee0c2e6efe836b5.css"
  },
  {
    "url": "styles-e9d24b1846c7d6eb9685.js"
  },
  {
    "url": "framework-beda7bde9d7dca0755ce.js"
  },
  {
    "url": "app-8cb33facf89101e79d58.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "dd8b854b45553cefc185d620383b5437"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-fd4fb51a6fac1c18bdde.js"
  },
  {
    "url": "polyfill-d32d537923e12a484928.js"
  },
  {
    "url": "22df2c6f0e0b02f286186edbe62a3193fb639611-b0587a98d74a87b3beff.js"
  },
  {
    "url": "component---src-pages-404-js-9d55a682f957f2a44047.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "0444920d988b0fba30285f2640d4be2e"
  },
  {
    "url": "page-data/sq/d/1143375668.json",
    "revision": "81a5d74b0f2d0e4cdbbd1d51086b472d"
  },
  {
    "url": "page-data/sq/d/1491088328.json",
    "revision": "bb5a1e4b03b9ee873fbf8132b914f53f"
  },
  {
    "url": "page-data/sq/d/2444214635.json",
    "revision": "50a29123b31812be71b55a128f1f52c9"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "c35d07343279d990f0782514c4668302"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "36ead6c429c4f0e4f0493ad4ab18d1c1"
  },
  {
    "url": "f0e45107-042b081a9beedf37ad59.js"
  },
  {
    "url": "f7f859cd4bf156c2acc6f46f65ba39cb35d4c0a9-8e2b10e123f08132686b.js"
  },
  {
    "url": "component---node-modules-narative-gatsby-theme-novela-src-templates-article-template-tsx-c4b5ec189faf95e0023a.js"
  },
  {
    "url": "page-data/ajax/page-data.json",
    "revision": "e58972cb136046e5c61cc9c99d792d5b"
  },
  {
    "url": "page-data/sq/d/1921650733.json",
    "revision": "ec515299d1f7640f78744ddfe89793d4"
  },
  {
    "url": "page-data/sq/d/2068910035.json",
    "revision": "d080d6fdcc5476163d2226e724368b06"
  },
  {
    "url": "page-data/callapplybind/page-data.json",
    "revision": "7cc0e1843bebb5d88ca8eb4fc0cc179b"
  },
  {
    "url": "page-data/cssyuan/page-data.json",
    "revision": "194bf7ff1bec816b260a83335a97d41e"
  },
  {
    "url": "page-data/dashboard/page-data.json",
    "revision": "f327e2136f4d7f5e1968a0383cc96bdb"
  },
  {
    "url": "page-data/fiber/page-data.json",
    "revision": "c22a62821ccf5e6d852f00b13f51b9f5"
  },
  {
    "url": "cfc86df3-70787a6ec6fec8018aa6.js"
  },
  {
    "url": "5adfd937054d18aa90c3653907d1d43da6549296-bc50838dcf99e46772bb.js"
  },
  {
    "url": "component---node-modules-narative-gatsby-theme-novela-src-templates-articles-template-tsx-d9850c23be282e563237.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "3b2b87bbeb10dffdbdc6f732d783cb27"
  },
  {
    "url": "page-data/sq/d/3372861117.json",
    "revision": "0964a287b783a7fdcdc56dfb85739139"
  },
  {
    "url": "page-data/js/page-data.json",
    "revision": "8fc8b2c7adba7a3466fed19f0d06a51a"
  },
  {
    "url": "page-data/jscss-'background:paint(xxx)'/page-data.json",
    "revision": "bdb1fc532c2ed28e13afd58d29ea9d11"
  },
  {
    "url": "page-data/promisea+/page-data.json",
    "revision": "e94a41da758a1e1b65dc7c02905ece4e"
  },
  {
    "url": "page-data/throttledebounce/page-data.json",
    "revision": "ab5d6b7faca3851068c90bff0be75782"
  },
  {
    "url": "page-data/typescript/page-data.json",
    "revision": "299eecc72efccfaa24cfb5f6f7801f48"
  },
  {
    "url": "page-data/usestate/page-data.json",
    "revision": "8d6ff49c19a5651fe0d8d3d516bb86f3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "da92816509d83be3a606092f13da208a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8cb33facf89101e79d58.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
