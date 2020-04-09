const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config()

const app = express();

const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
  }
  

app.use(cors());

app.post('/api/v1', (req, res) => {
    var data = req.body;
    // console.log(req)
    console.log(data);

    var smtpTransport = nodemailer.createTransport({
        service: "Gmail",
        port: 465,
        auth: {
            user: process.env.WEB_EMAIL,
            pass: process.env.WEB_PASS
        }
    })

    var mailOps = {
        from: data.email,
        subject: "Inquiry",
        to: 'jonahkarew@gmail.com',
        html: 
        `
        <p>Name: ${data.name}</p>
        <p>Subject: ${data.subject}</p>
        <p>Email: ${data.email}</p>
        <p>Message: ${data.message}</p>
        `
        // `${data[0]}`
    }

    smtpTransport.sendMail(mailOps, (err, res) => {
        if(err){
            console.log(err)
        }
        else{
            res.send('Success')
        }
        smtpTransport.close();
    })
})

app.get('*', (req, res) => {                       
    res.sendFile(path.resolve(__dirname, './client', 'index.html'));                               
  });

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});