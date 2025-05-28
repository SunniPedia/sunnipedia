function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function jumpToAyah() {
  const userInput = prompt("কোন আয়াতে যেতে চান? (ইংরেজি সংখ্যায় লিখুন)", "");
  if (!userInput) return;

  const target = parseInt(userInput);
  if (isNaN(target)) {
    alert("সঠিক সংখ্যা লিখুন");
    return;
  }

  const cards = document.querySelectorAll('.ayah-card');
  const surah = document.getElementById('surahTitle')?.innerText?.trim();
  const isExactSurah = ['আল ফাতিহা', 'আত তালাক', 'আত তওবা'].includes(surah);
  const jumpIndex = isExactSurah ? target - 1 : target;

  if (jumpIndex >= 0 && jumpIndex < cards.length) {
    cards[jumpIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert("এই সূরায় এতগুলো আয়াত নেই");
  }
}

function goBack() {
  history.back();
}

function toggleSearch() {
  const box = document.getElementById('searchBox');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('searchInput').addEventListener('input', function () {
  const query = this.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.ayah-card');
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? 'block' : 'none';
  });
});

function convertToBanglaNumber(number) {
  const engToBan = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
  return number.toString().split('').map(char => engToBan[char] || char).join('');
}

function formatAyahText(ayahNum, arabic, kanzul, irfan) {
  return `আয়াত নং : ${ayahNum}
${arabic}

কানযুল ঈমান

${ayahNum}. ${kanzul}

ইরফানুল কুরআন

${irfan}

ইসলামী বিশ্বকোষ ও আল হাদিস S2 :    
https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
}

function copyAyah(elem) {
  const text = elem.getAttribute("data-text");
  navigator.clipboard.writeText(text).then(() => {
    alert("আয়াত কপি হয়েছে!");
  });
}

function shareAyah(elem) {
  const text = elem.getAttribute("data-text");
  if (navigator.share) {
    navigator.share({ text });
  } else {
    alert("এই ডিভাইসে শেয়ার সাপোর্ট করে না।");
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
function hideController() {
  //controller.style.display = 'none';
}

function removeAllHighlights() {
  document.querySelectorAll('.ayah-card.highlighted').forEach(card => {
    card.classList.remove('highlighted');
  });
}

function toggleAudio(el) {
  const id = el.dataset.id;
  const index = audioElements.indexOf(el);

  if (!id) {
    alert("অডিও পাওয়া যায়নি");
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
        alert("পুনরায় চালাতে সমস্যা হচ্ছে");
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
      card.scrollIntoView({ behavior: 'smooth', block: 'end' });
      removeAllHighlights();
      card.classList.add('highlighted');
    }
  }).catch(err => {
    alert("অডিও চালাতে সমস্যা হচ্ছে। হয়তো ব্যবহারকারী ক্লিক করেনি বা নেটওয়ার্ক সমস্যা।");
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
        alert("পুনরায় চালাতে সমস্যা হচ্ছে");
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

  // ১০ সেকেন্ড পরে অডিও কন্ট্রোলার দৃশ্যমান করো
  setTimeout(() => {
    const controller = document.getElementById('audioController');
    if (controller) {
      controller.style.display = 'flex'; // প্রয়োজন হলে 'block' বা অন্য ডিসপ্লে দিন
    }
  }, 100);
});