// Sample image data (you can replace this with your own images and categories)
const images = [
    { src: 'image1.jpg', category: 'nature' },
    { src: 'image2.jpg', category: 'architecture' },
    // Add more image data
];

// References to DOM elements
const imageGallery = document.querySelector('.image-gallery');
const categories = document.querySelector('.categories');
const lightbox = document.querySelector('.lightbox');

// Function to display images in the gallery
function displayImages(category) {
    // Clear the gallery
    imageGallery.innerHTML = '';

    // Filter images by category
    const filteredImages = category
        ? images.filter(img => img.category === category)
        : images;

    // Create image cards and add them to the gallery
    filteredImages.forEach(imgData => {
        const imageCard = document.createElement('div');
        imageCard.classList.add('image-card');
        imageCard.innerHTML = `<img src="${imgData.src}" alt="${imgData.category}" />`;

        // Add a click event listener to open the image in the lightbox
        imageCard.addEventListener('click', () => {
            const lightboxContent = `<img src="${imgData.src}" alt="${imgData.category}" />`;
            lightbox.innerHTML = lightboxContent;
            lightbox.style.display = 'block';
        });

        imageGallery.appendChild(imageCard);
    });
}

// Function to handle category button clicks
function handleCategoryClick(event) {
    const selectedCategory = event.target.dataset.category;
    displayImages(selectedCategory);
}

// Add event listeners to category buttons
categories.addEventListener('click', handleCategoryClick);

// Display all images initially
displayImages(null);
