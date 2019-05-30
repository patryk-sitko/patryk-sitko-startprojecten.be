import React, { Component } from "react";
import Menu from "./Components/Menu";
import ImageSlide from "./Components/ImageSlide";
import slide from "./slideBanner";
import Router from "./Components/Router";
import "./App.css";

export default class App extends Component {
  state = {
    currentLocation: window.location.pathname,
    app: { changeStyle: 0 }
  };
  render() {
    const style =
      this.state.app.changeStyle > 0 &&
      document.body.clientWidth > 1030 &&
      this.state.currentLocation.includes("Projecten")
        ? { float: "right", width: "60%" }
        : { float: "inherit", width: "100%" };
    return (
      <div
        id="app"
        // @ts-ignore
        style={style}
      >
        <ImageSlide
          images={slide.images}
          alts={slide.alts}
          refresh={5000}
          effects={{ fadeOnLoad: 50, fadeTransition: 10 }}
        />
        <Menu
          buttons={{
            left: ["Home"],
            right: ["Contact", "Ons verhaal", "Missie & Visie", "Projecten"]
          }}
          currentLocation={this.state.currentLocation}
          style={style}
        />
        {Router.bind(this)()}
      </div>
    );
  }
  componentDidMount = () => {
    const interval = setInterval(() => {
      const currentLocation = window.history.state
        ? window.history.state.id
        : window.location.pathname;
      this.setState({ currentLocation });
    }, 100);
    this.setState({ interval });
  };
  componentDidUpdate() {
    if (
      !this.state.currentLocation.includes("Projecten") &&
      this.state.app.changeStyle > 0
    ) {
      this.setState({ app: { changeStyle: 0 } });
    }
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
}
