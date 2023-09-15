const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const tagsInput = document.getElementById('tagsInput');
const board = document.getElementById('board');

uploadForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const files = fileInput.files;
  const tags = tagsInput.value.split(',');

  // Créer un objet FormData et ajouter les images et les tags
  const formData = new FormData();
  Array.from(files).forEach((file, index) => {
    formData.append(`images[${index}]`, file);
  });
  formData.append('tags', JSON.stringify(tags));

  
  // Envoyer les données au serveur
  fetch('/upload', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    // Afficher les images et les tags
    data.forEach(item => {
      const imageURL = `/media/img/${item.filename}`;

      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image-wrapper');

      const img = new Image();
      img.src = imageURL;
      imageWrapper.appendChild(img);

      const tagsDiv = document.createElement('div');
      tagsDiv.classList.add('tags');
      item.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.textContent = tag;
        tagsDiv.appendChild(tagSpan);
      });
      imageWrapper.appendChild(tagsDiv);

      board.appendChild(imageWrapper);
    });
  })
  .catch(error => console.log(error));

  uploadForm.reset();
});



