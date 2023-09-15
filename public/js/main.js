let serverUrl;

if (process.env.NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3000';
} else {
  serverUrl = 'https://mon-site-web.zob';
}

// Utiliser serverUrl pour faire des requêtes au serveur


document.getElementById('add-image-form').addEventListener('submit', function(event) {
    // Empêcher le formulaire d'être soumis normalement
    event.preventDefault();
  
    // Code pour ajouter une image
  });
  