// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/test_1");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function() {
//   console.log("norm");
// });
// var Schema = mongoose.Schema;
// var userSchema = new Schema({
//   name: String,
//   age: Number,
//   DOB: Date,
//   isAlive: Boolean
// });
// var User = mongoose.model("User_1", userSchema);
// var arvind = new User({
//   name: "Arvind",
//   age: 99,
//   DOB: "01/01/1915",
//   isAlive: true
// });

// /* arvind.save(function(err, data) {
//   if (err) console.log(err);
// //   else console.log("Saved : ", data);
// }); */
// // console.log('isYounger : ',arvind);
// mongoose.models.User_1.find({}, 'name', function (err, docs) {
//     // docs is an array of partially-`init`d documents
//     // defaults are still applied and will be "populated"
//     console.log('isYounger : ',docs);
//   })
// // console.log('isYounger : ',arvind);

// const nodemailer = require("nodemailer");
// var smtpTransport = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "test2018god@gmail.com", // to be replaced by actual username and password
//     pass: "slonik6663444"
//   }
// });

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

/////////////////////////////////////
// var request = require		('request');
// var fs   = require			('fs');
// var req_j = request.jar();
// request = request.defaults({ jar: req_j });
// heder = {
//    cookie:
//      "GMAIL_AT=AF6bupMwDC-_SUAYSo9mJ57swhmyNxhw6Q; COMPASS=gmail=CogBAAlriVedJSGn5wGiMvgVeVRejd8OWUOuyigTWsEPYvIZDIJxzKmGpw0jA8d8ugdnqZe4XfueBRXGVcKCVQIouCTmCm10XQ81Mgw2xoiTyvbqvbFUdrzkw4_nwd9gK8Vd2yE-XzRBF9dQ0LXgVfcuN5th3K1DP3XwfDcr5VzmBy3ivSgIAHaLuBD5mJDVBRqRAQAJa4lXKzKnr4XqtvciRU3GOnRA2ddGUqqR-pMPZuWj-GlNkmZUpqiKvEpZVm6wNpoLy_HBhpjH4VZU_2Mm9lgr4VHnBB7uhWhq7h15UZRv-Jt_TBXsTpVopRPOSb-gDfAEKVglydnGNYXX_PRfwisWIWXIkcz95mEtTSehgDKQGbm5KTiLPrhMMrI219Xj8hM; GMAIL_IMP=v*2%2Fqr-ns%2Fpi-l-htu*1%2Fpi-l-htu*1%2Fpi-l-htu*0%2Fpi-l-htu*0%2Ftl-tbsfd*15851%2Ftl-tbsfd*8%2Ftl-tbsfd*2%2Ffua*324*17412!ti!lc!ti%2Ftadis*91%2Fcor-rs*231%2Fcor-c*246%2Fch-lsm*6686%2Fr-cs*85%2Fpi-l-rvs*0%2Fl-cl*1; HSID=AEeCtNOj1FUWZQWFU; SSID=APD2Zg1t5fDRHxFAv; APISID=ZrLLqYyIZh2BlQTa/A6KAtsL27ezq3_2-j; SAPISID=8uyDlH8ZijVmb4rE/ANzxe47LKAhklfijM; OSID=3QWMp_6IrnY2rDFXN7-tvjjAfbB4MdrtbVj0jdCr3e4GkwNke9dMt6NqlXP92rNMGKKHmw.; NID=125=aa9ppG8iRtBjvrBUHf2mUznRJV7MwIbJZYMRyd5DRgS5LzutoGVYa4AEgLzrUXbSV7OjFKIz4HTwfqPuqVHg4Izo8fqcsNZXxmpXWpWh3FjRf97TwetdMkDyxxSJPKP72-6Qo2i1_9toFmrFs1vUSaXfFwKMEgckrgRR6jhj; SID=3QWMp6P_PA2pwkHsbH6l0fC4FECsTsQtrmr39TQC6lO_V7ciL8cKQLsoCGOO7zCxa6DlGw.; 1P_JAR=2018-3-10-15; SIDCC=AAiTGe_1zRfbXHSdPbu1sOESY64BYbasMx0yL6w7GarQMt4dAdJGAJarDDFppUmNy5dy37C7ZQ",
// };
// request(
//   {
//     url:
//       "https://mail.google.com/mail/?ui=2&ik=de35bb8642&jsver=DbAbXeHDUfE.ru.&rid=mail%3Alc.3cfd.1.0&at=AF6bupMwDC-_SUAYSo9mJ57swhmyNxhw6Q&view=tl&start=0&num=70&lhop=1341&ltup=%5Ei&slmm=1621072d3d074ec3&scid=6erow2amryt&avw=1748&ntlv=4&as=0&sstart=0%2C0%2C0&iosc=%5Esmartlabel_personal%7C%5Esmartlabel_social%7C%5Esmartlabel_promo&ioss=50%2C50%2C50&_reqid=964270&pcd=1&cfact=7098%2C7057&cfinact=6804%2C7117%2C7058%2C7056%2C6806%2C7061&mb=0&rt=c&search=mbox",
//     headers: heder
//   },
//   function(error, response, body) {
//     fs.writeFileSync("fil.txt", body)
//     // console.log("error",error););
//      console.log(body);
//     // console.log(body);
//   }
// );
/////////////////////////////////////////////////
// var Imap = require('imap'),
//     inspect = require('util').inspect;

