import React, { Component } from "react";
import Header from "./Header";
import { Route } from "react-router-dom";
import Home from "./Home";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      doctors: []
		};
		
		this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    const api_key = "32693030a396d661b1acb7b1699c8760";
    const url =
      "https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=pediatrician&location=25.761681%2C%20-80.191788%2C100&user_location=25.761681%2C%20-80.191788&skip=0&limit=100&user_key=" +
      api_key;
		
		let data = await axios.get(url).catch(err => console.log(err));
		console.log(data);
		this.setState({
			doctors: data.data.data
		})
  }

  render() {
    return (
      <div>
        <Header />
				<Route exact path="/" render={(props) => <Home {...props} fetchData={this.fetchData}/>} />
        {/* <Route path="/about" component={About} />
		<Route path="/contact" component={Contact} />
		<Footer /> */}
      </div>
    );
  }
}
