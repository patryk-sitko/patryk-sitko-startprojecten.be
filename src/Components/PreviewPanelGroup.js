import React from "react";
import "./css/PreviewPanelGroup.default.css";

export default function PreviewPanelGroup(props) {
  const { children } = props;
  return <div className="preview-panel-group">{children}</div>;
}
