import React, { Component } from "react";
import Search from "./Search";
import HomeContent from "./HomeContent";

export default class Home extends Component {
  render() {
    if (this.props.doctors.length > 0) {
      return <DoctorList />;
    } else {
      return (
        <section className="hero">
          <HomeContent />
          <Search fetchData={this.props.fetchData} />
        </section>
      );
    }
  }
}
