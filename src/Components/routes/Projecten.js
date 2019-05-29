import React from "react";
import TextPanel from "../TextPanel";
import TextPanelGroup from "../TextPanelGroup";
import PreviewPanel from "../PreviewPanel";
import PreviewPanelGroup from "../PreviewPanelGroup";
import slide, { images, alts } from "../../images/slides/projecten";

export default function Projecten() {
  console.log(images)
  return (
    <div id="Projecten">
      <TextPanel
        title="STARTPROjecten: "
        content="richt zich op 5 aandachtsgebieden. De projecten zullen steeds aansluiten bij 1 of meerdere aandachtsgebieden."
      />
      <PreviewPanelGroup>
        <div id="col-left">
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={images.scholen1}
            alts={alts.scholen1}
            effects={{ fadeOnLoad: 60 }}
            title="Onderhouden van netwerken en IT infrastructuur van scholen"
            content="Ondersteuning aanbieden aan scholen om hun IT infrastructuur te onderhouden en uit te breiden (computers, laptops, media-apparatuur), netwerken te onderhouden en een helpdesk voor leerkrachten en personeel uit te bouwen."
            button={["Lees Meer", "Lees Minder"]}
            buttonShow={[
              <TextPanel
                key="1"
                title="STARTPROjecten:"
                content=" Diensten aan scholen aanbieden om hun IT infrastrucuur te onderhouden"
              />,
              <TextPanelGroup key="2" title="#Resultaatsgebonden doelen">
                <TextPanel
                  title="⚫"
                  content="Onderzoeken en uitwerken hoe via een werkervaringsproject binnen de sociale economie meer scholen kunnen ondersteunt worden in het beheren en onderhouden van hun informaticapark, netwerken en servers."
                />
                <TextPanel
                  title="⚫"
                  content="Overleg met alle scholen in het BHG om een samenwerking tot stand te brengen met het sociaal economieproject INOPTEC+ (ondersteunt reeds drie scholen). "
                />
                <TextPanel
                  title="⚫"
                  content="Een communicatiestrategie opstellen en uitvoeren betreffende de dienstverlening aan scholen en opleidingspartners."
                />
                <TextPanel
                  title="⚫"
                  content="Een uitgewerkte presentatie maken die kan voorgesteld worden aan scholen en opleidingspartners. "
                />
              </TextPanelGroup>,
              <TextPanelGroup key="3" title="Samen met: INOPTEC+">
                <p>
                  In dit project wordt ondersteuning aangeboden om het netwerk
                  van scholen te onderhouden, eventueel uit te breiden en
                  (optioneel) volgens afspraak een wekelijkse of maandelijks
                  nazicht uit te oefenen van alle aangesloten compters, laptops,
                  routers, switchen en eventueel ander IT materiaal. Hierna
                  gebeurd telkens een rapportering. Elke 6 maand wordt een
                  volledige inventaris van alle IT toestellen opgemaakt voor de
                  schooldirectie of IT coördinator. Er kan eveneens een helpdesk
                  opgezet worden waar leerkrachten en personeel van de school
                  terechtkunnen met hun vragen. Eenmalige ondersteuning behoort
                  eveneens tot de mogelijkheden. Bijvoorbeeld wanneer het vaste
                  IT team overbevraagd wordt.
                </p>
                <p>
                  Wenst u méér uitleg over dit initiatief kan u deze{" "}
                  <a href="http://startprojecten.be/publicaties_persberichten/IT-ondersteuning-scholen-flyer.pdf">
                    flyers
                  </a>{" "}
                  downloaden
                  <br />
                  {"Of neem contact op met :"}
                </p>
                <p>
                  Ludo Cattoor:{" "}
                  <a href="mailto:ludo.cattoor@startprojecten.be">
                    ludo.cattoor@startprojecten.be
                  </a>{" "}
                  <br />
                  0494 64 16 38 <br />
                  {"of met Erwin Schroons:"}
                  <br />{" "}
                  <a href="mailto:erwin.schroons@inoptecplus.be">
                    erwin.schroons@inoptecplus.be
                  </a>{" "}
                  <br />
                  02 256 97 24
                </p>
              </TextPanelGroup>
            ]}
          />
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={images.werkervaring1}
            alts={alts.werkervaring1}
            effects={{ fadeOnLoad: 60 }}
            title="Mogelijkheden stage & werk in werkervaringsprojecten, deeleconomie en sociale economie in Brussel"
            content="Aan schoolverlaters en jongeren een overzicht en inkijk geven in de mogelijkheden om stage en/of werk te vinden in de verschillende Brusselse (sociaal) economie-projecten."
            button={["Lees Meer", "Lees Minder"]}
            buttonShow={[
              <TextPanel
                key="1"
                title="STARTPROjecten:"
                content=" Acties opzetten om stage & werk aan te bieden aan schoolverlaters"
              />,
              <TextPanelGroup key="2" title="#Resultaatsgebonden doelen">
                <TextPanel
                  title="⚫"
                  content="Samenwerkingen opzetten met alle werkervaringsprojecten in het BHG om jongeren, met accent op NEET jongeren (maar niet beperkend tot), toe te leiden voor stage en/of werk. STARTPROjecten vzw zal hiervoor ondersteuning aanbieden bij het aanwerven van een toeleider/ jobcoach die de schakel zal vormen tussen de jongere en de werkervaringsprojecten. "
                />
                <TextPanel
                  title="⚫"
                  content="Onderzoek en ontwikkelen van tools rond werkgeversbenadering (selectietesten, competentiespelen … ). Uitbouwen van mogelijkheden en/of een netwerk ten dienste van andere organisaties. "
                />
                <TextPanel
                  title="⚫"
                  content="Het in kaart brengen van alle mogelijkheden binnen het BHG voor werklozen, jongeren en NEET jongeren i.v.m. deeleconomie, sociale economie en werkervaringsprojecten. "
                />
              </TextPanelGroup>,
              <TextPanelGroup key="3" title="Samen met: InBrussel vzw">
                <p>
                  STARTPROjecten zal starten om alle werkervaringsprojecten,
                  deeleconomie initiatieven en sociale economie projecten in
                  Brussel in kaart te brengen. Vervolgens zullen we met al deze
                  initiatieven de mogelijkheden om er stage te lopen of om er te
                  werken bespreken, en deze via de jobcoach aanbieden aan
                  werklozen, schoolverlaters, moeilijk plaatsbare jongeren en
                  NEET jongeren uit Brussel.
                </p>
              </TextPanelGroup>
            ]}
          />
        </div>
        <div id="col-center">
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={images.schoolverlaters1}
            alts={alts.schoolverlaters1}
            effects={{ fadeOnLoad: 60 }}
            title="Acties opzetten om schoolverlaters te ondersteunen"
            content="De school achter de rug maar geen stage of werk? Wij wensen stappen te zetten naar een netwerk van mogelijkheden voor Brusselse schoolverlaters."
            button={["Lees Meer", "Lees Minder"]}
            buttonShow={[
              <TextPanelGroup key="1" title="#Resultaatsgebonden doelen">
                <TextPanel
                  title="⚫"
                  content="De vzw STARTPROjecten zal initiatieven nemen i.s.m. de vzw InBrussel om begeleiding aan te bieden aan schoolverlaters zonder diploma en om een omkadering uit te werken en coaching aan te bieden naar een kwalificerende opleiding, stage of werk i.s.m. de huidige actoren in het BHG. "
                />
                <TextPanel
                  title="⚫"
                  content="Organiseren van overleg en uitwisseling met relevante Brusselse organisaties en scholen om gericht schoolverlaters alle mogelijkheden die er in het BHG aanwezig zijn i.v.m. opleiding, stage en werk, kennis mee te laten maken. "
                />
              </TextPanelGroup>,
              <TextPanelGroup key="2" title="Samen met: InBrussel vzw ">
                <TextPanel
                  title=""
                  content="In dit project wordt ondersteuning aangeboden aan jongeren die zonder diploma de school verlaten en hun eerste stappen naar de arbeidsmarkt willen zetten. "
                />
                <TextPanel
                  title=""
                  content="Samen met de jongere wordt onderzocht welke zijn doelen zijn en welk kennis, vaardigheden en competenties aanwezig zijn om deze doelen te bereiken. "
                />
                <TextPanel
                  title=""
                  content="We gaan eveneens actief op zoek naar alle bestaande mogelijkheden die overeenkomen met de wensen van de jongere om samen met hem deze doelen te realiseren."
                />
              </TextPanelGroup>
            ]}
          />
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={images.borderimage}
            alts={alts.borderimage}
            effects={{ fadeOnLoad: 60 }}
            title="Onderzoek verrichten naar een mogelijke samenwerking met Brusselse actoren"
            content="
  Om uitval van jongeren, die stappen zetten naar de middenjury, te voorkomen en de werking te versterken van de organisaties die Brusselse jongeren begeleiden naar de examencommissie (middenjury)."
            button={["Lees Meer", "Lees Minder"]}
            buttonShow={[
              <TextPanel
                key="1"
                title="STARTPROjecten:"
                content=" Onderzoek verrichten naar een mogelijke samenwerking met Brusselse actoren i.v.m. het behalen van een diploma via de middenjury"
              />,
              <TextPanelGroup key="2" title="#Resultaatsgebonden doelen">
                <TextPanel
                  title="⚫"
                  content="De pijnpunten onderzoeken en een studie maken om trajecten naar de middenjury performanter te maken. "
                />
                <TextPanel
                  title="⚫"
                  content="Organiseren van overleg en uitwisseling met relevante Brusselse organisaties en diensten, werkzaam met jongeren die zich voorbereiden op de examencommissie (middenjury). "
                />
                <TextPanel
                  title="⚫"
                  content="Onderzoeken welke de noden en verzuchtingen zijn van deelnemers die dreigen af te haken en via voorstellen hierop anticiperen.. "
                />
              </TextPanelGroup>,
              <TextPanelGroup key="3" title="Samen met: InBrussel vzw">
                <TextPanel
                  title=""
                  content="Voor vele schoolverlaters zonder diploma is de middenjury een doel om alsnog hun actieve loopbaan te starten met een diploma. 
Om uitval van deelnemers aan dit traject naar de middenjury te verminderen, zal STARTPROjecten initiatieven ontplooien en aanreiken aan de deelnemers, samen met de huidige spelers binnen het BHG. "
                />
              </TextPanelGroup>
            ]}
          />
        </div>
        <div id="col-right">
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={images.robot1}
            alts={alts.robot1}
            effects={{ fadeOnLoad: 60 }}
            title="Opstarten van een Fablab - The IT Garage"
            content="De activiteitsdomeinen van de IT Garage zijn: 3D printing, Robotprogrammatie en Virtual Reality."
            button={["Lees Meer", "Lees Minder"]}
            buttonShow={[
              <TextPanel
                key="1"
                title="STARTPROjecten:"
                content=" Oprichten van een Fablab voor scholen en opleidingspartners"
              />,
              <TextPanelGroup key="2" title="#Resultaatsgebonden doelen">
                <TextPanel
                  title="⚫"
                  content="Oprichten van een FabLab met als activiteitsdomeinen: 3D printing, Robotprogrammatie en Virtual Reality."
                />
                <TextPanel
                  title="⚫"
                  content="Openstellen van dit FabLab voor het beoogde publiek en organiseren van workshops en coaching voor leerkrachten die deze domeinen in hun school wensen te implementeren."
                />
                <TextPanel
                  title="⚫"
                  content="Openstellen van dit FabLab voor groepen scholieren en studenten om kennis te maken met deze domeinen en technieken of om schoolopdrachten uit te werken binnen het FabLab."
                />
                <TextPanel
                  title="⚫"
                  content="Openstellen van het FabLab voor opleidingsinitiatieven die dit wensen te integreren in hun opleidingsprogramma."
                />
              </TextPanelGroup>,
              <TextPanelGroup key="3" title="Samen met: INTEC BRUSSEL vzw">
                <TextPanel
                  title=""
                  content="The IT Garage zal vier 3D printers, 2 programmerbare robotten (Pepper en Zora) en Virtual Reality apparatuur aanbieden aan leerlingen, leerkrachten, Brusselse werklozen, jongeren en NEET jongeren, en aan opleidingsverstrekkers in het BHG. 
Het gebruik zal gratis zijn. Materialen en toebehoren (zoals Lasercutters voor de 3D printing) worden eveneens ter beschikking gesteld. 
Er zullen regelmatig workshops georganiseerd worden voor leerkrachten die zich deze kennis en vaardigheden willen eigen maken. 
Leerlingen en leerkrachten kunnen in het kader van hun leerplan gebruik maken van The IT Garage op afgesproken dagen. 
Alle ervaring en kennis binnen de IT Garage wordt ook aangeboden aan scholen die 1 of meerdere werkingen van de IT Garage (3D printing, Robotprogrammatie, VR) in hun school wensen op te starten."
                />
              </TextPanelGroup>
            ]}
          />
          <PreviewPanel
            setState={function(newState) {
              this.setState(newState);
            }.bind(this)}
            state={{ ...this.state }}
            images={slide.images}
            alts={slide.alts}
            refresh={3000}
            effects={{ fadeOnLoad: 60, fadeTransision: 60 }}
            title="Samenwerken? Waarom niet!"
            content="Wenst u een samenwerking met STARTPROjecten? 
  Neem contact met ons op."
            button={"Contact"}
            buttonGo={"Contact"}
          />
        </div>
      </PreviewPanelGroup>
    </div>
  );
}
