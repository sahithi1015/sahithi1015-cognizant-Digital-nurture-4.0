function handleSubmit(e) {
  e.preventDefault();
  document.getElementById('formOutput').textContent = 'Thank you for registering!';
}

function validatePhone() {
  const phone = document.getElementById('phone').value;
  if (!/^\d{10}$/.test(phone)) {
    alert('Please enter a 10-digit phone number');
  }
}

function savePreference() {
  const selected = document.getElementById('eventType').value;
  localStorage.setItem('preferredEvent', selected);
}

window.onload = () => {
  const pref = localStorage.getItem('preferredEvent');
  if (pref) {
    document.getElementById('eventType').value = pref;
  }
};

function clearPreferences() {
  localStorage.clear();
  sessionStorage.clear();
  alert('Preferences cleared!');
}

function showConfirmation() {
  alert('Form submitted successfully!');
}

function enlargeVideo(video) {
  video.style.width = '100%';
}

function showVideoReadyMessage() {
  document.getElementById('videoStatus').textContent = 'Video ready to play';
}

function countChars() {
  const text = document.getElementById('feedback').value;
  document.getElementById('charCount').textContent = text.length;
}

function findLocation() {
  if (!navigator.geolocation) {
    document.getElementById('locationOutput').textContent = 'Geolocation not supported.';
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      document.getElementById('locationOutput').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
    },
    (error) => {
      document.getElementById('locationOutput').textContent = 'Location access denied or timed out.';
    },
    { enableHighAccuracy: true, timeout: 5000 }
  );
}

window.onbeforeunload = function () {
  return 'Are you sure you want to leave? Your form may not be submitted.';
};
