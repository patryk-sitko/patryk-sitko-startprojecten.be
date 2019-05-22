import React from "react";
import TextPanel from "./Components/TextPanel";
import TextPanelGroup from "./Components/TextPanelGroup";
import ImageSlide from "./Components/ImageSlide";
import sterretjes from "./images/sterretjes.jpg";
import PreviewPanel from "./Components/PreviewPanel";
import slide from "./slideHome";
export default function Pages({ currentLocation }) {
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
    case "/":
    case "Home":
      return <Home />;
    case "Projecten":
      return <Projecten />;
    case "Missie-&-Visie":
      return <MissieEnVisie />;
    case "Ons-verhaal":
      return <OnsVerhaal />;
    case "/Test":
      return <Test />;
  }
}

function Home() {
  return (
    <div id="Home">
      <TextPanel
        title="STARTPROjecten: "
        content="een initiatief om projecten op te starten die ondersteuning bieden aan Brusselse jongeren, vroegtijdige schoolverlaters, langdurige werklozen, NEET jongeren 
en werkzoekenden uit kansengroepen."
      />
      <TextPanelGroup title="Inhoudelijke en zakelijke coördinatie van STARTPROjecten:">
        <div id="left">
          <ImageSlide images={slide.images} alts={slide.alts} refresh={3000} />
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
function Projecten() {
  return (
    <div id="Projecten">
      <TextPanel
        title="STARTPROjecten: "
        content="richt zich op 5 aandachtsgebieden. De projecten zullen steeds aansluiten bij 1 of meerdere aandachtsgebieden."
      />
    </div>
  );
}
function MissieEnVisie() {
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
function OnsVerhaal() {
  const sterren = (
    <span>
      <img src={sterretjes} alt="sterretjes" style={{ marginLeft: "43%" }} />
      <br />
    </span>
  );
  return (
    <div id="Ons-verhaal">
      <TextPanelGroup title="">
        <div id="left-reversed">
          <TextPanel
            title=""
            content={
              <span>
                De vzw <b>STARTPROjecten</b> is een initiatief van de vzw INTEC
                BRUSSEL en de vzw InBrussel om Brusselse jongeren, vroegtijdige
                schoolverlaters, langdurige werklozen, NEET jongeren en
                werkzoekenden uit kansengroepen via opleiding, begeleiding en
                tewerkstelling, sterker te maken om een volwaardige job op de
                reguliere arbeidsmarkt te vinden en zo hun sociaaleconomische
                positie in de samenleving te versterken.
              </span>
            }
          />
          <TextPanel
            title={sterren}
            content="Daarnaast wordt via een sociaal economieproject ondersteuning aangeboden aan scholen om hun IT infrastructuur te onderhouden en uit te breiden (computers, laptops, media-apparatuur), netwerken te onderhouden en een helpdesk voor leerkrachten en personeel uit te bouwen. "
          />
          <TextPanel
            title={sterren}
            content={
              <span>
                De vzw <b>STARTPROjecten</b> zal eveneens initiatieven nemen
                i.v.m. interactieve mogelijkheden voor scholen, door middel van
                workshops en ondersteuning op het gebied van
                <b style={{ color: "rgb(223, 145, 21)" }}>
                  3D printing, Virtual Reality en Robotprogrammatie
                </b>{" "}
                en dit door het oprichten van een IT garage waar scholen
                (studenten en leerkrachten) gratis kennis kunnen maken met deze
                nieuwe technologieën om deze vervolgens te introduceren in
                scholen.
                <br />
                <br />
                Het secundaire doel is het denkproces van jongeren te stimuleren
                om met deze nieuwe technologische ontwikkelingen en
                mogelijkheden, leren oplossingen te bedenken en uit te werken
                voor toekomstige problemen. Daarnaast zullen de
                opleidingsinitiatieven en begeleidingsinitiatieven van INTEC
                BRUSSEL en InBrussel naar werkzoekenden, jongeren, nieuwkomers
                en NEET jongeren ondersteunt worden in het up to date houden van
                hun IT infrastructuur voor het bereiken van hun doelstellingen.
              </span>
            }
          />
          <TextPanel
            title={sterren}
            content={
              <span>
                De vzw <b>STARTPROjecten</b> zal initiatieven nemen i.v.m. de
                begeleiding van schoolverlaters zonder diploma en hen omkadering
                en coaching aanbieden naar een kwalificerende opleiding, stage
                of werk.
              </span>
            }
          />
          <TextPanel
            title={sterren}
            content={
              <span>
                <b>STARTPROjecten</b> vzw zal eveneens initiatieven ontplooien
                gericht op de NEET jongeren in Brussel, om deze kennis te laten
                maken met alle werkervaringsprojecten in Brussel, ongeacht de
                sector.
                <b> STARTPROjecten</b> vzw zal met zijn deelwerkingen deze NEET
                jongeren door middel van individuele coaching klaarstomen om
                deel te nemen aan werkervaringsprojecten binnen hun
                interessegebied en sector.
              </span>
            }
          />
          <TextPanel
            title={sterren}
            content={
              <span>
                Tenslotte zal <b>STARTPROjecten</b> vzw wenst een samenwerking
                op te zetten met spelers in het Brussels Hoofdstedelijk Gewest
                die jongeren begeleiden naar de examencommissie (middenjury) om
                uitval van jongeren, tijdens dit traject, tegen te gaan.
              </span>
            }
          />
        </div>
        <div id="right-reversed">
          <ImageSlide images={slide.images} alts={slide.alts} refresh={3000} />
        </div>
      </TextPanelGroup>
    </div>
  );
}
function Test() {
  return (
    <PreviewPanel
      images={slide.images}
      alts={slide.alts}
      refresh={1000}
      title="test"
      content="test123i9876543"
    />
  );
}
