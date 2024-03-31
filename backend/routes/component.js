const express = require('express');
const app = express.Router();
const { compo } = require('./databaseConnection');
// const cloudinary=require('cloudinary')
const cloudinary = require("cloudinary").v2;
const jwt = require('jsonwebtoken');

cloudinary.config({
    cloud_name: process.env.Cloud_name,
    api_key: process.env.Api_key,
    api_secret: process.env.Api_secret
});


app.post('/publishComponent', async (req, res) => {

    try {
        let { user, name, des } = req.body;
        console.log(user, name, des, "get post");
        // Upload image to Cloudinary
        const actualuser = await jwt.decode(user);
        console.log(actualuser, "decode")
        let filezip = req.files.imagefile;
        console.log("zip is", filezip)

        let serverPath = 'public/zipFiles/' + filezip.name;
        let databasePath = 'zipFiles/' + filezip.name;

        filezip.mv(serverPath, error => {
            if (error) throw error
        })

        let fileimg = req.files.imageObj;
        let imageUrl;
        if (fileimg) {
            const result = await cloudinary.uploader.upload(fileimg.tempFilePath, {
                folder: "FlexFlow" // Optional: specify the folder in Cloudinary
            });

            // Access the resolved value of the promise
            imageUrl = result.secure_url;
        }
        console.log("url is..", imageUrl)

        let email = actualuser.email;
        console.log("email is ", email)
        let db = await compo();
        db.insertOne({ Email: email, Component_Name: name, Image: imageUrl, Description: des, Zip: databasePath })

        res.send('success')

    } catch (error) {
        return "err"
    }

});

app.get('/getComponents', async (req, res) => {
    try {
        console.log("ji")
            let db = await compo();
            let data = await db.find().toArray(); 
            console.log("duaa", data)
            let result = ["success", data];
            console.log('wokrrr')
            res.send(result);

    } catch (err) {
        res.send(['fail'])
    }
})



module.exports = app;