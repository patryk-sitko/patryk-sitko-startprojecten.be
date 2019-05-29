import React, { Component } from "react";
import "./css/ImageSlide.default.css";
export default class ImgSlide extends Component {
  state = {
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
    if(images.constructor.name !== 'Array'){
image = images;
    }else {image = images[current];}
    if(alts.constructor.name !== 'Array'){
alt = alts;
    }else {alt = alts[current];}
    if (images.length > 1) {
      const imageBackground =
        images[currentBackground ? currentBackground : current];
      style = {
        backgroundImage: `url(${imageBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        textAlign: "center",
        ...style
      };
    }
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
      const interval_fadeOnLoad = setInterval(() => {
        let opacity = this.state.style.opacity;
        if (opacity > 1) {
          this.setState({ fadedOnLoad: true });
          clearInterval(interval_fadeOnLoad);
        } else {
          this.setState({
            style: { opacity: opacity + 0.1 }
          });
        }
      }, this.props.effects.fadeOnLoad);
    }
    if (this.props.images && this.props.images.length > 1) {
      const interval_changeImage = setInterval(() => {
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
            let opacity = this.state.style.opacity;
            if (opacity <= 0.4) {
              if (current < reset) {
                this.setState({ current: 1 + current, opacity });
              } else {
                this.setState({ current: 0, opacity });
              }
              clearInterval(fadeOut);
              const fadeIn = setInterval(() => {
                let opacity = this.state.style.opacity;
                if (opacity >= 1) {
                  if (current < reset) {
                    this.setState({
                      currentBackground: 1 + currentBackground,
                      opacity
                    });
                  } else {
                    this.setState({ currentBackground: 0, opacity });
                  }
                  this.setState({ currentBackground: 1 + current });
                  clearInterval(fadeIn);
                } else {
                  this.setState({
                    style: { opacity: opacity + 0.1 }
                  });
                }
              }, this.props.effects.fadeTransision);
            } else {
              this.setState({
                style: { opacity: opacity - 0.1 }
              });
            }
          }, this.props.effects.fadeTransision);
        }
      }, this.props.refresh);
      this.setState({ interval_changeImage });
    }
  }
  componentWillUnmount() {
    if (this.props.images&&this.props.images.length > 1) {
      clearInterval(this.state.interval_changeImage);
    }
  }
}
