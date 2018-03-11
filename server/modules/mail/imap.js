var MailListener = require("mail-listener2");

var mailListener = new MailListener({
  username: "test2018god@gmail.com",
  password: "slonik6663444",
  host: "imap.gmail.com",
  port: 993, // imap port
  tls: true,
  connTimeout: 100000, // Default by node-imap
  authTimeout: 50000, // Default by node-imap,
  debug: console.log, // Or your custom function with only one incoming argument. Default: null
  tlsOptions: { rejectUnauthorized: false },
  mailbox: "INBOX", // mailbox to monitor
  //   searchFilter: ["UNSEEN", "FLAGGED"], // the search filter being used after an IDLE notification has been retrieved
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

mailListener.start(); // start listening

// stop listening
//mailListener.stop();

mailListener.on("server:connected", function() {
  console.log("imapConnected");
});

mailListener.on("server:disconnected", function() {
  console.log("imapDisconnected");
});

mailListener.on("error", function(err) {
  console.log(err);
});

/* mailListener.on("mail", function(mail, seqno, attributes) {
  // do something with mail object including attachments
  var obj = {
    to: mail.from[0].address,
    from: "test2018god@gmail.com",
    subject: mail.subject,
    body: "Hello! This is a test of the node_mailer",
    date: mail.date,
    html: mail.text,
    id: 3
  };
  console.log("emailParsed", obj);
  my_mongo.my_mongo(mail, function(err, obj) {
    if (err) {
      socket.emit("news_mes", { ok: false });
    } else {
      console.log("окей_1");
    }
  });
  // mail processing code goes here
}); */

mailListener.on("attachment", function(attachment) {
  console.log(attachment.path);
});

// it's possible to access imap object from node-imap library for performing additional actions. E.x.
// mailListener.imap.move(:msguids, :mailboxes, function(){})
module.exports = { mailListener };