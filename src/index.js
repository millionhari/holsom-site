import './styles/main.scss';
const mailchimp = require("@mailchimp/mailchimp_marketing");
const btns = document.querySelectorAll('.btn');
const API_KEY = 'd344d292217d59fd0202174f364a257f-us14';
const API_SERVER = 'us14';
const AUDIENCE_ID = 'a6a081aa9e';
const email = 'Ebony_Brekke@gmail.com';

mailchimp.setConfig({
  apiKey: API_KEY,
  server: API_SERVER,
});

console.log('hey');

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();

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