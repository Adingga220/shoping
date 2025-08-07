// Tab Navigation
const tabs = document.querySelectorAll('.nav-tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Modal Produk
const merchItems = document.querySelectorAll('.merch-item');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

merchItems.forEach(item => {
    item.addEventListener('click', () => {
        const merchTitle = item.querySelector('.merch-title').textContent;
        const merchArtist = item.querySelector('.merch-artist').textContent;
        const merchPrice = item.querySelector('.merch-price').textContent;
        const merchImage = item.querySelector('.merch-image').src;
        const merchAlt = item.querySelector('.merch-image').alt;

        modalBody.innerHTML = `
            <img src="${merchImage}" alt="${merchAlt}" class="modal-image">
            <h3 class="modal-merch-title">${merchTitle}</h3>
            <div class="modal-merch-artist">${merchArtist}</div>
            <p class="modal-merch-desc">Merchandise official langsung dari official store ${merchArtist}. Barang baru 100% original.</p>
            <div class="modal-flex">
                <div class="modal-price">${merchPrice}</div>
                <div>Stok: Tersedia</div>
            </div>
            <button class="btn btn-primary btn-block" id="requestJastip">Minta Jastip</button>
        `;

        productModal.classList.add('active');

        document.getElementById('requestJastip').addEventListener('click', () => {
            productModal.classList.remove('active');

            const requestModal = document.getElementById('requestModal');
            document.getElementById('requestImage').src = merchImage;
            document.getElementById('merchName').value = merchTitle;

            requestModal.classList.add('active');
        });
    });
});

// Close Modals
modalClose.addEventListener('click', () => {
    productModal.classList.remove('active');
});

document.getElementById('requestModalClose').addEventListener('click', () => {
    document.getElementById('requestModal').classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === productModal) {
        productModal.classList.remove('active');
    }
    if (e.target === document.getElementById('requestModal')) {
        document.getElementById('requestModal').classList.remove('active');
    }
});

// Handle Request Submission
document.getElementById('submitRequest').addEventListener('click', () => {
    const merchName = document.getElementById('merchName').value;

    alert(`Permintaan jastip untuk "${merchName}" telah dikirim!`);

    document.getElementById('requestModal').classList.remove('active');

    const requestsList = document.querySelector('#requests .request-list');
    const newRequest = document.createElement('div');
    newRequest.className = 'request-item';
    newRequest.innerHTML = `
        <img src="${document.getElementById('requestImage').src}" alt="${merchName}" class="request-image">
        <div class="request-info">
            <div class="request-title">${merchName}</div>
            <div class="request-status">Menunggu</div>
        </div>
    `;
    requestsList.prepend(newRequest);

    document.getElementById('merchLink').value = '';
    document.getElementById('merchQty').value = '1';
    document.getElementById('merchNotes').value = '';
});

// Category selection
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', () => {
        categories.forEach(c => c.classList.remove('active'));
        category.classList.add('active');
    });
});