// var imap = new Imap({
//   user: 'test2018god@gmail.com',
//   password: 'slonik6663444',
//   host: 'imap.gmail.com',
//   port: 993,
//   tls: true
// });

// function openInbox(cb) {
//   imap.openBox('INBOX', true, cb);
// }

// imap.once('ready', function() {
//   openInbox(function(err, box) {
//       console.log(box.messages.total);

//     if (err) throw err;
//     var f = imap.seq.fetch('1:'+box.messages.total, {
//       bodies: 'HEADER.FIELDS (FROM TO SUBJECT DATE)',
//       struct: true
//     });
//     f.on('message', function(msg, seqno) {
//       console.log('Message #%d', seqno);
//       var prefix = '(#' + seqno + ') ';
//       msg.on('body', function(stream, info) {
//         var buffer = '';
//         stream.on('data', function(chunk) {
//           buffer += chunk.toString('utf8');
//         });
//         stream.once('end', function() {
//           console.log(prefix + 'Parsed header: %s', inspect(Imap.parseHeader(buffer)));
//         });
//       });
//       msg.once('attributes', function(attrs) {
//         console.log(prefix + 'Attributes: %s', inspect(attrs, false, 8));
//       });
//       msg.once('end', function() {
//          console.log(prefix + 'Finished');
//       });
//     });
//     f.once('error', function(err) {
//       console.log('Fetch error: ' + err);
//     });
//     f.once('end', function() {
//       console.log('Done fetching all messages!');
//       imap.end();
//     });
//   });
// });

// imap.once('error', function(err) {
//   console.log("error",err);
// });

// imap.once('end', function() {
//   console.log('Connection ended');
// });

// imap.connect();
//////////////////////////////////////

//////////////////////////////////
/* test2018god@gmail.com", // to be replaced by actual username and password
//     pass: "slonik6663444"*/
// var MailListener = require("mail-listener2");

// var mailListener = new MailListener({
//   username: "test2018god@gmail.com",
//   password: "slonik6663444",
//   host: "imap.gmail.com",
//   port: 993, // imap port
//   tls: true,
//   connTimeout: 10000, // Default by node-imap
//   authTimeout: 5000, // Default by node-imap,
//   debug: console.log, // Or your custom function with only one incoming argument. Default: null
//   tlsOptions: { rejectUnauthorized: false },
//   mailbox: "INBOX", // mailbox to monitor
//   //   searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
//   markSeen: true, // all fetched email willbe marked as seen and not fetched next time
//   fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
//   mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
//   attachments: true, // download attachments as they are encountered to the project directory
//   attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
// });

// mailListener.start(); // start listening

// // stop listening
// //mailListener.stop();

// mailListener.on("server:connected", function() {
//   console.log("imapConnected");
// });

// mailListener.on("server:disconnected", function() {
//   console.log("imapDisconnected");
// });

// mailListener.on("error", function(err) {
//   console.log(err);
// });

// mailListener.on("mail", function(mail, seqno, attributes) {
//   // do something with mail object including attachments
//   var obj = {
//     to: mail.from[0].address,
//     from: "test2018god@gmail.com",
//     subject: mail.subject,
//     body: "Hello! This is a test of the node_mailer",
//     date: mail.date,
//     html: mail.text,
//     id: 3
//   };
//   console.log("emailParsed", obj);
//   // mail processing code goes here
// });

// mailListener.on("attachment", function(attachment) {
//   console.log(attachment.path);
// });

// it's possible to access imap object from node-imap library for performing additional actions. E.x.
// mailListener.imap.move(:msguids, :mailboxes, function(){})
//////////////////////////
const WsHendler = require("./server/index.js");