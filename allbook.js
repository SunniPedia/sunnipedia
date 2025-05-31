function goBack() {
  window.history.back();
}

function toggleSearchBox() {
  var box = document.getElementById('searchBox');
  var input = document.getElementById('searchInput');
  var status = document.getElementById('searchStatus');
  
  if (box.style.display === 'block') {
    box.style.display = 'none';
    input.value = '';
    status.style.display = 'none';
    searchBooks();
  } else {
    box.style.display = 'block';
    input.focus();
  }
}

// Debounce function with improved logic
let debounceTimer;
function debounceSearch(func, delay) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(func, delay);
}

// Search input listener with debounce
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('searchInput');
  if (input) {
    input.addEventListener('input', () => {
      debounceSearch(searchBooks, 300); // 300 milliseconds delay
    });
  }
});

function searchBooks() {
  var input = document.getElementById('searchInput').value.toLowerCase().trim();
  var bookItems = document.getElementsByClassName('book-item');
  var status = document.getElementById('searchStatus');

  // Show "Searching..." when input is typed
  if (input.length > 0) {
    status.style.display = 'block';  // Show status
  } else {
    status.style.display = 'none';  // Hide status when input is cleared
  }

  setTimeout(function() { // Add a slight delay to avoid multiple "searching..." messages when typing
    var found = false;
    for (var i = 0; i < bookItems.length; i++) {
      var itemText = bookItems[i].innerText.toLowerCase();
      if (itemText.indexOf(input) > -1) {
        bookItems[i].style.display = ''; // Show book item
        found = true;
      } else {
        bookItems[i].style.display = 'none'; // Hide book item
      }
    }

    // If no books are found, show a "No results" message
    if (!found) {
      status.innerHTML = 'No results found';
    } else {
      status.innerHTML = 'Searching...';
    }

    status.style.display = 'none'; // Hide status when filtering is done
  }, 300); // 300ms delay
}

// Trigger search on page load if search query exists in the URL
window.onload = function () {
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');
  
  if (searchTerm) {
    const input = document.getElementById('searchInput');
    const searchBox = document.getElementById('searchBox');
    searchBox.style.display = 'block';
    input.value = searchTerm;
    searchBooks();  // Trigger search when ?search= parameter is passed
  }
};