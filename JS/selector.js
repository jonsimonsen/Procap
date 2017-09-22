var charts = ['gstart01.js', 'gstart02.js'];
console.log(charts)
var num = document.getElementById('tot');
console.log(num.innerHTML)

if(num.innerHTML === '0'){
  console.log('nonum')
  num.innerHTML = charts.length;
  console.log(num.innerHTML)
}

var current = document.getElementById('curr');
console.log(current.innerHTML)
current.innerHTML = (current.innerHTML % parseInt(num.innerHTML, 10)) + 1;
console.log(current.innerHTML)

var s = document.createElement('script');
s.type = 'text/javascript';
s.src = 'JS/' + charts[current.innerHTML - 1]
s.innerHTML = null;
s.id = "charts"

console.log(s)

document.getElementById('scripts').innerHTML = ''
document.getElementById('scripts').appendChild(s)
