const jsonPath = 'tafsir.json';

document.addEventListener("DOMContentLoaded", () => { const suraId = localStorage.getItem("selectedSura"); const suraName = localStorage.getItem("suraName"); const suraTitle = document.getElementById("suraTitle"); const ayahList = document.getElementById("ayahList"); const loading = document.getElementById("loading");

suraTitle.innerText = suraName || "তাফসির";

if (suraId) { fetch(jsonPath) .then(res => res.json()) .then(data => { const ayahs = data.filter(item => item.sura === suraId); ayahList.innerHTML = ayahs.map(ayah => <div class="ayah-card"> <div class="top-row"> <div class="number-box"> <div class="number-text">${ayah.verses}</div> </div> <div style="flex-grow: 1; padding-left: 10px;"> <h3>${ayah.names}</h3> </div> </div> <p class="tafsir-text">${ayah.irfanul}</p> </div>).join(""); loading.style.display = "none"; }) .catch(err => { console.error(err); ayahList.innerHTML = '<p style="color: red;">ডাটা লোড করতে সমস্যা হয়েছে!</p>'; loading.style.display = "none"; }); } else { ayahList.innerHTML = '<p style="color: red;">সুরা নির্বাচিত করা হয়নি!</p>'; loading.style.display = "none"; } });

