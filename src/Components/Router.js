import React from "react";
import TextPanel from "./TextPanel";
import Home from "./routes/Home";
import Projecten from "./routes/Projecten";
import MissieEnVisie from "./routes/MissieEnVisie";
import OnsVerhaal from "./routes/OnsVerhaal";

export default function Router() {
  // console.log(currentLocation);
  switch (this.state.currentLocation) {
    default:
      window.history.replaceState({ id: "Home" }, "Home", `/Home`);
    // eslint-disable-next-line
    case "/Home":
    case "Home":
      return <Home />;
    case "/Projecten":
    case "Projecten":
      return Projecten.bind(this)();
    case "/Missie-&-Visie":
    case "Missie-&-Visie":
      return <MissieEnVisie />;
    case "/Ons-verhaal":
    case "Ons-verhaal":
      return <OnsVerhaal />;
    case "/Contact":
    case "Contact":
      return (
        <TextPanel
          title={
            <span>
              Comming Soon...
              <br />
            </span>
          }
          content="Pagina onder Constructie"
        />
      );
  }
}
