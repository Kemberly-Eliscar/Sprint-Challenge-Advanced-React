import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./Components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);


  state = {
    data: [],
    dataText: ''
  }

  componentDidMount() {
    fetch('https://googletrends.github.io/data/')
      .then(res => res.json())
      .then(res => this.setState({data: res.message }));


  handleChange = event => {
    this.setState({
      dataText: event.target.value
    });
  };

  fetchData = e => {
  fetch('https://googletrends.github.io/data/')
      .then(res => res.json())
      .then(res => this.setState({data: res.message }))
      .catch(err => console.log('noo'));
}

  render() {
  return (
    <div className="App">
      <h1>Hello Data</h1>
      <input 
      type="text" 
      value={this.state.dataText}
      onChange={this.handleChange}
      />

      <button onClick={this.fetchData}>Fetch Data</button>
      <div className='data'>
      {this.state.data.map(data => (
        <img width='200' src={data} key={data} alt={data} />
      ))}
      </div>
    </div>
  );
}
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

// .then(res => res.json())
//       .then(dogs => this.setState({ doggos: dogs.message}))
//       .catch(err => console.log('nooo'));
//   
