// Create a number of divs inside another div. They will have ids 'container1', 'container2' ...
// Should make the divs equal in height and filling the entire div
// as long as the height is divisible by 60 and there are less than 7 containers.

// By Jon Simonsen

var count = document.getElementById('count').innerHTML;   // Determines number of containers
console.log(count)
var h = parseInt(document.getElementById('display').style.height, 10) / count;  //height of each container
console.log(h)
var divid = 'container';  // Base for div ids
console.log(divid)
var disp = document.getElementById("display");
console.log(disp)
var container;

// Create containers and add them to the display
for(i=1;i<=count;i++){
  container = document.createElement("div");
  container.id = divid + i;
  container.style.width = "100%";
  container.style.height = h + 'px';
  console.log(container)
  disp.appendChild(container);
}
