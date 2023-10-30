class CrudRepository{

    constructor(model){
        this.model = model;
    }

    async create(data){
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
            throw error;
        }
    }

    async destroy(id){
        try {
            const result = await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
            throw error;
        }
    }

    async get(id){
        try {
            const result = await this.model.findById(id);
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
            throw error;
        }
    }

    async getAll(id){
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data, {new : true});
            return result;
        } catch (error) {
            console.log('something went wrong in crud repository');
            throw error;
        }
    }
}

export default CrudRepository;

/*
    if 'new : true' is not used in update function it will return the old value but will still update 
    the entry in database.

    so to maintain the consistency we use new:true property
*/