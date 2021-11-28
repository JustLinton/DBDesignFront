// ===========================|| DASHBOARD - TOTAL ORDER YEAR CHART ||=========================== //

const chartData = {
    type: 'line',
    height: 80,
    options: {
        chart: {
            sparkline: {
                // 是否开启无UI、图例、表尺、坐标轴模式
                enabled: true
            },
            toolbar: {
                show: false
            },
            selection: {
                enabled: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#fff'],
        fill: {
            type: 'solid',
            opacity: 1
        },
        stroke: {
            curve: 'smooth',
            width: 3
        },
        yaxis: {
            min: 0,
            max: 100
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: 'Total Order'
            },
            marker: {
                show: false
            }
        }
    },
    series: [
        {
            name: '活跃用户',
            data: [34, 25, 43, 34, 39, 46, 41, 66,71,82,93]
        }
    ]
};

export default chartData;
