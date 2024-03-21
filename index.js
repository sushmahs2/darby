document.addEventListener('DOMContentLoaded', function () {

    // menu button
    const menuButton = document.getElementById('menuButton');
    const menu = document.getElementById('menu');
  

    menuButton.addEventListener('click', function () {
        menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
        document.body.style.overflow = (menu.style.display === 'block') ? 'hidden' : 'auto';
    });

    document.addEventListener('click', function (event) {
        if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
            menu.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });


      //Rice planter gallery 
      const galleryContainer1 = document.getElementById('gallery-container1');
      const imageUrls = [
          'resource/image/rice planter/photo1.JPG',
          'resource/image/rice planter/photo2.JPG',
          'resource/image/rice planter/photo3.JPG',
          'resource/image/rice planter/photo4.JPG',
          // Add more image URLs as needed
      ];
       // Create image elements and append them to the gallery container
    imageUrls.forEach(url => {
        const galleryItem1 = document.createElement('div');
        galleryItem1.classList.add('gallery-item1');

        const image = document.createElement('img');
        image.src = url;
        image.alt = 'Gallery Image';

        galleryItem1.appendChild(image);
        galleryContainer1.appendChild(galleryItem1);
    });

//CNC  and laser
const galleryContainer2 = document.getElementById('gallery-container2');

// Replace these image URLs with your own image URLs
const imageUrls2 = [
    'resource/image/cnc and laser/photo1.jpg',
    'resource/image/cnc and laser/photo2.JPG',
    'resource/image/cnc and laser/photo3.jpg',
    'resource/image/cnc and laser/photo4.jpg',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls2.forEach(url => {
    const galleryItem2= document.createElement('div');
    galleryItem2.classList.add('gallery-item2');

    const image2 = document.createElement('img');
    image2.src = url;
    image2.alt = 'Gallery Image';

    galleryItem2.appendChild(image2);
    galleryContainer2.appendChild(galleryItem2);
});

//WALL PRINTER 
const galleryContainer3 = document.getElementById('gallery-container3');

// Replace these image URLs with your own image URLs
const imageUrls3 = [
    'resource/image/wall printer/photo1.JPG',
    'resource/image/wall printer/photo2.JPG',
    'resource/image/wall printer/photo3.JPG',
    'resource/image/wall printer/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls3.forEach(url => {
    const galleryItem3= document.createElement('div');
    galleryItem3.classList.add('gallery-item3');

    const image3 = document.createElement('img');
    image3.src = url;
    image3.alt = 'Gallery Image';

    galleryItem3.appendChild(image3);
    galleryContainer3.appendChild(galleryItem3);
});

//WALL PRINTER 
const galleryContainer4 = document.getElementById('gallery-container4');

// Replace these image URLs with your own image URLs
const imageUrls4 = [
    'resource/image/wall printer/photo1.JPG',
    'resource/image/wall printer/photo2.JPG',
    'resource/image/wall printer/photo3.JPG',
    'resource/image/wall printer/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls4.forEach(url => {
    const galleryItem4= document.createElement('div');
    galleryItem4.classList.add('gallery-item4');

    const image4 = document.createElement('img');
    image4.src = url;
    image4.alt = 'Gallery Image';

    galleryItem4.appendChild(image4);
    galleryContainer4.appendChild(galleryItem4);
});


//3D Printer

const galleryContainer5 = document.getElementById('gallery-container5');

// Replace these image URLs with your own image URLs
const imageUrls5 = [
    'resource/image/3D printer/photo1.JPG',
    'resource/image/3D printer/photo2.JPG',
    'resource/image/3D printer/photo3.JPG',
    'resource/image/3D printer/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls5.forEach(url => {
    const galleryItem5= document.createElement('div');
    galleryItem5.classList.add('gallery-item4');

    const image5 = document.createElement('img');
    image5.src = url;
    image5.alt = 'Gallery Image';

    galleryItem5.appendChild(image5);
    galleryContainer5.appendChild(galleryItem5);
});



//Power tools

const galleryContainer6 = document.getElementById('gallery-container6');

// Replace these image URLs with your own image URLs
const imageUrls6 = [
    'resource/image/power tool/photo1.jpg',
    'resource/image/power tool/photo2.JPG',
    'resource/image/power tool/photo3.JPG',
    'resource/image/power tool/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls6.forEach(url => {
    const galleryItem6= document.createElement('div');
    galleryItem6.classList.add('gallery-item4');

    const image6 = document.createElement('img');
    image6.src = url;
    image6.alt = 'Gallery Image';

    galleryItem6.appendChild(image6);
    galleryContainer6.appendChild(galleryItem6);
});


//avt Bike

const galleryContainer7 = document.getElementById('gallery-container7');

// Replace these image URLs with your own image URLs
const imageUrls7 = [
    'resource/image/avt Bike/photo1.JPG',
    'resource/image/avt Bike/photo2.JPG',
    'resource/image/avt Bike/photo3.JPG',
    'resource/image/avt Bike/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls7.forEach(url => {
    const galleryItem7= document.createElement('div');
    galleryItem7.classList.add('gallery-item4');

    const image7 = document.createElement('img');
    image7.src = url;
    image7.alt = 'Gallery Image';

    galleryItem7.appendChild(image7);
    galleryContainer7.appendChild(galleryItem7);
});



//Sports and play

const galleryContainer8 = document.getElementById('gallery-container8');

// Replace these image URLs with your own image URLs
const imageUrls8 = [
    'resource/image/Sports and play/photo1.JPG',
    'resource/image/Sports and play/photo2.JPG',
    'resource/image/Sports and play/photo3.JPG',
    'resource/image/Sports and play/photo4.jpg',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls8.forEach(url => {
    const galleryItem8= document.createElement('div');
    galleryItem8.classList.add('gallery-item4');

    const image8 = document.createElement('img');
    image8.src = url;
    image8.alt = 'Gallery Image';

    galleryItem8.appendChild(image8);
    galleryContainer8.appendChild(galleryItem8);
});



//raw material

const galleryContainer9 = document.getElementById('gallery-container9');

// Replace these image URLs with your own image URLs
const imageUrls9 = [
    'resource/image/raw material/photo1.jpg',
    'resource/image/raw material/photo2.jpg',
    'resource/image/raw material/photo3.jpg',
    'resource/image/raw material/photo4.JPG',

    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls9.forEach(url => {
    const galleryItem9= document.createElement('div');
    galleryItem9.classList.add('gallery-item4');

    const image9 = document.createElement('img');
    image9.src = url;
    image9.alt = 'Gallery Image';

    galleryItem9.appendChild(image9);
    galleryContainer9.appendChild(galleryItem9);
});


//import photo gallery 

const galleryContainer10 = document.getElementById('gallery-container10');

// Replace these image URLs with your own image URLs
const imageUrls10 = [
    'resource/image/photogallery/photo1.JPG',
    'resource/image/photogallery/photo2.jpeg',
    'resource/image/photogallery/photo3.jpeg',
    'resource/image/photogallery/photo4.PNG',
    'resource/image/photogallery/photo5.PNG',
    'resource/image/photogallery/photo6.JPG',
    'resource/image/photogallery/photo7.jpeg',


    // Add more image URLs as needed
];

// Create image elements and append them to the gallery container
imageUrls10.forEach(url => {
    const galleryItem10= document.createElement('div');
    galleryItem10.classList.add('gallery-item4');

    const image10 = document.createElement('img');
    image10.src = url;
    image10.alt = 'Gallery Image';

    galleryItem10.appendChild(image10);
    galleryContainer10.appendChild(galleryItem10);
});

});



   

