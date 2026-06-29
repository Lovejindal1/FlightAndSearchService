class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        try {
            const response = await this.repository.create(data);
            return response;
        } catch (err) {
            console.log("Something went wrong in crud service");
            throw err;
        }
    }

    async destroy(id){
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (err) {
            console.log("Something went wrong in crud service");
            throw err;
        }
    }

    async get(id){
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (err) {
            console.log("Something went wrong in crud service");
            throw err;
        }
    }

    async getAll(){
        try {
            const response = await this.repository.getAll(data);
            return response;
        } catch (err) {
            console.log("Something went wrong in crud service");
            throw err;
        }
    }

    async update(id,data){
        try {
            const response = await this.repository.update(id,data);
            return response;
        } catch (err) {
            console.log("Something went wrong in crud service");
            throw err;
        }
    }
}

module.exports = CrudService;