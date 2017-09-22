// Data from SSB
// Have not figured out how to read from file or grab directly from web yet,
// so including the entire json-stat object in the function.

// By Jon Simonsen

$(function () {
    var jstat = {
      "dataset": {
        "dimension": {
          "Havner": {
            "label": "havn",
            "category": {
              "index": {
                "TOS": 0
              },
              "label": {
                "TOS": "Tromsø"
              }
            }
          },
          "Retning": {
            "label": "retning",
            "category": {
              "index": {
                "10": 0,
                "20": 1
              },
              "label": {
                "10": "Til",
                "20": "Fra"
              }
            }
          },
          "ContentsCode": {
            "label": "statistikkvariabel",
            "category": {
              "index": {
                "Passasjerer": 0
              },
              "label": {
                "Passasjerer": "Passasjerer"
              },
              "unit": {
                "Passasjerer": {
                  "base": "personer",
                  "decimals": 0
                }
              }
            }
          },
          "Tid": {
            "label": "måned",
            "category": {
              "index": {
                "2017M01": 0,
                "2017M02": 1,
                "2017M03": 2,
                "2017M04": 3,
                "2017M05": 4,
                "2017M06": 5
              },
              "label": {
                "2017M01": "2017M01",
                "2017M02": "2017M02",
                "2017M03": "2017M03",
                "2017M04": "2017M04",
                "2017M05": "2017M05",
                "2017M06": "2017M06"
              }
            }
          },
          "id": [
            "Havner",
            "Retning",
            "ContentsCode",
            "Tid"
          ],
          "size": [
            1,
            2,
            1,
            6
          ],
          "role": {
            "metric": [
              "ContentsCode"
            ],
            "time": [
              "Tid"
            ]
          }
        },
        "label": "Havnestatistikk. Hurtigruten Bergen - Kirkenes. Passasjerer, etter havn, retning, statistikkvariabel og måned",
        "source": "Statistisk sentralbyrå",
        "updated": "2017-09-22T18:34:00Z",
        "value": [
          2131,
          4228,
          4692,
          2079,
          2591,
          6098,
          2047,
          4194,
          4347,
          2156,
          2384,
          3044
        ]
      }
    }

    var myChart = Highcharts.chart('container1', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Hurtigruten, Passengers to/from Tromsø 2017'
        },
        subtitle: {
            text: 'Source: Statistisk sentralbyrå'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Passengers'
            }
        },
        series: [{
            name: 'To',
            data: [JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M01'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M02'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M03'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M04'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M05'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '10', 'Tid' : '2017M06'} ).value]
        }, {
            name: 'From',
            data: [JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M01'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M02'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M03'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M04'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M05'} ).value,
            JSONstat(jstat).Dataset(0).Data( {'Retning' : '20', 'Tid' : '2017M06'} ).value]
            }]
        });
});

// Addition to fix other html objects
document.getElementById('count').innerHTML = '1'; //Number of graphs

// $(document).ready(function() {
//
//     var options = {
//         chart: {
//             renderTo: 'container',
//             type: 'bar'
//         },
//         title: {
//             text: 'Hurtigruten, Passengers to/from Tromsø 2017'
//         },
//         xAxis: {
//             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
//         },
//         yAxis: {
//             title: {
//                 text: 'Passengers'
//             }
//         },
//         series: [{}]
//     };
//
//     $.getJSON('json/hr_ssb.json', function(data) {
//       console.log(data)
//         //options.series[0].data = data['TOS']['10'];
//         //options.series[1].data = data['TOS']['20']
//         //var chart = new Highcharts.Chart(options);
//     });
//
// });
