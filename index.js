/** @format */

$(document).ready($("#button2").on("click", berekenBMR));

let answer = $(".answer");
function berekenBMR() {
  let height = parseFloat($("#Height").val());
  let weight = parseFloat($("#Weight").val());
  let age = parseFloat($("#age").val());
  let gender = $("input[name='geslacht']:checked").val();
  console.log(height);
  console.log(weight);
  console.log(age);
  console.log(gender);
  let BMRCalculation = 0;

  if (gender == "man") {
    BMRCalculation = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    BMRCalculation = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  let string = "BMR: " + BMRCalculation + " Calories per day";

  answer.text(string);
  //   answer.document.write();
  console.log(string);
}
