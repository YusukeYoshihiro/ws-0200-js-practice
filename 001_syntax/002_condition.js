/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if (age >= 20) {
    console.log(`You are already adult.`)
  } else {
    console.log(`You are still a child.`)
  }
  // age >= 20 ? console.log(`You are already adult.`) : console.log(`You are still a child.`)
}
console.log(printMessageByAge(21));

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if (hour >= 4 && hour < 12) {
    alert(`Good Morning !`);
  } else if (hour >= 12 && hour < 17) {
    alert(`Hello`);
  } else if (hour >= 17) {
    alert(`Good Night`);
  } else {
    alert(`Good Night`);
  }
}
console.log(greeding(12));

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  switch (new Date().getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      break;
  }
}
console.log(getDay(0))

module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
