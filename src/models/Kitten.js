const mongoose=require('mongoose');
const kittySchema = new mongoose.Schema({
    name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
// const cat = new Kitten({ name: 'Silence' });
// cat.save();

module.exports = Kitten;