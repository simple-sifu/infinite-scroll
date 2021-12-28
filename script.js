const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count=10;
const apiKey = '-vAmadi7qTiEaGCL83ldjmPbBV6i_xJkLT807Ti1_wM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log("photosArray=", photosArray);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load
getPhotos();