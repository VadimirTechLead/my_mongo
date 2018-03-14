var static = require("node-static");
var file = new static.Server("./server/public");
const gmail = require("../server/modules/mail/gmail.js");
const my_mongo = require("../server/modules/db/mongo.js");
const imap = require("../server/modules/mail/imap.js");
const port = process.env.PORT || 80;
var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");

app.listen(port);

function handler(req, res) {
  file.serve(req, res, function name(err, dt) {
    if (err) console.log(req.url, "err");
  });
}

io.on("connection", function(socket) {
  imap.mailListener.on("mail", function(mail, seqno, attributes) {
    var obj = {
      to: mail.from[0].address,
      from: "test2018god@gmail.com",
      subject: mail.subject,
      body: "Hello! This is a test of the node_mailer",
      html: mail.text
    };
    console.log("emailParsed", obj);
    my_mongo.my_mongo_get(obj, { model: "incoming" }, function(err, obj) {
      if (err) {
      } else {
        socket.emit("news_mes_pol", obj);
      }
    });
  });
  socket.on("shipped", function(data) {
    my_mongo.my_mongo_set({}, { model: "new" }, function(err, data) {
      var obj_cl = [];
      for (let a = 0; a < data.length; a++) {
        obj_cl.push({
          to: data[a].to,
          from: data[a].from,
          subject: data[a].subject,
          body: data[a].body,
          html: data[a].html,
          id: a
        });
      }
      if (err) {
        socket.emit("news_mes", []);
      } else {
        socket.emit("shipped", obj_cl);
      }
    });
  });
  socket.on("incoming", function(data) {
    my_mongo.my_mongo_set({}, { model: "incoming" }, function(err, data) {
      console.log(data);
      var obj_cl = [];
      for (let a = 0; a < data.length; a++) {
        obj_cl.push({
          to: data[a].to,
          from: data[a].from,
          subject: data[a].subject,
          body: data[a].body,
          html: data[a].html,
          id: a
        });
      }
      if (err) {
        socket.emit("incoming", []);
      } else {
        socket.emit("incoming", obj_cl);
      }
    });
  });
  socket.on("new_email", function(data) {
    var mailOptions = {
      to: data.dat.to,
      from: "test2018god@gmail.com",
      subject: data.dat.subject,
      body: "Hello! This is a test of the node_mailer",
      html: data.dat.html
    };
    gmail.gmail(mailOptions, function(err, data) {
      if (err) {
        socket.emit("news_mes", { ok: false });
      } else {
        my_mongo.my_mongo_get(mailOptions, { model: "new" }, function(
          err,
          data_1
        ) {
          if (err) {
            socket.emit("news_mes", { ok: false });
          } else {
            socket.emit("news_mes", { ok: true });
          }
        });
      }
    });
  });
});
