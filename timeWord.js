/**
 *
 * Input	Expected Output
 * 00:00	midnight
 * 00:12	twelve twelve am
 * 01:00	one o’clock am
 * 06:01	six oh one am
 * 06:10	six ten am
 * 06:18	six eighteen am
 * 06:30	six thirty am
 * 10:34	ten thirty four am
 * 12:00	noon
 * 12:09	twelve oh nine pm
 * 23:23	eleven twenty three pm
 *
 */

const hoursObj = {
  00: "twelve",
  01: "one",
  02: "two",
  03: "three",
  04: "four",
  05: "five",
  06: "six",
  07: "seven",
  08: "eight",
  09: "nine",
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

const timeToWords = (time) => {
  let [hours, mins] = time.split(":");
  let [tens, ones] = mins.split("");

  let hourText;
  let minsText;
  let tensText;
  let onesText;
  let timeOfDay;

  hours = parseInt(hours, 10);
  mins = parseInt(mins, 10);

  mins >= 10 && mins < 20
    ? (minsText = teensObj[mins])
    : (tensText = tensObj[tens]);
  onesText = onesObj[ones];
  minsText = `${tensText} ${onesText}`;

  if (time === "12:00" || time === "00:00") {
    time === "12:00" ? (hourText = "noon") : (hourText = "midnight");
    return hourText;
  } else {
    hourText = hoursObj[hours];
    hours >= 12 ? (timeOfDay = "pm") : (timeOfDay = "am");
    return `${hourText} ${minsText} ${timeOfDay}`;
  }
};

console.log(timeToWords("12:00"));
