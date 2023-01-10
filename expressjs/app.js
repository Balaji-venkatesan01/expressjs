const express = require('express');
const app = express.Router();
const connect = require("./db");
const mongodb = require('mongodb');
const path = require('path');
const test = require('./midelware')

app.use(test.login_middelware).
    route("/")
    .get(async function (req, res) {
        const subjects = await connect.all_subject.find()
        res.status(200).json(subjects)
    })
    .post(async function (req, res) {
        try {
            const all_subject = await connect.all_subject.create(req.body)
            await res.send(all_subject)
        }
        catch (errors) {
            res.status(400).send("your missed the term is :" + errors)
        }

    })

app.
    route("/:id")
    .get(async function (req, res) {
        const id = req.params.id;
       const subjects = await connect.all_subject.find({ _id: mongodb.ObjectId(id) })
        res.status(200).json(subjects)
    })
    .patch(async function (req, res) {
        const id = req.params.id;
       const subjectes= await connect.all_subject.updateOne({ _id: mongodb.ObjectId(id) }, { $set: req.body })
        res.status(202).json(subjectes)
    })
    .delete(async function (req, res) {
        const id = req.params.id;
       const subjects = await connect.all_subject.deleteOne({ _id: mongodb.ObjectId(id) })
        res.status(204).json(subjects)
    })

module.exports = app
