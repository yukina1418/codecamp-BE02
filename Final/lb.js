document.write("<script src='main.js'></script>");

const sendMessage = () => {
  document
    .getElementById("sendMessage")
    .setAttribute("style", "cursor: Pointer;");
  document.getElementById("sendMessage").style.backgroundColor = "#FFFFFF";
  document.getElementById("sendMessage").style.color = "#0068ff";
  document.getElementById("sendMessage").disabled = false;
};

const end = () => {
  document.getElementById("end").setAttribute("style", "cursor: Pointer;");
  document.getElementById("end").style.backgroundColor = "#0068ff";
  document.getElementById("end").style.color = "#FFFFFF";
  document.getElementById("end").disabled = false;
};

const reset = () => {
  document.getElementById("otp").innerText = "000000";
  document.getElementById("timeLimit").innerText = "03:00";
  document
    .getElementById("end")
    .setAttribute("style", "background-color:none;");
  document.getElementById("end").disabled = true;
};
const signUpButton = () => {
  document.getElementById("signUpButton").disabled = false;
  document.getElementById("signUpButton").style.backgroundColor = "#FFFFFF";
  document.getElementById("signUpButton").style.color = "#0068ff";
  document.getElementById("signUpButton").style.border = "1px solid #0068ff";
};
