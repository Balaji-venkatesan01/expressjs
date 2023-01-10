const user = require('./db')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const mongodb = require('mongodb');
const saltRounds = 10;
exports.getdata = async (req, res)=> {
    const userDetail = await user.user_detail.find()
    res.json(userDetail)
}
exports.singnup = async (req, res)=> {
    const password = await bcrypt.hash(req.body.password, saltRounds)
    const data = { ...req.body, password }
    const user = await user.user_detail.create(data)
    await res.json("your data is stored")
}
exports.trash = async (req, res)=> {
    const id = req.params.id;
    constbook = await user.user_detail.deleteOne({ _id: mongodb.ObjectId(id) })
    res.status(204).json(book)
}
exports.login = async (req, res)=> {
    const users = await user.user_detail.findOne({ email: req.body.email })
    if (!users) {
        res.send("user not found")
    }
    if (!(await bcrypt.compare(req.body.password, users.password))) {
        res.send("user not defined")
    }
    const token = jwt.sign(users.toJSON(), "verify-passwords")
    res.json({ users, token })
} 