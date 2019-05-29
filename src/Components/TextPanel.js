import React from "react";
import "./css/TextPanel.default.css";

export default function TextPanel(props) {
  const { title, content } = props;
  return (
    <div className="text-container" key={title + content}>
      <p>
        {title ? <b>{title}</b> : ""}
        {content}
      </p>
    </div>
  );
}
