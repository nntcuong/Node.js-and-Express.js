module.exports = {
    postCustomerAPI: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        console.log(">>> name :", name, "description:", description);


        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }
        else {
            let results = await uploadSingleFile(req.files.image);

            imageUrl = results.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);
        return res.status(200).json({
            EC: 0,
            data: customer
        })

    },
    postCustomerManyAPI: async (req, res) => {
        let customer = await createCustomerManyService(req.body.customers);
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    getArrayCustomerAPI: async (req, res) => {
        let customer = await getAllCustomer();
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    updateCustomerAPI: async (req, res) => {
        let {id,name,email,address}=req.body
        let customer=await updateCustomer(id,name,email,address)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    deleteACustomerAPI: async (req, res) => {
        let id=req.body.id
        let customer=await deleteCustomer(id)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    deleteArrayCustomerAPI: async (req, res) => {
        let id=req.body.customersId
        let customer=await deleteArrayCustomer(id)
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
};
const { uploadSingleFile } = require("../services/fileServices")
const { createCustomerService, createCustomerManyService, getAllCustomer, updateCustomer,deleteCustomer,deleteArrayCustomer } = require("../services/customerService");
const { response } = require("express");
const customer = require("../models/customer");

