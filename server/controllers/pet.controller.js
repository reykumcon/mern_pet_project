const Pet = require('../models/pet.model');

module.exports = {
    create: (req, res) => {
        const { name, type, description, skillOne, skillTwo, skillThree } = req.body;
        Pet.create({
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree,
        })
            .then(pet => res.json(pet))
            .catch(err => res.status(400).json(err));
    },

    getAll: (req, res) => {
        Pet.find({}).sort('type').exec()
            .then(pets => res.json(pets))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Pet.findOne({_id: req.params.id})
            .then(pet => res.json(pet))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        Pet.findOneAndUpdate(
                {_id: req.params.id},
                req.body,
                { runValidators: true, new: true }
            )
            .then(updatedPet => res.json(updatedPet))
            .catch(err => res.status(400).json(err));
    },

    delete: (req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then(deletedPet => res.json(deletedPet))
            .catch(err => res.json(err));
    },

    like: (req, res) => {
        Pet.findOneAndUpdate(
                {_id: req.params.id},
                {$inc: {likes: 1}}
            )
            .then(() => res.json({msg: 'Likes plus 1'}))
            .catch(err => res.json(err));
    }

}