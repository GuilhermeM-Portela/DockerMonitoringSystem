const dropdownCpuElement = document.getElementById('dropdown-cpu-per-container')
const dropdownMemElement = document.getElementById('dropdown-mem-per-container')
const dropdownNetElement = document.getElementById('dropdown-net-per-container')
const dropdownUsedMemElement = document.getElementById('dropdown-used-mem-per-container')
const dropdownAllContainerElement = document.getElementById('dropdown-all-container')
chartColors = ['rgb(250,12,69)','rgb(250, 119, 4)','rgb(240,238,5)','rgb(66,134,121)','rgb(29,140,248)','rgb(153, 102, 255)','rgb(231,233,237)','rgb(40,247,149)','rgb(15,209,214)','rgb(250,0,242)']


var chart_labels_20s = ['20s', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '0'];
var chart_labels_60s = ['60s', '', '', '', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '', '', '','','', '', '', '', '', '', '0' ];
$.ajax({
  type: 'GET',
  url: '/getListContainer/',
  success: function (response) {
    const container = response.data
    container.map(item => {
      const option = document.createElement('option')
      option.textContent = item.name
      option.setAttribute('class', 'dropdown-item')
      option.setAttribute('value', item.name)
      dropdownCpuElement.appendChild(option)
    })
  },
  error: function (error) {
    console.log(error)
  }
})
$.ajax({
  type: 'GET',
  url: '/getListContainer/',
  success: function (response) {
    const container = response.data
    container.map(item => {
      const option = document.createElement('option')
      option.textContent = item.name
      option.setAttribute('class', 'dropdown-item')
      option.setAttribute('value', item.name)
      dropdownMemElement.appendChild(option)
    })
  },
  error: function (error) {
    console.log(error)
  }
})
$.ajax({
  type: 'GET',
  url: '/getListContainer/',
  success: function (response) {
    const container = response.data
    container.map(item => {
      const option = document.createElement('option')
      option.textContent = item.name
      option.setAttribute('class', 'dropdown-item')
      option.setAttribute('value', item.name)
      dropdownNetElement.appendChild(option)
    })
  },
  error: function (error) {
    console.log(error)
  }
})
$.ajax({
  type: 'GET',
  url: '/getListContainer/',
  success: function (response) {
    const container = response.data
    container.map(item => {
      const option = document.createElement('option')
      option.textContent = item.name
      option.setAttribute('class', 'dropdown-item')
      option.setAttribute('value', item.name)
      dropdownUsedMemElement.appendChild(option)
    })
  },
  error: function (error) {
    console.log(error)
  }
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
    xPadding: 0,
    yPadding: 0,
    caretPadding: 0
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
        drawBorder: true
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
        drawBorder: true
      }
    }]
  },
  layout: {
    padding: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  plugins: {
    tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += context.parsed.y + '%'
                }
                return label;
            }
        }
    }
},
scales: {
  y: {
      ticks: {
          // Include a dollar sign in the ticks
          callback: function(value) {
              return value.toFixed(2) + '%';
          }
      }
  }
},
animation: {
  duration: 0
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
    bodySpacing: 6,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{

      gridLines: {
        drawBorder: true,
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
        drawBorder: true,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  },
  plugins: {
    tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';

                if (label) {
                    label += ': ';
                }
                if (context.parsed.y !== null) {
                    label += context.parsed.y + 'Kb'
                }
                return label;
            }
        }
    }
},
  scales: {
    y: {
        ticks: {
            // Include a dollar sign in the ticks
            callback: function(value, index, ticks) {
                return value + 'Kb';
            }
        }
    }
  }
};
gradientPieChartConfiguration = {
  maintainAspectRatio: false,
  legend: {
    display: false
  },

  tooltips: {
    backgroundColor: '#f5f5f5',
    titleFontColor: '#333',
    bodyFontColor: '#666',
    bodySpacing: 6,
    xPadding: 12,
    mode: "nearest",
    intersect: 0,
    position: "nearest"
  },
  responsive: true,
  scales: {
    yAxes: [{

      gridLines: {
        drawBorder: true,
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
        drawBorder: true,
        color: 'rgba(29,140,248,0.1)',
        zeroLineColor: "transparent",
      },
      ticks: {
        padding: 20,
        fontColor: "#9e9e9e"
      }
    }]
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: function(context) {
            let label = context.dataset.label || '';

            if (label) {
                label += ': ';
            }
            if (context.parsed.y !== null) {
                label += context.parsed + 'Mb'
            }
            return label;
        }
    }
    }
},
  scales: {
    y: {
      display: false,
   }
  }
};

  const ctxAllContainer = document.getElementById('chartAllContainer').getContext('2d');
  let datasets = []
  const ChartAllContainer = new Chart(ctxAllContainer, {
      type: 'line',
      data: {
          labels: chart_labels_60s,
          datasets: datasets
      },
      options: gradientChartOptionsConfiguration
  });

