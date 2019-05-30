import React, { Component } from "react";
import "./css/ImageSlide.default.css";
export default class ImgSlide extends Component {
  state = {
    fadeTransitionStage: 0,
    focused: true,
    intervals: [],
    current: 0,
    currentBackground: 0,
    style: { opacity: 1.0 }
  };
  componentWillMount = () => {
    if (this.props.effects && this.props.effects.fadeOnLoad) {
      this.setState({ style: { opacity: 0.1 } });
    }
    window.onfocus = () => this.setState({ focused: true });
    window.onblur = () => this.setState({ focused: false });
  };
  render() {
    const { images, alts } = this.props;
    const { current, currentBackground } = this.state;
    let { style } = this.state;
    let image;
    let alt;
    if (typeof images === "string") {
      image = images;
    } else {
      image = images[current];
      const imageBackground =
        images[currentBackground ? currentBackground : current];
      style = {
        objectFit: "contain",
        backgroundImage: `url(${imageBackground})`,
        textAlign: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        ...style
      };
    }
    if (alts.constructor.name !== "Array") {
      alt = alts;
    } else {
      alt = alts[current];
    }
    return (
      <div className="image-slide-container" style={style}>
        <img
          id={alt}
          src={image}
          alt={alt}
          className="image-slide"
          style={{...style,...this.props.imageStyle}}
        />
      </div>
    );
  }
  componentDidMount = () => {
    imageFadeOnLoad.bind(this)();
    startChangeImageLoop.bind(this)();
  };
  componentWillUnmount() {
    clearAllIntervals.bind(this)();
  }
}
function imageFadeOnLoad() {
  if (
    this.props.effects &&
    this.props.effects.fadeOnLoad &&
    !this.state.fadedOnLoad
  ) {
    const fadeOnLoad = setInterval(() => {
      if (this.state.focused) {
        trackInterval.bind(this)("fadeOnLoad", fadeOnLoad);
        let opacity = this.state.style.opacity;
        if (opacity > 1) {
          this.setState({
            fadedOnLoad: true,
            intervals: clearIntervalNamed.bind(this)("fadeOnLoad")
          });
        } else {
          this.setState({
            style: { opacity: opacity + 0.1 }
          });
        }
      }
    }, this.props.effects.fadeOnLoad);
  }
}
function imageFadeTransition(state = {}) {
  if (!intervalIsTracked.bind(this)("fadeTransition")) {
    const fadeTransition = setInterval(() => {
      if (!intervalIsTracked.bind(this)("fadeTransition")) {
        trackInterval.bind(this)("fadeTransition", fadeTransition);
      }
      switch (this.state.fadeTransitionStage) {
        case 0:
          imageFadeOut.bind(this)({ fadeTransitionStage: 1 });
          break;
        case 1:
          changeForegroundImage.bind(this)({ fadeTransitionStage: 2 });
          break;
        case 2:
          imageFadeIn.bind(this)({ fadeTransitionStage: 3 });
          break;
        case 3:
          changeBackgroundImage.bind(this)({ fadeTransitionStage: 4 });
          break;
        default:
          break;
      }
      if (this.state.fadeTransitionStage === 4) {
        this.setState({
          ...state,
          intervals: clearIntervalNamed.bind(this)("fadeTransition"),
          fadeTransitionStage: 0
        });
      }
    }, this.props.effects.fadeTransition);
  }
}
function startChangeImageLoop() {
  if (
    this.props.images &&
    this.props.images.length > 1 &&
    this.props.refresh &&
    !intervalIsTracked.bind(this)("changeImage")
  ) {
    const changeImage = setInterval(() => {
      if (!intervalIsTracked.bind(this)("changeImage")) {
        trackInterval.bind(this)("changeImage", changeImage);
      }
      if (this.state.focused) {
        if (!this.props.effects || !this.props.effects.fadeTransition) {
          changeForegroundImage.bind(this)();
        } else {
          imageFadeTransition.bind(this)();
        }
      }
    }, this.props.refresh);
  }
}
function changeForegroundImage(state = {}) {
  const { current } = this.state;
  const reset = this.props.images.length - 1;
  let opacity = this.state.style.opacity;
  if (current < reset) {
    this.setState({
      ...state,
      current: 1 + current,
      opacity
    });
  } else {
    this.setState({
      ...state,
      current: 0,
      opacity
    });
  }
}
function changeBackgroundImage(state = {}) {
  const { currentBackground } = this.state;
  const reset = this.props.images.length - 1;
  let opacity = this.state.style.opacity;
  if (currentBackground < reset) {
    this.setState({
      ...state,
      currentBackground: 1 + currentBackground,
      opacity
    });
  } else {
    this.setState({
      ...state,
      currentBackground: 0,
      opacity
    });
  }
}
function imageFadeOut(state = {}) {
  let opacity = this.state.style.opacity;
  if (this.state.focused) {
    if (opacity < 0.3) {
      this.setState({
        ...state
      });
    } else {
      this.setState({
        style: { opacity: opacity - 0.01 }
      });
    }
  }
}
function imageFadeIn(state = {}) {
  let opacity = this.state.style.opacity;
  if (this.state.focused) {
    if (opacity > 1) {
      this.setState({
        ...state
      });
    } else {
      this.setState({
        style: { opacity: opacity + 0.01 }
      });
    }
  }
}
function clearAllIntervals() {
  this.state.intervals.forEach(
    interval => !interval.cleared && clearInterval(interval.id)
  );
  this.setState({ intervals: [] });
}
function clearIntervalNamed(name) {
  for (let interval of this.state.intervals) {
    if (interval.name === name) {
      clearInterval(interval.id);
      interval.cleared = true;
      break;
    }
  }
  return this.state.intervals.filter(interval => !interval.cleared);
}
function trackInterval(name, id) {
  this.setState({
    intervals: this.state.intervals.concat({
      name,
      id,
      cleared: false
    })
  });
}
function intervalIsTracked(name) {
  let isTracked = false;
  this.state.intervals.forEach(interval => {
    if (interval.name === name) isTracked = true;
  });
  return isTracked;
}
