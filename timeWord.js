const hoursObj = {
  0: "twelve",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "one",
  14: "two",
  15: "three",
  16: "four",
  17: "five",
  18: "six",
  19: "seven",
  20: "eight",
  21: "nine",
  22: "ten",
  23: "eleven",
};

const teensObj = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

const tensObj = {
  0: "oh",
  2: "twenty",
  3: "thirty",
  4: "forty",
  5: "fifty",
};

const onesObj = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

function timeWord(time) {
  let [hours, mins] = time.split(":");
  let [tens, ones] = mins.split("");

  let hourText;
  let minsText;
  let tensText;
  let onesText;
  let timeOfDay;

  hours = parseInt(hours);
  mins = parseInt(mins);

  if (mins >= 10 && mins < 20) {
    minsText = teensObj[mins];
  } else {
    tensText = tensObj[tens];
    onesText = onesObj[ones];
    minsText = tensText ? `${tensText} ${onesText}` : onesText;
  }

  if (time === "12:00" || time === "00:00") {
    time === "12:00" ? (hourText = "noon") : (hourText = "midnight");
    return hourText;
  } else {
    if (tens.concat(ones) === "00") minsText = "o'clock";
    hourText = hoursObj[hours];
    hours >= 12 ? (timeOfDay = "pm") : (timeOfDay = "am");
    return `${hourText} ${minsText} ${timeOfDay}`;
  }
}

console.log(timeWord("01:13"));

module.exports = timeWord;
