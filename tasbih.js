let counter = 0;
let soundOn = true;
const counterEl = document.getElementById("counter");
const soundToggle = document.getElementById("soundToggle");

function toBanglaNumber(n) {
    return n.toString().replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
}

function incrementCounter() {
    counter++;
    counterEl.textContent = toBanglaNumber(counter);
    if (soundOn) {
        const audio = new Audio("tasbih_click.mp3");
        audio.play();
    }
}

soundToggle.addEventListener("click", () => {
    soundOn = !soundOn;
    soundToggle.textContent = soundOn ? "সাউন্ড অন" : "সাউন্ড অফ";
});

document.getElementById("resetCounter").addEventListener("click", () => {
    counter = 0;
    counterEl.textContent = toBanglaNumber(counter);
    if (navigator.vibrate) navigator.vibrate(100);
});

// দোয়ার সম্পূর্ণ তালিকা
const duas = [
    "(১)\n\nلاَ اِلَهَ اِلاَّ اللهُ مُحَمَّدُ رَّسُوْلُ الله\n\nউচ্চারণঃ লা-ইলাহা ইল্লাল্লাহু মুহাম্মাদুর রাসূলুল্লাহ (ﷺ)\n\nঅর্থঃ আল্লাহ ছাড়া আর কোন মা'বুদ নাই। হযরত মুহাম্মদ (ﷺ) আল্লাহর প্রেরিত রাসূল।",
    "(২)\n\nسُبْحَانَ اللَّهِ وَبِحَمْدِهِ\n\nউচ্চারণ : সুবহানাল্লাহি ওয়া বিহামদিহি\n\nঅর্থঃ আল্লাহ সুমহান এবং সকল প্রশংসা তাঁরই।",
    "(৩) سُبْحَانَ ٱللَّٰهِ\n\nউচ্চারণঃ সুবহানাল্লাহ\nঅর্থঃ আল্লাহ মহিমান্বিত।",
    "(৪) ٱلْحَمْدُ لِلَّٰهِ\n\nউচ্চারণঃ আলহামদুলিল্লাহ।\nঅর্থঃ সমস্ত প্রশংসা মহান আল্লাহর।",
    "(৫) ٱللَّٰهُ أَكْبَرُ\nউচ্চারণঃ আল্লাহু আকবার।\nঅর্থঃ আল্লাহ সর্বশ্রেষ্ঠ।",
    "(৬) أَسْتَغْفِرُ اللهَ\nউচ্চারণঃ আস্তাগফিরুল্লাহ\nঅর্থঃ আমি আল্লাহর নিকট ক্ষমা প্রার্থনা করছি।",
    "(৭)\nاللَّهُمَّ أَجِرْنِى مِنَ النَّارِ\nউচ্চারণ: আল্লাহুম্মা আজিরনি মিনান নার।",
    "(৮)\nاللَّهُمَّ حَاسِبْنِي حِسَابًا يَسِيرًا\nউচ্চারণ: আল্লাহুম্মা হাসিবনি হিসাবাই ইয়াসিরা।\nঅর্থ: হে আল্লাহ! আপনি আমার হিসাবকে সহজ করে দিন।",
    "(৯)\nلاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللهِ\nউচ্চারণ: লা হাওলা ওলা কুওয়াতা ইল্লা বিল্লাহ।\nঅর্থ: আল্লাহ ছাড়া কারও কোনো শক্তি নেই।",
    "(১০)\nحَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ ...\nউচ্চারণঃ হাসবুনাল্লাহু ওয়া নি’মাল ওয়াকিল ...",
    // বাকি দোয়াগুলো একইভাবে যুক্ত করা যাবে
];

// ইনজেক্ট করা
const viewpager = document.getElementById("viewpager");
duas.forEach(dua => {
    const div = document.createElement("div");
    div.style.padding = "10px";
    div.innerHTML = `<pre style="text-align: left; font-family:SolaimanLipi; font-size:16px; white-space: pre-wrap;">${dua}</pre>`;
    viewpager.appendChild(div);
});