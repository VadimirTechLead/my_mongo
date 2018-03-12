// var socket = io("http://localhost:3000");/* 5777 */
var socket = io("http://185.69.154.252");
var mes_obj = [
  {
    to: "pgs47@yandex.ua",
    from: "test2018god@gmail.com",
    subject: "node_mailer test email",
    body: "Hello! This is a test of the node_mailer",
    html: `доступ`,
    id: 1
  }
];

var Block = React.createClass({
  getInitialState: function() {
    socket.on("news", function(data) {
      console.log(data);
      socket.emit("my other event", { my: "апрапрапр" });
    });
    socket.on("news_mes", function(data) {
      ReactDOM.render(<Block />, root);
      console.log(data);
    });
    return { checked: true };
  },
  axios: function(url) {},
  mySocket: function() {
    
    console.log("norm1");
    var obj = {};
    $("#form_1 div input").each(function() {
      // console.log( this.value + ":" + this.name );
      obj[this.name] = this.value;
    });
    console.log(obj, "new_email");
    ReactDOM.render(<Block_4 />, root);
    socket.emit("new_email", { dat: obj });
  },
  test: function(a) {
    console.log("test");
  },
  list: {
    status: "",
    timeridName: "",

    load: false,
    twitt: []
  },
  /* defaultValue="pgs47@yandex.ua" */
  render: function() {
    return (
      <div id="form_1">
        <div
          className="col-xs-6 wow animated slidNameeInLeft"
          data-wow-delay=".5s"
        >
          <input
            typeName="email"
            name="to"
            idName="mail"
            required="required"
            className="form"
            placeholder="Email"
          />

          <input
            typeName="text"
            name="subject"
            idName="subject"
            required="required"
            className="form"
            placeholder="Subject"
          />
        </div>

        <div
          className="col-xs-6 wow animated slidNameeInRight"
          data-wow-delay=".5s"
        >
          <input
            name="html"
            idName="message"
            className="form textarea"
            placeholder="Message"
          />
        </div>

        <div className="relative fullwidNameth col-xs-12">
          <button
            typeName="submit"
            idName="submit"
            name="submit"
            className="form-btn semibold"
            onClick={this.mySocket}
          >
            Send Message
          </button>
        </div>
      </div>
    );
  }
});
var Block_2 = React.createClass({
  getInitialState: function() {
    socket.on("shipped", function(params) {
      mes_obj = params;
      ReactDOM.render(<Block_3 />, root);
    });
    socket.on("news_mes_pol", function(params) {
      console.log("news_mes_pol")
      // mes_obj = params;
      // ReactDOM.render(<Block_3 />, root);
    });
    socket.on("incoming", function(params) {
      console.log("incoming");
      mes_obj = params;
      ReactDOM.render(<Block_3 />, root);
    });
    return { checked: true };
  },
  shipped: function() {
    console.log("ok");
    socket.emit("shipped");
  },
  incoming: function() {
    console.log("ok");
    socket.emit("incoming");
  },
  new_message: function() {
    ReactDOM.render(<Block />, root);
  },
  render: function() {
    return (
      <div className="lef-blok">
        <div className="container-fluid ot_my">
          <button className="btn-1" onClick={this.new_message}>
            новое письмо
          </button>
          <button onClick={this.shipped} className="btn-2">
            отправленые
          </button>
          <button className="btn-2" onClick={this.incoming}>
            входящее 
          </button>
        </div>
      </div>
    );
  }
});
var Block_3 = React.createClass({
  getInitialState: function() {
    return { checked: true };
  },
  mySocket: function() {},

  render: function() {
    return (
      <section className="list-wrap">
        <label forName="search-text">Search the list</label>
        <span className="list-count" />
        <ul idName="list">
          {mes_obj.map(function(el) {
            return (
              <li className="in" key={el.id}>
                <div>{el.to}</div>
                <div>{el.subject}</div>
                <div>{el.html}</div>
              </li>
            );
          })}
          {/* <span>{this.list.status}</span> */}
        </ul>
      </section>
    );
  }
});
var Block_4 = React.createClass({
  getInitialState: function() {
    return { checked: true };
  },
  mySocket: function() {},

  render: function() {
    return (
      <div className="loading-bro">
        <h1>отправка</h1>
        <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
          <circle id="loading-inner" cx="75" cy="75" r="60" />
        </svg>
      </div>
    );
  }
});
const root = document.getElementById("root");
const root_2 = document.getElementById("root_2");
ReactDOM.render(<Block />, root);
ReactDOM.render(<Block_2 />, root_2);
//ReactDOM.render(<Block_3 />, root);
