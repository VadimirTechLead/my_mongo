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
  markSeen: true, // all fetched email willbe marked as seen and not fetched next time
  fetchUnreadOnStart: true, // use it only if you want to get all unread email on lib start. Default is `false`,
  mailParserOptions: { streamAttachments: true }, // options to be passed to mailParser lib.
  attachments: true, // download attachments as they are encountered to the project directory
  attachmentOptions: { directory: "attachments/" } // specify a download directory for attachments
});

mailListener.start(); // start listening

module.exports = { mailListener };