$.ajax({
  // All container
  url: `/getHistoryAllContainer/cpu_per`,
  success: function(data) {
  
  Object.keys(data).forEach((element,index)=>{
    datasets.push({
      label: element,
      fill: false,
      tension: 0.0,
      backgroundColor: chartColors[index],
      borderColor: chartColors[index],
      borderWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0,
      pointBackgroundColor: chartColors[index],
      pointBorderColor: 'rgba(255,255,255,0)',
      pointHoverBackgroundColor: chartColors[index],
      pointBorderWidth: 20,
      pointHoverRadius: 2,
      pointHoverBorderWidth: 15,
      pointRadius: 1.5,
      data: [],
    })
  })
  ChartAllContainer.update();
  }
});
  
// Grafico de CPU por server
const ctxCpuSever = document.getElementById('chartCpuServer').getContext('2d');
var gradientStrokeCpuSever = ctxCpuSever.createLinearGradient(0, 230, 0, 50);
gradientStrokeCpuSever.addColorStop(1, 'rgba(250,72,176,0.1)');
gradientStrokeCpuSever.addColorStop(0.4, 'rgba(250,12,76,0.0)');
gradientStrokeCpuSever.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
const ChartCpuSever = new Chart(ctxCpuSever, {
  type: 'line',
  data: {
    labels: chart_labels_20s,
    datasets: [{
      label: "Ubuntu",
      fill: true,
      tension: 0.0,
      backgroundColor: gradientStrokeCpuSever,
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
      pointRadius: 1.5,
      data: [],
    }]
  },
  options: gradientChartOptionsConfiguration
});

// Grafico de MEM por server
const ctxMemServer = document.getElementById('chartMemServer').getContext('2d');
var gradientStrokeMemServer = ctxMemServer.createLinearGradient(0, 230, 0, 50);
gradientStrokeMemServer.addColorStop(1, 'rgba(66,134,121,0.15)');
gradientStrokeMemServer.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
gradientStrokeMemServer.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
const ChartMemServer = new Chart(ctxMemServer, {
  type: 'line',
  data: {
    labels: chart_labels_20s,
    datasets: [{
      label: "Ubuntu",
      fill: true,
      tension: 0.0,
      backgroundColor: gradientStrokeMemServer,
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
      pointRadius: 1.5,
      data:[],
    }]
  },
  options: gradientChartOptionsConfiguration
});

