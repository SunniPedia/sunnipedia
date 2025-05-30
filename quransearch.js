// back button 
function goBack() {
  window.location.href = 'quran.html';
}

// বাংলা সংখ্যায় রূপান্তর 
function convertToBanglaNumber(number) {
  const engToBan = { '0': '০', '1': '১', '2': '২', '3': '৩', '4': '৪', '5': '৫', '6': '৬', '7': '৭', '8': '৮', '9': '৯' };
  return number.toString().split('').map(ch => engToBan[ch] || ch).join('');
}

// আয়াতের টেক্সট কপি ও শেয়ার ফরম্যাটিং 
function formatAyahText(num, arabic, kanzul, irfan) {
  return `আয়াত নং : ${num} ${arabic}

কানযুল ঈমান

${num}. ${kanzul}

ইরফানুল কুরআন

${irfan}

আসসালামু আলাইকুম ইসলামী বিশ্বকোষ ও আল হাদিস S2 :
https://play.google.com/store/apps/details?id=com.srizwan.bookhozur500`;
}

// কপি ফাংশন 
function copyAyah(el) {
  const { num, arabic, kanzul, irfan } = el.dataset;
  const text = formatAyahText(num, arabic, kanzul, irfan);
  navigator.clipboard.writeText(text).then(() => alert("আয়াত কপি হয়েছে!"));
}

// শেয়ার ফাংশন 
function shareAyah(el) {
  const { num, arabic, kanzul, irfan } = el.dataset;
  const text = formatAyahText(num, arabic, kanzul, irfan);
  if (navigator.share) {
    navigator.share({ text }).catch(() => alert("শেয়ার ব্যর্থ হয়েছে"));
  } else {
    alert("এই ব্রাউজারে শেয়ার সাপোর্ট করে না। কপি করে নিতে পারেন।");
  }
}

let audioElements = [];
let currentAudio = null;
let currentIndex = -1;

const controller = document.getElementById('audioController');
const mainPlayPause = document.getElementById('mainPlayPause');

function showController() {
  controller.style.display = 'flex';
}
function hideController() {
  controller.style.display = 'none';
}

