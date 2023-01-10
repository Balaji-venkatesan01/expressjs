const { Schema, default: mongoose } = require("mongoose");
mongoose.set('strictQuery', false);

async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/mark');
}
const user = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
const subject = new Schema({
    tamil: {
        type: Number,
        required: true
    },
    english: {
        type: Number,
        required: true
    },
    maths: {
        type: Number,
        required: true
    },
    science: {
        type: Number,
        required: true
    },
    social: {
        type: Number,
        required: true

    }
})

module.exports.user_detail = mongoose.model('userdetail', user);
module.exports.all_subject = mongoose.model('all_subject', subject);

module.exports.mongoose = connectDB