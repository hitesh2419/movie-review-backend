const nodemailer = require('nodemailer')

exports.generateOTP = (otp_length = 6) => {
    let OTP = "";
    for (let i = 1; i <= otp_length; i++) {
        const randomVal = Math.round(Math.random() * 9);
        OTP += randomVal;
    }

    return OTP;
};

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure:false,
        auth: {
            user: process.env.USER,
            pass: process.env.APPPASS
        }
    });
    