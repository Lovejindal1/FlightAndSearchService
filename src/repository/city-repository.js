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
    
    async deleteCity({cityId}){
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
            const city = await City.update(data, {
                where: {
                    id : cityId
                }
            })
            return city;
        } catch (err) {
            
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
}

module.exports = CityRepository;