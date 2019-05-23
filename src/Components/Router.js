import React from "react";
import TextPanel from "./TextPanel";
import Home from "./routes/Home";
import Projecten from "./routes/Projecten";
import MissieEnVisie from "./routes/MissieEnVisie";
import OnsVerhaal from "./routes/OnsVerhaal";

export default function Router({ currentLocation }) {
  console.log(currentLocation);
  switch (currentLocation) {
    default:
      return (
        <TextPanel
          title={
            <span>
              "404"
              <br />
            </span>
          }
          content="Pagina niet gevonden."
        />
      );
    case "":
    case "/":
    case "/Home":
    case "Home":
      return <Home />;
    case "/Projecten":
    case "Projecten":
      return <Projecten />;
    case "/Missie-&-Visie":
    case "Missie-&-Visie":
      return <MissieEnVisie />;
    case "/Ons-verhaal":
    case "Ons-verhaal":
      return <OnsVerhaal />;
  }
}
