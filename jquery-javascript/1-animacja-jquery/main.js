document.getElementById("animateButton").addEventListener("click", function() {
    var square = document.getElementById("square");
    square.classList.add("animate");
  
    square.addEventListener("animationend", function() {
      square.classList.remove("animate");
      square.classList.add("changeColor");
  
      var h2 = document.createElement("h2");
      h2.innerText = "Animacja zakończona";
      square.appendChild(h2);
    }, { once: true });
  });
  