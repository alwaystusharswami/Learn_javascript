let body = document.body;
// console.log(body);

const buttons = document.querySelectorAll(".button");
// console.log(buttons);
buttons.forEach(function (button) {
  // console.log(button)
  button.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    switch (e.target.id) {
      case "red":
        body.style.color = "black";
        body.style.backgroundColor = "red";
        break;
      case "yellow":
        body.style.color = "black";
        body.style.backgroundColor = "yellow";

        break;
      case "blue":
        body.style.color = "black";
        body.style.backgroundColor = "blue";
        break;
      case "pink":
        body.style.color = "black";
        body.style.backgroundColor = "pink";
        break;
      case "black":
        body.style.backgroundColor = "black";
        body.style.color = "white";
        break;
      case "green":
        body.style.color = "black";
        body.style.backgroundColor = "green";
        break;
      case"white":
        body.style.color = "black";
        body.style.backgroundColor = "#fff";
        break;
    }
  });
});
