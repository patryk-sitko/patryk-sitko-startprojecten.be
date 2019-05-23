import React, { Component } from "react";
import TextPanel from "./TextPanel";
import TextPanelGroup from "./TextPanelGroup";
import ImageSlide from "./ImageSlide";
import "./css/PreviewPanel.default.css";

export default class PreviewPanel extends Component {
  render() {
    const {
      title,
      content,
      images,
      alts,
      refresh,
      button,
      buttonGo
    } = this.props;
    return (
      <div className="preview-panel">
        <TextPanelGroup title={title}>
          <ImageSlide images={images} alts={alts} refresh={refresh} />
          <TextPanel title="" content={content} />
          <Button button={button} go={buttonGo} />
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
    const { button, go } = this.props;
    const isString = typeof button === "string";
    if (isString) {
      return <button onClick={()=>{
        if(go){
                window.history.replaceState({ id:button }, button, `/${button}`);
                }
            }
                }>
                {button}
                </button>;
    } else {
      const { clickCount } = this.state;
      const state = clickCount % 2 === 0 ? 0 : 1;
      return (
        <button
          onClick={() => {
            this.setState({ clickCount: 1 + clickCount });
        if(go){
                window.history.replaceState({ id:button }, button, `/${button}`);
                }
          }
          }>
          {button[state]}
        </button>
      );
    }
  }
}
