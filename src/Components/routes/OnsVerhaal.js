import React from "react";
import TextPanel from "../TextPanel";
import TextPanelGroup from "../TextPanelGroup";
import ImageSlide from "../ImageSlide";
import sterretjes from "../../images/sterretjes.jpg";
import borderimage from "../../images/borderimage.jpg";

export default function OnsVerhaal() {
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
          <ImageSlide
            images={[borderimage]}
            alts={["borderimage"]}
            refresh={3000}
          />
        </div>
      </TextPanelGroup>
    </div>
  );
}
