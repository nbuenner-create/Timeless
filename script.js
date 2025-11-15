const trainings = {
  montag: ["Schulterdrücken","Lateral Raises","Front Raises","Overhead Trizeps","Trizeps Pushdown","Dips","Cable Flys","Butterfly"],
  dienstag: ["Deadlifts","Rudern","Latziehen","T Bar Rudern","Reverse Butterfly","Shrugs","Preacher Curls","Hammer Curls"],
  mittwoch: ["Beinpresse","Beinstrecker","Beinbeuger","Wadenheben","Bauch Twists","Bauch Crunches","Leg Raises"],
  donnerstag: ["Rest Day"],
  freitag: ["Preacher Curls","Hammer Curls","Cable Curls","Reverse Curls","Chest Flys","Butterfly","Dips"],
  samstag: ["Rest Day"],
  sonntag: ["Deadlifts","Rudern","T Bar Rudern","Latziehen","Reverse Butterfly","Schulterdrücken","Lateral Raises","Front Raises"],
  health: ["Cardio","Bauch Training","Dehnen","Plyometrics"]
};

// Beschreibungen
const descriptions = {
  "Schulterdrücken":"Stärkt die vordere und seitliche Schulter.",
  "Lateral Raises":"Isoliert die seitlichen Schultern.",
  "Front Raises":"Trainiert die vordere Schulter.",
  "Overhead Trizeps":"Perfekt für den langen Trizepskopf.",
  "Trizeps Pushdown":"Belastet den Trizeps gezielt.",
  "Dips":"Brust und Trizeps effektiv.",
  "Cable Flys":"Brustisolationsübung.",
  "Butterfly":"Brustmaschine für gute Kontrolle.",
  "Deadlifts":"Königsübung für Rücken & Beine.",
  "Rudern":"Aktiviert den gesamten Rücken.",
  "Latziehen":"Trainiert den Latissimus.",
  "T Bar Rudern":"Mittlerer Rücken – Dicke & Dichte.",
  "Reverse Butterfly":"Rückseite Schulter + oberer Rücken.",
  "Shrugs":"Stärkt Trapezmuskel.",
  "Preacher Curls":"Isoliert Bizeps perfekt.",
  "Hammer Curls":"Trainiert Bizeps + Unterarme.",
  "Cable Curls":"Konstanter Widerstand für Peak.",
  "Reverse Curls":"Unterarme + Brachialis Fokus.",
  "Beinpresse":"Quadrizeps, Po und Bein-Stärke.",
  "Beinstrecker":"Isoliert vorderen Oberschenkel.",
  "Beinbeuger":"Trainiert hintere Oberschenkel.",
  "Wadenheben":"Starke Waden.",
  "Bauch Twists":"Seitliche Bauchmuskeln.",
  "Bauch Crunches":"Gerader Bauchmuskel Fokus.",
  "Leg Raises":"Unterer Bauch effektiv.",
  "Cardio":"Herz & Fettverbrennung.",
  "Bauch Training":"Core Stabilität & Definition.",
  "Dehnen":"Erhöht Beweglichkeit & Regeneration.",
  "Plyometrics":"Explosivkraft & Schnellkraft."
};

function showTraining(){
  const select = document.getElementById("daySelector");
  const day = select.value;
  const output = document.getElementById("trainingOutput");
  output.innerHTML = "";

  if(day && trainings[day]){
    const ul = document.createElement("ul");
    trainings[day].forEach((ex, idx)=>{
      const li = document.createElement("li");
      li.innerHTML = `<span>${ex}</span><span>${idx+1}</span>`;
      li.onclick = ()=>openModal(ex);
      ul.appendChild(li);
    });
    output.appendChild(ul);
  }
}

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const modalText = document.getElementById("modal-text");
const modalClose = document.getElementById("modal-close");

function openModal(ex){
  modalTitle.innerText = ex;
  modalText.innerText = descriptions[ex] || "Keine Beschreibung vorhanden.";
  modalImg.src = "https://source.unsplash.com/featured/?gym," + encodeURIComponent(ex);
  modal.classList.add("show");
}

modalClose.onclick = ()=> modal.classList.remove("show");
window.onclick = e => { if(e.target === modal) modal.classList.remove("show"); };
