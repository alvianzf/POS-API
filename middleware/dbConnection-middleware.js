var mongoose = require('mongoose')

const mongoUri = 'mongodb://127.0.0.1:27017/POS-API'

const dbConnection = async (req,res,next) => {
    try {
        await mongoose.connect(mongoUri)
        console.log(`=======Connect DB=======`);
        next()
    } catch (error) {
        console.log(error, `========DB Error=======`);
    }
}

module.exports = dbConnection;