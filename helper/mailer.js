const mailgun = require("mailgun-js");
const dotenv = require("dotenv");
dotenv.config();
const mailGun = mailgun({
  domain: process.env.MAILGUN_DOMAIN,
  apiKey: process.env.MAILGUN_API_KEY,
});

const mailer = async ({ to, subject, html }) => {
  try {
    await mailGun.messages().send({
      to,
      from: process.env.MAILGUN_NO_REPLY,
      subject,
      html,
    });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
};

module.exports = mailer;
