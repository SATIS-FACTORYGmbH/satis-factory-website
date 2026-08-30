---
name: SATIS-FACTORY
description: Maßgefertigter Innenausbau für durchdachte Konzepte, präzise umgesetzt in eigener Fertigung.
colors:
  wood: "#a85a2c"
  wood-dark: "#7a3f1c"
  sand: "#e8c39b"
  paper: "#faf7f2"
  paper-alt: "#f0eae2"
  card: "#ffffff"
  line: "#e2d9cb"
  ink: "#211c17"
  ink-soft: "#514a41"
  bark: "#3d3226"
  bark-text: "#e5ddcf"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(34px, 5.2vw, 62px)"
    fontWeight: 300
    lineHeight: 1.05
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(27px, 3.2vw, 39px)"
    fontWeight: 300
    lineHeight: 1.15
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    letterSpacing: "0.14em"
rounded:
  none: "0"
  button: "3px"
  control: "4px"
  media: "6px"
  panel: "8px"
spacing:
  gutter: "24px"
  section-tight: "56px"
  section: "88px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.wood}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "14px 26px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.wood-dark}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "14px 26px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.button}"
    padding: "14px 26px"
  nav-link:
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "10px 16px"
  tile:
    backgroundColor: "{colors.card}"
    textColor: "#ffffff"
    rounded: "{rounded.media}"
---

# Design System: SATIS-FACTORY

## Overview

**Creative North Star: "Das Aufmaß"**

Alles hat ein Maß. Die Seite tritt hinter das zurück, was sie zeigt: große, ruhige
Bildflächen von echten Projekten und der eigenen Werkstatt, darüber Überschriften in
einem leichten Schnitt, der nicht um Aufmerksamkeit ringt. Das ist die gestalterische
Übersetzung der Positionierung. Ein Betrieb, der fremde Planungen exakt umsetzt, drängt
sich visuell nicht vor seine Arbeit.

Die Zurückhaltung ist kein Zögern. Sie zeigt sich in Genauigkeit: klare Kanten, eine
durchgehende Cremefläche als Grundton, feine Linien statt Rahmen, warme Holztöne als
einziger Akzent. Wo etwas hervorgehoben wird, geschieht es entschieden — die Akzentfarbe
erscheint voll gesättigt und ohne Verlauf, Beschriftungen stehen in Versalien mit weiter
Laufweite.

Der Kontrast zwischen sehr leichten großen Überschriften (Gewicht 300) und sehr
kräftigen kleinen Beschriftungen (Gewicht 700) ist das prägende typografische Merkmal.
Er trägt das gesamte System und ersetzt die Vielfalt, die andere über mehrere
Schriftfamilien herstellen.

**Key Characteristics:**

- Cremefarbene Grundfläche, warme Holztöne als einziger Akzent
- Eine Schriftfamilie, zwei extreme Gewichte
- Große Bildflächen im Verhältnis 4:5, Text erst darunter oder darüber
- Flach im Ruhezustand, Bewegung nur als Antwort auf den Zeiger
- Kanten fast rechtwinklig, Radien bleiben unter 8 px

## Colors

Eine warme, gedeckte Palette aus Creme, Holz und dunklem Braun. Ein einziger Akzent,
keine zweite Signalfarbe.

### Primary

- **Holzbraun** (`#a85a2c`): Der einzige Akzent. Schaltflächen, Verweise,
  Abschnittsbeschriftungen auf hellem Grund. Trägt jede Handlungsaufforderung.
- **Holzbraun Tief** (`#7a3f1c`): Ausschließlich Zustand, nie Fläche. Der Hover-Wert
  jeder Schaltfläche in Holzbraun.

### Secondary

- **Sand** (`#e8c39b`): Die aufgehellte Variante des Akzents. Nur auf dunklem Grund —
  Beschriftungen über Bildern und im Fußbereich. Auf Creme erreicht sie keinen
  ausreichenden Kontrast und hat dort nichts verloren.

### Neutral

- **Papier** (`#faf7f2`): Die Grundfläche der gesamten Seite.
- **Papier Gedämpft** (`#f0eae2`): Abgesetzte Abschnitte, die sich vom Grundton lösen
  sollen, ohne eine Kante zu ziehen.
- **Karte** (`#ffffff`): Reines Weiß, sparsam eingesetzt für aufgesetzte Flächen.
- **Linie** (`#e2d9cb`): Die meistgenutzte Variable im Stylesheet. Trennt Abschnitte,
  rahmt Bedienelemente, gliedert die aufgeklappte Navigation.
- **Tinte** (`#211c17`): Fließtext und Überschriften. Ein sehr dunkles Braun, kein
  Schwarz.
- **Tinte Weich** (`#514a41`): Nebentext, Bildunterschriften, alles Zweitrangige.
- **Rinde** (`#3d3226`): Ausschließlich der Fußbereich.
- **Rinde Text** (`#e5ddcf`): Der zugehörige Textwert auf Rinde.

