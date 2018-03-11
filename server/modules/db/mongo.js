var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mail_1");
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("norm");
});
var Schema = mongoose.Schema;
var userSchema = new Schema({
  to: String,
  from: String,
  subject: String,
  body: String,
  html: String
});
// function my_mongo(mailOptions, callbecks) {
//   var User = mongoose.model("User_2", userSchema);
//   var arvind = new User({
//     to: mailOptions.to,
//     from: mailOptions.from,
//     subject: mailOptions.subject,
//     body: mailOptions.body,
//     html: mailOptions.html,
//     isAlive: true
//   });
//   arvind.save(function(err, data) {
//       if (err) {
//         console.log(err) 
//         callbecks(err,data);
//       } else {
//         callbecks(null,data);
//       }
//   });  

  
// }
function my_mongo_get(mailOptions, options,callbecks) {
  var User = mongoose.model(options.model, userSchema);
  var arvind = new User({
    to: mailOptions.to,
    from: mailOptions.from,
    subject: mailOptions.subject,
    body: mailOptions.body,
    html: mailOptions.html,
    isAlive: true
  });
  arvind.save(function(err, data) {
      if (err) {
        console.log(err) 
        callbecks(err,data);
      } else {
        callbecks(null,data);
      }
  });  

  
}
function my_mongo_set(mailOptions,options, callbecks) {;
  var User = mongoose.model(options.model, userSchema);
    mongoose.models[options.model].find({}, "to from subject body html", function(err, docs ){
        if (err) {
            console.log(err) 
            callbecks(err,docs);
          } else {
            // console.log("my_mongo_set2");
            callbecks(null,docs);
          };  
        })
    }
module.exports = { my_mongo_set,my_mongo_get }
