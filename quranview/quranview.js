function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function jumpToAyah() {
  const dialog = document.createElement('div');
  dialog.className = 'custom-dialog';
  dialog.innerHTML = `
    <div class="dialog-content">
      <h2>কোন আয়াতে যেতে চান?</h2>
      <input type="number" id="ayahInput" placeholder="সংখ্যা লিখুন">
      <button id="submitBtn">সাবমিট করুন</button>
      <button id="closeBtn">বন্ধ করুন</button>
    </div>
  `;
  document.body.appendChild(dialog);

  // জমা বাটনে ক্লিক করলে
  document.getElementById('submitBtn').addEventListener('click', function() {
    const userInput = document.getElementById('ayahInput').value.trim();
    if (!userInput) {
      showToast("কোনো সংখ্যা লিখুন");
      return;
    }

    const target = parseInt(userInput);
    if (isNaN(target)) {
      showToast("সঠিক সংখ্যা লিখুন");
      return;
    }

    const cards = document.querySelectorAll('.ayah-card');
    const surah = document.getElementById('surahTitle')?.innerText?.trim();
    const isExactSurah = ['আল ফাতিহা', 'আত তালাক', 'আত তওবা'].includes(surah);
    const jumpIndex = isExactSurah ? target - 1 : target;

    if (jumpIndex >= 0 && jumpIndex < cards.length) {
      cards[jumpIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      dialog.style.display = 'none'; // ডায়লগ বন্ধ করা
      document.body.removeChild(dialog);
    } else {
      showToast("এই সূরায় এতগুলো আয়াত নেই");
    }
  });

  // বন্ধ বাটন ক্লিক করলে ডায়লগ বন্ধ করা
  document.getElementById('closeBtn').addEventListener('click', function() {
    dialog.style.display = 'none';
    document.body.removeChild(dialog);
  });

  // ডায়লগ দেখানো
  dialog.style.display = 'flex';
}

function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  // টোস্ট অদৃশ্য করতে এবং পরে মুছে ফেলা
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}

function copyAyah(elem) {
  const text = elem.getAttribute("data-text");
  navigator.clipboard.writeText(text).then(() => {
    showToast("আয়াত কপি হয়েছে!");
  });
}

function shareAyah(elem) {
  const text = elem.getAttribute("data-text");
  if (navigator.share) {
    navigator.share({ text }).then(() => {
      showToast("আয়াত শেয়ার করা হয়েছে!");
    }).catch(err => {
      showToast("শেয়ার করতে সমস্যা হচ্ছে!");
    });
  } else {
    showToast("এই ডিভাইসে শেয়ার সাপোর্ট করে না।");
  }
}

let currentAudio = null;
let currentIndex = -1;
let audioElements = [];
const controller = document.getElementById('audioController');
const mainPlayPause = document.getElementById('mainPlayPause');

function showController() {
  controller.style.display = 'flex';
}

function hideController() {}

function removeAllHighlights() {
  document.querySelectorAll('.ayah-card.highlighted').forEach(card => {
    card.classList.remove('highlighted');
  });
}

