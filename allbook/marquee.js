document.addEventListener('DOMContentLoaded', function () {
  const bookTitle = document.getElementById('bookTitle');
  if (!bookTitle) return;
  
  const bookName = bookTitle.innerText.trim();

  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'nowrap';
  tempSpan.style.fontSize = '16px';
  tempSpan.style.pointerEvents = 'none';
  tempSpan.style.fontFamily = 'SolaimanLipi, sans-serif';
  tempSpan.innerText = bookName;
  document.body.appendChild(tempSpan);

  if (tempSpan.offsetWidth > bookTitle.offsetWidth) {
    const marqueeSpan = document.createElement('span');
    marqueeSpan.className = 'marquee';
    marqueeSpan.innerText = bookName;
    bookTitle.innerHTML = '';
    bookTitle.appendChild(marqueeSpan);
  }

  document.body.removeChild(tempSpan);
});