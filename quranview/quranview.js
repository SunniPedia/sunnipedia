function jumpToAyah() {
  const userInput = prompt("কোন আয়াতে যেতে চান? (সংখ্যা লিখুন)", "");
  if (!userInput) return;

  const target = parseInt(userInput);
  if (isNaN(target)) {
    alert("সঠিক সংখ্যা লিখুন");
    return;
  }

  const cards = document.querySelectorAll('.ayah-card');
  const surah = getQueryParam('surah');
  const isExactSurah = ['Al-Fatihah', 'At-Talaq', 'At-Tawbah'].includes(surah);
  const jumpIndex = isExactSurah ? target - 1 : target;

  if (jumpIndex >= 0 && jumpIndex < cards.length) {
    cards[jumpIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    alert("এই সূরায় এতগুলো আয়াত নেই");
  }
}

function goBack() {
  window.location.href = 'quran.html';
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

function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

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

আসসালামু আলাইকুম ইসলামী বিশ্বকোষ ও আল হাদিস S2 :    
https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
}

function copyAyah(el) {
  const ayahNum = el.dataset.num;
  const arabic = el.dataset.arabic;
  const kanzul = el.dataset.kanzul;
  const irfan = el.dataset.irfan;
  const text = formatAyahText(ayahNum, arabic, kanzul, irfan);
  navigator.clipboard.writeText(text).then(() => {
    alert("আয়াত কপি হয়েছে!");
  });
}

function shareAyah(el) {
  const ayahNum = el.dataset.num;
  const arabic = el.dataset.arabic;
  const kanzul = el.dataset.kanzul;
  const irfan = el.dataset.irfan;
  const text = formatAyahText(ayahNum, arabic, kanzul, irfan);
  if (navigator.share) {
    navigator.share({ text: text }).catch(() => alert("শেয়ার ব্যর্থ হয়েছে"));
  } else {
    alert("এই ব্রাউজারে শেয়ার সাপোর্ট করে না। কপি করে নিতে পারেন।");
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
  controller.style.display = 'none';
}

function toggleAudio(el) {
  const id = el.dataset.id;
  const index = audioElements.indexOf(el);

  if (currentAudio && !currentAudio.paused && index === currentIndex) {
    currentAudio.pause();
    el.src = 'play.png';
    mainPlayPause.src = 'play.png';
    controller.style.position = currentIndex === audioElements.length - 1 ? 'static' : 'fixed';
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    audioElements[currentIndex].src = 'play.png';
  }

  currentIndex = index;
  const audioUrl = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${id}.mp3`;
  currentAudio = new Audio(audioUrl);
  el.src = 'pause.png';
  mainPlayPause.src = 'pause.png';
  showController();

  currentAudio.play().catch(err => {
    alert("অডিও চালাতে সমস্যা হচ্ছে");
    console.error(err);
  });

  currentAudio.onended = () => {
    el.src = 'play.png';
    mainPlayPause.src = 'play.png';
    playNext();
  };

  const card = el.closest('.ayah-card');
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function toggleMainPlayPause() {
  if (currentAudio) {
    if (currentAudio.paused) {
      currentAudio.play();
      mainPlayPause.src = 'pause.png';
      audioElements[currentIndex].src = 'pause.png';
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
  }
  hideController();
}

function playNext() {
  const nextIndex = currentIndex + 1;
  if (nextIndex < audioElements.length) {
    toggleAudio(audioElements[nextIndex]);
  } else {
    controller.style.position = 'static';
  }
}

function playPrevious() {
  const prevIndex = currentIndex - 1;
  if (prevIndex >= 0) {
    toggleAudio(audioElements[prevIndex]);
  }
}

// অডিও বাটনগুলো লোড হওয়ার পর সংগ্রহ করা
document.addEventListener("DOMContentLoaded", () => {
  audioElements = Array.from(document.querySelectorAll('img[alt="Play"]'));
});