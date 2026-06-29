const CrudRepositroy = require('./crud-repository');
const {Airport} = require('../models/index');

class AirportRepository extends CrudRepositroy {
    constructor(){
        super(Airport);
    }
}

module.exports = AirportRepository;