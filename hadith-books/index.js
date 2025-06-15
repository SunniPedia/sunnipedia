    // বাংলা সংখ্যায় রূপান্তর ফাংশন (নাল সেফ)
    const toBanglaNumber = (num) => {
        if (num === null || num === undefined || isNaN(num)) {
            return '০'; // ডিফল্ট মান
        }
        
        const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        return num.toString().replace(/\d/g, digit => banglaDigits[digit]);
    };

    // স্ট্রিং ডেটা হ্যান্ডলিং ফাংশন
    const safeString = (str) => {
        return str || 'তথ্য নেই'; // null/undefined হলে 'তথ্য নেই' দেখাবে
    };

    // গ্লোবাল ভ্যারিয়েবল হিসেবে হাদিসের কিতাব ডেটা স্টোর
    let allBooksData = [];

    // ডেটা লোড এবং প্রদর্শন
    async function loadHadithBooks() {
        const container = document.getElementById('booksContainer');
        container.innerHTML = '<div class="loading">হাদিসের কিতাব গুলো লোড হচ্ছে...</div>';
        
        try {
            const response = await fetch('https://cdn.jsdelivr.net/gh/SunniPedia/sunnipedia@main/hadith-books/book/book-title.json');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            // ডেটা ভ্যালিডেশন
            if (!Array.isArray(data)) {
                throw new Error('অবৈধ ডেটা ফরম্যাট: অ্যারে এক্সপেক্টেড');
            }
            
            // গ্লোবাল ভ্যারিয়েবলে ডেটা স্টোর
            allBooksData = data;
            
            // প্রাথমিকভাবে সব হাদিসের কিতাব  প্রদর্শন
            displayBooks(allBooksData);
            
            // সার্চ ফাংশনালিটি ইনিশিয়ালাইজ
            initSearch();
            
        } catch (error) {
            console.error('ডেটা লোড করতে সমস্যা:', error);
            container.innerHTML = `
                <div class="error-message">
                    ডেটা লোড করতে সমস্যা হচ্ছে। দয়া করে পরে আবার চেষ্টা করুন।<br>
                    <small>${error.message}</small>
                </div>
            `;
        }
    }

    // হাদিসের কিতাব  প্রদর্শনের ফাংশন
    function displayBooks(books) {
        const container = document.getElementById('booksContainer');
        container.innerHTML = '';
        
        if (books.length === 0) {
            container.innerHTML = `
                <div class="error-message">
                    কোন হাদিসের কিতাব  পাওয়া যায়নি। অন্য কোন শব্দ দিয়ে খুঁজুন।
                </div>
            `;
            return;
        }
        
        books.forEach(book => {
            const bookData = {
            id: book.id || 0,
                sequence: book.sequence || 0,
                title: safeString(book.title),
                title_en: safeString(book.title_en),
                title_ar: safeString(book.title_ar),
                total_section: book.total_section || 0,
                total_hadith: book.total_hadith || 0
            };
            
            const box = document.createElement('div');
            box.className = 'book-box';
            box.innerHTML = `
                <div class="book-id">${toBanglaNumber(bookData.sequence)}</div>
                <div class="book-title-en">${bookData.title_en}</div>
                <div class="book-title-ar">${bookData.title_ar}</div>
                <div class="book-meta">
                    ${toBanglaNumber(bookData.total_section)} টি অধ্যায়, 
                    ${toBanglaNumber(bookData.total_hadith)} টি হাদিস
                   
                </div>
            `;
            // বক্সে ক্লিক ইভেন্ট হ্যান্ডলার
box.addEventListener('click', function() {
    // প্রথমে নিশ্চিত করুন যে bookData.title আছে
    const titleToStore = bookData.title || 'হাদিস বিস্তারিত';
    
    // localStorage-এ স্টোর করুন
    localStorage.setItem('currentBookTitle', titleToStore);
    
    // পেজে রিডাইরেক্ট করুন
    window.location.href = `book/${bookData.id}/index.html`;
});

// পেজ লোড হওয়ার পর টাইটেল সেট করুন
document.addEventListener('DOMContentLoaded', function() {
    // 500ms ডিলে দিয়ে নিশ্চিত করুন যে localStorage আপডেট হয়েছে
    setTimeout(() => {
        const savedTitle = localStorage.getItem('currentBookTitle');
        const pageTitle = document.getElementById('pageTitle');
        
        if (pageTitle) {
            pageTitle.textContent = savedTitle || 'হাদিস বিস্তারিত';
        }
    }, 500);
});
            container.appendChild(box);
        });
    }

    // সার্চ ফাংশনালিটি
    function initSearch() {
        const searchInput = document.getElementById('searchInput');
        const searchToggle = document.getElementById('searchToggle');
        const searchContainer = document.getElementById('searchContainer');
        
        // সার্চ টগল বাটন ইভেন্ট
        searchToggle.addEventListener('click', function() {
            if (searchContainer.style.display === 'none' || !searchContainer.style.display) {
                searchContainer.style.display = 'block';
                searchInput.focus();
            } else {
                searchContainer.style.display = 'none';
                searchInput.value = '';
                displayBooks(allBooksData); // সব হাদিসের কিতাব  আবার দেখাও
            }
        });
        
        // সার্চ ইনপুট ইভেন্ট
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            
            if (searchTerm === '') {
                displayBooks(allBooksData);
                return;
            }
            
            const filteredBooks = allBooksData.filter(book => {
                const titleEn = book.title_en ? book.title_en.toLowerCase() : '';
                const titleAr = book.title_ar ? book.title_ar : '';
                return titleEn.includes(searchTerm) || titleAr.includes(searchTerm);
            });
            
            displayBooks(filteredBooks);
        });
    }

    // পেজ লোড হলে ডেটা লোড শুরু করুন
    document.addEventListener('DOMContentLoaded', function() {
        loadHadithBooks();
        
        // ব্যাক বাটন ইভেন্ট
        document.getElementById('backButton').addEventListener('click', function() {
            window.history.back();
        });
    });