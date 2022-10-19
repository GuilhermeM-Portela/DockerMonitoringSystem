
const containerDataBox = document.getElementById('container-data-box')
const containerInput = document.getElementById('cpu-per-container')

$.ajax({
  type: 'GET',
  url: '/getListContainer/',
  success: function (response) {
    // console.log(response)
    const container = response.data
    container.map(item => {
      const option = document.createElement('option')
      option.textContent = item.name
      option.setAttribute('class', 'dropdown-item')
      option.setAttribute('value', item.name)
      containerDataBox.appendChild(option)
    })
  },
  error: function (error) {
    console.log(error)
  }
})

containerInput.addEventListener('change', e => {
  console.log(e.target.value)
  const containerSelect = e.target.value
  const url = `/getHistoryContainer/${containerSelect}/cpu_per`
  // consumo_de_cpu_per_container(url)
  $.ajax({
    type: 'GET',
    url: `/getHistoryContainer/${containerSelect}/cpu_per`,
    success: function (response) {
      console.log(response)

    },
    error: function (error) {
      console.log(error)
    }
  })
})

function gera_cor(qtd = 1) {
  var bg_color = []
  var border_color = []
  for (let i = 0; i < qtd; i++) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    bg_color.push(`rgba(${r}, ${g}, ${b}, ${0.2})`)
    border_color.push(`rgba(${r}, ${g}, ${b}, ${1})`)
  }

  return [bg_color, border_color];

}


gradientChartOptionsConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  tooltips: {
    bodySpacing: 4,
    mode: "nearest",
    intersect: 0,
    position: "nearest",
    xPadding: 10,
    yPadding: 10,
    caretPadding: 10
  },
  responsive: true,
  scales: {
    yAxes: [{
      display: 0,
      gridLines: 0,
      ticks: {
        display: false
      },
      gridLines: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false
      }
    }],
    xAxes: [{
      display: 0,
      gridLines: 0,
      ticks: {
        display: false
      },
      gridLines: {
        zeroLineColor: "transparent",
        drawTicks: false,
        display: false,
        drawBorder: false
      }
    }]
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 15,
      bottom: 15
    }
  }
};

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

// function consumo_de_cpu_all(url) {
//     var chart_labels = ['60', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '0' ];
//     // var chart_data = [1.2, 70, 90, 70, 85, 60, 75, 60, 90, 80, 100, 100,12,14,12,70,12,60, 90, 80, 10, 100,50,14,40, 75, 80,72,72,62,54,100,12,14,12,2,12,14,14,12,12,12, 70, 90, 70, 85, 60, 75, 60, 90, 80, 100,60, 90, 80, 10, 100,12,14,90, 75, 20];
//     fetch(url, {
//       method: 'get',
//     }).then(function(result){
//       return result.json()
//     }).then(function(data){
//       console.log(Object.keys(data))

//     const ctx = document.getElementById('chartCpuBig').getContext('2d');
//     var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
//     gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
//     gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
//     gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
//     const myChart = new Chart(ctx, {
//         type: 'line',
//         data: {
//             labels: chart_labels,
//             datasets: [{
//                 label: "My First dataset",
//                 fill: true,
//                 tension: 0.2,
//                 backgroundColor: gradientStroke,
//                 borderColor: '#FA1701',
//                 borderWidth: 1,
//                 borderDash: [],
//                 borderDashOffset: 0.0,
//                 pointBackgroundColor: '#FA1701',
//                 pointBorderColor: 'rgba(255,255,255,0)',
//                 pointHoverBackgroundColor: '#FA1701',
//                 pointBorderWidth: 20,
//                 pointHoverRadius: 2,
//                 pointHoverBorderWidth: 15,
//                 pointRadius: 2,
//                 data: data['fkcp-logstash'],
//               }]
//         },
//         options: gradientChartOptionsConfiguration
//     });
//   })
// }


function consumo_de_cpu_all(url) {
    var chart_labels = ['60', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '0' ];
    const ctx = document.getElementById('chartCpuBig').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
    gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    fetch(url, {
      method: 'get',
    }).then(function(result){
      return result.json()
    }).then(function(data){
      let datasets = []
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: chart_labels,
            datasets: datasets
        },
        options: gradientChartOptionsConfiguration
    });
      Object.keys(data).forEach((element,index)=>{
        // console.log(data[element][0])
        datasets.push({
          label: element,
          fill: true,
          tension: 0.2,
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
          data: data[element][0],
        })
      })
      myChart.update()
  })
}

function consumo_de_cpu_server(url) {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];

  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {

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
          tension: 0.4,
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
          data: data.data[0],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function consumo_de_cpu_per_container(url) {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];

  const ctx = document.getElementById('chartCpuPerContainer').getContext('2d');
  var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
  gradientStroke.addColorStop(1, 'rgba(250,72,176,0.1)');
  gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.0)');
  gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          tension: 0.4,
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
          data: data.data[0],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function consumo_de_mem_per_container(url) {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];
  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {

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
          tension: 0.4,
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
          data: data.data[0],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function consumo_de_disk_per_container(url) {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];
  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {

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
          label: "Ubuntu",
          fill: true,
          tension: 0.4,
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
          data: data.data[0],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function consumo_de_net_per_container(url) {
  var chart_labels = ['Upload', 'Download'];
  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    // console.log(data.data[0])

    const ctx = document.getElementById('chartNetPerContainer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,238,4,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(250,238,5,0.0)'); //green colors
    gradientStroke.addColorStop(0, 'rgba(240,238,5,0)'); //green colors
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: chart_labels,
        datasets: [{
          label: "My First dataset",
          fill: true,
          tension: 0.4,
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
          data: [data.data[0], data.data[1]],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function consumo_de_mem_server(url) {
  var chart_labels = ['20', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];

  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {

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
          tension: 0.4,
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
          data: data.data[0],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}

function memUsedPerContainer(url) {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
  fetch(url, {
    method: 'get',
  }).then(function (result) {
    return result.json()
  }).then(function (data) {
    // console.log(data.data[0])

    const ctx = document.getElementById('chartUsedMemServer').getContext('2d');
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(250,104,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(250,12,76,0.15)');
    gradientStroke.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['MEM-USED', 'MEM-LIM'],
        datasets: [{
          label: "Ubuntu",
          fill: true,
          tension: 0.4,
          backgroundColor: gradientStroke,
          borderColor: "#FA9000",
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#FA9000',
          pointBorderColor: 'rgba(250,144,0,98)',
          pointHoverBackgroundColor: '#FA9000',
          pointBorderWidth: 20,
          pointHoverRadius: 2,
          pointHoverBorderWidth: 15,
          pointRadius: 2,
          data: [data.data[0], data.data[1]],
        }]
      },
      options: gradientChartOptionsConfiguration
    });
  })
}