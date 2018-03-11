
var Block = React.createClass({
    getInitialState: function() {
        var socket = io('http://localhost:3000');
        socket.on('news', function (data) {
          console.log(data);
          socket.emit('my other event', { my: 'data' });
        });
      return { checked: true };
    },
    axios: function(url) {
      
    },
    test: function(a) {
      console.log("test");
    },
    list: {
      status: "",
      timerId: "",
      load: false,
      twitt: []
    },
    render: function() {
      if (!Array.isArray(this.list.twitt)) {
        this.list.twitt = [];
      }
      return (
        <section className="list-wrap">
          <label forName="search-text">Search the list</label>
          <input
            onChange={this.test}
            typeName="text"
            idName="search-text"
            placeholder="search"
            className="search-box"
          />
          <span className="list-count" />
          <ul idName="list">
            {this.list.twitt.map(function(el) {
              return (
                <li className="in" key={el.id}>
                  {el.text}
                </li>
              );
            })}
            <span>{this.list.status}</span>
          </ul>
        </section>
      );
    }
  });
  const plece = document.getElementById("root");
  ReactDOM.render(<Block />, plece);