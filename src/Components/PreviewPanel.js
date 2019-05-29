import React, { Component } from "react";
import TextPanel from "./TextPanel";
import TextPanelGroup from "./TextPanelGroup";
import ImageSlide from "./ImageSlide";
import "./css/PreviewPanel.default.css";

export default class PreviewPanel extends Component {
  state = {
    showMore: false,
    showingMore: false,
    buttons: {}
  };
  componentWillMount() {
    mountEventListener.bind(this)();
    const { button } = this.props;
    if (!this.state.buttons[button.toString()]) {
      this.setState({ buttons: { [button.toString()]: { clickCount: 0 } } });
    }
  }
  render() {
    if (this.state.width <= 1030) {
      return PreviewPanelMobile.bind(this)();
    } else {
      return PreviewPanelDesktop.bind(this)();
    }
  }
  componentDidUpdate() {
    const {
      state: {
        app: { changeStyle }
      },
      setState
    } = this.props;
    const { showMore, showingMore } = this.state;
    if (showMore && setState && !showingMore) {
      this.setState({ showingMore: true });
      setState({
        app: {
          changeStyle: 1 + changeStyle
        }
      });
    } else if (!showMore && showingMore) {
      this.setState({ showingMore: false });
      setState({
        app: {
          changeStyle: changeStyle - 1
        }
      });
    }
  }
}

function mountEventListener() {
  window.addEventListener(
    "resize",
    function() {
      this.setState({
        width: document.body.clientWidth
      });
    }.bind(this)
  );
  this.setState({
    width: document.body.clientWidth
  });
}

function PreviewPanelMobile() {
  const {
    title,
    content,
    images,
    alts,
    refresh,
    button,
    buttonGo,
    buttonShow,
    effects
  } = this.props;
  const { showMore } = this.state;
  const extraContent = showMore ? buttonShow : "";
  return (
    <div className="preview-panel" key={title}>
      <TextPanelGroup title={title}>
        <ImageSlide
          images={images}
          alts={alts}
          refresh={refresh}
          effects={effects}
        />
        <TextPanel title="" content={content} />
        {extraContent}
      </TextPanelGroup>
      {Button.bind(this)({
        button,
        go: buttonGo,
        show: function(showMore) {
          this.setState({ showMore });
        }.bind(this)
      })}
    </div>
  );
}

function PreviewPanelDesktop() {
  const {
    title,
    content,
    images,
    alts,
    refresh,
    button,
    buttonGo,
    buttonShow,
    effects
  } = this.props;
  const { showMore } = this.state;
  const extraContent = showMore ? buttonShow : "";
  const className = showMore ? "preview-panel anchor-left" : "preview-panel";
  const style = showMore ? { width: "40%" } : {};
  return (
    <div className={className} style={style}>
      {className.includes("anchor") ? <h1>{title}</h1> : ""}
      <div className="preview-panel-scroll">
        <TextPanelGroup title={!className.includes("anchor") ? title : ""}>
          <ImageSlide
            images={images}
            alts={alts}
            refresh={refresh}
            effects={effects}
          />
          <TextPanel title="" content={content} />
          {extraContent}
        </TextPanelGroup>
      </div>
      {/* {(changeStyle > 0 && !className.includes("anchor")) || */}
      {Button.bind(this)({
        button,
        go: buttonGo,
        show: function(showMore) {
          this.setState({ showMore });
        }.bind(this),
        style
      })}
    </div>
  );
}
function Button(props) {
  const { button, go, show, style = {} } = props;
  const isString = typeof button === "string";
  // console.log("current-button:", button, "buttons: ", this.state.buttons);
  const { clickCount } = this.state.buttons[button.toString()];
  const currentButton = isString
    ? button
    : button[clickCount % 2 === 0 ? 0 : 1];
  return (
    <button
      style={style}
      onClick={function() {
        this.setState({
          buttons: { [button.toString()]: { clickCount: 1 + clickCount } }
        });
        if (go) {
          window.history.replaceState({ id: button }, button, `/${button}`);
        } else {
          show(clickCount % 2 === 0);
        }
      }.bind(this)}
    >
      {currentButton}
    </button>
  );
}
