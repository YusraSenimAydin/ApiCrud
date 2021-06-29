const mongoose = require('mongoose');


MONGO_URI="mongodb+srv://yusradede:senim1234@restapi.umk3d.mongodb.net/restapi?retryWrites=true&w=majority"
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true,

        })
        .then(() => {
            console.log("Mongodb Connection Successful");
        })
        .catch(err => {
            console.error('Error in DB connection: ' + err);
        })
}
module.exports = connectDatabase