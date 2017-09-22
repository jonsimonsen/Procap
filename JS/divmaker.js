var count = document.getElementById('count').value;
var h = document.getElementById('display').style.height / count;
var divid = 'container';
var disp = document.getElementById("display");
var container;

for(i=1;i<=count;i++){
  container = document.createElement("div");
  container.id = divid + i;
  container.style.width = "100%";
  container.style.height = h;
  disp.appendChild(container);
}

// var container = document.createElement("div");
// container.id = 'container'
// container.style.width = "100%"
// container.style.height = "200px"
//
// document.getElementById("display").appendChild(container);
