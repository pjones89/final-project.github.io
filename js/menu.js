function menuButton() {
    var x = document.getElementById("menulinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  // the following code has been taken (and somewhat modified) from the codepen provided in week 4: "codepen.io/blazzard-jason/pen/gmGxaj"
window.onresize = () => {
    let x = document.getElementById("menu");
    if (window.innerWidth >= 40) {
        x.style.display = "inline";
    } else {
        x.style.display = "none"
    }
}