### Named Rules

**Die Ein-Akzent-Regel.** Holzbraun ist die einzige Akzentfarbe. Es gibt keine zweite
Signalfarbe für Erfolg, Warnung oder Hervorhebung. Wer eine braucht, hat ein
Strukturproblem, kein Farbproblem.

**Die Grundton-Regel.** Farbe kommt aus den Variablen in `:root`, nicht aus dem
Regelblock. Ein Cremewert, der direkt im Stylesheet steht, ist ein Fehler, kein Stil.

## Typography

**Display Font:** Inter Variable (Fallback: Segoe UI, Roboto, Helvetica Neue, Arial)
**Body Font:** Inter Variable — dieselbe Familie, bewusst

**Character:** Eine einzige Familie über den gesamten Auftritt, aber mit einer sehr
weiten Spanne der Strichstärke. Große Überschriften stehen im Light-Schnitt und wirken
dadurch ruhig statt laut. Kleine Beschriftungen stehen in Bold, in Versalien und mit
weiter Laufweite. Diese Spannung ersetzt die zweite Schriftfamilie.

### Hierarchy

- **Display** (300, `clamp(34px, 5.2vw, 62px)`, Zeilenhöhe 1.05): Nur die
  Hauptüberschrift im Kopfbereich einer Seite, meist über einem Bild.
- **Headline** (300, `clamp(27px, 3.2vw, 39px)`, Zeilenhöhe 1.15):
  Abschnittsüberschriften.
- **Title** (600, 22–24 px): Karten- und Blocküberschriften.
- **Body** (400, 17 px, Zeilenhöhe 1.6): Fließtext. Textblöcke laufen nicht breiter als
  720 px.
- **Label** (700, 15 px, Laufweite `.14em`, Versalien): Die Beschriftung über einer
  Überschrift. Auf hellem Grund in Holzbraun, auf dunklem in Sand.

### Named Rules

**Die Gewichtssprung-Regel.** Es gibt kein Mittelfeld. Groß bedeutet 300, klein bedeutet
600 oder 700. Eine große Überschrift in Bold zerstört den Charakter des Systems sofort.

**Die Versalien-Grenze.** Versalien sind Beschriftungen, keine Texte. Sie tragen einige
Wörter, niemals einen Satz. Wortbilder verschwinden in Großbuchstaben, und damit die
Lesbarkeit.

## Layout

Ein zentrierter Behälter von maximal 1240 px mit 24 px Seitenabstand. Abschnitte atmen
mit 88 px oben und unten, in gedrängter Variante mit 56 px. Überschriftenblöcke laufen
nicht breiter als 720 px, damit Zeilen lesbar kurz bleiben.

Der Kopfbereich bleibt beim Scrollen stehen und legt sich mit leichter Weichzeichnung
über den Inhalt.

Der wichtigste Umbruch liegt bei 880 px: Dort verschwindet die waagerechte Navigation
und wird zum Menü hinter einem Symbol. Weitere Umbrüche ordnen Raster von drei auf zwei
auf eine Spalte, gestaffelt zwischen 1000 px und 480 px. Rund 80 Prozent der Besucher
kommen mobil, die schmale Ansicht ist deshalb kein Sonderfall, sondern der Normalfall.

## Elevation & Depth

Das System ist im Ruhezustand flach. Tiefe entsteht über warme Flächenabstufung —
Papier, Papier Gedämpft, Karte — und über feine Linien in `#e2d9cb`. Im gesamten
Stylesheet stehen nur drei Schatten.

Bilder sind die Ausnahme. Bildkacheln heben sich beim Überfahren, indem das Bild selbst
langsam heranfährt, während der Rahmen ruhig stehen bleibt. Die Bewegung liegt im
Inhalt, nicht im Behälter.

### Shadow Vocabulary

- **Auflage** (`box-shadow: 0 16px 32px rgba(20, 15, 10, 0.12)`): Eine aufgesetzte
  Fläche, die deutlich über dem Grund liegt. Warm getönt, nie neutrales Grau.
- **Hinweisleiste** (`box-shadow: 0 -8px 24px rgba(0, 0, 0, .25)`): Nur für die von
  unten einfahrende Einwilligungsleiste.

### Named Rules

**Die Ruhe-Regel.** Flächen liegen flach auf. Ein Schatten ist eine Antwort auf den
Zeiger oder auf eine Ebene über dem Dokument, nie eine Verzierung im Ruhezustand.

## Shapes

Die Formensprache ist fast rechtwinklig. Radien bleiben klein und tragen Bedeutung statt
Dekoration: 3 px an Schaltflächen, 4 px an Bedienelementen der Navigation, 6 px an
Bildkacheln, 8 px an größeren Flächen. Nichts wird weich.

