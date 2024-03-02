const Customer=require("../models/customer");
const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        });
        return result;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error for the calling function to handle
    }
};
const createCustomerManyService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr)
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const getAllCustomer = async (arr) => {
    try {
        let result = await Customer.find({})
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};
const updateCustomer = async (id,name,email,address) => {
    try {
    
        let result = await Customer.updateOne({_id:id},{name,email,address});
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
};
module.exports = {
    createCustomerService,
    createCustomerManyService,
    getAllCustomer,
    updateCustomer
};
