const mongoose = require('mongoose');
var mongoose_delete=require('mongoose-delete');
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
        timestamps: true,
        statics:{
            finByName(name){
                return this.find({name: new RegExp(name,'i')})
            }
        }
    });
    //Override all methods
    customerSchema.plugin(mongoose_delete,{overrideMethods:'all'});
const customer = mongoose.model('Customer', customerSchema);
module.exports = customer;