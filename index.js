window.addEventListener("DOMContentLoaded", function() {
  this.button = document.getElementById("button");
  this.textf = document.getElementById("poletext");
  this.messages = document.getElementById("messages");
  textf.addEventListener(
    "keyup",
    function(event) {
      if (event.keyCode == 13) {
        sendMess(this.textf.value);
      }
    }.bind(this)
  );
  button.addEventListener(
    "click",
    function(event) {
      sendMess(this.textf.value);
    }.bind(this)
  );
});
function sendMess(text) {
  var newMess = document.createElement("div");
  newMess.className = "meska";
  var Date1 = document.createElement("div");
  newMess.innerHTML = text;

  this.textf.value = "";
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const dateTime = date + " " + time;
  Date1.className = "Date1";
  Date1.innerHTML = dateTime;
  newMess.appendChild(Date1);
  this.messages.appendChild(newMess);
}
