const Employed = require("../models/Employed_model");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

function sendMail(email, name, tkn) {
    let transporter = nodemailer.createTransport({
        service: 'workers',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: `welcome ${name}`,
        text: `your token is ${tkn} `
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(`error: ${err}`);
        } else {
            console.log('email sent:' + info.response);
        }
    });
}
//שליחת מייל משום מה לא עובדת, למרות שאני בטוחה שכתבתי נכון
const checkPermission = async (req, res) => {
    try {
        /*let employed = */await Employed.findOne({
            email: req.body.email,
            password: req.body.password
        }).then((employed) => {
                const token = jwt.sign({ id: employed._id }, process.env.ACCESS_TOKEN_SECRET);
                sendMail(employed.email, employed.full_name, token);
                console.log(`token: ${token}`);
                res.status(200).send(`successfull login ${employed}`)
            })
    } catch (err) {
        res.status(400).send(`error: ${err.message}`);
    }
}

const getAllEmployed = async (req, res) => {
    try {
        let allEmployeds = await Employed.find();
        if (allEmployeds == null) {
            res.send("employeds collection is null");
        } else {
            res.status(200).json({ Employeds: allEmployeds });
        }
    } catch (err) {
        res.status(400).send(`error: ${err.message}`);
    }
}

const getEmployedById = async (req, res) => {
    let employed = await Employed.findById(req.params.id);
    try {
        res.status(200).send(`employed: ${employed}`)
    } catch (err) {
        res.status(400).send(`error: ${err.message}`);
    }
}

const setNewEmployed = async (req, res) => {
    let employed = new Employed({
        full_name: req.body.full_name,
        status: 10,
        isAdmin: false,
        email: req.body.email,
        password: req.body.password
    });
    console.log(`${employed} added`);
    employed.save((err, emp) => {
        if (err) {
            res.status(400).send(err.message);
        } else {
            res.status(200).json({ newEmployed: emp })
        }
    })
}

const updateEmployed = async (req, res) => {
    let employed;
    try {
        employed = await Employed.findByIdAndUpdate(req.params.id, req.body)
        await employed.save();
        res.status(200).send(`details of ${employed.full_name} are updated`);
    } catch (err) {
        res.status(400).send(`error: ${err.message}`)
    }
}

module.exports = {
    checkPermission,
    getAllEmployed,
    getEmployedById,
    setNewEmployed,
    updateEmployed
}