var area1 = document.querySelector(".area1");
var area2 = document.querySelector(".area2");
var area3 = document.querySelector(".area3");
var light3 = document.querySelector("#light3");
var light2 = document.querySelector("#light2");
var light1 = document.querySelector("#light1");
var text1 = document.querySelector("#text1");
var text2 = document.querySelector("#text2");
var text3 = document.querySelector("#text3");
var replacedText1 = document.querySelector("#replacedText1");
var replacedText2 = document.querySelector("#replacedText2");
var replacedText3 = document.querySelector("#replacedText3");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");

area1.addEventListener("mouseenter", () => {
  light1.classList.add("one");
  text1.classList.add("text1new");
  replacedText1.classList.add("replacedText1New");
  question1.classList.add("question1New");
  console.log("area1");
});
area1.addEventListener("mouseleave", () => {
  light1.classList.remove("one");
  text1.classList.remove("text1new");
  replacedText1.classList.remove("replacedText1New");
  question1.classList.remove("question1New");
  console.log("area1");
});

area2.addEventListener("mouseenter", () => {
  console.log("area2");
  text2.classList.add("text2new");
  light2.classList.add("two");
  replacedText2.classList.add("replacedText2New");
  question2.classList.add("question2New");
});
area2.addEventListener("mouseleave", () => {
  console.log("area2");
  light2.classList.remove("two");
  text2.classList.remove("text2new");
  replacedText2.classList.remove("replacedText2New");
  question2.classList.remove("question2New");
});

area3.addEventListener("mouseenter", () => {
  console.log("area3");
  light3.classList.add("three");
  text3.classList.add("text3new");
  replacedText3.classList.add("replacedText3New");
  question3.classList.add("question3New");
});
area3.addEventListener("mouseleave", () => {
  console.log("area3");
  light3.classList.remove("three");
  text3.classList.remove("text3new");
  replacedText3.classList.remove("replacedText3New");
  question3.classList.remove("question3New");
});
