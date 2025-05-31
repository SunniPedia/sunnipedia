function goBack() {
  window.history.back();
}

function toggleSearchBox() {
  const box = document.getElementById('searchBox');
  const input = document.getElementById('searchInput');
  const status = document.getElementById('searchStatus');
  
  if (box.style.display === 'block') {
    box.style.display = 'none';
    input.value = '';
    status.style.display = 'none';
    resetSearch();
  } else {
    box.style.display = 'block';
    input.focus();
  }
}

// Cache DOM elements and pre-process data for faster search
let searchData = null;

function initializeSearch() {
  const bookItems = document.getElementsByClassName('book-item');
  searchData = Array.from(bookItems).map(item => ({
    element: item,
    text: item.innerText.toLowerCase(),
    id: item.id || null
  }));
}

// Reset search to show all items
function resetSearch() {
  if (searchData) {
    searchData.forEach(item => {
      item.element.style.display = '';
    });
  }
  const status = document.getElementById('searchStatus');
  status.style.display = 'none';
}

// Optimized debounce function
let debounceTimer;
function debounceSearch(func, delay) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(func, delay);
}

// Search input listener with optimized debounce
document.addEventListener('DOMContentLoaded', () => {
  initializeSearch();
  
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('input', () => {
      debounceSearch(searchBooks, 200);
    });
  }
});

// Optimized search function
function searchBooks() {
  const input = document.getElementById('searchInput').value.toLowerCase().trim();
  const status = document.getElementById('searchStatus');
  const hasInput = input.length > 0;

  if (!hasInput) {
    resetSearch();
    return;
  }

  // Show loading status and hide all items initially
  status.style.display = 'block';
  status.innerHTML = 'অনুসন্ধান করা হচ্ছে...';
  
  if (searchData) {
    searchData.forEach(item => {
      item.element.style.display = 'none';
    });
  }

  // Use requestAnimationFrame for smoother UI updates
  requestAnimationFrame(() => {
    let found = false;
    const searchTerms = input.split(/\s+/);
    
    for (let i = 0; i < searchData.length; i++) {
      const item = searchData[i];
      let match = true;
      
      for (let j = 0; j < searchTerms.length; j++) {
        if (item.text.indexOf(searchTerms[j]) === -1) {
          match = false;
          break;
        }
      }
      
      if (match) {
        item.element.style.display = '';
        found = true;
      }
    }

    status.innerHTML = found ? '' : 'কোনো ফলাফল পাওয়া যায়নি';
    
    if (found) {
      const firstVisible = document.querySelector('.book-item[style=""]');
      if (firstVisible) {
        firstVisible.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  });
}

// Handle URL search parameter
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');
  
  if (searchTerm) {
    const input = document.getElementById('searchInput');
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = 'block';
    input.value = searchTerm;
    searchBooks();
  }
};