
// Accordion Start
export const Accordion = ()=>{
  var acc = document.getElementsByClassName("accordion");
  var accCount;

for (accCount = 0; accCount < acc.length; accCount++) {
  acc[accCount].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display == "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    } 
  });
}
}

export const Active = ()=>{
var link = document.getElementsByClassName("link");
var linkCount;

for (linkCount = 0; linkCount < link.length; linkCount++) {
  // link[linkCount].classList.add("active")
  link[linkCount].addEventListener("click", function() {
    for (linkCount = 0; linkCount < link.length; linkCount++) {
        link[linkCount].classList.remove("active")
    }
    this.classList.add("active");
  });
}
}

export  const handleToggleDesplay =(e)=>{
  e.target.nextElementSibling.classList.toggle('hidden')
}
export  const handleToggleClass =(CLASS)=>{
  console.log(CLASS)
  e.target.nextElementSibling.classList.toggle(CLASS)
}