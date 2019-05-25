import React, { Component } from "react";
import TextPanel from "./TextPanel";
import TextPanelGroup from "./TextPanelGroup";
import ImageSlide from "./ImageSlide";
import "./css/PreviewPanel.default.css";

export default class PreviewPanel extends Component {
  state = {
    showMore: false
  };
  render() {
    const {
      title,
      content,
      images,
      alts,
      refresh,
      button,
      buttonGo,
      buttonShow
    } = this.props;
    const { showMore } = this.state;
    const test = showMore ? buttonShow : "";
    // console.log(12345, test);
    return (
      <div className="preview-panel">
        <TextPanelGroup title={title}>
          <ImageSlide images={images} alts={alts} refresh={refresh} />
          <TextPanel title="" content={content} />
          <TextPanel title="" content={test} />
          <Button
            button={button}
            go={buttonGo}
            show={function(showMore) {
              console.log(showMore);
              this.setState({ showMore });
            }.bind(this)}
          />
        </TextPanelGroup>
      </div>
    );
  }
}

class Button extends Component {
  state = {
    clickCount: 0
  };
  render() {
    const { button, go, show } = this.props;
    const isString = typeof button === "string";
    const { clickCount } = this.state;
    const state = clickCount % 2 === 0 ? 0 : 1;
    return (
      <button
        onClick={() => {
          this.setState({ clickCount: 1 + clickCount });
          if (go) {
            window.history.replaceState({ id: button }, button, `/${button}`);
          } else {
            show(clickCount % 2 === 0);
          }
        }}
      >
        {isString ? button : button[state]}
      </button>
    );
  }
}
