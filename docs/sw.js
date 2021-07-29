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
    "url": "webpack-runtime-6c6c09e801383ab39cec.js"
  },
  {
    "url": "styles.22aa8ee0c2e6efe836b5.css"
  },
  {
    "url": "styles-7d4153d260c0197f0043.js"
  },
  {
    "url": "framework-acd7498685eeb36e39da.js"
  },
  {
    "url": "app-643a7f9241bc53225473.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "02ca6423d32ee206da64b7586b01a4b4"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a95b272f8c25b9a8a758.js"
  },
  {
    "url": "polyfill-2fa4791f5d87adda3b2a.js"
  },
  {
    "url": "1bfc9850-2971a235dcba394cb3cc.js"
  },
  {
    "url": "94158ac8cbf2b7d02a956c35d3a10ee3a2fed2cd-55afdbb7356bf2509246.js"
  },
  {
    "url": "component---src-pages-404-js-7f93dfb86a77dff33ee9.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "634b3e0b6621da7a7a7828fc7dc28746"
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
    "url": "page-data/sq/d/3802270912.json",
    "revision": "2abae7d714f0cdcb3739df68b13f6984"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "a2036ecf966d47e5714fb0c7980c1176"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "1d6cdf2b3e0ef5ab52e9cdfae570f833"
  },
  {
    "url": "f0e45107-4690c1fcd75a276689d2.js"
  },
  {
    "url": "d59818a277a63e94f3957e3702ab9a81b507562b-5a86ce10babf93d999fe.js"
  },
  {
    "url": "component---src-narative-gatsby-theme-novela-templates-article-template-tsx-8130df018a8ebc209194.js"
  },
  {
    "url": "page-data/ajax/page-data.json",
    "revision": "8de819cbf4db3e898db0fea57ae37742"
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
    "revision": "1dac5e101cfe3aa351e208589958322b"
  },
  {
    "url": "page-data/dashboard1/page-data.json",
    "revision": "373acf935cea0802ab282d45545c28f5"
  },
  {
    "url": "page-data/debounce/page-data.json",
    "revision": "860fb37335fb5ae01b4fcf1670b7b81e"
  },
  {
    "url": "page-data/fiber/page-data.json",
    "revision": "8192ac72f77583c7dfa054d5ad8518d8"
  },
  {
    "url": "9d86c5a1-2ccb1a1443015975124b.js"
  },
  {
    "url": "5fa2fdbf4b7a894b8ac41185861b18ed815ef969-22c032841b2f6e068e2a.js"
  },
  {
    "url": "component---src-narative-gatsby-theme-novela-templates-articles-template-tsx-c1f68ffb03dd8565c573.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "0b82b9429673b8b1432fef5f95d75991"
  },
  {
    "url": "page-data/sq/d/3372861117.json",
    "revision": "0964a287b783a7fdcdc56dfb85739139"
  },
  {
    "url": "page-data/jsbackground/page-data.json",
    "revision": "2f10b7144ebf18ec134c07084799ce32"
  },
  {
    "url": "page-data/liststyle/page-data.json",
    "revision": "55b1a01903e4eb58162e17b76983cf15"
  },
  {
    "url": "page-data/module/page-data.json",
    "revision": "02872a177ae5a96ec6ed03e2a07109a5"
  },
  {
    "url": "page-data/promisea+/page-data.json",
    "revision": "fa1ff5e7aadf335636acdfeaeee8ea97"
  },
  {
    "url": "page-data/tsbase/page-data.json",
    "revision": "d40ee566d4514589f7f9dd3efa0f7a80"
  },
  {
    "url": "page-data/usestate/page-data.json",
    "revision": "84edae6b251d4e3ea75df963e7b08644"
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
  if (!resources || !(await caches.match(`/app-643a7f9241bc53225473.js`))) {
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
