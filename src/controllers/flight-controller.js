const flights = require("../models/flights");
const {FlightService} = require("../services/index");

const flightService = new FlightService();

const create = async (req,res) => {
    try {
        const flight = await flightService.createFlight(req.query);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create the flight',
            err: err
        });
    }
}

module.exports = {
    create
}