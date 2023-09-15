fetch('../js/media/images.json')
  .then(response => response.json())
  .then(data => {
    insertImages(data.images);
  })
  .catch(error => console.error('Erreur :', error));

const container = document.getElementById('board');

function insertImages(imagePaths) {
  imagePaths.forEach(path => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('image-wrapper');

    const img = new Image();
    img.src = path;
    wrapper.appendChild(img);

    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    wrapper.appendChild(overlay);

    img.addEventListener('mouseenter', () => {
      overlay.style.opacity = '1'; // Rendre la div grise visible
    });

    img.addEventListener('mouseleave', () => {
      overlay.style.opacity = '0'; // Rendre la div grise invisible
    });

    container.appendChild(wrapper);
  });
}