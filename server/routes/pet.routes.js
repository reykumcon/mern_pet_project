const PetController = require('../controllers/pet.controller');

module.exports = function(app) {
    app.post('/api/pets', PetController.create);
    app.get('/api/pets', PetController.getAll);
    app.get('/api/pets/:id', PetController.getOne);
    app.put('/api/pets/:id', PetController.update);
    app.delete('/api/pets/:id', PetController.delete);
    app.put('/api/pets/:id/like', PetController.like);
}