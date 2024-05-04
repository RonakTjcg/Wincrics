// controllers/OtpController.js

const nodemailer = require('nodemailer');

class OtpController {
  static async sendOtp(req, res) {
    const { email, otp } = req.body;

    // Create a transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.yourmailserver.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'your-email@example.com',
        pass: 'your-email-password',
      },
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Your Name" <your-email@example.com>',
      to: email,
      subject: 'Your OTP for verification',
      text: `Your OTP is ${otp}.`,
    });

    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ message: 'OTP sent successfully' });
  }
}

module.exports = OtpController;
