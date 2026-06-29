const {Flights} = require('../models/index');
const {Op} = require('sequelize');

class FlightRepository {

    #createFliter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice){
            Object.assign(filter,{
                [Op.and]:[
                    { price: {[Op.lte]: data.maxPrice} },
                    { price: {[Op.gte]: data.minPrice} }
                ]
            })
            return filter;
        }
        //or
        // let priceFilter = [];
        if(data.minPrice){
            Object.assign(filter,{price: {[Op.gte]: data.minPrice}});
            // priceFilter.push({price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            Object.assign(filter,{price: {[Op.lte]: data.maxPrice}});
            // priceFilter.push({price: {[Op.lte]: data.maxPrice}});
        }
        // Object.assign(filter,{[Op.and]: priceFilter});
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (err) {
            console.log('Something went wrong in the repository layer');
            throw {err};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (err) {
            console.log('Something went wrong in the repository layer');
            throw {err};
        }
    }

    async getAllFlights(filter){
        try { 
            const fliterObject = this.#createFliter(filter);
            const flight = await Flights.findAll({
                where: fliterObject
            });
            return flight;
        } catch (err) {
            console.log('Something went wrong in the repository layer');
            throw {err};
        }
    }
}

module.exports = FlightRepository;