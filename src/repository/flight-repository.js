const flights = require('../models/flights');
const {Flights} = require('../models/index');

class FlightRepository {

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (err) {
            console.log('Something went wrong in the repository layer');
            throw {err};
        }
    }
}

module.exports = FlightRepository;