// src/models/imageModel.js
class Image {
    constructor(width, height, path) {
      this.width = width;
      this.height = height;
      this.path = path;
    }
  
    convertToGrayscale() {
      // Code pour convertir l'image en niveaux de gris
    }
  
    resize(newWidth, newHeight) {
      // Code pour redimensionner l'image
    }
  
    // Autres méthodes pour effectuer des opérations sur les images
  }
  
  module.exports = Image;