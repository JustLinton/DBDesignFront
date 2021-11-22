// ===========================|| DASHBOARD - TOTAL ORDER MONTH CHART ||=========================== //

const chartData = {
    height: 200,
    type: 'radialBar',
            options: {
              chart: {
    
              },
              plotOptions: {
                radialBar: {
                  offsetY: 0,
                  startAngle: 0,
                  endAngle: 270,
                  hollow: {
                    margin: 5,
                    size: '30%',
                    background: 'transparent',
                    image: undefined,
                  },
                  track: {
                    background: '#7cb342',
                    strokeWidth: '89%'
                  },
                  dataLabels: {
                    name: {
                    show: true,
                        fontSize: '12px',
                        color: '#fff',
                        offsetY: -3
                    },
                    value: {
                      show: true,
                      fontSize: '15px',
                      color: '#fff',
                      offsetY: -2
                    }
                  }
                }
              },
              colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff'],
              labels: ['完善度', '个人信息', '家庭信息', '帐号安全'],
              legend: {
                show: false,
                // floating: true,
                // fontSize: '12px',
                // position: 'left',
                // offsetX: 40,
                // offsetY: -5,
                // labels: {
                //   useSeriesColors: true,
                // },
                // markers: {
                //   size: 0
                // },
                // formatter: function(seriesName, opts) {
                //   return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                // },
                // itemMargin: {
                //   vertical: 0
                // }
              },
              // responsive: [{
              //   breakpoint: 480,
              //   options: {
              //     legend: {
              //         show: true,
              //         floating: true,
              //         fontSize: '12px',
              //         position: 'left',
              //         offsetX: -10,
              //         offsetY: -5,
              //     }
              //   }
              // }]
            },
        
    // options: {

    //     dataLabels: {
    //         enabled: false
    //     },
    //     colors: ['#fff'],
    //     fill: {
    //         type: 'solid',
    //         opacity: 1
    //     },
    //     stroke: {
    //         curve: 'smooth',
    //         width: 3
    //     },
    //     yaxis: {
    //         min: 0,
    //         max: 100
    //     },
    //     tooltip: {
    //         theme: 'dark',
    //         fixed: {
    //             enabled: false
    //         },
    //         x: {
    //             show: false
    //         },
    //         y: {
    //             title: 'Total Order'
    //         },
    //         marker: {
    //             show: false
    //         }
    //     }
    // },
    series: [76, 67, 61, 90],
};

export default chartData;
