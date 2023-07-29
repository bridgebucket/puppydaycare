function copyText() {
  navigator.clipboard.writeText
  ("mc.puppydaycare.xyz");

  var popup = document.getElementById("popup"); 
  popup.classList.toggle("show");
}