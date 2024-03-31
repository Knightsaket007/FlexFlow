
const express = require('express');
const app = express.Router();
const bcrypt = require('bcrypt');
const { UserData } = require('./databaseConnection')
const nodemailer = require('nodemailer');
const session = require('express-session');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

// const session = require('express-session');
// const MongoDBStore = require('connect-mongodb-session')(session);
// const store = new MongoDBStore({
//   uri: process.env.DB_HOST, // MongoDB connection URI
//   databaseName: 'FlexFlow', // Name of the database to store sessions
//   collection: 'sessions' // Name of the collection to store session documents
// });

// store.on('error', function(error) {
//   console.log(error);
// });

const generateRandomString = (length) => {
    return crypto.randomBytes(length).toString('hex');
};

//========== OTP Generator ==============//
let characters = "1234567890";
let length = characters.length;
function otpGenerator() {
    let newOtp = ""
    for (let i = 1; i <= 6; i++) {
        let index = Math.floor(Math.random() * length);
        newOtp += characters[index];
    }
    // session.OTP_info = newOtp;
    return newOtp;
}
//==========>>> OTP Generator <<<==============//
const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.Gmail_user,
        pass: process.env.Gmail_pass
    }
});

const fiveMinutes = 1000 * 60 * 5;
app.use(session({
    secret: generateRandomString(32),
    saveUninitialized: true,
    cookie: { maxAge: fiveMinutes },
    resave: false
}))

// app.use(session({
//     secret: process.env.SESSION_SECRET, // Secret used to sign the session ID cookie
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//     cookie: {
//       maxAge: 1000 * 60 * 5// Session expiration time (5 min)
//     }
//   }));

app.post('/OtpGeneration', async (req, res) => {
    try {
        const { name, email, password, image } = req.body;

        console.log("email is ", email)

        const IsUserNotExist = async () => {
            const db = await UserData()
            return await db.findOne({ Email: email });
        }
        // Set session variables
        let a = await IsUserNotExist();
        console.log("respose is ", a)

        if (a === null) {
            let stringOtp = otpGenerator()
            const hashedPassword = await bcrypt.hash(password, 10);
            session.details = [name, email, hashedPassword, image];
            console.log("hashed password", hashedPassword)

            const options = {
                from: "indian.guys2022@gmail.com",
                to: email,
                subject: "",
                text: "Your OTP is: " + stringOtp
            }

            transport.sendMail(options, (err) => {
                if (err) {
                    console.log(err);

                } else {
                    res.send(["success", stringOtp])

                }
            });
            let encryptionKey = generateRandomString(10)
            res.send(["success", stringOtp, encryptionKey])
            console.log("otp is ", stringOtp)

        }
        else
            res.send(["user Exist", null])


        // res.status(200).json({ message: 'ok' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});


//================= Insert User in Database ====================//

const generateToken = (userDetails) => {
    const secretKey = generateRandomString(32); // Change this to a strong, secret key
    const expiresIn = '2h'; // Token expiration time (e.g., 2 hours)

    return jwt.sign(userDetails, secretKey, { expiresIn });
};


app.post('/insertUser', async (req, res) => {
    try {
        console.log('i entered')
        let userdetails =session.details;
        console.log('i entered here', userdetails)
        let name = userdetails[0];
        let email = userdetails[1];
        let password = userdetails[2]
        let image = userdetails[3]
        console.log(name, email, password, "heuehkh")
        const IsUserNotExist = async () => {
            const db = await UserData()
            return await db.findOne({ Email: email });
        }
        // Set session variables
        let a = await IsUserNotExist();
        if (a === null) {

            const insert = async () => {
                const db = await UserData();
                try {
                    await db.insertOne({ Name: name, Email: email, Password: password, Image: image });

                } catch (insertError) {
                    console.error(insertError);
                    // Handle insertion error, and send an appropriate response to the client
                    res.status(500).json({ message: 'Error inserting user into the database' });
                }
            };

            await insert();

            const userDetails = {
                name: name,
                email: email,
                // Add other relevant user details
            };
            let token = generateToken(userDetails)
            console.log("inserted succes.....ok")

            res.json({ token });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }

});



app.post('/check-auth', async (req, res) => {
    // Check if the user is logged in by inspecting the cookie
    const userCookie = req.body;
    // console.log("userCookie is", userCookie)
    try {
        if (userCookie && Object.keys(userCookie).length !== 0) {
            let actualInfo = await jwt.decode(userCookie.userCookie.token)
            const db = await UserData();
            const user = await db.findOne({ Email: actualInfo.email });
            if (user) {
                let result = ["success", user.Image];
                res.send(result);
            }

            else res.send("not found")

        } else {
            // User is not logged in
            res.send('Fail');
        }
    }
    catch (err) {
        res.send(err)
    }

});



app.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;
        const db = await UserData()
        const user = await db.findOne({ Email: email });
        console.log("user found", user)
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.Password);
            if (passwordMatch) {
                const userDetails = {
                    name: user.Name,
                    email: email,
                    // Add other relevant user details
                };
                let token = generateToken(userDetails)
                console.log("inserted succes.....ok")

                res.json({ token });
            } else {
                // Passwords do not match, handle invalid credentials
                res.send('Invalid credentials');
                console.log("invalid  ..")
            }

        }
        else
            res.send("User not found")

    }
    catch (err) {
        res.send("Something went wrong, please try again later")
    }
});



