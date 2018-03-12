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
  

  // входящее emit
  imap.mailListener.on("mail", function(mail, seqno, attributes) {
    var obj = {
      to: mail.from[0].address,
      from: "test2018god@gmail.com",
      subject: mail.subject,
      body: "Hello! This is a test of the node_mailer",
      html: mail.text,
    };

    console.log("emailParsed", obj);
    my_mongo.my_mongo_get(obj,{model:"incoming"}, function(err, obj) {
      if (err) {
        console.log(err);
        // socket.emit("news_mes", { ok: false });
      } else {
        console.log("окей_2");
         socket.emit("news_mes_pol", obj);
      }
    });
    // mail processing code goes here
  });
  socket.emit("news", { hello: "world" });
  socket.on("my other event", function(data) {
    console.log(data);
  });
  // отправленые
  socket.on("shipped" ,function(data) {
    my_mongo.my_mongo_set({},{model:"new"}, function(err, data) {
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
        console.log(err, "err fffffffffffff");
        socket.emit("news_mes", []);
      } else {
        console.log("окей");
        socket.emit("shipped", obj_cl);
      }
    });
  });
  // входящее
  socket.on("incoming", function(data) {
    console.log("incoming");
    
    my_mongo.my_mongo_set({},{model:"incoming"}, function(err, data) {
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
        console.log(err, "err fffffffffffff");
        socket.emit("incoming", []);
      } else {
        console.log("окей");
        socket.emit("incoming", obj_cl);
      }
    });
  });
  // новое 
  socket.on("new_email",function(data) {
    console.log(data, "new_email_server");

    var mailOptions = {
      to: data.dat.to,
      from: "test2018god@gmail.com",
      subject: data.dat.subject,
      body: "Hello! This is a test of the node_mailer",
      html: data.dat.html
    };
    console.log(mailOptions);
    gmail.gmail(mailOptions, function(err, data) {
      if (err) {
        console.log(err, "erllllllr");
        socket.emit("news_mes" , { ok: false });
      } else {
        my_mongo.my_mongo_get(mailOptions,{model:"new"}, function(err, data_1) {
          if (err) {
            console.log(err, "err fffffffffffff");
            socket.emit("news_mes" , { ok: false });
          } else {
            console.log("окей");
            socket.emit("news_mes", { ok: true });
          }
        });
      }
    });
  });
});
/////////////////////////////
// do something with mail object including attachments
// var obj = {
//   body: "Hello! This is a test of the node_mailer",
//   date: "Sun Mar 11 2018 19:40:03 GMT+0200 (EET)",
//   from: "test2018god@gmail.com",
//   html: "fghfghfh\n",
//   subject: "fghfghf",
//   to: "pgs47@yandex.ua",
// };

// my_mongo.my_mongo_get(obj, function(err, data) {
//   if (err) {
//     socket.emit("news_mes", { ok: false });
//   } else {
//     console.log("окей_2");
//   }
// });
//////////////////////////////////
// imap.imap_mail({}, function(err, data) {
//   console.log("kkkkk",data,"kkkkk");
//   var obj_cl = [];
//       for (let a = 0; a < data.length; a++) {

//         obj_cl.push({
//           to: data[a].date[0].from,
//           from: data[a].from,
//           subject: data[a].subject[0],
//           body: data[a].body,
//           html: data[a].html,
//           id: a
//         });
//       }
// var obj_cl = [];
// for (let a = 0; a < data.length; a++) {

//   obj_cl.push({
//     to: data[a].to,
//     from: data[a].from,
//     subject: data[a].subject,
//     body: data[a].body,
//     html: data[a].html,
//     id: a
//   });
// }

// if (err) {
//   console.log(err,"err fffffffffffff")
//   socket.emit("news_mes", []);
// } else {
//  console.log("окей")
//  socket.emit("shipped", obj_cl);
// }
// });
console.log(port);
console.log(gmail);
console.log(gmail);
