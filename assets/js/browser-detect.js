var ua = navigator.userAgent.toLowerCase()
var isSafari = false

try {
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]'
    })(!window['safari'] || safari.pushNotification)
} catch (err) { }

isSafari = isSafari || (ua.indexOf('safari') != -1 && !(ua.indexOf('chrome') != -1) && ua.indexOf('version/') != -1)

if (isSafari) {
  var element = document.getElementById('video-banner')
  element.classList.add('hidden')
} else {
  var element = document.getElementById('image-banner')
  element.classList.add('hidden')
}
