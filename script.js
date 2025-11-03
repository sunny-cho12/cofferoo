const cupsInput = document.getElementById("cups");
const cupsValue = document.getElementById("cupsValue");
const buildCheck = document.getElementById("build");
const opsCheck = document.getElementById("ops");
const dailyBtn = document.getElementById("daily");
const yearlyBtn = document.getElementById("yearly");
const savingTitle = document.getElementById("savingTitle");
const savingAUD = document.getElementById("savingAUD");
const savingCO2 = document.getElementById("savingCO2");

let isDaily = true;

function calculate() {
  const cups = Number(cupsInput.value);
  const includeBuild = buildCheck.checked;
  const includeOps = opsCheck.checked;
  const perCupSaving = (includeBuild ? 0.2 : 0) + (includeOps ? 0.4 : 0);
  const carbonSavedDaily = cups * perCupSaving;
  const carbonSavedYearly = carbonSavedDaily * 365;
  const dailySavingAUD = (carbonSavedDaily / 1000) * 30;
  const yearlySavingAUD = dailySavingAUD * 365;

  const displayCarbon = isDaily ? carbonSavedDaily : carbonSavedYearly;
  const displaySaving = isDaily ? dailySavingAUD : yearlySavingAUD;
  const co2Unit = isDaily ? "kg" : "tons";
  const unit = isDaily ? "per day" : "per year";

  savingTitle.textContent = `🧾 Estimated ${isDaily ? "Daily" : "Yearly"} Savings`;
  savingAUD.textContent = `You can save A$${displaySaving.toFixed(2)} ${unit}`;
  savingCO2.textContent = `You can save ${
    isDaily ? displayCarbon.toFixed(1) : (displayCarbon / 1000).toFixed(1)
  } ${co2Unit} CO₂e ${unit}`;
  cupsValue.textContent = cups;
}

cupsInput.addEventListener("input", calculate);
buildCheck.addEventListener("change", calculate);
opsCheck.addEventListener("change", calculate);
dailyBtn.addEventListener("click", () => {
  isDaily = true;
  dailyBtn.classList.add("active");
  yearlyBtn.classList.remove("active");
  calculate();
});
yearlyBtn.addEventListener("click", () => {
  isDaily = false;
  yearlyBtn.classList.add("active");
  dailyBtn.classList.remove("active");
  calculate();
});

calculate();

window.addEventListener('scroll', function() {
  const cupImage = document.querySelector('.hero-content img');
  const scrollPosition = window.scrollY;
  

  if (scrollPosition > 100) {
    cupImage.classList.add('scrolled');
  } else {
    cupImage.classList.remove('scrolled');
  }
});