const {Op} = require('sequelize');
const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){   // {name: "New delhi"}
        try{
            const city = await City.create({
                name: name  // or name 
            });
            return city;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw{err};
        }
    }
    
    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                } 
            });
            return true;
        }catch(err){
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
    
    async updateCity(cityId, data){
        try {
            // The below approach also works but will not return updated object
            // if we are using Pg then returning: true can be used, else not
            // const city = await City.update(data, {
            //     where: {
            //         id : cityId
            //     }
            // })
            // for getting updated data in mysql we use the below approach
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
    
    async getCity(cityId){
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }

    async getAllCities(filter){     // filter can be empty also
        try {
            if(filter.name){
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (err) {
            console.log("Something went wrong in the repository layer");
            throw {err};
        }
    }
}

module.exports = CityRepository;