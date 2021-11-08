function Person(
  name,
  leader,
  nightShift,
  hoursDayMax,
  hoursWeek,
  hoursMonth,
  freeDay
) {
  this.name = name;
  this.leader = leader;
  this.nightShift = nightShift;
  this.hoursDayMax = hoursDayMax;
  this.hoursWeek = hoursWeek;
  this.hoursMonth = hoursMonth;
  this.freeDay = freeDay;
}

let Clementius  = new Person(
  "Clementius Astrauskas",
  false,
  true,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Julio = new Person(
  "Julio Jez",
  false,
  true,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Jordan = new Person("Jordan Pham", true, true, 12, [0, 0, 0, 0, 0], 0, []);
let Arnoud = new Person("Arnoud Hasenkamp", false, true, 12, [0, 0, 0, 0, 0], 0, []);
let Paget = new Person("Paget Gorski", false, true, 12, [0, 0, 0, 0, 0], 0, []);
let Philippos = new Person(
  "Philippos Santis",
  true,
  true,
  12,
  [0, 0, 0, 0, 0],
  0,
  [3]
);
let Dewey = new Person(
  "Dewey Mercer",
  true,
  true,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Hypatos = new Person("Hypatos Madison", true, true, 12, [0, 0, 0, 0, 0], 0, []);
let Tamar = new Person(
  "Tamar Toller",
  false,
  true,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Vincius = new Person("Vincius Gerard", true, true, 12, [0, 0, 0, 0, 0], 0, []);
let Karina = new Person("Karina Schlime", false, true, 12, [0, 0, 0, 0, 0], 0, []);
let Sirje = new Person("Sirje Hayward", false, false, 8, [0, 0, 0, 0, 0], 0, []);
let Valentim = new Person(
  "Valentim Matejka",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Atefeh = new Person(
  "Atefeh Vlahov",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Sharalin = new Person(
  "Sharalin Thacker",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Du = new Person(
  "Du Danielsen",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Gracie = new Person(
  "Gracie Bradak",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Akbar = new Person(
  "Akbar Ruzsa",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Sergejs = new Person(
  "Sergejs Ivankov",
  false,
  false,
  12,
  [0, 0, 0, 0, 0],
  0,
  []
);
let Auster = new Person("Auster Nicola", false, false, 12, [0, 0, 0, 0, 0], 0, []);
let Encarna = new Person("Encarna Abraham", false, false, 12, [0, 0, 0, 0, 0], 0, []);

let employees = [
  Clementius ,
  Julio,
  Jordan,
  Arnoud,
  Paget,
  Philippos,
  Dewey,
  Hypatos,
  Tamar,
  Vincius,
  Karina,
  Sirje,
  Valentim,
  Atefeh,
  Sharalin,
  Du,
  Gracie,
  Akbar,
  Sergejs,
  Auster,
  Encarna,
];

const monthWorkHours = 176;

function nightWork(x) {
  if (x.nightShift) {
    return x;
  }
}

function leaderWork(x) {
  if (x.leader) {
    return x;
  }
}

function Day(name, number, dayWork, nightWork, holiday) {
  this.name = name;
  this.number = number;
  this.dayWork = dayWork;
  this.nightWork = nightWork;
  this.holiday = holiday;
}

function dayNameNum(day, duration, startDay, holiday) {
  month = [];
  daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  for (let index = 0; index < duration; index++) {
    weekDay = new day();
    weekDay.nightWork = [];
    weekDay.dayWork = [];
    weekDay.name = daysOfWeek[startDay];
    weekDay.number = index + 1;
    if (weekDay.number == holiday) {
      weekDay.holiday = true;
    } else {
      weekDay.holiday = false;
    }
    startDay++;
    if (startDay >= daysOfWeek.length) {
      startDay = 0;
    }
    month.push(weekDay);
  }
  return month;
}

 let startValue = 0;

function peopleWithLessThan56HoursSaturdayLeader(person) {
  if (
    person.hoursWeek[startValue] + 12 <= 56 ||
    person.hoursMonth + 12 <= 176
  ) {
    return person;
  }
}

function peopleWithLessThan56HoursSaturday(person) {
  if (
    person.hoursWeek[startValue] + 11.5 <= 56 ||
    person.hoursMonth + 11.5 <= 176
  ) {
    return person;
  }
}

function peopleWithLessThan56HoursNight(person) {
  if (
    person.hoursWeek[startValue] + 12 <= 56 ||
    person.hoursMonth + 12 <= 176
  ) {
    return person;
  }
}

function peopleWithLessThan56Hours(
  person,
  startValues,
  weekDay,
  addHours,
  saturdayHours
) {
  let worker = [];
  for (const key of person) {
       
    if (
      (weekDay == "Saturday" &&
      key.hoursWeek[startValues] + saturdayHours <= 56) &&
      key.hoursMonth + saturdayHours <= monthWorkHours
    ) {
      worker.push(key);
    }
    else if (
      key.hoursWeek[startValues] + addHours <= 56 &&
      key.hoursMonth + addHours <= monthWorkHours
    ) {
      worker.push(key);
    }
  }
  return worker;
}

function peopleWithLessThan56hoursDayMax(person) {
  if (
    (person.hoursWeek[startValue] + 10.5 <= 56 || person.hoursMonth + 10,
    5 <= 176)
  ) {
       
    return person;
  }
}

function plusDailyHours(person, dailyHours) {
  return person + dailyHours;
}

function filterOutPreviousNights(day, employeesNight, indexNumber) {
  let repeatedValues = [];
  let minusOne = indexNumber - 1;
  let minusTwo = indexNumber - 2;
  let plusOne = indexNumber + 1;

  for (value of employeesNight) {
    if (day[minusTwo] == undefined) {
      if (day[minusOne] == undefined) {
        repeatedValues.push(value);
      }
    } else if (day[plusOne] == undefined) {
      plusOne = indexNumber;
      continue;
    }
    else if (
      !day[minusTwo]["nightWork"].includes(value) &&
      !day[plusOne]["dayWork"].includes(value)
    ) {
      repeatedValues.push(value);
    }
    else if (!day[minusOne]["nightWork"].includes(value)) {
      repeatedValues.push(value)
    }
  }
  return repeatedValues;
}

function filterOutPreviousDays(day, employeesDay, indexNumber) {
  let repeatedValues = [];
  let minusOne = indexNumber - 1;
  let minusTwo = indexNumber - 2;
  let minusThree = indexNumber - 3;
  let minusSix = indexNumber - 6;

  for (const key of employeesDay) {
    if (day[minusSix] == undefined && key.hoursDayMax < 12) {
        repeatedValues.push(key);
      continue
    }
    if (day[minusThree] == undefined) {
      if (day[minusTwo] == undefined) {
        if (day[minusOne] == undefined) {
          repeatedValues.push(key);
        } else if (!day[minusOne]["nightWork"].includes(key)) {
          repeatedValues.push(key);
        }
      }
    }
    else if (key.hoursDayMax < 12 && !day[minusSix]["dayWork"].includes(key)) {
      repeatedValues.push(key);
    }
    else if (
      !day[minusOne]["dayWork"].includes(key) &&
      !day[minusTwo]["dayWork"].includes(key) &&
      !day[minusThree]["dayWork"].includes(key) &&
      !day[minusOne]["nightWork"].includes(key)
    ) {
      repeatedValues.push(key);
    }
  }
  return repeatedValues;
}

function checkHoliday(day) {
  let workerNumber = 0;
  if (!day.holiday) {
    workerNumber = 6;
  }
  return workerNumber;
}

function dayOff(person, day) {
  worker = [];
  for (const employee of person) {
    if (!(day in employee.freeDay)) {
      worker.push(employee);
    }
  }
  return worker;
}

function lowerHours(person) {
  return person.hoursDayMax < 12;
}

function peopleLeader(day, people) {
  let startValue = 0;
  for (let index = 0; index < day.length; index++) {
    if (day[index].name == "Monday") {
      startValue += 1;
    }

    let listOfLeaderworkers = day[index].dayWork;
    let employeesLeader = people.filter(
      (val) => !(day[index].nightWork.includes(val))
    );
    employeesLeader = people.filter(leaderWork);
    employeesLeader = filterOutPreviousDays(day, employeesLeader, index);
    employeesLeader = dayOff(employeesLeader, day[index].number);
    employeesLeader = peopleWithLessThan56Hours(
      employeesLeader,
      startValue,
      day[index].name,
      11,
      12
    );

    let randomLeaderNumber = Math.floor(Math.random() * employeesLeader.length);

    if (employeesLeader[randomLeaderNumber] == undefined) {
      listOfLeaderworkers.push("missingLeader");
    } else if (day[index].name == "Saturday") {
      {
        employeesLeader[randomLeaderNumber].hoursWeek[startValue] =
          plusDailyHours(
            employeesLeader[randomLeaderNumber].hoursWeek[startValue],
            12
          );
        employeesLeader[randomLeaderNumber].hoursMonth = plusDailyHours(
          employeesLeader[randomLeaderNumber].hoursMonth,
          12
        );
        listOfLeaderworkers.push(employeesLeader[randomLeaderNumber]);
      }
    }
    else {
      employeesLeader[randomLeaderNumber].hoursWeek[startValue] =
        plusDailyHours(
          employeesLeader[randomLeaderNumber].hoursWeek[startValue],
          11
        );
      employeesLeader[randomLeaderNumber].hoursMonth = plusDailyHours(
        employeesLeader[randomLeaderNumber].hoursMonth,
        11
      );
      listOfLeaderworkers.push(employeesLeader[randomLeaderNumber]);
    }
  }
  return [day, people];
}

function peopleNight(day, people) {
  let startValue = 0;
  for (let index = 0; index < day.length; index++) {
    if (day[index].name == "Monday") {
      startValue += 1;
    }

    let listOfNightworkers = day[index].nightWork;
    let employeesNight = people.filter(nightWork);

    employeesNight = filterOutPreviousNights(day, employeesNight, index);
    employeesNight = dayOff(employeesNight, day[index].number);
    employeesNight = peopleWithLessThan56Hours(
      employeesNight,
      startValue,
      day[index].name,
      12,
      12
    );
    for (let Index = 0; Index < 2; Index++) {
      employeesNight = peopleWithLessThan56Hours(
        employeesNight,
        startValue,
        day[index].name,
        12,
        12
      );

      employeesNight = employeesNight.filter(
        (val) => !listOfNightworkers.includes(val)
      );
      let randomNumber = Math.floor(Math.random() * employeesNight.length);

      if (employeesNight[randomNumber] === undefined) {
        listOfNightworkers.push("missingNight");
      } else {
        employeesNight[randomNumber].hoursWeek[startValue] = plusDailyHours(
          employeesNight[randomNumber].hoursWeek[startValue],
          12
        );
        employeesNight[randomNumber].hoursMonth = plusDailyHours(
          employeesNight[randomNumber].hoursMonth,
          12
        );
        listOfNightworkers.push(employeesNight[randomNumber]);
      }
    }
  }
  return [day, people];
}

function peopleDay(day, people) {
  for (let index = 0; index < day.length; index++) {
    if (day[index].name == "Monday") {
      startValue += 1;
    }

    let employeesForDay = filterOutPreviousDays(day, people, index);
    let workerNumber = checkHoliday(day[index]);
       
    if (workerNumber !== 0) {
      employeesForDay = dayOff(employeesForDay, day[index].number);
      employeesForDay = employeesForDay.filter(
        (val) => val.hoursWeek[startValue] <= 56
      );
      employeesForDay = employeesForDay.filter(
        ((val) => val.hoursMonth <= monthWorkHours)
      );
      if (day[index].name == "Sunday") {
        employeesForDay = employeesForDay.filter((val) => val.hoursDayMax == 12);
      }

      for (let Index = 0; Index < workerNumber; Index++) {
        employeesForDay = employeesForDay.filter(
          (val) => !day[index].nightWork.includes(val)
        );
        employeesForDay = employeesForDay.filter(
          (val) => !(day[index].dayWork.includes(val))
        );
           
        employeesForDay = peopleWithLessThan56Hours(
          employeesForDay,
          startValue,
          day[index].name,
          10.5,
          11
        );
           
        let randomDayNumber = Math.floor(
          Math.random() * employeesForDay.length
        );
        employeesForDay = employeesForDay.filter(
          (val) => !day[index].dayWork.includes(val)
        );
           
        if (employeesForDay[randomDayNumber] == undefined) {
             
          day[index].dayWork.push("MissingDayworker");
             
        } else if (
          day[index].name == "Saturday" &&
          employeesForDay[randomDayNumber].hoursDayMax < 12
        ) {
          employeesForDay[randomDayNumber].hoursWeek[startValue] =
            plusDailyHours(
              employeesForDay[randomDayNumber].hoursWeek[startValue],
              employeesForDay[randomDayNumber].hoursDayMax
            );
          employeesForDay[randomDayNumber].hoursMonth = plusDailyHours(
            employeesForDay[randomDayNumber].hoursMonth,
            employeesForDay[randomDayNumber].hoursDayMax
          );
          day[index].dayWork.push(employeesForDay[randomDayNumber]);
        } else if (day[index].name == "Saturday") {
          employeesForDay[randomDayNumber].hoursWeek[startValue] =
            plusDailyHours(
              employeesForDay[randomDayNumber].hoursWeek[startValue],
              11
            );
          employeesForDay[randomDayNumber].hoursMonth = plusDailyHours(
            employeesForDay[randomDayNumber].hoursMonth,
            11
          );
          day[index].dayWork.push(employeesForDay[randomDayNumber]);
        } else if (employeesForDay[randomDayNumber].hoursDayMax < 11) {
          employeesForDay[randomDayNumber].hoursWeek[startValue] =
            plusDailyHours(
              employeesForDay[randomDayNumber].hoursWeek[startValue],
              employeesForDay[randomDayNumber].hoursDayMax
            );
          employeesForDay[randomDayNumber].hoursMonth = plusDailyHours(
            employeesForDay[randomDayNumber].hoursMonth,
            employeesForDay[randomDayNumber].hoursDayMax
          );
          day[index].dayWork.push(employeesForDay[randomDayNumber]);
        } else {
          employeesForDay[randomDayNumber].hoursWeek[startValue] =
            plusDailyHours(
              employeesForDay[randomDayNumber].hoursWeek[startValue],
              10.5
            );
          employeesForDay[randomDayNumber].hoursMonth = plusDailyHours(
            employeesForDay[randomDayNumber].hoursMonth,
            10.5
          );
          day[index].dayWork.push(employeesForDay[randomDayNumber]);
        }
      }
    }
  }
  startValue = 0;
  return [day, people];
}

function dayShift(day, people) {
  startValue = 0;
  for (let index = 0; index < day.length; index++) {
    if (day[index].name == "Monday") {
      startValue += 1;
    }
    let employeesForDay = filterOutPreviousDays(day, people, index);
    employeesForDay = employeesForDay.filter((val) => val.hoursDayMax == 12);
    employeesForDay = employeesForDay.filter(
      (val) => val.hoursWeek[startValue] <= 56
    );
    employeesForDay = employeesForDay.filter(
      (val) => val.hoursMonth <= monthWorkHours
    );

    let numOfPeople = day[index].holiday ? 1 : 2;

    employeesForDay = dayOff(employeesForDay, day[index].number);
       
    for (let Index = 0; Index < numOfPeople; Index++) {
      employeesForDay = employeesForDay.filter(
        (val) => !day[index].nightWork.includes(val)
      );
      employeesForDay = employeesForDay.filter(
        (val) => !day[index].dayWork.includes(val)
      );
         
      employeesForDay = peopleWithLessThan56Hours(
        employeesForDay,
        startValue,
        day[index].name,
        12,
        12
      );
         
      let randomDayNumber = Math.floor(Math.random() * employeesForDay.length);
      employeesForDay = employeesForDay.filter((val) =>
        !(day[index].dayWork.includes(val))
      );

      if (employeesForDay[randomDayNumber] == undefined) {
        day[index].dayWork.push("MissingDayworker");
      } else {
        employeesForDay[randomDayNumber].hoursWeek[startValue] = plusDailyHours(
          employeesForDay[randomDayNumber].hoursWeek[startValue],
          12
        );
        employeesForDay[randomDayNumber].hoursMonth = plusDailyHours(
          employeesForDay[randomDayNumber].hoursMonth,
          12
        );
        day[index].dayWork.push(employeesForDay[randomDayNumber]);
      }
    }
  }
  startValue = 0;
  return [day, people];
}

let monthlyDays = dayNameNum(Day, 30, 2);
let leader = peopleLeader(monthlyDays, employees);
let night = peopleNight(leader[0], employees);
let earlyShift = dayShift(night[0], employees);
let lateShift = peopleDay(earlyShift[0], employees);

function generate_table() {
  let content = document.querySelector(".content");
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var header = document.createElement("thead");
  var headingRow = document.createElement("tr");

  var cell = document.createElement("td");
  headingRow.appendChild(cell);
  tbl.setAttribute("id", "table");
  tbl.setAttribute("class", "content");

  for (const numbers of monthlyDays) {
    let sundayArray = [];
    var cell = document.createElement("td");
    var cellText = document.createTextNode(numbers["number"]);
    cell.appendChild(cellText);
    cell.style.backgroundColor = "#1111";
    headingRow.appendChild(cell);
    header.appendChild(headingRow);
    tbl.appendChild(header);
    cell.setAttribute("class", numbers.number);
  }
     
  for (var i = 0; i < employees.length + 1; i++) {
    var row = document.createElement("tr");

    if (employees[i] == undefined) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);

      for (const iterator of lateShift[0]) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("");
      cell.appendChild(cellText);
      row.appendChild(cell);
      if ((iterator["dayWork"].indexOf("missingLeader") > -1) && iterator["dayWork"].indexOf("missingDayworker") > -1 && iterator["nightWork"].indexOf("missingNight") > -1) {
        var cellText = document.createTextNode("Leader \n Night \n Day");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else if ((iterator["dayWork"].indexOf("missingLeader") > -1) && iterator["nightWork"].indexOf("missingNight") > -1) {
        var cellText = document.createTextNode("Leader \n Night");
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else if ((iterator["dayWork"].indexOf("missingLeader") > -1) && iterator["dayWork"].indexOf("missingDayworker") > -1) {
          var cellText = document.createTextNode("Leader \n Day");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (iterator["nightWork"].indexOf("missingNight") > -1 && iterator["dayWork"].indexOf("missingDayworker") > -1) {
          var cellText = document.createTextNode("Night \n Day");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if ((iterator["dayWork"].indexOf("missingLeader") > -1)) {
          var cellText = document.createTextNode("Leader");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (iterator["nightWork"].indexOf("missingNight") > -1) {
          var cellText = document.createTextNode("Night");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else if (iterator["dayWork"].indexOf("missingDayworker") > -1) {
          var cellText = document.createTextNode("Day");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        else {
          var cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
      }
    }
    else {
      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(employees[i]["name"]);
        if (employees[i]["hoursMonth"] < monthWorkHours) {
          cell.setAttribute("style", "background:#AAAAAA;");
        } else {
          cell.setAttribute("style", "background:#AAFFFF;");
        }
        cell.appendChild(cellText);
        cell.setAttribute("id", employees[i].name);
        row.appendChild(cell);
      }
      for (const iterator of lateShift[0]) {
        if (iterator.name == "Sunday" || iterator.name == "Saturday") {
          cell.style.backgroundColor = "#b2ad7f"
        }
        if (
          Object.values(iterator["dayWork"]).includes(employees[i]) &&
          iterator["dayWork"][0] == employees[i]
        ) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode("9:30 \n 20:30");
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.setAttribute("class", iterator.number);
        } else if (
          (Object.values(iterator["dayWork"]).includes(employees[i]) &&
            iterator["dayWork"][1] == employees[i]) ||
          iterator["dayWork"][2] == employees[i]
        ) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode("7:00 \n 19:00");
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.setAttribute("class", iterator.number);
        } else if (Object.values(iterator["dayWork"]).includes(employees[i])) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode(
            employees[i].hoursDayMax < 12 ? "12:30 \n 20:30" : "10:00 \n 20:30"
          );
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.setAttribute("class", iterator.number);
        } else if (
          Object.values(iterator["nightWork"]).includes(employees[i])
        ) {
          var cell = document.createElement("td");
          var cellText = document.createTextNode("19:00 \n 7:00");
          cell.appendChild(cellText);
          row.appendChild(cell);
          cell.setAttribute("class", iterator.number);
        } else {
          var cell = document.createElement("td");
          var cellText = document.createTextNode("");
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        cell.setAttribute("id", iterator.number + employees[i].name);
        cell.setAttribute("class", employees[i].name);
      }
      for (var j = 0; j < 1; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(employees[i]["hoursMonth"]);
        if (employees[i]["hoursMonth"] < monthWorkHours) {
          cell.setAttribute("style", "background:#AAAAAA;");
        } else {
          cell.setAttribute("style", "background:#AAFFFF;");
        }
        cell.appendChild(cellText);
        cell.setAttribute("id", employees[i].name);
        row.appendChild(cell);
      }
    }
    tblBody.appendChild(row);
  }
  tbl.appendChild(tblBody);
  content.appendChild(tbl);
  tbl.setAttribute("border", "2");
  return tbl
}

function valuesOF() {
  let cell = [];
  let leader = "Leader";
  leader = leader.fontcolor("red");
  let nightshift = "Nightshift";
  nightshift = nightshift.fontcolor("blue");
  for (const iterator of employees) {
    if (iterator.leader == true) {
      cell.push(`${iterator.name} ${leader}`);
    } else {
      cell.push(`${iterator.name}`);
    }
    if (iterator.nightShift == true) {
      cell.push(`${nightshift} <br><br>`);
    } else {
      cell.push(` <br><br>`);
    }
  }
  cell.join(" ");
  return cell
}
let para = valuesOF();

document.querySelector('.sidebar').innerHTML = para;

let tableTable = generate_table();
   
function ffff() {
  for (let index = 1; index < monthlyDays.length + 1; index++) {
    let element = document.getElementsByClassName(index)[0];
    element.addEventListener("mouseover", displayData, false);
    }
  }
   
ffff();

function displayData() {
  document.getElementsByClassName("footer")[0].innerHTML = "";
  a = [];
  b = [];

const found = mondayNumbers.find(element => element >= this.innerHTML);
let weekNumber = mondayNumbers.indexOf(found);

  for (const key of monthlyDays[this.innerHTML].dayWork) {
    let dd = [];
    if (typeof(key) == typeof(object)) {
      console.log(key);
      continue
    }
    else {
    a = key.name;
    if (key.hoursWeek == undefined) {
      continue
    }
    b = 56 - key.hoursWeek[weekNumber];
    c = document.getElementsByClassName("footer")[0].innerHTML += `${a} can work for ${b} hours.` + "<br>";
       
    let ss =  document.getElementsByClassName(a);
       
    for (const iterator of ss) {
      iterator.classList.add("selected");
      setInterval(function(){ iterator.classList.remove("selected")}, 3000);
    }
  }
  }
    return c
  }

function findMonday(month) {
  let arrayOfMondays = [];
  for (const day of month) {
    if (day.name == "Monday") {
      arrayOfMondays.push(day.number)
    }
  }
  return arrayOfMondays
}

let mondayNumbers = findMonday(monthlyDays);