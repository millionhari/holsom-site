import './styles/main.scss';
const btns = document.querySelectorAll('.btn');

// Helper function
const domReady = (cb) => {
  document.readyState === 'interactive' || document.readyState === 'complete'
    ? cb()
    : document.addEventListener('DOMContentLoaded', cb);
};

domReady(() => {
  // Display body when DOM is loaded
  document.body.style.visibility = 'visible';
});

function getMobileOperatingSystem() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/windows phone/i.test(userAgent)) {
    return "windows";
  }

  if (/android/i.test(userAgent)) {
    return "android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
  }

  return "unknown";
}

if (getMobileOperatingSystem() === 'ios') {
  // replace with ios badge
  btns.forEach(function(e) {
    e.outerHTML = '<img class="badge" src="./dist/images/ios-badge.png" alt="Download on the App Store">';
  })
} else if (getMobileOperatingSystem() === 'android') {
  // replace with android badge
  btns.forEach(function(e) {
    e.outerHTML = '<img class="badge" src="./dist/images/google-play-badge.png" alt="Download on the Google Play Store">';
  })
}