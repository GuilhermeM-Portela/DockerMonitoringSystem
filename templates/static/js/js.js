console.log("teste")

gradientBarChartConfiguration = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{

        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 60,
          suggestedMax: 120,
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }],

      xAxes: [{

        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }]
    }
  };
  gradientChartOptionsConfigurationWithTooltipGreen = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },

    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: "nearest",
      intersect: 0,
      position: "nearest"
    },
    responsive: true,
    scales: {
      yAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(29,140,248,0.0)',
          zeroLineColor: "transparent",
        },
        ticks: {
          suggestedMin: 50,
          suggestedMax: 125,
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }],

      xAxes: [{
        barPercentage: 1.6,
        gridLines: {
          drawBorder: false,
          color: 'rgba(0,242,195,0.1)',
          zeroLineColor: "transparent",
        },
        ticks: {
          padding: 20,
          fontColor: "#9e9e9e"
        }
      }]
    }
  };

function consumo_de_cpu_all() {
    var chart_labels = ['60', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '0' ];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14,100,12,14,12,2,12,14,14,12,12,12,14,100,12,14,12,2,12,14,14,12,12,12, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110,];
 
   
    const ctx = document.getElementById('chartCpuBig').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
    gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#FA1701',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#FA1701',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#FA1701',
                pointBorderWidth: 20,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}

function consumo_de_cpu_server() {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
  var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14];
 
  const ctx = document.getElementById('chartCpuServer').getContext('2d');
  var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
    gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: chart_labels,
          datasets: [{
              label: "Ubuntu",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: '#FA1701',
              borderWidth: 1,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: '#FA1701',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#FA1701',
              pointBorderWidth: 20,
              pointHoverRadius: 2,
              pointHoverBorderWidth: 15,
              pointRadius: 2,
              data: chart_data,
            }]
      },
      options: gradientBarChartConfiguration
  });
}
// function consumo_de_cpu_server() {
//     var chart_labels = ['20s', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '','0s'];
//     var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 10, 100,12,14,12,2,12,14,14];
//     // fetch(url, {
//     //   method: 'get',
//     // }).then(function(result){
//     //   return result.json()
//     // }).then(function(data){


//     const ctx = document.getElementById('chartCpuServer').getContext('2d');
//     var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
//     gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
//     gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
//     gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: chart_labels,
//             datasets: [{
//                 label: "Ubuntu",
//                 fill: true,
//                 backgroundColor: gradientStroke,
//                 borderColor: '#f96332',
//                 borderWidth: 1,
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 pointBackgroundColor: '#f96332',
//                 pointBorderColor: 'rgba(255,255,255,0)',
//                 pointHoverBackgroundColor: '#f96332',
//                 pointBorderWidth: 20,
//                 pointHoverRadius: 1,
//                 pointHoverBorderWidth: 15,
//                 pointRadius: 2,
//                 data: chart_data,
//               }]
//         },
//         options: gradientBarChartConfiguration
//     });
//   // })
// }

function consumo_de_cpu_per_container() {
    var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 10, 100,12,14,12,2,12,14,14];
   
    const ctx = document.getElementById('chartCpuPerContainer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
    gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#FA1701',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#FA1701',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#FA1701',
                pointBorderWidth: 20,
                pointHoverRadius: 1,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}

function consumo_de_mem_per_container() {
    var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14];
   
    const ctx = document.getElementById('chartMemPerContainer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#00d6b4',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#00d6b4',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#00d6b4',
                pointBorderWidth: 20,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}

function consumo_de_disk_per_container() {
    var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14];
   
    const ctx = document.getElementById('chartDiskPerContainer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(29,140,248,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
    gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#1f8ef1',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#1f8ef1',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#1f8ef1',
                pointBorderWidth: 20,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}

function consumo_de_net_per_container() {
    var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14];
   
    const ctx = document.getElementById('chartNetPerContainer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,238,4,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,238,5,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(240,238,5,0)'); //green colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "My First dataset",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#F0EE05',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#F0EE05',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#F0EE05',
                pointBorderWidth: 20,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}

function consumo_de_mem_server() {
    var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '0'];
    var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100,12,14,12,2,12,14,14];
   
    const ctx = document.getElementById('chartMemServer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: [{
                label: "Ubuntu",
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#00d6b4',
                borderWidth: 1,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#00d6b4',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#00d6b4',
                pointBorderWidth: 20,
                pointHoverRadius: 2,
                pointHoverBorderWidth: 15,
                pointRadius: 2,
                data: chart_data,
              }]
        },
        options: gradientBarChartConfiguration
    });
}