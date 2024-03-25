const monthNames = [
  "January", "February",
  "March", "April", "May",
  "June", "July", "August",
  "September", "October",
  "November", "December"
];

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

function updateCalendar() {
  const calendarDays = document.querySelector("#days");
  calendarDays.innerHTML = "";

  const firstDay = new Date(currentYear, currentMonth, 1);
  const lastDay = new Date(currentYear, currentMonth + 1, 0);

  document.getElementById("currentMonth").textContent = `${monthNames[currentMonth]} ${currentYear}`;

  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(currentYear, currentMonth, day);
    const dayElement = document.createElement("td");
    dayElement.classList.add("day");
    dayElement.textContent = day;

    if (date.toDateString() === today.toDateString()) {
      dayElement.classList.add("active");
    }

    calendarDays.appendChild(dayElement);
  }
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentMonth = (currentMonth - 1 + 12) % 12;
  if (currentMonth === 11) currentYear--;
  updateCalendar();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentMonth = (currentMonth + 1) % 12;
  if (currentMonth === 0) currentYear++;
  updateCalendar();
});

updateCalendar();
