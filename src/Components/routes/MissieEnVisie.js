import React from "react";
import TextPanel from "../TextPanel";
import TextPanelGroup from "../TextPanelGroup";

export default function MissieEnVisie() {
  return (
    <div id="missie-en-visie">
      <TextPanelGroup title="MISSIE">
        <TextPanel
          title="STARTPROjecten "
          content="is een overkoepeling van organisaties die Brusselse jongeren, vroegtijdige schoolverlaters, langdurige werklozen, NEET jongeren 
en werkzoekenden uit kansengroepen, professionele ondersteuning, begeleiding en coaching aanbieden op het vlak van stappen naar stage en werk, 
en via informatica opleidingen, IT ondersteuning en het promoten van nieuwe technologieën een motor wil zijn voor deze doelgroepen m.b.t. ontwikkeling en tewerkstelling."
        />
      </TextPanelGroup>
      <TextPanelGroup title="VISIE">
        <TextPanel
          title="STARTPROjecten"
          content=" biedt kwaliteitsvolle ondersteuning, begeleiding en coaching van Brusselse werkzoekenden en schoolverlaters naar stage en werk, 
aansluitend bij de profilering en nood van het Brussels Hoofdstedelijk Gewest."
        />
        <TextPanel
          title="STARTPROjecten"
          content=" vormt de garantie tot volledige integratie van informatica in organisaties en scholen via ondersteuning van hun IT netwerken, IT materiaal, 
opleidingen, workshops en trainingen."
        />
        <TextPanel
          title="STARTPROjecten"
          content=", met zijn 20 jaar expertise van haar kaderpersoneel , is de eerste keus als partner en staat volledig ten dienste van het Brusselse werkveld ."
        />
        <TextPanel
          title="STARTPROjecten"
          content=" is een inclusieve organisatie waarmee Brusselse jongeren, vroegtijdige schoolverlaters, langdurige werklozen, NEET jongeren, 
werkzoekenden uit kansengroepen en partners zich identificeren. "
        />
      </TextPanelGroup>
      <TextPanelGroup title="WAARDEN">
        <TextPanel
          title="STARTPROjecten"
          content=" staat voor duurzaamheid in zijn werking en verdedigt de inclusiewaarden binnen een multiculturele samenleving."
        />
        <TextPanel
          title="STARTPROjecten"
          content=" staat voor het sterker maken van kansengroepen in hun deelname aan het sociaal leven en in hun stappen naar werk. Daarvoor verdedigen 
wij het recht op opleiding en het verwerven van kennis, vaardigheden en competenties die nodig zijn in de 21ste eeuw."
        />
      </TextPanelGroup>
      <TextPanelGroup title="STRATEGIE    |    Onze strategie voor de komende 3 jaar:">
        <TextPanel
          title=""
          content={
            <span>
              Om deze visie in de praktijk om te zetten, beschikt STARTPROjecten
              over een strategisch plan dat het mogelijk maakt doelstellingen en
              resultaatsindicatoren voor de drie komende jaren op te volgen.
              <br />
              <br />
              Ons strategisch plan bestaat uit 5 Strategische doelstelling
              verbonden met 5 Resultaatsgebieden:
            </span>
          }
        />
        <TextPanel
          title="Strategische doelstelling & Resultaatsgebied 1: "
          content="scholen ondersteunen in hun IT infrastructuur."
        />
        <TextPanel
          title="Strategische doelstelling & Resultaatsgebied 2: "
          content="de mogelijkheden om stage te lopen of te werken binnen de sociale economie, deeleconomie, werkervaringsprojecten 
    en invoegbedrijven in kaart brengen en stimuleren bij jongeren, schoolverlaters, kansengroepen en NEET jongeren."
        />
        <TextPanel
          title="Strategische doelstelling & Resultaatsgebied 3: "
          content="een efficiënt netwerk opzetten om schoolverlaters stage en werk aan te bieden."
        />
        <TextPanel
          title="Strategische doelstelling & Resultaatsgebied 4: "
          content="ondersteuning van Brusselse jongeren zonder diploma, die stappen zetten naar de examencommissie (middenjury)."
        />
        <TextPanel
          title="Strategische doelstelling & Resultaatsgebied 5: "
          content={
            <span>
              het oprichten van een FabLab met accent op 3D printing,{" "}
              <b style={{ color: "rgb(223, 145, 21)" }}>
                Virtual Reality en Robotprogrammatie
              </b>{" "}
              en dit openstellen voor scholen, jongeren, schoolverlaters,
              kansengroepen en NEET jongeren.
            </span>
          }
        />
      </TextPanelGroup>
    </div>
  );
}
