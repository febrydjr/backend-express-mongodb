const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const templateHtml = async (type, content) => {
  const directory = path.resolve(__dirname, `../templates/${type}.html`);
  const htmlTemplate = await fs.readFile(
    path.resolve(__dirname, directory),
    "utf-8"
  );
  const htmlCompiled = handlebars.compile(htmlTemplate);
  const template = htmlCompiled({ ...content });

  return template;
};

const transporter = nodemailer.createTransport({
  service: process.env.NODEMAILER_SERVICE,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const nodemailerEmail = async (type, email, subject, content) => {
  try {
    const html = await templateHtml(type, content);
    const mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: subject,
      html: html,
    };
    return await transporter.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
};

module.exports = nodemailerEmail;
