import React from "react";
import TextPanelGroup from "../TextPanelGroup";
import ImageSlide from "../ImageSlide";
import TextPanel from "../TextPanel";
import { images, alts } from "../../images/slides/home";

export default function Home() {
  return (
    <div id="Home">
      <TextPanel
        title="STARTPROjecten: "
        content="een initiatief om projecten op te starten die ondersteuning bieden aan Brusselse jongeren, vroegtijdige schoolverlaters, langdurige werklozen, NEET jongeren 
  en werkzoekenden uit kansengroepen."
      />
      <TextPanelGroup title="Inhoudelijke en zakelijke coördinatie van STARTPROjecten:">
        <div id="left">
          <ImageSlide
            images={images.mozaiek}
            alts={alts.mozaiek}
            refresh={3000}
            effects={{ fadeOnLoad: 25 }}
          />
        </div>
        <div id="right">
          <TextPanel
            title="STARTPROjecten "
            content="neemt de coördinatie op zich van de acties op het vlak van informatica met INTEC BRUSSEL vzw en op het vlak van begeleiding van Brusselse jongeren, vroegtijdige schoolverlaters en werkzoekenden uit kansengroepen met de vzw InBrussel."
          />
          <TextPanel
            title="STARTPROjecten "
            content="verzekert de integratie en afstemming van de verschillende werkvormen (opleiding, sociale tewerkstelling, individuele trajectbegeleiding, groepsoriëntatie van jongeren naar stage en werk) binnen de verschillende deelwerkingen."
          />
          <TextPanel
            title="STARTPROjecten "
            content="werkt samen met onderwijs-, opleidings- en tewerkstellingspartners."
          />
          <TextPanel
            title="STARTPROjecten "
            content=" werkt samen met andere initiatiefnemers in de sociale economie, en meer bepaald in de sectoren zorg, informatica, voeding/horeca, verkoop, bouw, vervoer en logistiek door middel van participatie in het opstellen van opleidingsplannen en competentieprofielen."
          />
        </div>
      </TextPanelGroup>
    </div>
  );
}
