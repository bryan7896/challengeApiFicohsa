const Pet = require('../models/PetModels');

class PetRepository {
    async getAllPets() {
        return await Pet.find();
    }

    async getPetsBySearchParam(searchParam) {
        try {
            const pets = await Pet.find({ name: { $regex: searchParam, $options: 'i' } });
            return pets;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PetRepository();