Begrenzt wird über einzelne Linien, nicht über Rahmen. Ein durchgehender Kasten um einen
Inhaltsblock ist im System nicht vorgesehen — getrennt wird mit einer Linie oben oder
unten.

Bildkacheln haben ein festes Verhältnis von 4:5 und beschneiden das Bild mittig.

### Named Rules

**Die Acht-Punkt-Grenze.** Kein Radius über 8 px, mit einziger Ausnahme runder Elemente,
die vollständig rund sind. Alles dazwischen wirkt weich und nimmt dem Auftritt die
Genauigkeit.

## Components

### Buttons

- **Character:** Werkzeugartig und direkt. Volle Farbe, fettes Label, fast eckig.
- **Shape:** Nahezu rechtwinklig (3 px Radius), Rahmen in derselben Farbe wie die
  Fläche.
- **Primary:** Holzbraun mit weißer Schrift, Innenabstand `14px 26px`, Gewicht 700 bei
  15 px.
- **Hover:** Wechsel auf Holzbraun Tief, Fläche und Rahmen gemeinsam, über 0,15 s. Keine
  Verschiebung, keine Größenänderung.
- **Outline:** Nur über Bildern. Durchsichtig mit weißem Rahmen bei 70 Prozent Deckkraft,
  beim Überfahren füllt sich die Fläche mit 12 Prozent Weiß.
- **Dark:** Tinte als Fläche, beim Überfahren reines Schwarz. Für den zweitrangigen Weg,
  wenn Holzbraun schon vergeben ist.

### Cards / Containers

Die Bildkachel ist das prägende Element des Auftritts.

- **Corner Style:** 6 px
- **Background:** Das Bild selbst, formatfüllend beschnitten im Verhältnis 4:5
- **Overlay:** Ein Verlauf von durchsichtig bei 40 Prozent Höhe auf `rgba(15,11,7,.88)`
  am unteren Rand. Er trägt die weiße Beschriftung und ist Bedingung für deren
  Lesbarkeit, nicht Dekoration.
- **Hover:** Das Bild fährt auf 106 Prozent heran, über 0,4 s. Der Rahmen bleibt stehen.
- **Shadow Strategy:** Keiner, siehe Elevation & Depth.

### Navigation

- **Style:** Waagerechte Verweise in Tinte, Gewicht 600 bei 15 px, Innenabstand
  `10px 16px`, 4 px Radius. Die aktive Seite ist mit einer eigenen Fläche hinterlegt.
- **Hover:** Farbe und Fläche wechseln über 0,15 s.
- **Mobile:** Unter 880 px ersetzt ein Symbol aus drei Strichen die Verweise. Das Menü
  fährt über die Höhe auf, jeder Eintrag bekommt volle Breite mit 16 px Höhe und einer
  Trennlinie. Untermenüs klappen an Ort und Stelle auf, statt zu überlagern.

### Footer

Der einzige durchgehend dunkle Bereich. Rinde als Fläche, Rinde Text als Schrift, 56 px
Abstand oben. Er schließt die Seite ab und ist der einzige Ort neben Bildern, an dem
Sand als Beschriftungsfarbe erlaubt ist.

## Do's and Don'ts

### Do:

- **Do** Farben aus den Variablen in `:root` beziehen. Alle acht sind gesetzt, sie decken
  jeden vorkommenden Fall ab.
- **Do** echte Projekt- und Werkstattfotos verwenden. Es liegen 85 Aufnahmen bereit,
  aufgeteilt nach Leistungsbereich. Die eigene Fertigung ist das Verkaufsargument, sie
  muss sichtbar sein.
- **Do** Bewegung auf 0,15 s für Zustände und 0,35 bis 0,4 s für Bildbewegung begrenzen.
- **Do** Textblöcke bei 720 px umbrechen.
- **Do** die schmale Ansicht zuerst prüfen. Sie ist der Normalfall, nicht die Ausnahme.

### Don't:

- **Don't** Sand (`#e8c39b`) auf Creme setzen. Das Verhältnis liegt bei 1,4:1 und ist
  unlesbar. Sand gehört auf Bilder und in den Fußbereich.
- **Don't** eine zweite Akzentfarbe einführen. Ein Verlauf über zwei Farben widerspricht
  dem System vollständig.
- **Don't** große Überschriften in Bold setzen. Der Gewichtssprung ist der Charakter.
- **Don't** ganze Sätze in Versalien setzen. Beschriftungen tragen einige Wörter.
- **Don't** Radien über 8 px verwenden.
- **Don't** Schatten im Ruhezustand einsetzen, um eine Fläche zu betonen. Dafür gibt es
  die Flächenabstufung und die Linie.
- **Don't** Cremewerte direkt im Regelblock notieren. Es steht bereits ein zweiter,
  minimal abweichender Ton (`#f2ece2`) neben der Variablen `paper-alt` (`#f0eae2`) im
  Stylesheet. Diese Abweichung ist ein Altlast-Fehler, kein Vorbild.