function toggleAudio(el) {
  const id = el.dataset.id;
  const index = audioElements.indexOf(el);

  if (!id) {
    showToast("অডিও পাওয়া যায়নি");
    return;
  }

  // যদি একই আয়াতে আবার ক্লিক করা হয়, তাহলে পজ/রিজিউম করো
  if (currentAudio && index === currentIndex) {
    if (!currentAudio.paused) {
      currentAudio.pause();
      el.src = 'play.png';
      mainPlayPause.src = 'play.png';
    } else {
      currentAudio.play().then(() => {
        el.src = 'pause.png';
        mainPlayPause.src = 'pause.png';
      }).catch(err => {
        showToast("পুনরায় চালাতে সমস্যা হচ্ছে");
        console.error(err);
      });
    }
    return;
  }

  // আগের অডিও বন্ধ করো
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (currentIndex >= 0 && currentIndex < audioElements.length) {
      audioElements[currentIndex].src = 'play.png';
    }
  }

  currentIndex = index;
  const audioUrl = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${id}.mp3`;
  currentAudio = new Audio(audioUrl);

  el.src = 'pause.png';
  mainPlayPause.src = 'pause.png';
  showController();

  currentAudio.play().then(() => {
    const card = el.closest('.ayah-card');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      removeAllHighlights();
      card.classList.add('highlighted');
    }
  }).catch(err => {
    showToast("অডিও চালাতে সমস্যা হচ্ছে। হয়তো ব্যবহারকারী ক্লিক করেনি বা নেটওয়ার্ক সমস্যা।");
    console.error("অডিও চালানোর ত্রুটি:", err);
    el.src = 'play.png';
    mainPlayPause.src = 'play.png';
    hideController();
  });

  currentAudio.onended = () => {
    el.src = 'play.png';
    mainPlayPause.src = 'play.png';

    const nextIndex = currentIndex + 1;
    if (nextIndex < audioElements.length) {
      playNext();
    } else {
      currentIndex = -1;
      currentAudio = null;
    }
  };
}

function toggleMainPlayPause() {
  if (!currentAudio && currentIndex === -1 && audioElements.length > 0) {
    // শেষ হওয়ার পরে আবার শুরু করতে চাইলে
    currentIndex = 0;
    toggleAudio(audioElements[0]);
    return;
  }

  if (currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play().then(() => {
        mainPlayPause.src = 'pause.png';
        audioElements[currentIndex].src = 'pause.png';
      }).catch(err => {
        showToast("পুনরায় চালাতে সমস্যা হচ্ছে");
        console.error(err);
      });
    } else {
      currentAudio.pause();
      mainPlayPause.src = 'play.png';
      audioElements[currentIndex].src = 'play.png';
    }
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    audioElements[currentIndex].src = 'play.png';
    mainPlayPause.src = 'play.png';
    removeAllHighlights();
  }
  hideController();
}

function playNext() {
  const nextIndex = currentIndex + 1;
  if (nextIndex < audioElements.length) {
    toggleAudio(audioElements[nextIndex]);
  }
}

function playPrevious() {
  const prevIndex = currentIndex - 1;
  if (prevIndex >= 0) {
    toggleAudio(audioElements[prevIndex]);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  audioElements = Array.from(document.querySelectorAll('img[alt="Play"]'));
  document.getElementById('mainPlayPause').src = 'play.png';
  
  // ১০
  setTimeout(() => {
    const controller = document.getElementById('audioController');
    if (controller) {
      controller.style.display = 'flex';
    }
  }, 100);
});

// সার্চ ফিচার
function toggleSearch() {
  const box = document.getElementById('searchBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.ayah-card');
  let resultsFound = false;  // সার্চ রেজাল্ট পেলে এটি true হবে

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'block';
      resultsFound = true;
    } else {
      card.style.display = 'none';
    }
  });

  // যদি কোন রেজাল্ট না পাওয়া যায়, তাহলে টোস্ট শো হবে
  if (!resultsFound && query) {
    showToast1("কোন আয়াত খুঁজে পাওয়া যায়নি");
  }
});

function showToast1(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);

  // Toast styling
  toast.style.position = 'fixed';
  toast.style.top = '50%'; // Center vertically
  toast.style.left = '50%'; // Center horizontally
  toast.style.transform = 'translate(-50%, -50%)'; // Center both vertically and horizontally

  // Toast fade out and removal after 3 seconds
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500); // After fading out, remove the toast
  }, 3000); // Display toast for 3 seconds
}

// Styling for the toast
const style = document.createElement('style');
style.innerHTML = `
  .toast {
    background-color: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    opacity: 1;
    transition: opacity 0.5s;
    font-size: 14px;
    z-index: 9999;
    font-family: 'SolaimanLipi', sans-serif;
    max-width: 80%;  /* Prevents overflow */
    text-align: center; /* Centers the text inside */
    word-wrap: break-word; /* Ensures long words wrap properly */
  }
`;
document.head.appendChild(style);