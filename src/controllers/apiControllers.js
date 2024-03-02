const User=require("../models/user")
const {uploadSingleFile,uploadMultipleFiles} = require("../services/fileServices")
const getUsersAPI = async (req, res) => {
    let results =await User.find({});

    return res.status(200).json({
        errorCode: 0,
        data: results
    })
}

const postCreateUserAPI = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let user = await User.create({
        email: email,
        name: name,
        city: city
    })
       
 
    return res.status(200).json({
        EC: 0,
        data: user
    })

}

const putUpdateUserAPI = async (req, res) => {
    console.log("req ==>", req.body);
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;
    let user = await User.updateOne({_id:userId},{name:name,email:email,city:city});
    return res.status(200).json({
        EC: 0,
        data: user
    })
}
const deleteUserAPI=async ( req, res) => {
    const id=req.body.userId
    await User.deleteOne({
        _id: id
    })
    return res.status(200).json({
        EC: 0,
        data: User
    })
}
const postUploadFileSingleAPI= async( req, res) => {
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
      let results= await uploadSingleFile(req.files.image);
      console.log(results);
    return res.send("ok single")
}
const postUploadMultipleFilesAPI = async (req, res) => {
    if (Array.isArray(req.files.image)) {
        let result= await uploadMultipleFiles(req.files.image);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }
    else {
        return await postUploadFileSingleAPI(req, res);
    }
}



module.exports = {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadFileSingleAPI,
    postUploadMultipleFilesAPI,


}
