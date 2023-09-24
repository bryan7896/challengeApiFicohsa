const Pet = require('../models/PetModels');

class PetRepository {
    async getAllPets() {
        return await Pet.find();
    }

    async getPetsBySearchParam(searchParam) {
        try {
            const pets = await Pet.find({ breed: { $regex: searchParam, $options: 'i' } });
            return pets;
        } catch (error) {
            throw error;
        }
    }
    async createPet(newPetData) {
        try {
            const createdPet = await Pet.create(newPetData);
            return createdPet;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new PetRepository();
