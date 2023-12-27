let x = document.getElementById("icon");
let carsol = document.getElementById("carsol");
let card = document.querySelectorAll(".item img");
let son = document.getElementById("son")
let right = document.getElementById("right")
let left=document.getElementById("left");
x.addEventListener("click", function () { 
  carsol.style.display = "none";
})
let idx = 0;
for (let i = 0; i < card.length; i++) {
  card[i].setAttribute("idx", i);
  card[i].addEventListener("click", function (e) { 
    idx = e.target.getAttribute("idx");
    son.style.backgroundImage=`url(${e.target.src})`
    carsol.style.display = "flex";
  })
}
right.addEventListener("click",demoTwo);
function demoTwo() {
  idx++;
  idx %= card.length;
  son.style.backgroundImage = `url(${card[idx].src})`
}
left.addEventListener("click", demoOne);
function demoOne () {
  idx--;
  if(idx<0)idx=card.length-1;
  son.style.backgroundImage = `url(${card[idx].src})`
}
document.addEventListener("click", function (e) {
  if (e.target == carsol) {
    carsol.style.display = "none";
  }
})
addEventListener("keyup", function (e) {
  if (e.key == 'ArrowLeft') demoOne();
  else if (e.key == 'ArrowRight') demoTwo();
  else if (e.key == ' ') carsol.style.display = "none";
  console.log(e)
})