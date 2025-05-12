const jsonPath = 'tafsir.json';

document.addEventListener("DOMContentLoaded", () => {
  const isListPage = window.location.pathname.includes("tafsir.html");
  const isViewPage = window.location.pathname.includes("tafsirview.html");

  if (isListPage) loadSuraList();
  if (isViewPage) loadTafsirView();
});

function loadSuraList() {
  const listEl = document.getElementById("suraList");
  const searchEl = document.getElementById("searchBox");

  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      const uniqueSuras = [];
      data.forEach(item => {
        if (!uniqueSuras.find(s => s.sura === item.sura)) {
          uniqueSuras.push(item);
        }
      });

      function renderList(filter = '') {
        listEl.innerHTML = '';
        const filtered = uniqueSuras.filter(s => s.suraName.includes(filter));
        filtered.forEach(sura => {
          const li = document.createElement("li");
          li.innerText = `${sura.sura} - ${sura.suraName}`;
          li.onclick = () => {
            localStorage.setItem("selectedSura", sura.sura);
            localStorage.setItem("suraName", sura.suraName);
            window.location.href = "tafsirview.html";
          };
          listEl.appendChild(li);
        });
      }

      renderList();
      searchEl.addEventListener("input", e => {
        renderList(e.target.value);
      });
    });
}

function loadTafsirView() {
  const suraId = localStorage.getItem("selectedSura");
  const suraName = localStorage.getItem("suraName");
  document.getElementById("suraTitle").innerText = suraName;

  fetch(jsonPath)
    .then(res => res.json())
    .then(data => {
      const ayahs = data.filter(item => item.sura === suraId);
      const container = document.getElementById("tafsirContent");

      ayahs.forEach(ayah => {
        const div = document.createElement("div");
        div.className = "ayah";
        div.innerHTML = `
          <h3>আয়াত ${ayah.verses} - ${ayah.names}</h3>
          <p><strong>তাফসির:</strong> ${ayah.irfanul}</p>
        `;
        container.appendChild(div);
      });
    });
}