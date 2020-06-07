import { register } from 'register-service-worker';

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('Service worker is active.');
    },
    registered (registration) {
      console.log('Service worker has been registered.');

      // Routinely checks for app updates by testing for a new service worker.
      setInterval(() => {
        registration.update();
      }, 1000 * 60 * 60); // hourly checks
    },
    cached () {
      console.log('Content has been cached for offline use.');
    },
    updatefound () {
      console.log('New content is downloading.');
    },
    updated (registration) {
      console.log('New content is available; please refresh.');

      // Adds a custom event; used to trigger 'refresh' snackbar on sw update.
      // Sets the event payload to the sw registration object.
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration }),
      );
    },
    offline () {
      console.log(
        'No internet connection found. App is running in offline mode.',
      );
    },
    error (err) {
      console.error('Error during service worker registration:', err);
    },
  });
}
