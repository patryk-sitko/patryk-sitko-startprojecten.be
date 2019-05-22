import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./css/Menu.default.css";

export default class Menu extends Component {
  state = { anchorTop: false };
  render() {
    const { anchorTop } = this.state;
    return (
      <div id="menu-bar" className={"menu"}>
        <MenuDesktop
          buttons={this.props.buttons}
          currentLocation={this.props.currentLocation}
        />
        <div id="menu-bar-top" hidden={!anchorTop} className="menu anchor-top">
          <MenuDesktop
            buttons={this.props.buttons}
            currentLocation={this.props.currentLocation}
          />
        </div>
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", event => {
      const { anchorTop } = this.state;
      // @ts-ignore
      const menubar = ReactDOM.findDOMNode(this).getBoundingClientRect();
      if (menubar.y < 0 && !anchorTop) {
        this.setState({ anchorTop: true });
      } else if (menubar.y > 0 && anchorTop) {
        this.setState({ anchorTop: false });
      }
    });
  }
}

// works until 542 width
function MenuDesktop(props) {
  return (
    Object.entries(props.buttons)
      .map(([side, buttons]) => {
        return buttons.map(name => {
          const id = name.split(" ").join("-");
          const isCurrentButton = props.currentLocation.includes(id);
          const className = isCurrentButton ? "current-button" : "";
          return (
            <button
              // @ts-ignore
              style={{ float: side }}
              className={className}
              disabled={isCurrentButton}
              key={id}
              id={id}
              onClick={() => {
                window.history.replaceState({ id }, name, `/${id}`);
              }}
            >
              {name}
            </button>
          );
        });
      })
      // @ts-ignore
      .flat()
  );
}
