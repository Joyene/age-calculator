function displayInfo() {
  //event.preventDefault();
  let year = document.getElementById("year").value;
  let month = document.getElementById("month").value;
  let day = document.getElementById("day").value;

  let ageDisplay = new Date(year, month, day - 1);

  let currentAgeDisplay = new Date();

  let currentAge = currentAgeDisplay.getFullYear() - ageDisplay.getFullYear();
  document.getElementById("personYear").innerHTML = currentAge;
  let currentMonth = currentAgeDisplay.getMonth() - ageDisplay.getMonth();
  document.getElementById("personMonth").innerHTML = currentMonth;
  let currentDay = currentAgeDisplay.getDate() - ageDisplay.getDate();
  document.getElementById("personDay").innerHTML = currentDay;

  if ((currentAge, currentMonth, currentDay)) {
    document.getElementById("personYear").style.color = "hsl(259, 100%, 65%)";
    document.getElementById("personMonth").style.color = "hsl(259, 100%, 65%)";
    document.getElementById("personDay").style.color = "hsl(259, 100%, 65%)";

    document.getElementById("personYear").style.fontSize = "40px";
    document.getElementById("personYear").style.fontSize = "40px";
    document.getElementById("personYear").style.fontSize = "40px";
  }

  if (currentDay < 0) {
    currentMonth--;
    let newDays = currentDay + 30.4;
    return newDays;
  }
}
