updateTime = () => {
  const currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  if (seconds < 10) seconds = "0" + seconds;

  if (minutes < 10) minutes = "0" + minutes;

  let time = hours + ":" + minutes;

  document.getElementById("time").innerHTML = time;
};

setDate = () => {
  const currentDate = new Date();
  let date = currentDate.getDate();
  let day = currentDate.getDay();
  let month = currentDate.getMonth();

  switch (month) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
  }

  if (day < 10) day = "0" + day;

  let dateFormat = day + ", " + month + " " + date;

  document.getElementById("date").innerHTML = dateFormat;
};

setDate();
updateTime();
window.setInterval(updateTime, 1000);
