# Deployment-Checkliste

## 1. Repository erstellen
Erstelle auf GitHub ein neues Repository, zum Beispiel:

`nova-stage-suite-website`

## 2. Dateien hochladen
Lade den kompletten Inhalt dieses Ordners in das Repository hoch.

## 3. GitHub Pages aktivieren
Repository → Settings → Pages

Empfohlen:
- Source: GitHub Actions
- Workflow: `.github/workflows/deploy-pages.yml`

Alternativ:
- Source: Deploy from branch
- Branch: main
- Folder: /root

## 4. Download-Links ersetzen
In `download.html` und `index.html` nach folgendem Platzhalter suchen:

`DEIN-NAME/DEIN-REPO`

Durch dein echtes Repository ersetzen.

Beispiel:

`deinname/nova-stage-suite`

## 5. Kontakt ändern
In allen HTML-Dateien nach suchen:

`oliverrisska70@gmx.de`

Durch deine echte Kontaktadresse ersetzen.

## 6. Impressum und Datenschutz ergänzen
Die Links sind vorbereitet. Für Deutschland solltest du echte Inhalte ergänzen.

## 7. Software-Release hochladen
GitHub → Releases → New Release

Empfohlen:
- Tag: `v1.0-beta.1`
- Titel: `Nova Stage Suite v1.0 Beta 1`
- Assets:
  - Windows Installer `.exe`
  - Portable ZIP `.zip`

## 8. Final prüfen
- Startseite lädt korrekt
- Screenshots werden angezeigt
- Logo wird angezeigt
- Download-Buttons funktionieren
- Mobile Ansicht prüfen
- Impressum/Datenschutz ergänzen
