import React, { Component } from "react";
import TextPanel from "./TextPanel";
import TextPanelGroup from "./TextPanelGroup";
import ImageSlide from "./ImageSlide";
import "./css/PreviewPanel.default.css";

export default class PreviewPanel extends Component {
  render() {
    const { title, content, images, alts, refresh } = this.props;
    return (
      <div className="preview-panel">
        <TextPanelGroup title={title}>
          <TextPanel title="" content={content} />
          <ImageSlide images={images} alts={alts} refresh={refresh} />
        </TextPanelGroup>
      </div>
    );
  }
}
