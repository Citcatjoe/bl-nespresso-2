(function($){

    window.scrollTo(0, 0);

    



    var chartNikolaDone = false;
    var chartBitcoinDone = false;
    var chartDocmorrisDone = false;
    

    
    var optionsNikola = {
        series: [
        {
          name: "Open",
          data: [  2.44,  3.23,  3.09,  2.97,  2.99,  2.74,  2.22,  2.18,  1.98,  1.92,  1.6,  1.9,  1.83,  1.98,  1.74,  1.69,  1.48,  1.43,  1.3,  1.23,  1.35,  1.23,  1.28,  1.28,  1.18,  1.08,  1.16,  1.06,  1.03,  0.92,  0.89,  0.91,  0.87,  1.33]

        },
        {
          name: "High",
          data: [  2.80,  3.28,  3.10,  3.71,  3.20,  2.75,  2.34,  2.20,  2.17,  1.99,  1.85,  1.91,  2.07,  2.03,  1.99,  1.78,  1.54,  1.43,  1.32,  1.41,  1.35,  1.34,  1.32,  1.29,  1.23,  1.20,  1.17,  1.07,  1.03,  0.93,  0.91,  0.91,  1.19,  1.38]


        },
        {
          name: "Low",
          data: [  2.34,  2.95,  2.80,  2.86,  2.50,  2.07,  2.10,  1.90,  1.90,  1.80,  1.57,  1.78,  1.80,  1.87,  1.71,  1.47,  1.34,  1.31,  1.18,  1.22,  1.17,  1.20,  1.21,  1.15,  1.15,  1.06,  1.10,  1.01,  0.88,  0.81,  0.83,  0.85,  0.86,  1.15]

        },
        {
          name: "Close",
          data: [  2.67,  3.12,  3.02,  3.40,  2.50,  2.39,  2.21,  1.94,  1.96,  1.95,  1.82,  1.91,  1.94,  1.87,  1.96,  1.51,  1.42,  1.32,  1.23,  1.31,  1.24,  1.30,  1.27,  1.18,  1.18,  1.17,  1.11,  1.04,  0.88,  0.91,  0.91,  0.87,  1.15,  1.19]

        }
      ],
        chart: {
          height: '100%',
          type: 'line',
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1000,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          },
          dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        }
      },
      colors: ['#77C4C2', '#913E5F', '#C477B2', '#1A58AC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: '.',
        align: 'left',
        style: {
          color:  '#F3F7F7'
        },
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          }
        }
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      xaxis: {
        tickAmount: 4,
        categories: [
          "31.07",
          "01.08",
          "02.08",
          "03.08",
          "04.08",
          "07.08",
          "08.08",
          "09.08",
          "10.08",
          "11.08",
          "14.08",
          "15.08",
          "16.08",
          "17.08",
          "18.08",
          "21.08",
          "22.08",
          "23.08",
          "24.08",
          "25.08",
          "28.08",
          "29.08",
          "30.08",
          "31.08",
          "01.09",
          "05.09",
          "06.09",
          "07.09",
          "08.09",
          "11.09",
          "12.09",
          "13.09",
          "14.09",
          "15.09"
        ]
        // title: {
        //   text: 'Month'
        // }
      },
      yaxis: {
        decimalsInFloat: 0,
        title: {
          text: 'Valeur convertie en CHF'
        }
          // min: 1,
          // max: 5
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -35,
        offsetX: -5
      }
    };
    var chartNikola = new ApexCharts(document.querySelector("#chart-nikola"), optionsNikola);

    var optionsBitcoin = {
        series: [
        {
          name: "Open",
          data: [29278.31, 29230.87, 29704.15, 29161.81, 29174.38, 29075.39, 29043.7, 29038.51, 29180.02, 29766.7, 29563.97, 29424.9, 29399.79, 29416.59, 29283.26, 29408.05, 29169.07, 28699.8, 26636.08, 26047.83, 26096.86, 26188.69, 26130.75, 26040.47, 26431.52, 26163.68, 26047.23, 26008.24, 26089.62, 26102.49, 27726.08, 27301.93, 25934.02, 25800.91, 25869.47, 25968.17, 25814.96, 25783.93, 25748.31, 26245.21, 25905.43, 25895.21, 25831.71, 25160.66, 25837.55, 26228.28, 26533.82, 26606.2, 26568.39]
        },
        {
          name: "High",
          data: [  29489.87,  29675.73,  29987.99,  29375.71,  29302.08,  29102.46,  29160.82,  29244.28,  30176.80,  30093.44,  29688.56,  29517.77,  29465.11,  29441.43,  29660.25,  29439.12,  29221.98,  28745.95,  26808.20,  26249.45,  26260.68,  26220.20,  26135.51,  26786.90,  26554.91,  26248.10,  26107.38,  26165.37,  26198.58,  28089.34,  27760.16,  27456.08,  26125.87,  25970.29,  26087.15,  26081.53,  25858.38,  25953.02,  26409.30,  26414.01,  25921.98,  25978.13,  25883.95,  26451.94,  26376.11,  26774.62,  26840.50,  26754.77,  26568.39]

        },
        {
          name: "Low",
          data: [
            29131.58,
            28657.02,
            28946.51,
            28959.49,
            28885.34,
            28957.80,
            28963.83,
            28724.14,
            29113.81,
            29376.80,
            29354.45,
            29253.52,
            29357.59,
            29265.81,
            29124.11,
            29088.85,
            28701.78,
            25409.11,
            25668.92,
            25802.41,
            26004.31,
            25846.09,
            25520.73,
            25804.99,
            25914.93,
            25786.81,
            25983.88,
            25965.10,
            25880.60,
            25912.63,
            27069.21,
            25752.93,
            25362.61,
            25753.09,
            25817.03,
            25657.03,
            25590.99,
            25404.36,
            25608.20,
            25677.48,
            25810.49,
            25640.26,
            24930.30,
            25133.08,
            25781.12,
            26171.45,
            26240.70,
            26473.89,
            26452.37
          ]
        },
        {
          name: "Close",
          data: [
  29230.11,
  29675.73,
  29151.96,
  29178.68,
  29074.09,
  29042.13,
  29041.86,
  29180.58,
  29765.49,
  29561.49,
  29429.59,
  29397.71,
  29415.96,
  29282.91,
  29408.44,
  29170.35,
  28701.78,
  26664.55,
  26049.56,
  26096.21,
  26189.58,
  26124.14,
  26031.66,
  26431.64,
  26162.37,
  26047.67,
  26008.46,
  26089.69,
  26106.15,
  27727.39,
  27297.27,
  25931.47,
  25800.72,
  25868.80,
  25969.57,
  25812.42,
  25779.98,
  25753.24,
  26240.20,
  25905.65,
  25895.68,
  25832.23,
  25162.65,
  25833.34,
  26228.32,
  26539.67,
  26608.69,
  26568.28,
  26558.09
]
        }
      ],
        chart: {
          height: '100%',
          type: 'line',
          animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 1000,
              animateGradually: {
                  enabled: true,
                  delay: 150
              },
              dynamicAnimation: {
                  enabled: true,
                  speed: 350
              }
          },
          dropShadow: {
            enabled: false,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
        },
        toolbar: {
          show: false,
          tools: {
            download: true,
            selection: false,
            zoom: true,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        }
      },
      colors: ['#77C4C2', '#913E5F', '#C477B2', '#1A58AC'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: '.',
        align: 'left',
        style: {
          color:  '#F3F7F7'
        },
      },
      grid: {
        borderColor: '#e7e7e7',
        row: {
          colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return val
          }
        }
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      xaxis: {
        tickAmount: 4,
        categories: [
            "31.07",
            "01.08",
            "02.08",
            "03.08",
            "04.08",
            "05.08",
            "06.08",
            "07.08",
            "08.08",
            "09.08",
            "10.08",
            "11.08",
            "12.08",
            "13.08",
            "14.08",
            "15.08",
            "16.08",
            "17.08",
            "18.08",
            "19.08",
            "20.08",
            "21.08",
            "22.08",
            "23.08",
            "24.08",
            "25.08",
            "26.08",
            "27.08",
            "28.08",
            "29.08",
            "30.08",
            "31.08",
            "01.09",
            "02.09",
            "03.09",
            "04.09",
            "05.09",
            "06.09",
            "07.09",
            "08.09",
            "09.09",
            "10.09",
            "11.09",
            "12.09",
            "13.09",
            "14.09",
            "15.09",
            "16.09",
            "17.09"
          ]
        // title: {
        //   text: 'Month'
        // }
      },
      yaxis: {
        decimalsInFloat: 0,
        title: {
          text: 'Valeur convertie en CHF'
        },
          min: 24000,
          max: 30400
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -35,
        offsetX: -5
      }
    };
    var chartBitcoin = new ApexCharts(document.querySelector("#chart-bitcoin"), optionsBitcoin);


    var optionsDocmorris = {
      series: [
      {
        name: "Open",
        data: [  51.75,  53.80,  48.80,  49.20,  49.58,  49.00,  49.88,  49.34,  49.40,  48.96,  50.80,  51.45,  49.40,  53.85,  62.05,  64.65,  62.95,  63.25,  65.85,  65.70,  65.00,  66.50]


      },
      {
        name: "High",
        data: [53.80, 55.10, 50.00, 50.60, 51.20, 50.40, 52.15, 50.80, 49.56, 51.40, 51.85, 51.75, 55.00, 61.70, 64.60, 68.15, 63.95, 65.75, 66.40, 66.85, 66.70, 67.20]


      },
      {
        name: "Low",
        data: [51.75, 48.54, 47.04, 49.14, 49.40, 49.00, 49.00, 49.02, 47.70, 48.96, 50.40, 50.20, 47.98, 53.75, 60.95, 61.10, 62.20, 63.25, 64.70, 65.05, 64.85, 64.95]

      },
      {
        name: "Close",
        data: [53.30, 49.00, 49.60, 50.25, 49.74, 49.78, 49.00, 49.46, 49.24, 51.00, 51.50, 50.35, 54.30, 60.25, 63.50, 62.80, 63.05, 65.00, 65.95, 65.05, 66.05, 66.45]

      }
    ],
      chart: {
        height: '100%',
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
      },
      toolbar: {
        show: false,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        }
      }
    },
    colors: ['#77C4C2', '#913E5F', '#C477B2', '#1A58AC'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '.',
      align: 'left',
      style: {
        color:  '#F3F7F7'
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    },
    xaxis: {
      tickAmount: 4,
      categories: [
        "31.07",
        "02.08",
        "03.08",
        "04.08",
        "07.08",
        "08.08",
        "09.08",
        "10.08",
        "11.08",
        "14.08",
        "15.08",
        "16.08",
        "17.08",
        "18.08",
        "21.08",
        "22.08",
        "23.08",
        "24.08",
        "25.08",
        "28.08",
        "29.08",
        "30.08"
      ]
      
      // title: {
      //   text: 'Month'
      // }
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: 'Valeur convertie en CHF'
      }
        // min: 1,
        // max: 5
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -35,
      offsetX: -5
    }
    };
    var chartDocmorris = new ApexCharts(document.querySelector("#chart-docmorris"), optionsDocmorris);

    var optionsWalmart = {
      series: [
      {
        name: "Open",
        data: [159.96, 159.95, 158.53, 159.02, 159.76, 159.5, 160.99, 160.91, 160.79, 160.55, 162, 159.54, 159.88, 160.9, 155.31, 157.63, 156.97, 156.61, 158.13, 157.18, 157.86, 159, 160.4, 161.12, 162.87, 161.85, 160.4, 162, 163.48, 164, 164.5, 164.93, 165]



      },
      {
        name: "High",
        data: [160.64, 160.45, 160.43, 159.5, 160.25, 161.21, 161.62, 162.10, 161.75, 161.83, 162.78, 160.79, 160.97, 161.14, 159.67, 158.84, 157.31, 158.40, 159.23, 158.04, 158.83, 160.23, 161.29, 162.99, 162.96, 162.80, 162.17, 163.48, 163.86, 164.48, 164.93, 165.85, 165.74]



      },
      {
        name: "Low",
        data: [158.91, 158.96, 158.53, 158.51, 157.96, 159.11, 159.51, 160.71, 160.03, 160.10, 159.18, 158.92, 158.37, 155.02, 155.31, 157.04, 156.24, 156.51, 156.82, 156.54, 157.86, 158.86, 159.92, 160.96, 160.15, 160.18, 159.91, 161.49, 163.07, 163.66, 164.04, 164.37, 164.41]


      },
      {
        name: "Close",
        data: [159.86, 159.11, 159.22, 159.26, 158.34, 160.49, 160.65, 160.91, 160.26, 161.20, 160.00, 159.18, 159.26, 155.69, 157.93, 157.51, 157.01, 158.10, 156.89, 157.82, 158.72, 160.05, 161.20, 162.61, 161.57, 160.27, 161.47, 163.47, 163.77, 164.34, 164.52, 164.56, 165.25]


      }
    ],
      chart: {
        height: '100%',
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
      },
      toolbar: {
        show: false,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        }
      }
    },
    colors: ['#77C4C2', '#913E5F', '#C477B2', '#1A58AC'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '.',
      align: 'left',
      style: {
        color:  '#F3F7F7'
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    },
    xaxis: {
      tickAmount: 4,
      categories: [
        "31.07",
        "01.08",
        "02.08",
        "03.08",
        "04.08",
        "07.08",
        "08.08",
        "09.08",
        "10.08",
        "11.08",
        "14.08",
        "15.08",
        "16.08",
        "17.08",
        "18.08",
        "21.08",
        "22.08",
        "23.08",
        "24.08",
        "25.08",
        "28.08",
        "29.08",
        "30.08",
        "31.08",
        "01.09",
        "05.09",
        "06.09",
        "07.09",
        "08.09",
        "11.09",
        "12.09",
        "13.09",
        "14.09"
      ]
      
      
      // title: {
      //   text: 'Month'
      // }
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: 'Valeur convertie en CHF'
      }
        // min: 1,
        // max: 5
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -35,
      offsetX: -5
    }
    };
    var chartWalmart = new ApexCharts(document.querySelector("#chart-walmart"), optionsWalmart);
    

    var optionsTesla = {
      series: [
      {
        name: "Open",
        data: [267.48, 266.26, 255.57, 252.04, 260.97, 251.45, 247.45, 250.87, 245.40, 241.77, 235.70, 238.73, 228.02, 226.06, 214.12, 221.55, 240.25, 229.34, 238.66, 231.31, 242.58, 238.58, 254.20, 255.98, 257.26, 245.00, 255.14, 245.07, 251.22, 264.27, 270.76, 270.07, 271.32]




      },
      {
        name: "High",
        data: [269.08, 266.47, 259.52, 260.49, 264.77, 253.65, 250.92, 251.10, 251.80, 243.79, 240.66, 240.50, 233.97, 226.74, 217.58, 232.13, 240.82, 238.98, 238.92, 239.00, 244.38, 257.48, 260.51, 261.18, 259.08, 258.00, 255.39, 252.81, 256.52, 274.85, 278.39, 274.98, 276.71]




      },
      {
        name: "Low",
        data: [263.78, 260.25, 250.49, 252.00, 253.11, 242.76, 245.01, 241.90, 243.00, 238.02, 233.75, 232.61, 225.38, 218.83, 212.36, 220.58, 229.55, 229.29, 228.18, 230.35, 235.35, 237.77, 250.59, 255.05, 242.01, 244.86, 245.06, 243.27, 246.67, 260.61, 266.60, 268.10, 270.42]



      },
      {
        name: "Close",
        data: [267.43, 261.07, 254.11, 259.32, 253.86, 251.45, 249.70, 242.19, 245.34, 242.65, 239.76, 232.96, 225.60, 219.22, 215.49, 231.28, 233.19, 236.86, 230.04, 238.59, 238.82, 257.18, 256.90, 258.08, 245.01, 256.49, 251.92, 251.49, 248.50, 273.58, 267.48, 271.30, 276.04]



      }
    ],
      chart: {
        height: '100%',
        type: 'line',
        animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 1000,
            animateGradually: {
                enabled: true,
                delay: 150
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
        },
        dropShadow: {
          enabled: false,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
      },
      toolbar: {
        show: false,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        }
      }
    },
    colors: ['#77C4C2', '#913E5F', '#C477B2', '#1A58AC'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 3
    },
    title: {
      text: '.',
      align: 'left',
      style: {
        color:  '#F3F7F7'
      },
    },
    grid: {
      borderColor: '#e7e7e7',
      row: {
        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5
      },
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return val
        }
      }
    },
    markers: {
      hover: {
        sizeOffset: 5
      }
    },
    xaxis: {
      tickAmount: 4,
      categories: [
        "31.07",
        "01.08",
        "02.08",
        "03.08",
        "04.08",
        "07.08",
        "08.08",
        "09.08",
        "10.08",
        "11.08",
        "14.08",
        "15.08",
        "16.08",
        "17.08",
        "18.08",
        "21.08",
        "22.08",
        "23.08",
        "24.08",
        "25.08",
        "28.08",
        "29.08",
        "30.08",
        "31.08",
        "01.09",
        "05.09",
        "06.09",
        "07.09",
        "08.09",
        "11.09",
        "12.09",
        "13.09",
        "14.09"
      ]
      
      
      // title: {
      //   text: 'Month'
      // }
    },
    yaxis: {
      decimalsInFloat: 0,
      title: {
        text: 'Valeur convertie en CHF'
      }
        // min: 1,
        // max: 5
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -35,
      offsetX: -5
    }
    };
    var chartTesla = new ApexCharts(document.querySelector("#chart-tesla"), optionsTesla);
    

    // $( "p" ).on( "click", function() {
      
    //   chartBitcoin.render();
    //   chartDocmorris.render();
      // chart.hideSeries('Open');
      //chart.hideSeries('Low');
      // chart.hideSeries('High');
      // chart.hideSeries('Close');
      // setTimeout(function() { 
      //   chart.hideSeries('Low');
      //   chart.hideSeries('High');
      //   chart.hideSeries('Close');
      // }, 2000);
    // } );






    new jBox('Tooltip', {
        attach: '.tooltip',
        trigger: 'click',
        closeOnMouseleave: false,
        closeButton: true,
        maxWidth: 350,
        position: {x: 'center', y: 'bottom'},
        offset: {x: 0, y: 10},
        animation: 'move'
    });
    

  
	
    

    // INIT CONTROLLER
	  var controller = new ScrollMagic.Controller();

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    var $opening = $('#opening');
    var $graph = $opening.find('#opening-graph');
    var $line = $graph.find('#opening-graph-line');
    var $pig = $opening.find('#opening-center');
    var $pigEyeOpen = $opening.find('#opening-center-eye-open');
    var $pigEyeClose = $opening.find('#opening-center-eye-close');
    var $coin = $pig.find('#opening-center-coin');
    var $hand = $opening.find('#opening-hand');
    var $screen = $hand.find('#opening-hand-phone-screen-bg');
    var $menu = $opening.find('#menu');
    var $btn1 = $menu.find('#btn1');
    var $btn2 = $menu.find('#btn2');
    var $btn3 = $menu.find('#btn3');
    var $btn4 = $menu.find('#btn4');
    var $btnPass = $opening.find('#btn-pass');
    var openingTl = new TimelineMax({ paused: true })
        .to($opening, 1, { autoAlpha: 1, y: "0px", ease: Power4.easeInOut })
        .to($screen, 0.500, { fill: '#469190', ease: Power4.easeInOut })
        .to($pig, 0.500, { autoAlpha: 1, y: "-=20px", ease: Power4.easeInOut })
        .to($graph, 0.500, { autoAlpha: 1, y: "0px", ease: Power4.easeInOut }) ;

    var pigBounceTl = new TimelineMax({ paused: true, repeat: 0 })
        .to($coin, 0.200, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($coin, 0.5, { autoAlpha: 1, y: "+=90px", ease: Power4.easeInOut }, "-=0.200")
        .to($pig, 0.2, { scaleY: 0.8, ease:Bounce.easeInOut }, "-=0.3")
        .to($pig, 0.2, { scaleY: 1, ease:Bounce.easeInOut }, "-=0.2")
        .to($pigEyeOpen, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($pigEyeClose, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")

        .to($coin, 0, { autoAlpha: 0, y: "0px", ease: Power4.easeInOut })
        .to($pigEyeOpen, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($pigEyeClose, 0, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($coin, 0.5, { autoAlpha: 1, y: "+=90px", ease: Power4.easeInOut })
        .to($pig, 0.2, { scaleY: 0.8, ease:Bounce.easeInOut }, "-=0.3")
        .to($pig, 0.2, { scaleY: 1, ease:Bounce.easeInOut }, "-=0.2")
        .to($pigEyeOpen, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($pigEyeClose, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")

        .to($coin, 0, { autoAlpha: 0, y: "0px", ease: Power4.easeInOut })
        .to($pigEyeOpen, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($pigEyeClose, 0, { autoAlpha: 0, ease: Power4.easeInOut })
        .to($coin, 0.5, { autoAlpha: 1, y: "+=90px", ease: Power4.easeInOut })
        .to($pig, 0.2, { scaleY: 0.8, ease:Bounce.easeInOut }, "-=0.3")
        .to($pig, 0.2, { scaleY: 1, ease:Bounce.easeInOut }, "-=0.2")
        .to($pigEyeOpen, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
        .to($pigEyeClose, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2")

       

        .add(menuShowTl);

    var menuShowTl = new TimelineMax({ paused: true, repeat: 0 })
        .to($graph, 0.500, { autoAlpha: 0, y: "+=20px", ease: Power4.easeInOut }, "+=1.5")
        .to($pig, 0.500, { autoAlpha: 1, scale: 0.35, y: "-=250px", ease: Power4.easeInOut })
        .to($menu, 0.200, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut });

    // Add an onComplete callback to pigBounceTl
      pigBounceTl.eventCallback("onComplete", function () {
        // Start menuShowTl when pigBounceTl completes
        menuShowTl.play();
      });

      $btn1.on( "click tap touchstart", function() {
          var offset = $('#title1').offset().top - 50;
          $('html, body').animate({
              scrollTop: offset
          }, 1); // 1000 milliseconds (1 second) for the animation duration
      } );

      $btn2.on( "click", function() {
          var offset = $('#title2').offset().top - 50;
          $('html, body').animate({
              scrollTop: offset
          }, 1); // 1000 milliseconds (1 second) for the animation duration
      } );

      $btn3.on( "click", function() {
          var offset = $('#title3').offset().top - 50;
          $('html, body').animate({
              scrollTop: offset
          }, 1); // 1000 milliseconds (1 second) for the animation duration
      } );

      $btn4.on( "click", function() {
          var offset = $('#title4').offset().top - 50;
          $('html, body').animate({
              scrollTop: offset
          }, 1); // 1000 milliseconds (1 second) for the animation duration
      } );

      $btnPass.on( "click", function() {
        //alert('lol');
        openingTl.seek( '-=0', false );
        pigBounceTl.seek( '-=0', false );
        menuShowTl.seek( '-=0', false );
        //menuShowTl.seek("myLabel");
      } );

      // var pigBounceOnClickTl = new TimelineMax({ paused: true })
      //   .to($pig, 0.2, { scaleY: 0.8, ease:Bounce.easeInOut })
      //   .to($pig, 0.2, { scaleY: 1, ease:Bounce.easeInOut }, "-=0.2");

      var pigBounceOnClickTl = new TimelineMax({ paused: true, repeat: 0 })
      .to($coin, 0, { autoAlpha: 0, y: "0px", ease: Power4.easeInOut })
      .to($coin, 0.200, { autoAlpha: 1, ease: Power4.easeInOut })
      .to($coin, 0.5, { autoAlpha: 1, y: "+=90px", ease: Power4.easeInOut }, "-=0.200")
      .to($pig, 0.2, { scaleY: 0.5, ease:Bounce.easeInOut }, "-=0.3")
      .to($pig, 0.2, { scaleY: 1, ease:Bounce.easeInOut }, "-=0.2")
      .to($pigEyeOpen, 0, { autoAlpha: 0, ease: Power4.easeInOut }, "-=0.2")
      .to($pigEyeClose, 0, { autoAlpha: 1, ease: Power4.easeInOut }, "-=0.2");

    // PREPARING OPENING TIMELINE
    clearOpeningStage();
    function clearOpeningStage(){
        //alert('lol');
        var clearOpeningStageTl = new TimelineMax();
        clearOpeningStageTl
            .set($opening, { autoAlpha: 0, y: "+=50%"})
            .set($screen, { fill: '#F0F0F0', transformOrigin: "center center" })
            .set($graph, { autoAlpha: 0, y: "+=20px", transformOrigin: "center center" })
            .set($pig, { autoAlpha: 0, y: "+=20px", transformOrigin: "center center" })
            .set($coin, { autoAlpha: 0, y: "0px", transformOrigin: "center center" })
            .set($pig, { scaleY: 1, transformOrigin: "center bottom" })
            .set($pigEyeOpen, { autoAlpha: 1, transformOrigin: "center center" })
            .set($pigEyeClose, { autoAlpha: 0, transformOrigin: "center center" })
            .set($menu, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" })
            .set($btn1, { transformOrigin: "center center" });
        return clearOpeningStageTl;
    }


    setTimeout(function() { 
        $('body').addClass('is-visible');

        setTimeout(function() { 
            openingTl.play(); 

            setTimeout(function() { 
              $line.addClass('is-drawn');

                setTimeout(function() { 
                  pigBounceTl.play(); 
                }, 1500);

            }, 2000);

        }, 300);

    }, 1000);

    // $pig.on( "click", function() {
    //   pigBounceOnClickTl.restart();
    // } );

   

    $('p').on( "click", function() {
      
      
      pigBounceOnClickTl.restart(); 
      
    } );

   



    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    
    // IMG CARDS SETTINGS
    var $ImgCards = $('#img-cards');
    var $goodCard = $ImgCards.find('#goodcard');
    var $badCard1 = $ImgCards.find('#badcard1');
    var $badCard2 = $ImgCards.find('#badcard2');
    var $person = $ImgCards.find('#person');
    var $plant = $ImgCards.find('#plant');
    var cardsTl = new TimelineMax({ paused: true })
        .to($plant, 0.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
        .to($badCard2, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut })
        .to($badCard1, 0.5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut })
        .to($goodCard, 1.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut }, "-=0.5")
        .to($person, 1, { autoAlpha: 1, x: "-=50px", ease: Power4.easeInOut });

    // PREPARING CARDS TIMELINE
    clearCardsStage();
    function clearCardsStage(){
        //alert('lol');
        var clearCardsStageTl = new TimelineMax();
        clearCardsStageTl
            .set($person, { autoAlpha: 0, x: "+=55px", transformOrigin: "center center" })
            .set($goodCard, { autoAlpha: 0, x: "-=50px", transformOrigin: "center center" })
            .set($badCard1, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" })
            .set($badCard2, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" })
            .set($plant, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" });
        return clearCardsStageTl;
    }

    // CARDS TRIGGER
	  new ScrollMagic.Scene({triggerElement: "#img-cards"})
    .on("enter", function (event) {
       // alert('lol');
       cardsTl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // CHAPITRE 1 ICONS SETTINGS
    var $happyIcons = $('#happy-icons');
    var $nikolaIcon = $happyIcons.find('#nikola-icon');
    var $bitcoinIcon = $happyIcons.find('#bitcoin-icon');
    var $docmorrisIcon = $happyIcons.find('#docmorris-icon');
    var nikolaIconTl = new TimelineMax({ paused: true }).to($nikolaIcon, 1, { autoAlpha: 1, scale: 1,  ease: Power4.easeInOut });
    var docmorrisIconTl = new TimelineMax({ paused: true }).to($docmorrisIcon, 1, { autoAlpha: 1, scale: 1,  ease: Power4.easeInOut });
    var bitcoinIconTl = new TimelineMax({ paused: true }).to($bitcoinIcon, 1, { autoAlpha: 1, scale: 1,  ease: Power4.easeInOut });
    // PREPARING CHAPITRE 1 ICONS
    clearNikolaIconStage();
    function clearNikolaIconStage(){
        var clearNikolaIconTl = new TimelineMax();
        clearNikolaIconTl
            .set($nikolaIcon, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearNikolaIconTl;
    }
        
	  // CHAPITRE 1 ICONS TRIGGER
	  new ScrollMagic.Scene({triggerElement: "#nikola-icon"})
        .on("enter", function (event) {
           // alert('lol');
           nikolaIconTl.play();       
        }).triggerHook(0.6).addTo(controller);

    clearDocmorrisIconStage();
    function clearDocmorrisIconStage(){
        var clearDocmorrisIconTl = new TimelineMax();
        clearDocmorrisIconTl
            .set($docmorrisIcon, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearDocmorrisIconTl;
    }
            
    // CHAPITRE 1 ICONS TRIGGER
    new ScrollMagic.Scene({triggerElement: "#docmorris-icon"})
        .on("enter", function (event) {
            // alert('lol');
            docmorrisIconTl.play();       
        }).triggerHook(0.6).addTo(controller);

    clearBitcoinIconStage();
    function clearBitcoinIconStage(){
        var clearBitcoinIconTl = new TimelineMax();
        clearBitcoinIconTl
            .set($bitcoinIcon, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearBitcoinIconTl;
    }
            
    // CHAPITRE 1 ICONS TRIGGER
    new ScrollMagic.Scene({triggerElement: "#bitcoin-icon"})
        .on("enter", function (event) {
            // alert('lol');
            bitcoinIconTl.play();       
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // MOCKUP YUH 1 SETTINGS
    var $title1 = $('#title1');
    var $mockupYuh1 = $title1.find('.mobile2');
    var $mockupYuh1b = $title1.find('.mobile1');
    var $tags1 = $title1.find('.tag');
    var mockupYuh1Tl = new TimelineMax({ paused: true })
        .to($mockupYuh1, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
        .to($mockupYuh1b, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($mockupYuh1, 0.250, { autoAlpha: 0, x: "0px", ease: Power4.easeInOut })
        .staggerTo($tags1, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, 0.2, "-=0.250");

    // PREPARING MOCKUP YUH 1
    clearMockupYuh1Stage();
    function clearMockupYuh1Stage(){
        
        var clearMockupYuh1Tl = new TimelineMax();
        clearMockupYuh1Tl
            .set($mockupYuh1, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" })
            .set($mockupYuh1b, { autoAlpha: 0, transformOrigin: "center center" })
            .set($tags1, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" });
        return clearMockupYuh1Tl;
    }
        
	  // MOCKUP YUH 1 TRIGGER
	  new ScrollMagic.Scene({triggerElement: ".mockup-yuh"})
        .on("enter", function (event) {
           // alert('lol');
            mockupYuh1Tl.play();       
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // NIKOLA VARS + TL SETTINGS
    var $chartNikolaContainer = $('#chart-nikola-container');
    var chartNikolaTl = new TimelineMax({ paused: true }).to($chartNikolaContainer, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeOut });

    // PREPARING NIKOLA ENTERING + DRAWING 
    clearNicolaStage();
    function clearNicolaStage(){
        var clearChartNikolaTl = new TimelineMax();
        clearChartNikolaTl
            .set($chartNikolaContainer, { autoAlpha: 0, x: "0px", transformOrigin: "center center" });
        return clearChartNikolaTl;
    }
        
	// NIKOLA ENTERING + DRAWING TRIGGER
	new ScrollMagic.Scene({triggerElement: "#chart-nikola"})
        .on("enter", function (event) {
            if(chartNikolaDone == false)
            {
                chartNikolaTl.play();
                chartNikola.render();
                chartNikolaDone = true;
            }
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // BITCOIN VARS + TL SETTINGS
    var $chartBitcoinContainer = $('#chart-bitcoin-container');
    var chartBitcoinTl = new TimelineMax({ paused: true }).to($chartBitcoinContainer, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeOut });

    // PREPARING BITCOIN ENTERING + DRAWING 
    clearBitcoinStage();
    function clearBitcoinStage(){
        var clearChartBitcoinTl = new TimelineMax();
        clearChartBitcoinTl
            .set($chartBitcoinContainer, { autoAlpha: 0, x: "-=100px", transformOrigin: "center center" });
        return clearChartBitcoinTl;
    }
        
	// BITCOIN ENTERING + DRAWING TRIGGER
	new ScrollMagic.Scene({triggerElement: "#chart-bitcoin"})
        .on("enter", function (event) {
            if(chartBitcoinDone == false)
            {
                chartBitcoinTl.play();
                chartBitcoin.render();
                chartBitcoinDone = true;
            }
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    // DOCMORRIS VARS + TL SETTINGS
    var $chartDocmorrisContainer = $('#chart-docmorris-container');
    var chartDocmorrisTl = new TimelineMax({ paused: true }).to($chartDocmorrisContainer, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeOut });

    // PREPARING DOCMORRIS ENTERING + DRAWING 
    clearDocmorrisStage();
    function clearDocmorrisStage(){
        var clearChartDocmorrisTl = new TimelineMax();
        clearChartDocmorrisTl
            .set($chartDocmorrisContainer, { autoAlpha: 0, x: "+=100px", transformOrigin: "center center" });
        return clearChartDocmorrisTl;
    }
        
	// DOCMORRIS ENTERING + DRAWING TRIGGER
	new ScrollMagic.Scene({triggerElement: "#chart-docmorris"})
        .on("enter", function (event) {
            if(chartDocmorrisDone == false)
            {
                chartDocmorrisTl.play();
                chartDocmorris.render();
                chartDocmorrisDone = true;
            }
        }).triggerHook(0.6).addTo(controller);
        
            
        
        
 

    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    ////////////////////////////////////////////////////////////////
    //     ANIMATION METHODE 2 HEADER
    ////////////////////////////////////////////////////////////////

    var $title2 = $('#title2');
    var $mockupYuh2 = $title2.find('.mobile2');
    var $mockupYuh2b = $title2.find('.mobile1');
    var $tags2 = $title2.find('.tag');
    var mockupYuh2Tl = new TimelineMax({ paused: true })
        .to($mockupYuh2, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
        .to($mockupYuh2b, 0, { autoAlpha: 1, ease: Power4.easeInOut })
        .to($mockupYuh2, 0.250, { autoAlpha: 0, x: "0px", ease: Power4.easeInOut })
        .staggerTo($tags2, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, 0.2, "-=0.250");

    // PREPARING MOCKUP YUH 1
    clearMockupYuh2Stage();
    function clearMockupYuh2Stage(){
        
        var clearMockupYuh2Tl = new TimelineMax();
        clearMockupYuh2Tl
          .set($mockupYuh2, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" })
          .set($mockupYuh2b, { autoAlpha: 0, transformOrigin: "center center" })
          .set($tags2, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" });
        return clearMockupYuh2Tl;
    }
        
	  // MOCKUP YUH 1 TRIGGER
	  new ScrollMagic.Scene({triggerElement: ".mockup-yuh2"})
        .on("enter", function (event) {
           // alert('lol');
            mockupYuh2Tl.play();       
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    //     ANIMATION BUYER
    ////////////////////////////////////////////////////////////////

    var $actions = $('#actions');
    var $buyer = $actions.find('#buyer');
    var $leaf1 = $actions.find('#leaf1');
    var $leaf2 = $actions.find('#leaf2');
    var $leaf3 = $actions.find('#leaf3');
    var $bar1 = $actions.find('#bar1');
    var $bar2 = $actions.find('#bar2');
    var $bar3 = $actions.find('#bar3');
   
    var actionsTl = new TimelineMax({ paused: true })
        .to($actions, 0.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
        .to($buyer, 0.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
        .to($leaf1, 0.250, { scale: 1, ease: Power4.easeInOut })
        .to($leaf2,0.250, { scale: 1, ease: Power4.easeInOut }, "-=0.1")
        .to($leaf3, 0.250, { scale: 1, ease: Power4.easeInOut }, "-=0.1")
        .to($bar1, 0.7, { scaleY: 1, ease: Power4.easeInOut })
        .to($bar2, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3")
        .to($bar3, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3");

    clearActionsStage();
    function clearActionsStage(){
        var clearActionsStageTl = new TimelineMax();
        clearActionsStageTl
            .set($actions, { autoAlpha: 0, transformOrigin: "center center" })
            .set($buyer, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" })
            .set($leaf1, { scale: 0, transformOrigin: "center bottom" })
            .set($leaf2, { scale: 0, transformOrigin: "center bottom" })
            .set($leaf3, { scale: 0, transformOrigin: "center bottom" })
            .set($bar1, { scaleY: 0, transformOrigin: "center bottom" })
            .set($bar2, { scaleY: 0, transformOrigin: "center bottom" })
            .set($bar3, { scaleY: 0, transformOrigin: "center bottom" });
        return clearActionsStageTl;
    }

	  new ScrollMagic.Scene({triggerElement: "#actions"})
    .on("enter", function (event) {
       // alert('lol');
       actionsTl.play();       
    }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    //     ANIMATION WALMART ICON
    ////////////////////////////////////////////////////////////////

    var $walmartIcon = $('#walmart-icon');
    var walmartIconTl = new TimelineMax({ paused: true }).to($walmartIcon, 1, { autoAlpha: 1, scale: 1,  ease: Power4.easeInOut });
    // PREPARING CHAPITRE 1 ICONS
    clearWalmartIconStage();
    function clearWalmartIconStage(){
        var clearWalmartIconTl = new TimelineMax();
        clearWalmartIconTl
            .set($walmartIcon, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearWalmartIconTl;
    }
        
	  // CHAPITRE 1 ICONS TRIGGER
	  new ScrollMagic.Scene({triggerElement: "#walmart-icon"})
        .on("enter", function (event) {
           // alert('lol');
           walmartIconTl.play();       
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    //     ANIMATION TESLA ICON
    ////////////////////////////////////////////////////////////////

    var $teslaIcon = $('#tesla-icon');
    var teslaIconTl = new TimelineMax({ paused: true }).to($teslaIcon, 1, { autoAlpha: 1, scale: 1,  ease: Power4.easeInOut });
    // PREPARING CHAPITRE 1 ICONS
    clearTeslaIconStage();
    function clearTeslaIconStage(){
        var clearTeslaIconTl = new TimelineMax();
        clearTeslaIconTl
            .set($teslaIcon, { autoAlpha: 0, scale: 2, transformOrigin: "center center" });
        return clearTeslaIconTl;
    }
        
	  // CHAPITRE 1 ICONS TRIGGER
	  new ScrollMagic.Scene({triggerElement: "#tesla-icon"})
        .on("enter", function (event) {
           // alert('lol');
           teslaIconTl.play();       
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    //     ANIMATION WALMART CHART
    ////////////////////////////////////////////////////////////////

    var $chartWalmartContainer = $('#chart-walmart-container');
    var chartWalmartTl = new TimelineMax({ paused: true }).to($chartWalmartContainer, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeOut });
    var chartWalmartDone = false;

    // PREPARING NIKOLA ENTERING + DRAWING 
    clearWalmartStage();
    function clearWalmartStage(){
        var clearChartWalmartTl = new TimelineMax();
        clearChartWalmartTl
            .set($chartWalmartContainer, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" });
        return clearChartWalmartTl;
    }
        
	  // NIKOLA ENTERING + DRAWING TRIGGER
	  new ScrollMagic.Scene({triggerElement: "#chart-walmart"})
        .on("enter", function (event) {
            if(chartWalmartDone == false)
            {
                chartWalmartTl.play();
                chartWalmart.render();
                chartWalmartDone = true;
            }
        }).triggerHook(0.6).addTo(controller);

    ////////////////////////////////////////////////////////////////
    //     ANIMATION TESLA CHART
    ////////////////////////////////////////////////////////////////

    var $chartTeslatContainer = $('#chart-tesla-container');
    var chartTeslaTl = new TimelineMax({ paused: true }).to($chartTeslatContainer, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeOut });
    var chartTeslaDone = false;

    // PREPARING NIKOLA ENTERING + DRAWING 
    clearTeslaStage();
    function clearTeslaStage(){
        var clearChartTeslaTl = new TimelineMax();
        clearChartTeslaTl
            .set($chartTeslatContainer, { autoAlpha: 0, x: "0px", transformOrigin: "center center" });
        return clearChartTeslaTl;
    }
        
	// NIKOLA ENTERING + DRAWING TRIGGER
	new ScrollMagic.Scene({triggerElement: "#chart-tesla"})
        .on("enter", function (event) {
            if(chartTeslaDone == false)
            {
                chartTeslaTl.play();
                chartTesla.render();
                chartTeslaDone = true;
            }
        }).triggerHook(0.6).addTo(controller);

  ////////////////////////////////////////////////////////////////
  //     ANIMATION METHODE 3 HEADER
  ////////////////////////////////////////////////////////////////

  var $title3 = $('#title3');
  var $mockupYuh3 = $title3.find('.mobile2');
  var $mockupYuh3b = $title3.find('.mobile1');
  var $tags3 = $title3.find('.tag');
  var mockupYuh3Tl = new TimelineMax({ paused: true })
      .to($mockupYuh3, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
      .to($mockupYuh3b, 0, { autoAlpha: 1, ease: Power4.easeInOut })
      .to($mockupYuh3, 0.250, { autoAlpha: 0, x: "0px", ease: Power4.easeInOut })
      .staggerTo($tags3, .5, { autoAlpha: 1, scale: 1, ease: Power4.easeInOut }, 0.2, "-=0.250");
  // PREPARING MOCKUP YUH 1
  clearMockupYuh3Stage();
  function clearMockupYuh3Stage(){
      
      var clearMockupYuh3Tl = new TimelineMax();
      clearMockupYuh3Tl
          .set($mockupYuh3, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" })
          .set($mockupYuh3b, { autoAlpha: 0, transformOrigin: "center center" })
          .set($tags3, { autoAlpha: 0, scale: 0.5, transformOrigin: "center center" });
      return clearMockupYuh3Tl;
  }
      
  // MOCKUP YUH 1 TRIGGER
  new ScrollMagic.Scene({triggerElement: ".mockup-yuh3"})
      .on("enter", function (event) {
          // alert('lol');
          mockupYuh3Tl.play();       
      }).triggerHook(0.6).addTo(controller);

  ////////////////////////////////////////////////////////////////
  //     ANIMATION ETF
  ////////////////////////////////////////////////////////////////

  var $etf = $('#etf');
  var $phoner = $etf.find('#phoner');
  var $e1 = $etf.find('#e1');
  var $e2 = $etf.find('#e2');
  var $e3 = $etf.find('#e3');
  // var $bar1 = $actions.find('#bar1');
  // var $bar2 = $actions.find('#bar2');
  // var $bar3 = $actions.find('#bar3');
  
  var etfTl = new TimelineMax({ paused: true })
      .to($etf, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
      .to($phoner, 0.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
      .to($e3, 0.350, { scale: 1, ease: Power4.easeInOut })
      .to($e2,0.350, { scale: 1, ease: Power4.easeInOut }, "-=0.1")
      .to($e1, 0.350, { scale: 1, ease: Power4.easeInOut }, "-=0.1");
      // .to($bar1, 0.7, { scaleY: 1, ease: Power4.easeInOut })
      // .to($bar2, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3")
      // .to($bar3, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3");

  clearEtfStage();
  function clearEtfStage(){
      var clearEtfStageTl = new TimelineMax();
      clearEtfStageTl
          .set($etf, { autoAlpha: 0, transformOrigin: "center center" })
          .set($phoner, { autoAlpha: 0, x: "-=50px", transformOrigin: "center center" })
          .set($e3, { scale: 0, transformOrigin: "center bottom" })
          .set($e2, { scale: 0, transformOrigin: "center bottom" })
          .set($e1, { scale: 0, transformOrigin: "center bottom" });
          // .set($bar1, { scaleY: 0, transformOrigin: "center bottom" })
          // .set($bar2, { scaleY: 0, transformOrigin: "center bottom" })
          // .set($bar3, { scaleY: 0, transformOrigin: "center bottom" });
      return clearEtfStageTl;
  }

  new ScrollMagic.Scene({triggerElement: "#etf"})
  .on("enter", function (event) {
      // alert('lol');
      etfTl.play();       
  }).triggerHook(0.6).addTo(controller);

  ////////////////////////////////////////////////////////////////
  //     ANIMATION CONCLUSIONS HEADER
  ////////////////////////////////////////////////////////////////

  var $title4 = $('#title4');
  var $mockupYuh4 = $title4.find('.mockup-yuh4');
  var mockupYuh4Tl = new TimelineMax({ paused: true }).to($mockupYuh4, 1, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut });

  // PREPARING MOCKUP YUH 1
  clearMockupYuh4Stage();
  function clearMockupYuh4Stage(){
      
      var clearMockupYuh4Tl = new TimelineMax();
      clearMockupYuh4Tl
          .set($mockupYuh4, { autoAlpha: 0, x: "+=50px", transformOrigin: "center center" });
      return clearMockupYuh4Tl;
  }
      
  // MOCKUP YUH 1 TRIGGER
  new ScrollMagic.Scene({triggerElement: ".mockup-yuh4"})
      .on("enter", function (event) {
          // alert('lol');
          mockupYuh4Tl.play();       
      }).triggerHook(0.6).addTo(controller);

  ////////////////////////////////////////////////////////////////
  //     ANIMATION WELLDONE
  ////////////////////////////////////////////////////////////////

  var $welldone = $('#welldone');
  var $balooner = $welldone.find('#balooner');
  var $baloon = $welldone.find('#baloon');
  // var $phoner = $etf.find('#phoner');
  // var $e1 = $etf.find('#e1');
  // var $e2 = $etf.find('#e2');
  // var $e3 = $etf.find('#e3');
  // var $bar1 = $actions.find('#bar1');
  // var $bar2 = $actions.find('#bar2');
  // var $bar3 = $actions.find('#bar3');
  
  var welldoneTl = new TimelineMax({ paused: true })
      .to($welldone, 0.5, { autoAlpha: 1, ease: Power4.easeInOut })
      .to($balooner, 0.5, { autoAlpha: 1, x: "0px", ease: Power4.easeInOut })
      .to($baloon, 2, { autoAlpha: 1, y: "0px", ease: Power4.easeInOut });
      // .to($e3, 0.350, { scale: 1, ease: Power4.easeInOut })
      // .to($e2,0.350, { scale: 1, ease: Power4.easeInOut }, "-=0.1")
      // .to($e1, 0.350, { scale: 1, ease: Power4.easeInOut }, "-=0.1");
      // .to($bar1, 0.7, { scaleY: 1, ease: Power4.easeInOut })
      // .to($bar2, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3")
      // .to($bar3, 0.7, { scaleY: 1, ease: Power4.easeInOut }, "-=0.3");

  clearWelldoneStage();
  function clearWelldoneStage(){
      var clearWelldoneStageTl = new TimelineMax();
      clearWelldoneStageTl
          .set($welldone, { autoAlpha: 0, transformOrigin: "center center" })
          .set($balooner, { autoAlpha: 0, x: "-=50px", transformOrigin: "center center" })
          .set($baloon, { autoAlpha: 0, y: "+=50px", transformOrigin: "center center" });
          // .set($phoner, { autoAlpha: 0, x: "-=50px", transformOrigin: "center center" })
          // .set($e3, { scale: 0, transformOrigin: "center bottom" })
          // .set($e2, { scale: 0, transformOrigin: "center bottom" })
          // .set($e1, { scale: 0, transformOrigin: "center bottom" });
          // .set($bar1, { scaleY: 0, transformOrigin: "center bottom" })
          // .set($bar2, { scaleY: 0, transformOrigin: "center bottom" })
          // .set($bar3, { scaleY: 0, transformOrigin: "center bottom" });
      return clearWelldoneStageTl;
  }

  new ScrollMagic.Scene({triggerElement: "#welldone"})
  .on("enter", function (event) {
      // alert('lol');
      welldoneTl.play();       
  }).triggerHook(0.6).addTo(controller);

  
})(jQuery);