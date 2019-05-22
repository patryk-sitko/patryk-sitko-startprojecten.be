import React, { Component } from "react";
import Menu from "./Components/Menu";
import ImageSlide from "./Components/ImageSlide";
import slide from "./slideBanner";
import Pages from "./Pages";
import "./App.css";

export default class App extends Component {
  componentWillMount() {
    this.setState({ currentLocation: window.location.pathname });
  }
  render() {
    return (
      <div>
        <ImageSlide images={slide.images} alts={slide.alts} refresh={5000} />
        <Menu
          logo="STARTPROjecten"
          buttons={{
            left: ["Home"],
            right: ["Contact", "Ons verhaal", "Missie & Visie", "Projecten"]
          }}
          currentLocation={this.state.currentLocation}
        />
        <Pages currentLocation={this.state.currentLocation} />
      </div>
    );
  }
  componentDidMount() {
    const interval = setInterval(() => {
      const currentLocation = window.history.state
        ? window.history.state.id
        : window.location.pathname;
      this.setState({ currentLocation });
    }, 100);
    this.setState({ interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
}
