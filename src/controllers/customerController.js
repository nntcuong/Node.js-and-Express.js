module.exports = {
    postCustomerAPI: (req, res) => {
        let {name,address,phone,email,description}=req.body;
        console.log(">>> name :", name, "description:", description);

        // name: {
        //     type: String,
        //     required: true
        // },
        // address: String,
        // phone: String,
        // email: String,
        // image: String,
        // description: String,
    return res.send('Create a customer')
    }
};