// Grafico Disco por server
const ctxDisk = document.getElementById('chartDiskPerContainer').getContext('2d');
var gradientStrokeDisk = ctxDisk.createLinearGradient(0, 230, 0, 50);
gradientStrokeDisk.addColorStop(1, 'rgba(29,140,248,0.1)');
gradientStrokeDisk.addColorStop(0.4, 'rgba(29,140,248,0.0)');
gradientStrokeDisk.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
const ChartDisk = new Chart(ctxDisk, {
  type: 'line',
  data: {
    labels: chart_labels_20s,
    datasets: [{
      label: "Ubuntu",
      fill: true,
      tension: 0.0,
      backgroundColor: gradientStrokeDisk,
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
      pointRadius: 1.5,
      data: [],
    }]
  },
  options: gradientChartOptionsConfiguration
});

  // Grafico de Cpu por container
  const ctxCpu = document.getElementById('chartCpuPerContainer').getContext('2d');
  var gradientStrokeCpu = ctxCpu.createLinearGradient(0, 230, 0, 50);
  gradientStrokeCpu.addColorStop(1, 'rgba(250,72,176,0.1)');
  gradientStrokeCpu.addColorStop(0.4, 'rgba(250,12,76,0.0)');
  gradientStrokeCpu.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    
    const ChartCpu = new Chart(ctxCpu, {
      type: 'line',
      data: {
        labels: chart_labels_20s,
        datasets: [{
          label: [],
          fill: true,
          tension: 0.0,
          backgroundColor: gradientStrokeCpu,
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
          pointRadius: 1.5,
          data: [],
        }]
      },
      options: gradientChartOptionsConfiguration
    });


    // Grafico Mem por container  
    const ctxMem = document.getElementById('chartMemPerContainer').getContext('2d');
    var gradientStrokeMem = ctxMem.createLinearGradient(0, 230, 0, 50);
    gradientStrokeMem.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStrokeMem.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
    gradientStrokeMem.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
    const ChartMem = new Chart(ctxMem, {
      type: 'line',
      data: {
        labels: chart_labels_20s,
        datasets: [{
          label: [],
          fill: true,
          tension: 0.0,
          backgroundColor: gradientStrokeMem,
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
          pointRadius: 1.5,
          data: [],
        }]
      },
      options: gradientChartOptionsConfiguration
    });

    

    // Grafico Net por Container
    const ctxNet = document.getElementById('chartNetPerContainer').getContext('2d');
    var gradientStrokeNet= ctxNet.createLinearGradient(0, 230, 0, 50);
    gradientStrokeNet.addColorStop(1, 'rgba(250,238,4,0.1)');
    gradientStrokeNet.addColorStop(0.4, 'rgba(250,238,5,0.0)'); //green colors
    gradientStrokeNet.addColorStop(0, 'rgba(240,238,5,0)'); //green colors
    const ChartNet = new Chart(ctxNet, {
      type: 'bar',
      data: {
        labels: ['Upload', 'Download'],
        datasets: [{
          label: [],
          fill: true,
          tension: 0.0,
          backgroundColor: gradientStrokeNet,
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
          pointRadius: 1.5,
          data: [],
        }]
      },
      options: gradientBarChartConfiguration
    });



// Grafico de MEM por container
    const ctxUsedMem = document.getElementById('chartUsedMemServer').getContext('2d');
    var gradientStrokeUsedMem1 = ctxUsedMem.createLinearGradient(0, 230, 0, 50);
    gradientStrokeUsedMem1.addColorStop(1, 'rgba(250,104,0.15)');
    gradientStrokeUsedMem1.addColorStop(0.4, 'rgba(250,12,76,0.15)');
    gradientStrokeUsedMem1.addColorStop(0, 'rgba(250,12,69,0)'); //red colors
    var gradientStrokeUsedMem2 = ctxUsedMem.createLinearGradient(0, 230, 0, 50);
    gradientStrokeUsedMem2.addColorStop(1, 'rgba(250,152,0,0.15)');
    const ChartUsedMem = new Chart(ctxUsedMem, {
      type: 'doughnut',
      data: {
        labels: ['Mem-Used', 'Mem-Limit'],
        datasets: [{
          label: [],
          fill: true,
          tension: 0.0,
          backgroundColor: [gradientStrokeUsedMem1,gradientStrokeUsedMem2],
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
          pointRadius: 1.5,
          data: [],
        }]
      },
      options: gradientPieChartConfiguration
    });



