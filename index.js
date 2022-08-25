const nodeCron = require("node-cron");
const nodeMailer = require("nodemailer");

// function to send an mail using Gmail service

let emailTransporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "", // your gmail or App Password
  },
});

let options = {
  from: "muhammadzaidabcd@gmail.com",
  to: "45224@gcslahore.edu.pk",
  subject: "Test Send Email using JavaScript",
  text: "Hello this is test email by MD ZAID...",
};

emailTransporter.sendMail(options, (err, info) => {
  if (err) console.log(err);
  else {
    console.log("Email Sent successfully using nodejs");
  }
});
