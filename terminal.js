//CONSTANTS
const APP_VERSION_STRING = "1.1.16";

window.onload = function () {
  const body = document.querySelector(".zoom");
  body.style.transform = "scale(1.1)";
};
function setBackgroundColor() {
  const angle = Math.round(Math.random() * 30) + 10;
  const hue = Math.round(Math.random() * 255);
  const colorA = HSL(`${hue}, 80%, 70%`);
  const colorB = HSL(`${hue - 255 / 2}`, 80% 70%``);
  document.body.style.background = linear-gradient(`${angle}deg, ${colorA}, ${colorB}`);
}

function getLastChildNode(parentNode) {
  return parentNode.childNodes[parentNode.childNodes.length - 1];
}

function setAppVersion(APP_VERSION_STRING) {
  var terminalHeadVersionChild = getLastChildNode(
    document.getElementById("header")
  );
  var terminalHeaderString = " cat ./about.txt(v" + APP_VERSION_STRING + ")";
  terminalHeadVersionChild.textContent = terminalHeaderString;
}
setBackgroundColor();
setAppVersion(APP_VERSION_STRING);

function nextShowDiv() {
  const disp = document.getElementsByClassName("fifth-line");
  //i want to display this div when and event button is pressed?
  disp[0].style.display = "block";
}

// function addSection() {
//     var cmd = "This is the dummy text content.";
//     var newSection = document.createElement('section');
//     newSection.textContent = cmd;
//     newSection.id = 'newSection';

// }


function hideinitsection() {
  const init = document.getElementById("init");
  init.style.display = "none";
  const newSection=document.getElementById("newSection");
  newSection.style.display="block"; 
 
}

const span_4 = document.getElementById("char_by_char"); //element select hoga
const span_4_Content = span_4.textContent; //span_4_Content mei span_4 ka content aa jaega
let i = 0;
span_4.textContent = "";
const cursor = document.createElement("span");
cursor.textContent = "_";
cursor.className = "cursor";
let inter = setInterval(() => {
  if (i < span_4_Content.length) {
    span_4.textContent = span_4.textContent.slice(0, -1);

    span_4.textContent += span_4_Content[i];
    i++;

    span_4.appendChild(cursor);
  } else {
    clearInterval();
    document.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        nextShowDiv();
        const help = document.getElementById("help");
        help.appendChild(cursor);
        document.addEventListener("keydown", function (event) {
          if (event.key === "Enter") {
             hideinitsection();
          
          }
        });
        // var cmd = "This is the dummy text content.";
        // var newSection = document.createElement('section');
        // newSection.textContent = cmd;
        // newSection.id = 'newSection'; 

      }
    });
  }
}, 100);