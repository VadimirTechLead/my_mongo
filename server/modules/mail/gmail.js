const nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test2018god@gmail.com", // to be replaced by actual username and password
    pass: "slonik6663444"
  }
});
function gmail(mailOptions, callbecks) {
  console.log(mailOptions, "mailOptions");
  smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) console.log("eror", error);
    callbecks(error);
  });
}
module.exports = { gmail };
