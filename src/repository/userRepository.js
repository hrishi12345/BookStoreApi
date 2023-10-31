import User from "../models/userModel.js";

class UserRepository{
   
   async createUser(data){
    try {
        const result=await User.create(data)
        return result
    } catch (error) {
        console.log("Something went wrong repo");
            throw error;
    }
   }
   async destroy(id) {
    try {
        const result = await User.findByIdAndDelete(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
    }
}

async get(id) {
    try {
        const result = await User.findById(id);
        return result;
    } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
    }
}

async getAll() {
    try {
        const result = await User.find({});
        return result;
    } catch (error) {
        console.log("Something went wrong in crud repo");
        throw error;
    }
}

async update(id, data) {
    try {
        const result = await User.findByIdAndUpdate(id, data, {new: true});
        return result;
    } catch(error) {
        console.log("Something went wrong in crud repo");
        throw error;
    }
}
async findBy(data) {
    try {
        const response = await User.findOne({title:data});
        return response;
    } catch(error) {
        throw error.message;
    }
}

}

export default UserRepository;