function toggleAudio(el) {
  const index = audioElements.indexOf(el);
  if (currentAudio && !currentAudio.paused && index === currentIndex) {
    currentAudio.pause();
    el.src = 'play.png';
    mainPlayPause.src = 'play.png';
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    if (audioElements[currentIndex]) audioElements[currentIndex].src = 'play.png';
  }

  currentIndex = index;
  const audioId = el.dataset.id;
  const audioUrl = `https://cdn.islamic.network/quran/audio/64/ar.alafasy/${audioId}.mp3`;
  currentAudio = new Audio(audioUrl);

  el.src = 'pause.png';
  mainPlayPause.src = 'pause.png';
  showController();

  currentAudio.play().catch(() => alert("অডিও চালাতে সমস্যা হচ্ছে"));

  currentAudio.onended = () => {
    if (audioElements[currentIndex]) audioElements[currentIndex].src = 'play.png';
    mainPlayPause.src = 'play.png';
    playNext();
  };

  const card = el.closest('.ayah-card');
  if (card) card.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function toggleMainPlayPause() {
  if (!currentAudio) return;
  if (currentAudio.paused) {
    currentAudio.play();
    mainPlayPause.src = 'pause.png';
    if (audioElements[currentIndex]) audioElements[currentIndex].src = 'pause.png';
  } else {
    currentAudio.pause();
    mainPlayPause.src = 'play.png';
    if (audioElements[currentIndex]) audioElements[currentIndex].src = 'play.png';
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    if (audioElements[currentIndex]) audioElements[currentIndex].src = 'play.png';
    mainPlayPause.src = 'play.png';
  }
  hideController();
}

function playNext() {
  if (currentIndex + 1 < audioElements.length) {
    toggleAudio(audioElements[currentIndex + 1]);
  }
}

function playPrevious() {
  if (currentIndex - 1 >= 0) {
    toggleAudio(audioElements[currentIndex - 1]);
  }
}

const ayahList = document.getElementById('ayahList');
const loadingElement = document.getElementById('loading');
const searchInput = document.getElementById('searchInput');

let suraList = [];
let allAyahs = [];
let isDataLoaded = false;  // ডেটা লোডেড কি না জানার জন্য

function loadAllAyahs() {
  loadingElement.style.display = 'block';
  ayahList.innerHTML = '';
  audioElements = [];
  currentAudio = null;
  currentIndex = -1;
  hideController();

  fetch('https://cdn.jsdelivr.net/gh/SunniPedia/sunnipedia@main/sura.json')
    .then(res => res.json())
    .then(data => {
      suraList = data;
      let loadedCount = 0;
      allAyahs = [];

      suraList.forEach(sura => {
        fetch(`surah/${sura.author}.json`)
          .then(res => res.json())
          .then(ayahs => {
            ayahs.forEach((ayah, idx) => {
              allAyahs.push({
                ...ayah,
                suraName: sura.name || '',
                ayahNumber: idx + 1,
                suraNumber: sura.id || 0
              });
            });
            loadedCount++;
            if (loadedCount === suraList.length) {
              loadingElement.style.display = 'none';
              isDataLoaded = true;
              console.log("All ayahs loaded, ready for search.");
            }
          })
          .catch(err => {
            console.error("Surah JSON লোডিংয়ে সমস্যা:", err);
            loadedCount++;
            if (loadedCount === suraList.length) {
              loadingElement.style.display = 'none';
              isDataLoaded = true;
              console.log("All ayahs loaded (with some errors), ready for search.");
            }
          });
      });
    })
    .catch(err => {
      loadingElement.innerText = "লোডিংয়ে সমস্যা হয়েছে";
      console.error("sura.json লোডিং ত্রুটি:", err);
    });
}

function renderAyahs(query) {
  ayahList.innerHTML = '';
  audioElements = [];

  const lowerQuery = query.trim().toLowerCase();

  const filteredAyahs = allAyahs.filter(ayah =>
    ayah.names?.toLowerCase().includes(lowerQuery) ||
    ayah.name?.toLowerCase().includes(lowerQuery) ||
    ayah.author?.toLowerCase().includes(lowerQuery) ||
    ayah.suraName?.toLowerCase().includes(lowerQuery)
  );

  if (filteredAyahs.length === 0) {
    ayahList.innerHTML = `<p style="text-align:center; color:#666; padding:20px;">কোন আয়াত পাওয়া যায়নি।</p>`;
    return;
  }

  filteredAyahs.forEach(ayah => {
    const card = document.createElement('div');
    card.className = 'ayah-card';

    const banglaNum = convertToBanglaNumber(ayah.ayahNumber);

    card.innerHTML = `
      <div class="top-row">
        <div class="number-box">
          <div class="number-text">${banglaNum}</div>
        </div>
        <div class="actions">
          <img src="play.png" class="play-icon" data-id="${ayah._id}" title="প্লে" />
          <img src="copy.png" class="copy-icon" title="কপি" />
          <img src="share.png" class="share-icon" title="শেয়ার" />
        </div>
      </div>
      <div class="sura-name">সুরা: ${ayah.suraName}</div>
      <div class="verse-arabic">${ayah.names || ''}</div>
      <div class="kanzul">কানযুল ঈমান</div>
      <div class="kanzul-text">${ayah.name || ''}</div>
      <div class="irfan">ইরফানুল কুরআন</div>
      <div class="irfan-text">${ayah.author || ''}</div>
    `;

    const playIcon = card.querySelector('.play-icon');
    const copyIcon = card.querySelector('.copy-icon');
    const shareIcon = card.querySelector('.share-icon');

    [playIcon, copyIcon, shareIcon].forEach(icon => {
      icon.dataset.arabic = ayah.names || '';
      icon.dataset.kanzul = ayah.name || '';
      icon.dataset.irfan = ayah.author || '';
      icon.dataset.num = ayah._id;
    });

    playIcon.addEventListener('click', e => toggleAudio(e.currentTarget));
    copyIcon.addEventListener('click', e => copyAyah(e.currentTarget));
    shareIcon.addEventListener('click', e => shareAyah(e.currentTarget));

    ayahList.appendChild(card);
    audioElements.push(playIcon);
  });
}

// টাইপিং-এ সার্চ চালু করিনি, শুধুমাত্র Enter কী চাপলে সার্চ হবে
searchInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (!isDataLoaded) {
      alert('অনুগ্রহ করে অপেক্ষা করুন, ডেটা লোড হচ্ছে...');
      return;
    }
    renderAyahs(query);
  }
});

// পেজ লোড হলে ডেটা ব্যাকগ্রাউন্ডে লোড হবে
loadAllAyahs();