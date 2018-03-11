const nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "test2018god@gmail.com", // to be replaced by actual username and password
    pass: "slonik6663444"
  }
});

// var mailOptions = {
//   to: "pgs47@yandex.ua",
//   from: "test2018god@gmail.com",
//   subject: "node_mailer test email",
//   body: "Hello! This is a test of the node_mailer",
//   html: `<h5>доступ</h5>`
// };

function gmail(mailOptions,callbecks) {
console.log(mailOptions,'mailOptions');

smtpTransport.sendMail(mailOptions, function(error, response) {
    if (error) console.log('eror',error); 
    callbecks(error)
    });


//   var tt = async () => {
  
//     let get = await smtpTransport.sendMail(mailOptions);
//      callbecks(null,get)
//   };
//   tt().catch(err => {
//     console.log(mailOptions,'catch');
//     callbecks(err,"")
//   });
}
module.exports = {gmail};



// var mailOptions = {
//   to: "pgs47@yandex.ua",
//   from: "test2018god@gmail.com",
//   subject: "node_mailer test email",
//   body: "Hello! This is a test of the node_mailer",
//   html: `<h5>доступ</h5>`
// };

// smtpTransport.sendMail(mailOptions, function(error, response) {
//     if (error) {
//       console.log('eror',error);
//     } else {
//         console.log('отправленно',response);
//     }
// });