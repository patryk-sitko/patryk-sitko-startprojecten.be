import React, { Component } from "react";
import "./css/ImageSlide.default.css";
export default class ImgSlide extends Component {
  state = {
    current: 0
  };
  render() {
    const { images, alts } = this.props;
    const { current } = this.state;
    const image = images[current];
    const alt = alts[current];
    return (
      <div className="image-slide-container">
        <img id={alt} src={image} alt={alt} className="image-slide" />
      </div>
    );
  }
  componentDidMount() {
    const interval = setInterval(() => {
      const { current } = this.state;
      const reset = this.props.images.length - 1;
      if (current < reset) {
        this.setState({ current: 1 + current });
      } else {
        this.setState({ current: 0 });
      }
    }, this.props.refresh);
    this.setState({ interval });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
}
