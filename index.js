const daily = document.getElementById("dailyButton");
const weekly = document.getElementById("weeklyButton");
const monthly = document.getElementById("monthlyButton");
const actualWork = document.getElementById("actualWork");
const lastPeriod = document.getElementById("lastPeriod");
const lastWork = document.getElementById("lastWork");
const actualPlay = document.getElementById("actualPlay");
const lastPeriod2 = document.getElementById("lastPeriod2");
const lastPlay = document.getElementById("lastPlay");
const actualStudy = document.getElementById("actualStudy");
const lastPeriod3 = document.getElementById("lastPeriod3");
const lastStudy = document.getElementById("lastStudy");
const actualExercise = document.getElementById("actualExercise");
const lastPeriod4 = document.getElementById("lastPeriod4");
const lastExercise = document.getElementById("lastExercise");
const actualSocial = document.getElementById("actualSocial");
const lastPeriod5 = document.getElementById("lastPeriod5");
const lastSocial = document.getElementById("lastSocial");
const actualSelfCare = document.getElementById("actualSelfCare");
const lastPeriod6 = document.getElementById("lastPeriod6");
const lastSelfCare = document.getElementById("lastSelfCare");

let data = {};

fetch("data.json")
  .then((response) => response.json())
  .then((json) => (data = json));

daily.addEventListener("click", () => {
  setValues("daily");
});

weekly.addEventListener("click", () => {
  setValues("weekly");
});

monthly.addEventListener("click", () => {
  setValues("monthly");
});

function setValues(period) {
  changePeriod(period);
  setCurrentValues(period);
  setPreviousValues(period);
}

function changePeriod(period) {
  const cases = {
    daily: "Day",
    weekly: "Week",
    monthly: "Month",
  };
  const newPeriod = cases[period];

  lastPeriod.innerHTML = newPeriod;
  lastPeriod2.innerHTML = newPeriod;
  lastPeriod3.innerHTML = newPeriod;
  lastPeriod4.innerHTML = newPeriod;
  lastPeriod5.innerHTML = newPeriod;
  lastPeriod6.innerHTML = newPeriod;
}

function setCurrentValues(period) {
  actualWork.innerHTML = data[0].timeframes[period].current;
  actualPlay.innerHTML = data[1].timeframes[period].current;
  actualStudy.innerHTML = data[2].timeframes[period].current;
  actualExercise.innerHTML = data[3].timeframes[period].current;
  actualSocial.innerHTML = data[4].timeframes[period].current;
  actualSelfCare.innerHTML = data[5].timeframes[period].current;
}

function setPreviousValues(period) {
  lastWork.innerHTML = data[0].timeframes[period].previous;
  lastPlay.innerHTML = data[1].timeframes[period].previous;
  lastStudy.innerHTML = data[2].timeframes[period].previous;
  lastExercise.innerHTML = data[3].timeframes[period].previous;
  lastSocial.innerHTML = data[4].timeframes[period].previous;
  lastSelfCare.innerHTML = data[5].timeframes[period].previous;
}