app.post('/checkuser', async (req, res) => {
    try {
        const { email, credential } = req.body;
        console.log("yes, the email is ", email, credential)
        let db = await UserData();
        let isuserexist
        if (credential) {
            let actualInfo = await jwt.decode(credential.token)
            let actualemail = actualInfo.email;
            console.log('actual info ..', actualemail)
            isuserexist = (actualemail === email) ? await db.findOne({ Email: email }) : null
        }
        else
            isuserexist = await db.findOne({ Email: email })
        console.log("isuserexist is", isuserexist)

        if (isuserexist) {
            session.holdEmail = email;
            let stringOtp = otpGenerator();
            let encryptionKey = generateRandomString(10)
            const options = {
                from: "indian.guys2022@gmail.com",
                to: email,
                subject: "",
                text: "Your OTP is: " + stringOtp
            }

            console.log(stringOtp, "stringOtp")

            transport.sendMail(options, (err) => {
                if (err) {
                    console.log(err);

                } else {
                    res.send(["success", stringOtp, encryptionKey, email])

                }
            });

        }
        else
            res.send(["notfound", null]);
    }
    catch (err) {
        console.log(err)
    }
})



app.post('/updatePassword', async (req, res) => {
    try {
        let { email, password } = req.body;
        console.log("password id", password)
        let db = await UserData();
        let isuserexist = await db.findOne({ Email: email })
        if (isuserexist) {
            const hashedPassword = await bcrypt.hash(password, 10);
            db.updateOne({ Email: email }, { $set: { Password: hashedPassword } });
            res.send("success")
        }
        else {
            res.send("something went wrong")
        }
    }
    catch (err) {
        console.log(err)
    }
})


app.post('/updateuser', async (req, res) => {
    try {
        let { name, github, Linkedin, Insta, user } = req.body;
        console.log(name, github, Linkedin, Insta, user, "all comming")

        if (user) {
            let usercreds = await jwt.decode(user);
            let db = await UserData();
            let userExist = db.findOne({ Email: usercreds.email })
            if (userExist) {
                console.log("user found")
                db.updateOne({ Email: usercreds.email }, { $set: { Name: name, Github: github, Linkedin: Linkedin, Instagram: Insta } });
                res.send("success")
            }
        }
    }
    catch (err) {
        res.send(err)
    }
})

app.post('/getProfile', async (req, res) => {
    try {
        let { user } = req.body;
        console.log(user, "all ");

        if (user) {
            let usercreds = await jwt.decode(user);
            let db = await UserData();
            let userExist = await db.findOne({ Email: usercreds.email }); // Await the database query
            if (userExist) {

                const sanitizedUser = {
                    Name: userExist.Name,
                    Email: userExist.Email,
                    Image: userExist.Image,
                    Github: userExist.Github,
                    Linkedin: userExist.Linkedin,
                    Instagram: userExist.Instagram,
                };

                res.json(sanitizedUser);
            } else {
                console.log("User not found");
                res.send("User not found");
            }
        } else {
            console.log("User not provided");
            res.status(400).send("User not provided");
        }
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("An error occurred");
    }
});

const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: process.env.Cloud_name,
    api_key: process.env.Api_key,
    api_secret: process.env.Api_secret
});

app.post('/updatephoto', async (req, res) => {
    try {
        let fileimg = req.files.image;
        let { user } = req.body;
        let actualuser = await jwt.decode(user);
        let email = actualuser.email
        let imageUrl;
        if (fileimg) {
            const result = await cloudinary.uploader.upload(fileimg.tempFilePath, {
                folder: "FlexFlow" // Optional: specify the folder in Cloudinary
            });

            // Access the resolved value of the promise
            imageUrl = result.secure_url;
        }
        let db = await UserData();
        db.updateOne({Email:email}, {$set:{Image:imageUrl}});
        console.log("yes success!!")
        res.send("success")
    }
    catch(err){
        console.log(err)
    }
})


module.exports = app;
