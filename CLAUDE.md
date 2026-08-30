# Website-Relaunch SATIS-FACTORY

Statische Website, die satis-factory.de ablösen soll. Reines HTML, CSS und
JavaScript, kein Build-Schritt, kein Framework.

## Kontext im Obsidian-Vault

Die inhaltliche und strategische Grundlage liegt nicht in diesem Repo, sondern im
Vault unter `C:\Users\sebastian.fischer\Obsidian\Vault\Sebastian`:

- `02 Projekte/Website-Relaunch/Website-Relaunch.md` — Projektstand und offene Punkte
- `02 Projekte/Website-Relaunch/Positionierung und Website-Texte.md` — Positionierung
  und fertige Texte für alle Leistungsseiten
- `02 Projekte/Website-Relaunch/Website-Plattform und Online-Präsenz.md` — Plattform,
  Hosting, DNS, Hintergrundvideo
- `00 Kontext/Schreibstil.md` — verbindliche Schreibregeln für alle Texte
- `00 Kontext/Branding.md` — Farben, Logo, Auftritt
- `00 Kontext/Firma/` — Leistungen, Team, Firmendaten

Bei Textänderungen an der Website immer erst diese Dateien lesen. Der Ton ist
sachlich und bodenständig, Kunden werden gesiezt, aus Firmensicht heißt es „wir".

## Aufbau

```
site/          ausgelieferte Website, Deployment-Wurzel
  css/styles.css   einziges Stylesheet, Farben als CSS-Variablen in :root
  js/main.js       einziges Skript
  fonts/           Inter Variable, lokal eingebunden
  img/             Bilder nach Leistungsbereich sortiert
  video/           Hero-Hintergrundvideo
assets/        Rohmaterial, wird nicht ausgeliefert
  texte_extracted.txt  Website-Texte im Volltext
  bilder/, texte/, rechtliches/
scripts/       resize-images.ps1 und image-manifest.csv
```

## Lokal starten

```
py -m http.server 8080 --directory site
```

Dann `http://localhost:8080`. Konfiguration liegt in `.claude/launch.json`.

## Seiten

Startseite, Objektausbau, Ladenbau, Privater Innenausbau, Event- und Messebau,
Werkstatt und Maschinenpark, Unser Team, Aktuelles, Karriere, Kontakt, Impressum,
Datenschutz.

## Design

Warme Holztöne, große Bildflächen, Inter Variable. Alle Farben stehen als
Variablen in `:root` in `site/css/styles.css` und werden nur dort geändert:

| Variable | Wert | Verwendung |
|---|---|---|
| `--color-bg` | `#faf7f2` | Grundfläche |
| `--color-bg-alt` | `#f0eae2` | abgesetzte Abschnitte |
| `--color-ink` | `#211c17` | Fließtext |
| `--color-ink-soft` | `#514a41` | Nebentext |
| `--color-wood` | `#a85a2c` | Akzent, Buttons, Links |
| `--color-wood-dark` | `#7a3f1c` | Hover |
| `--color-line` | `#e2d9cb` | Linien und Rahmen |

## Deployment

GitHub-Repo `SATIS-FACTORYGmbH/satis-factory-website`, Entwicklungsbranch `master`.
Veröffentlicht wird der Branch `gh-pages`, der ausschließlich den Inhalt von `site/`
enthält. GitHub Pages liefert ihn unter
`https://satis-factorygmbh.github.io/satis-factory-website/` aus.

**Das Veröffentlichen ist ein bewusster manueller Schritt.** Ein Push auf `master`
ändert die Live-Seite nicht. Erst dieser Befehl überträgt den Stand:

```
git subtree push --prefix site origin gh-pages
```

Also immer in zwei Schritten arbeiten: erst `master` committen und pushen, dann bei
Bedarf den subtree-Push nachziehen. Ob beide Stände übereinstimmen, zeigt

```
git diff --stat master:site origin/gh-pages
```

Eine leere Ausgabe heißt: live und lokal sind gleich.

Kein GitHub-Actions-Workflow. Das wurde am 30.08.2026 bewusst so entschieden, damit
das Veröffentlichen ein kontrollierter Schritt bleibt.

Die Domain satis-factory.de liegt weiterhin bei IONOS und zeigt noch auf die alte
Seite. Beim Livegang nur die A- und CNAME-Records umstellen, die MX-Records bleiben
unangetastet, sonst fällt die Firmen-E-Mail aus.

## Regeln

- Bilder vor dem Einchecken über `scripts/resize-images.ps1` verkleinern
- Keine externen CDNs einbinden, Schriften bleiben lokal
- Texte nie roh übernehmen, immer gegen `00 Kontext/Schreibstil.md` prüfen
- Änderungen an Impressum und Datenschutz nur nach Rücksprache
