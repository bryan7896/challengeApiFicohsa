const express = require('express');
const router = express.Router();
const petRepository = require('../repositories/PetRepository');

router.get('/pets/:searchParam', async (req, res) => {
    try {
        const searchParam = req.params.searchParam;
        const pets = await petRepository.getPetsBySearchParam(searchParam);
        res.json(pets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las mascotas' });
    }
});

module.exports = router;