var getData = function() {
  var dropdownCpuPerContainer = dropdownCpuElement.options[dropdownCpuElement.selectedIndex].text
  var dropdownMemPerContainer = dropdownMemElement.options[dropdownMemElement.selectedIndex].text
  var dropdownNetPerContainer = dropdownNetElement.options[dropdownNetElement.selectedIndex].text
  var dropdownUsedMemPerContainer = dropdownUsedMemElement.options[dropdownUsedMemElement.selectedIndex].text
  var dropdownAllContainer = dropdownAllContainerElement.options[dropdownAllContainerElement.selectedIndex].value

  $.ajax({
    // Cpu do servidor
    url: '/getServer/cpu_per',
    success: function(data) {
    var chart_data = data.data;
    ChartCpuSever.data.datasets[0].data = chart_data;
    ChartCpuSever.update();
    } 
  });
  $.ajax({
    // Mem do servidor
    url: '/getServer/mem_per',
    success: function(data) {
    var chart_data = data.data;
    ChartMemServer.data.datasets[0].data = chart_data;
    ChartMemServer.update();
    } 
  });
  $.ajax({
    // Disk do servidor
    url: '/getServer/disk_per',
    success: function(data) {
    var chart_data = data.data;
    ChartDisk.data.datasets[0].data = chart_data;
    ChartDisk.update();
    } 
  });
  $.ajax({
    // Cpu per container
    url: `/getHistoryContainer/${dropdownCpuPerContainer}/cpu_per`,
    success: function(data) {
    var chart_data = data.data;
    ChartCpu.data.datasets[0].data = chart_data;
    ChartCpu.data.datasets[0].label = dropdownCpuPerContainer
    ChartCpu.update();
    } 
  });
  $.ajax({
    // Mem per container
    url: `/getHistoryContainer/${dropdownMemPerContainer}/mem_per`,
    success: function(data) {
    var chart_data = data.data;
    ChartMem.data.datasets[0].data = chart_data;
    ChartMem.data.datasets[0].label = dropdownMemPerContainer
    ChartMem.update();
    } 
  });
  $.ajax({
    // Net per container
    url: `/getContainer/${dropdownNetPerContainer}/net_rx`,
    success: function(data) {
    var chart_data = [data.data[0], data.data[1]];
    ChartNet.data.datasets[0].data = chart_data;
    ChartNet.data.datasets[0].label = dropdownNetPerContainer
    ChartNet.update();
    } 
  });
  $.ajax({
    // Used Mem per container
    url: `/getContainer/${dropdownUsedMemPerContainer}/mem_used`,
    success: function(data) {
    var chart_data = [data.data[0], data.data[1]];
    ChartUsedMem.data.datasets[0].data = chart_data;
    ChartUsedMem.data.datasets[0].label = dropdownUsedMemPerContainer
    ChartUsedMem.update();
    } 
  });
  $.ajax({
    // All container
    url: `/getHistoryAllContainer/${dropdownAllContainer}`,
    success: function(data) {
    Object.keys(data).forEach((element,index)=>{
      var chart_data = data[element];
      // console.log(data[element])
      ChartAllContainer.data.datasets[index].data = chart_data
    })
    ChartAllContainer.update();
    }
  });

};

$('#print').click(function() {

  var w = document.getElementById("content").offsetWidth;
  var h = document.getElementById("content").offsetHeight;
  html2canvas(document.getElementById("content"), {
    dpi: 300, // Set to 300 DPI
    scale: 0, // Adjusts your resolution
    onrendered: function(canvas) {
      var img = canvas.toDataURL("image/jpeg", 1);
      var doc = new jsPDF('L', 'px', [w, h]);
      doc.addImage(img, 'JPEG', 0, 0, w, h);
      doc.save('Smc-Report.pdf');
    }
  });
});


setInterval(getData, 1000);