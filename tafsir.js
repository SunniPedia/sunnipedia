document.addEventListener("DOMContentLoaded", () => {
  const suraId = localStorage.getItem("selectedSura");
  const suraName = localStorage.getItem("suraName");
  
  if (suraId && suraName) {
    document.getElementById("suraTitle").innerText = suraName;
    loadTafsirView(suraId);
  } else {
    document.getElementById("tafsirContent").innerHTML = "<p>কোনো সূরা নির্বাচিত হয়নি।</p>";
  }
});

function loadTafsirView(suraId) {
  const jsonPath = 'tafsir.json';
  const container = document.getElementById("tafsirContent");
  const loadingElement = document.getElementById("loading");

  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      const ayahs = data.filter(item => item.sura === suraId);
      if (ayahs.length === 0) {
        container.innerHTML = "<p>এই সূরার তাফসির পাওয়া যায়নি।</p>";
        return;
      }

      ayahs.forEach(ayah => {
        const div = document.createElement("div");
        div.className = "ayah-card";
        div.innerHTML = `
          <div class="verse-arabic">${ayah.names || ''}</div>
          <div class="kanzul">আয়াত নং: ${ayah.verses || ''}</div>
          <div class="irfan">তাফসির</div>
          <div class="irfan-text">${ayah.irfanul || ''}</div>
        `;
        container.appendChild(div);
      });

      loadingElement.style.display = "none";  // লোডিং লুকাও
    })
    .catch(err => {
      console.error("তাফসির লোড করতে সমস্যা হচ্ছে:", err);
      container.innerHTML = "<p>ডেটা লোড করা যায়নি।</p>";
    });
}