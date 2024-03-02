const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,

},
    {
        timestamps: true
    });
const customer = mongoose.model('Customer', customerSchema);
module.exports = customer;