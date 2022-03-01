var clicker1 = document.querySelector(".forHover");
var box1 = document.querySelector(".box1");
var box2 = document.querySelector(".box2");
var box3 = document.querySelector(".box3");
var box4 = document.querySelector(".box4");
var box5 = document.querySelector(".box5");
var box6 = document.querySelector(".box6");
var clickCount1 = 0;
var clickCount2 = 0;

// animations
var box1Anim1Style = {
  transform: "translateZ(100px)",
};

var box1Anim2Style = {
  transform: "translateZ(50px)",
};

var box2Anim1Style = {
  transform: "translateZ(-100px)",
};

var box2Anim2Style = {
  transform: "translateZ(-50px)",
};

var box3Anim1Style = {
  transform: "rotateY(90deg) translateZ(-100px)",
};

var box3Anim2Style = {
  transform: "rotateY(90deg) translateZ(-50px)",
};

var box4Anim1Style = {
  transform: "rotateY(-90deg) translateZ(-100px)",
};

var box4Anim2Style = {
  transform: "rotateY(-90deg) translateZ(-50px)",
};

var box5Anim1Style = {
  transform: "rotateX(-90deg) translateZ(-100px)",
};

var box5Anim2Style = {
  transform: "rotateX(-90deg) translateZ(-50px)",
};

var box6Anim1Style = {
  transform: "rotateX(90deg) translateZ(-100px)",
};

var box6Anim2Style = {
  transform: "rotateX(90deg) translateZ(-50px)",
};

clicker1.onclick = () => {
  clickCount1++;

  if (clickCount1 % 2 == 0) {
    Object.assign(box1.style, box1Anim2Style);
    Object.assign(box2.style, box2Anim2Style);
    Object.assign(box3.style, box3Anim2Style);
    Object.assign(box4.style, box4Anim2Style);
    Object.assign(box5.style, box5Anim2Style);
    Object.assign(box6.style, box6Anim2Style);
  } else {
    Object.assign(box1.style, box1Anim1Style);
    Object.assign(box2.style, box2Anim1Style);
    Object.assign(box3.style, box3Anim1Style);
    Object.assign(box4.style, box4Anim1Style);
    Object.assign(box5.style, box5Anim1Style);
    Object.assign(box6.style, box6Anim1Style);
  }
};

// styles
var box1Style1 = {
  width: "50px",
  height: "50px",
  transform: "translateZ(25px)",
};

var box1Style2 = {
  width: "100px",
  height: "100px",
  transform: "translateZ(50px)",
};

var box2Style1 = {
  width: "50px",
  height: "50px",
  transform: "translateZ(-25px)",
};

var box2Style2 = {
  width: "100px",
  height: "100px",
  transform: "translateZ(-50px)",
};

var box3Style1 = {
  width: "50px",
  height: "50px",
  transform: "rotateY(90deg) translateZ(-25px)",
};

var box3Style2 = {
  width: "100px",
  height: "100px",
  transform: "rotateY(90deg) translateZ(-50px)",
};

var box4Style1 = {
  width: "50px",
  height: "50px",
  transform: "rotateY(-90deg) translateZ(-25px)",
};

var box4Style2 = {
  width: "100px",
  height: "100px",
  transform: "rotateY(-90deg) translateZ(-50px)",
};

var box5Style1 = {
  width: "50px",
  height: "50px",
  transform: "rotateX(-90deg) translateZ(-25px)",
};

var box5Style2 = {
  width: "100px",
  height: "100px",
  transform: "rotateX(-90deg) translateZ(-50px)",
};

var box6Style1 = {
  width: "50px",
  height: "50px",
  transform: "rotateX(90deg) translateZ(-25px)",
};

var box6Style2 = {
  width: "100px",
  height: "100px",
  transform: "rotateX(90deg) translateZ(-50px)",
};

clicker1.ondblclick = () => {
  clickCount2++;

  if (clickCount2 % 2 == 0) {
    Object.assign(box1.style, box1Style2);
    Object.assign(box2.style, box2Style2);
    Object.assign(box3.style, box3Style2);
    Object.assign(box4.style, box4Style2);
    Object.assign(box5.style, box5Style2);
    Object.assign(box6.style, box6Style2);
  } else {
    Object.assign(box1.style, box1Style1);
    Object.assign(box2.style, box2Style1);
    Object.assign(box3.style, box3Style1);
    Object.assign(box4.style, box4Style1);
    Object.assign(box5.style, box5Style1);
    Object.assign(box6.style, box6Style1);
  }
};

// edit block section
var hamBtn = document.querySelector(".hamburgerBlock");
var editBlock = document.querySelector(".editBlock");
var hamClickCount = 0;

var editBlockOpenAnim = {
  animation: "editBlockOpenAnim .3s cubic-bezier(.32,.47,.46,1.15) forwards",
};

var editBlockCloseAnim = {
  animation: "editBlockCloseAnim .3s cubic-bezier(.32,.47,.46,1.15) forwards",
};

hamBtn.onclick = () => {
  hamClickCount++;
  hamClickCount % 2 == 0
    ? Object.assign(editBlock.style, editBlockCloseAnim)
    : Object.assign(editBlock.style, editBlockOpenAnim);
};

// closing edit block
const cancelBtn = document.querySelector(".cancelBtn");

cancelBtn.onclick = () => {
  Object.assign(editBlock.style, editBlockCloseAnim);
  hamClickCount = 0;
};

// actual editing
const changeBtn = document.querySelector(".makeChangeBtn");
var colorValue = document.getElementById("colorInput").value;
var box = document.querySelectorAll(".box");

changeBtn.onclick = () => {
  colorChange();
  animTimeChange();
  Object.assign(editBlock.style, editBlockCloseAnim);
  hamClickCount = 0;
};

function colorChange() {
  var colorValue = document.getElementById("colorInput").value;

  if (colorValue == "") {
    colorValue = "#cbebf5";
  }

  var borderColor = {
    border: "3px solid " + colorValue,
  };

  box[0].style.border = borderColor.border;
  box[1].style.border = borderColor.border;
  box[2].style.border = borderColor.border;
  box[3].style.border = borderColor.border;
  box[4].style.border = borderColor.border;
  box[5].style.border = borderColor.border;
}

var animTimeValue = document.getElementById("inputAnimTime").value;
var block = document.querySelector(".main");

function animTimeChange() {
  const newLocal = "inputAnimTime";
  var animTimeValue = document.getElementById(newLocal).value;

  if (animTimeValue == "") {
    animTimeValue = "50s";
  }

  var boxAnim = {
    animation: `boxAnim ${animTimeValue}s linear infinite`,
  };

  Object.assign(block.style, boxAnim);
}
