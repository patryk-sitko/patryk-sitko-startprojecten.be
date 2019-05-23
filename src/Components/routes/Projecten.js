import React from "react";
import TextPanel from "../TextPanel";
import PreviewPanel from "../PreviewPanel";
import PreviewPanelGroup from "../PreviewPanelGroup";
import scholen1 from "../../images/scholen1.jpg";
import werkervaring1 from "../../images/werkervaring1.jpg";
import schoolverlaters1 from "../../images/schoolverlaters1.jpg";
import mozaiek from "../../images/mozaiek.jpg";
import robot1 from "../../images/robot1.jpg";
import borderimage from "../../images/borderimage.jpg";

export default function Projecten() {
  return (
    <div id="Projecten">
      <TextPanel
        title="STARTPROjecten: "
        content="richt zich op 5 aandachtsgebieden. De projecten zullen steeds aansluiten bij 1 of meerdere aandachtsgebieden."
      />
      <PreviewPanelGroup>
        <PreviewPanel
          images={[scholen1]}
          alts={["scholen1"]}
          refresh={30000}
          title="Onderhouden van netwerken en IT infrastructuur van scholen"
          content="Ondersteuning aanbieden aan scholen om hun IT infrastructuur te onderhouden en uit te breiden (computers, laptops, media-apparatuur), netwerken te onderhouden en een helpdesk voor leerkrachten en personeel uit te bouwen."
          button={["Lees Meer", "Lees Minder"]}
        />
        <PreviewPanel
          images={[werkervaring1]}
          alts={["werkervaring1"]}
          refresh={30000}
          title="Mogelijkheden stage & werk in werkervaringsprojecten, deeleconomie en sociale economie in Brussel"
          content="Aan schoolverlaters en jongeren een overzicht en inkijk geven in de mogelijkheden om stage en/of werk te vinden in de verschillende Brusselse (sociaal) economie-projecten."
          button={["Lees Meer", "Lees Minder"]}
        />
        <PreviewPanel
          images={[schoolverlaters1]}
          alts={["schoolverlaters1"]}
          refresh={30000}
          title="Acties opzetten om schoolverlaters te ondersteunen"
          content="De school achter de rug maar geen stage of werk? Wij wensen stappen te zetten naar een netwerk van mogelijkheden voor Brusselse schoolverlaters."
          button={["Lees Meer", "Lees Minder"]}
        />
        <PreviewPanel
          images={[borderimage]}
          alts={["borderimage"]}
          refresh={30000}
          title="Onderzoek verrichten naar een mogelijke samenwerking met Brusselse actoren"
          content="
  Om uitval van jongeren, die stappen zetten naar de middenjury, te voorkomen en de werking te versterken van de organisaties die Brusselse jongeren begeleiden naar de examencommissie (middenjury)."
          button={["Lees Meer", "Lees Minder"]}
        />
        <PreviewPanel
          images={[robot1]}
          alts={["robot1"]}
          refresh={30000}
          title="Opstarten van een Fablab - The IT Garage"
          content="De activiteitsdomeinen van de IT Garage zijn: 3D printing, Robotprogrammatie en Virtual Reality."
          button={["Lees Meer", "Lees Minder"]}
          buttonShow={<div />}
        />
        <PreviewPanel
          images={[
            mozaiek,
            scholen1,
            mozaiek,
            werkervaring1,
            mozaiek,
            schoolverlaters1,
            mozaiek,
            borderimage,
            mozaiek,
            robot1
          ]}
          alts={[
            "mozaiek",
            "scholen1",
            "mozaiek",
            "werkervaring1",
            "mozaiek",
            "schoolverlaters1",
            "mozaiek",
            "borderimage",
            "mozaiek",
            "robot1"
          ]}
          refresh={3000}
          title="Samenwerken? Waarom niet!"
          content="Wenst u een samenwerking met STARTPROjecten? 
  Neem contact met ons op."
          button={"Contact"}
          buttonGo={"Contact"}
        />
      </PreviewPanelGroup>
    </div>
  );
}
