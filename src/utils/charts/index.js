// import echarts from "echarts";
const echarts = require('echarts')

// 堆疊柱状图
export function ColumnBar(val) {
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: "#fff",
                fontSize: "14"
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: val.xAxis,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                },
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: '12'
                    }
                },
            }
        ],
        series: val.seriesData
    }
    val.EChart.setOption(option);
}


export function singleBar(val) {
    let option = {
        tooltip: {
            show: true,
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: "16%",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: val.xAxisVal,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                }
            },
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                },

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                }
            },
        },
        series: [{
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "transparent" // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: "#1777EC" // 100% 处的颜色
                    }], false),
                    label: {
                        show: true,
                        position: "top",
                        textStyle: {
                            formatter: "{c}" + "人",
                            fontWeight: "bolder",
                            fontSize: "12",
                            color: "#fff"
                        }
                    }
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#cd7cf3'
                }, {
                    offset: 1,
                    color: '#de5df2'
                }]),
            },
            data: val.seriesData,
            type: 'bar',
            // itemStyle: {
            //     normal: {
            //         color: 'rgba(255, 135, 0, 0.6)'
            //     }
            // }
        }]
    };
    val.EChart.setOption(option);
}
