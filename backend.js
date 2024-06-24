// server.js
const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const app = express();
const upload = multer();

app.use(express.json());

app.post('/submit', upload.single('image'), (req, res) => {
    const { nickname, text } = req.body;
    const { file } = req;

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'zeyneperol3@gmail.com',
        subject: 'New Submission',
        text: `Nickname: ${nickname}\n\nText: ${text}`,
        attachments: []
    };

    if (file) {
        mailOptions.attachments.push({
            filename: file.originalname,
            content: file.buffer
        });
    }

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.send('Submission received!');
    });
});

app.post('/admin/add-content', (req, res) => {
    const { content } = req.body;
    // Handle adding content to your site
    res.send('Content added!');
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
