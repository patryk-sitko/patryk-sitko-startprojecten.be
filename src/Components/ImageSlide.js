import React, { Component } from "react";
import "./css/ImageSlide.default.css";
export default class ImgSlide extends Component {
  state = {
    intervals: [],
    current: 0,
    currentBackground: 0,
    style: { opacity: 1.0 }
  };
  componentWillMount = () => {
    if (this.props.effects && this.props.effects.fadeOnLoad) {
      this.setState({ style: { opacity: 0.1 } });
    }
  };
  render() {
    const { images, alts } = this.props;
    const { current, currentBackground } = this.state;
    let { style } = this.state;
    let image;
    let alt;
    if (images.constructor.name !== "Array") {
      image = images;
    } else {
      image = images[current];
      const imageBackground =
        images[currentBackground ? currentBackground : current];
      style = {
        objectFit: "contain",
        backgroundImage: `url(${imageBackground})`,
        textAlign: "center",
        ...style
      };
    }
    if (alts.constructor.name !== "Array") {
      alt = alts;
    } else {
      alt = alts[current];
    }
    style = {
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      ...style
    };
    return (
      <div className="image-slide-container" style={style}>
        <img
          id={alt}
          src={image}
          alt={alt}
          className="image-slide"
          style={style}
        />
      </div>
    );
  }
  componentDidMount() {
    if (
      this.props.effects &&
      this.props.effects.fadeOnLoad &&
      !this.state.fadedOnLoad
    ) {
      const fadeOnLoad = setInterval(() => {
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
      }, this.props.effects.fadeOnLoad);
    }
    if (this.props.images && this.props.images.length > 1) {
      const changeImage = setInterval(() => {
        trackInterval.bind(this)("changeImage", changeImage);
        const { current, currentBackground } = this.state;
        const reset = this.props.images.length - 1;
        if (!this.props.effects || !this.props.effects.fadeTransision) {
          if (current < reset) {
            this.setState({ current: 1 + current });
          } else {
            this.setState({ current: 0 });
          }
        } else {
          const fadeOut = setInterval(() => {
            trackInterval.bind(this)("fadeOut", fadeOut);
            let opacity = this.state.style.opacity;
            if (opacity <= 0.4) {
              if (current < reset) {
                this.setState({
                  current: 1 + current,
                  opacity,
                  intervals: clearIntervalNamed.bind(this)("fadeOut")
                });
              } else {
                this.setState({
                  current: 0,
                  opacity,
                  intervals: clearIntervalNamed.bind(this)("fadeOut")
                });
              }
              const fadeIn = setInterval(() => {
                trackInterval.bind(this)("fadeIn", fadeIn);
                let opacity = this.state.style.opacity;
                if (opacity >= 1) {
                  if (current < reset) {
                    this.setState({
                      currentBackground: 1 + currentBackground,
                      opacity,
                      intervals: clearIntervalNamed.bind(this)("fadeIn")
                    });
                  } else {
                    this.setState({
                      currentBackground: 0,
                      opacity,
                      intervals: clearIntervalNamed.bind(this)("fadeIn")
                    });
                  }
                } else {
                  this.setState({
                    style: { opacity: opacity + 0.01 }
                  });
                }
              }, this.props.effects.fadeTransision);
            } else {
              this.setState({
                style: { opacity: opacity - 0.01 }
              });
            }
          }, this.props.effects.fadeTransision);
        }
      }, this.props.refresh);
    }
  }
  componentWillUnmount() {
    if (this.props.images && this.props.images.length > 1) {
      this.state.intervals.forEach(
        interval => !interval.cleared && clearInterval(interval.id)
      );
      this.setState({ intervals: [] });
    }
  }
}
function clearIntervalNamed(intervalName) {
  return this.state.intervals.map(interval => {
    if (interval.name === intervalName) {
      clearInterval(interval.id);
      interval.cleared = true;
    }
    return interval;
  });
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
