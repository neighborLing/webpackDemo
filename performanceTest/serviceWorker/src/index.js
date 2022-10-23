if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(() => {
      console.log('Service Worker registration successful')
    })
    .catch((err) => {
      console.log('Service worker registration failed')
    })
  })
}