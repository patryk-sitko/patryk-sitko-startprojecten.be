import React from "react";
import "./css/TextPanelGroup.default.css";

export default function TextPanelGroup(props) {
  const { title, children } = props;
  return (
    <div className="text-panel-group">
      <h1
        style={title === "" ? { borderBottom: "none", paddingBottom: 0 } : {}}
      >
        {title}
      </h1>
      {children}
    </div>
  );
}
