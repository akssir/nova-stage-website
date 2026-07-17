const controllerScripts = {
  apc: {
    version: "APC Mini MK2 Link Pads v3.0",
    title: "APC Mini MK2 Link Pads",
    summary: "Eigenständiges FL-Studio-MIDI-Skript mit projektbezogenen Pad-Zuweisungen und acht Szenen.",
    download: "https://github.com/akssir/nova-stage-website/releases/download/apc-v3.0/APC_Mini_Link_Pads_V3.0.zip",
    downloadName: "APC_Mini_Link_Pads_V3.0.zip",
    features: [
      "SHIFT + Pad weist den ausgewählten Channel zu.",
      "SHIFT + belegtes Pad entfernt die Verknüpfung.",
      "Kurzer Pad-Druck schaltet den Channel stumm oder aktiv.",
      "Längerer Pad-Druck wählt den Channel aus.",
      "SHIFT + Pad halten aktiviert den Momentary Mode.",
      "Scene-Tasten wechseln zwischen acht Szenen.",
      "Pfeiltasten navigieren durch das Channel Rack.",
      "PANIC mutet alle verknüpften Channels."
    ],
    led: [
      "LED aus: keine Zuordnung.",
      "LED dauerhaft an: Channel gemutet.",
      "LED blinkt im Beat: Channel aktiv.",
      "Weiß blinkend: aktuell ausgewählter Channel.",
      "Zuweisungen werden direkt im FL-Studio-Projekt über Channel-Marker gespeichert.",
      "Keine JSON-Dateien, Runtime oder externe Konfiguration erforderlich.",
      "Funktioniert vollständig ohne Nova Stage."
    ],
    install: [
      "Ordner „APC Mini MK2 Link Pads“ nach Dokumente → Image-Line → FL Studio → Settings → Hardware kopieren.",
      "FL Studio starten und Options → MIDI Settings öffnen.",
      "Input und Output des APC Mini MK2 aktivieren.",
      "Input und Output denselben MIDI-Port zuweisen.",
      "„Update MIDI scripts“ ausführen.",
      "Als Controller Type „APC Mini MK2 Link Pads“ auswählen."
    ]
  },

  korg2: {
    version: "Korg nanoKONTROL2 Link Pads v1.0",
    title: "Korg nanoKONTROL2 Link Pads",
    summary: "24 frei belegbare Mute-Tasten für das Channel Rack, während Fader und Drehregler frei für „Link to controller“ bleiben.",
    download: "https://github.com/akssir/nova-stage-website/releases/download/KorgNanoKONTROL2_LinkPads_v1.0/KorgNanoKONTROL2_LinkPads_v1.0.zip",
    downloadName: "KorgNanoKONTROL2_LinkPads_v1.0.zip",
    features: [
      "Fader und Drehregler bleiben frei für „Link to controller“.",
      "24 Solo-, Mute- und Record-Tasten dienen als frei belegbare Mute-Tasten.",
      "Channel auswählen, CYCLE drücken und gewünschte Taste drücken, um eine Zuordnung anzulegen.",
      "Erneutes Zuweisen derselben Taste entfernt die Verknüpfung.",
      "Mute-Änderungen per Maus werden automatisch übernommen."
    ],
    led: [
      "LED aus: keine Zuordnung.",
      "LED dauerhaft an: Channel gemutet.",
      "LED blinkt im Beat: Channel aktiv.",
      "Die Zuordnung wird im Channelnamen gespeichert.",
      "Zuweisungen bleiben mit dem FL-Studio-Projekt erhalten."
    ],
    install: [
      "Script-Ordner nach Dokumente → Image-Line → FL Studio → Settings → Hardware kopieren.",
      "Die Editor-Datei im KORG Kontrol Editor öffnen.",
      "Mit Communication → Write Scene Data auf den nanoKONTROL2 übertragen.",
      "In FL Studio Input und Output des Controllers aktivieren und denselben Port zuweisen.",
      "„Update MIDI scripts“ ausführen.",
      "Als Controller Type „Korg nanoKONTROL2 Link Pads (user)“ auswählen."
    ]
  },

  korgstudio: {
    version: "Korg nanoKONTROL Studio Link Pads v5.0",
    title: "Korg nanoKONTROL Studio Link Pads",
    summary: "Fünf Scenes mit jeweils 32 eigenen Button-Zuordnungen – insgesamt bis zu 160 Verknüpfungen.",
    download: "https://github.com/akssir/nova-stage-website/releases/download/KorgNanoKONTROL_Studio_LinkPads_v5.0/KorgNanoKONTROL_Studio_LinkPads_v5.0.zip",
    downloadName: "KorgNanoKONTROL_Studio_LinkPads_v5.0.zip",
    features: [
      "Fader und Drehregler sind in allen fünf Scenes identisch.",
      "Jede Scene besitzt 32 eigene Button-Zuordnungen.",
      "Insgesamt sind bis zu 160 Zuordnungen möglich.",
      "Channel auswählen, Scene wählen, CYCLE drücken und Button zuweisen.",
      "Erneutes Zuweisen desselben Buttons entfernt die Verknüpfung.",
      "Ein Druck auf einen verknüpften Button schaltet den Mute-Zustand um.",
      "Mute-Änderungen per Maus werden automatisch auf den LEDs übernommen."
    ],
    led: [
      "LED aus: keine Zuordnung.",
      "LED dauerhaft an: Channel gemutet.",
      "LED blinkt im Beat: Channel aktiv.",
      "Version 5.0 verwendet eine überarbeitete Clean-LED-Engine ohne Workarounds.",
      "Finaler stabiler Stand des Skripts."
    ],
    install: [
      "Den Ordner „Script“ nach Dokumente → Image-Line → FL Studio → Settings → Hardware kopieren und vorhandene Dateien ersetzen.",
      "Die mitgelieferte Korg-Editor-Datei öffnen.",
      "Mit „Write to Device“ auf den Controller übertragen.",
      "In FL Studio Options → MIDI Settings öffnen.",
      "„Update MIDI scripts“ ausführen.",
      "Als Controller Type „Korg nanoKONTROL Studio Link Pads (user)“ auswählen."
    ]
  }
};

const modal = document.getElementById("script-modal");
const title = document.getElementById("script-modal-title");
const version = document.getElementById("script-modal-version");
const summary = document.getElementById("script-modal-summary");
const features = document.getElementById("script-modal-features");
const led = document.getElementById("script-modal-led");
const install = document.getElementById("script-modal-install");
const download = document.getElementById("script-modal-download");

function setList(element, items) {
  element.innerHTML = "";

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function openScriptModal(key) {
  const data = controllerScripts[key];

  if (!data || !modal) {
    return;
  }

  version.textContent = data.version;
  title.textContent = data.title;
  summary.textContent = data.summary;

  setList(features, data.features);
  setList(led, data.led);
  setList(install, data.install);

  download.href = data.download;
  download.setAttribute("download", data.downloadName);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  modal.querySelector(".script-modal-close")?.focus();
}

function closeScriptModal() {
  modal?.classList.remove("open");
  modal?.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

document.querySelectorAll("[data-script]").forEach((card) => {
  card.addEventListener("click", () => {
    openScriptModal(card.dataset.script);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeScriptModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeScriptModal();
  }
});
