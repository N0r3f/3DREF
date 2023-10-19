const express = require('express');
const router = express.Router();
const { Image, Category, Subcategory, Tag } = require('../models/models');
const { validator } = require('../middleware');

// Route pour récupérer toutes les images
router.get('/images', (req, res) => {
    Image.find({}, (err, images) => {
        if (err) return res.status(500).send(err);
        res.send(images);
    });
});

// Route pour créer une nouvelle image
router.post('/images', validator, async (req, res) => {
    const newImage = new Image(req.body);
    try {
        const image = await newImage.save();
        res.status(201).send(image);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Route pour mettre à jour une image existante
router.put('/images/:id', (req, res) => {
    Image.updateOne({ _id: req.params.id }, req.body, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

// Route pour supprimer une image existante
router.delete('/images/:id', (req, res) => {
    Image.deleteOne({ _id: req.params.id }, (err, result) => {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
});

// Ajoutez ici les autres routes pour les catégories, sous-catégories et tags

module.exports = router;
