// Code for selecting one chart/chart group from a number of chartgroups and making it ready to be displayed.

// By Jon Simonsen

$(function selectChart(){
  // possible charts to display
  var charts = ['gstart01.js', 'gstart02.js', 'hr_ssb.js'];
  var postChart = 'divmaker.js' // run after chart js to display the charts properly
  var num = document.getElementById('tot');

  // If number of pages is not initialized, do so
  if(num.innerHTML === '0'){
    num.innerHTML = charts.length;
  }

  // Determine what page (charts) to display
  var current = document.getElementById('curr');
  current.innerHTML = (current.innerHTML % parseInt(num.innerHTML, 10)) + 1;

  // Prepare the script for generating charts
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'JS/' + charts[current.innerHTML - 1]
  s.innerHTML = null;
  s.id = "charts"

  document.getElementById('scripts').innerHTML = ''
  document.getElementById('scripts').appendChild(s)

  // Prepare the script for making the charts ready to be displayed
  var p = document.createElement('script');
  p.type = 'text/javascript';
  p.src = 'JS/' + postChart
  p.innerHTML = null;
  p.id = "charts"

  document.getElementById('scripts').innerHTML = ''
  document.getElementById('scripts').appendChild(p)
});

function selectChart(){
  // possible charts to display
  var charts = ['gstart01.js', 'gstart02.js', 'hr_ssb.js'];
  var postChart = 'divmaker.js' // run after chart js to display the charts properly
  var num = document.getElementById('tot');

  // If number of pages is not initialized, do so
  if(num.innerHTML === '0'){
    num.innerHTML = charts.length;
  }

  // Determine what page (charts) to display
  var current = document.getElementById('curr');
  current.innerHTML = (current.innerHTML % parseInt(num.innerHTML, 10)) + 1;

  // Prepare the script for generating charts
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'JS/' + charts[current.innerHTML - 1]
  s.innerHTML = null;
  s.id = "charts"

  document.getElementById('scripts').innerHTML = ''
  document.getElementById('scripts').appendChild(s)

  // Prepare the script for making the charts ready to be displayed
  var p = document.createElement('script');
  p.type = 'text/javascript';
  p.src = 'JS/' + postChart
  p.innerHTML = null;
  p.id = "charts"

  document.getElementById('scripts').innerHTML = ''
  document.getElementById('scripts').appendChild(p)
}
