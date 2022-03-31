(function(){
  const btns = document.querySelectorAll('.btn');
  const API_KEY = 'd344d292217d59fd0202174f364a257f-us14';
  const API_SERVER = 'us14';
  const AUDIENCE_ID = 'a6a081aa9e';
  const email = 'Ebony_Brekke@gmail.com';

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "windows";
    }

    if (/android/i.test(userAgent)) {
      return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
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
})()