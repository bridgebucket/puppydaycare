document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
}

function copyText() {
  navigator.clipboard.writeText
  ("mc.puppydaycare.xyz");

  var popup = document.getElementById("popup"); 
  popup.classList.toggle("show");
}
