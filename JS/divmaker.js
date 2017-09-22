var count = document.getElementById('count').innerHTML;
console.log(count)
var h = parseInt(document.getElementById('display').style.height, 10) / count;
console.log(h)
var divid = 'container';
console.log(divid)
var disp = document.getElementById("display");
console.log(disp)
var container;

for(i=1;i<=count;i++){
  container = document.createElement("div");
  container.id = divid + i;
  container.style.width = "100%";
  container.style.height = h + 'px';
  console.log(container)
  disp.appendChild(container);
}

// var container = document.createElement("div");
// container.id = 'container'
// container.style.width = "100%"
// container.style.height = "200px"
//
// document.getElementById("display").appendChild(container);
