
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
                        type: 'dashed',
                        color: "rgba(255, 255, 255, 0.3)"
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
            formatter: '{b}:{c}%',
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
                    color: "rgba(255, 255, 255, 0.3)"
                },

            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                },
                formatter: '{value} %'
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
                        formatter: '{c}%',
                        textStyle: {
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
            barWidth: 22,//柱图宽度
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


export function pie(val) {
    let option = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            left: 'center',
            show: false
        },
        grid: {
            x: 30,
            y: 50,
            x2: 0,
            y2: 30,
            borderWidth: 1,
            // containLabel: true
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            show: false,
        },
        series: [

            {
                name: val.name,
                type: 'pie',
                radius: '75%',
                label: {
                    normal: {
                        show: false,
                    },
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data: val.seriesData,
                // [
                //     {
                //         value: 1048, name: 'Search Engine',
                //         itemStyle: {
                //             normal: {
                //                 color: "#1879F0",
                //             },
                //         },
                //     },
                // ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    val.EChart.setOption(option);
}


export function waterFall(val) {
    let option = {
        title: {
            text: val.name,
            // subtext: 'Living Expenses in Shenzhen'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: "6%",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: { show: false },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: '12'
                }
            },
            data: val.xAxisVal
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: "rgba(255, 255, 255, 0.3)"
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
        series: [
            {
                name: 'Placeholder',
                type: 'bar',
                stack: 'Total',
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                },
                emphasis: {
                    itemStyle: {
                        borderColor: 'transparent',
                        color: 'transparent'
                    }
                },

                data: val.seriesData1
            },
            {
                name: 'Life Cost',
                type: 'bar',
                stack: 'Total',
                label: {
                    show: false,
                    position: 'inside'
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#1879F0',
                }, {
                    offset: 1,
                    color: '#1879F0'
                }]),
                data: val.seriesData2
            }
        ]
    };
    val.EChart.setOption(option);
}





export function BasicsBar(val) {
    let option = {
        tooltip: {
            show: false,
            trigger: "axis",
            axisPointer: {
                type: "shadow",
            },
        },
        grid: {
            left: 35,
            right: 0,
            bottom: 32,
            top: 15,
            containLabel: false,
        },
        xAxis: [{
            type: 'category',
            data: val.xAxisData,
            axisTick: {
                show: false, //底部刻度线
                alignWithLabel: false, //刻度对齐
            },
            axisLabel: {
                interval: 0, //设置间隔为0
            },
            axisLine: {
                show: val.xAxLineShow, //底部线段
                lineStyle: {
                    color: "#fff",
                    width: 1, //刻度线段宽度
                    fontSize: 22,
                },
            },
        },],
        yAxis: [{
            type: 'value',
            min: val.yAxMin,
            max: val.yAxMax,
            splitLine: {
                show: val.yAxspLine, //刻度线
                // border: 12,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255, 255, 255, 0.3)"
                }
            },
            axisLine: {
                show: val.yAxLineShow,
                lineStyle: {
                    color: "#fff",
                    width: 1,
                    fontSize: 18,
                },
                textStyle: {
                    fontSize: 18,
                },
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            name: "",
            type: 'bar',
            barWidth: val.barWidth, // 柱身宽度
            itemStyle: {
                normal: {
                    label: {
                        show: val.seriLabShow,
                        position: "top", //在上方显示
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                    },
                    color: new echarts.graphic.LinearGradient( // 柱身渐变
                        0,
                        1,
                        0,
                        0, [{
                            offset: 0,
                            color: "rgba(24, 121, 240, 0)", // 0% 处的颜色
                        },
                        {
                            offset: 1,
                            color: "#1879F0", // 100% 处的颜色
                        },
                    ],
                        false
                    ),
                },
            },
            data: val.seriesData
        },],
    }
    val.EChart.setOption(option);
}

export function BasicsLine(val) {
    let option = {
        grid: {
            left: 35,
            right: 0,
            bottom: 32,
            top: 10,
            containLabel: false,
            borderWidth: 1
        },
        xAxis: [{
            type: 'category',
            data: val.xAxisData,
            boundaryGap: false, // 从X轴起始点
            axisTick: {
                show: false, //底部刻度线
                alignWithLabel: false, //刻度对齐
            },
            axisLine: {
                show: val.xAxLineShow, //底部线段
                lineStyle: {
                    color: "#fff",
                    width: 1, //刻度线段宽度
                    fontSize: 22,
                },
            },
        }],
        yAxis: [{
            type: 'value',
            min: val.yAxMin,
            max: val.yAxMax,
            splitNumber: val.yAxsplitNum,
            splitLine: {
                show: val.yAxspLine, //刻度线
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255, 255, 255, 0.3)"
                }
            },
            axisLine: {
                show: val.yAxLineShow,
                lineStyle: {
                    color: "#fff",
                    width: 1,
                    fontSize: 18,
                },
                textStyle: {
                    fontSize: 18,
                },
            },
            axisTick: {
                show: false
            },
        }],
        series: [{
            data: val.seriesData,
            type: 'line',
            itemStyle: {
                normal: {
                    label: {
                        show: val.seriLabShow, // 显示值
                        position: "top", //在上方显示
                        textStyle: {
                            color: "#fff",
                            fontSize: 12,
                        },
                    },
                }
            }
        }]
    }
    val.EChart.setOption(option);
}


export function BasicsPie(val) {
    let option = {
        tooltip: {
            show: val.tooltipShow, //显示提示框
            trigger: 'item'
        },
        title: {
            text: val.titlText,
            subtext: '',
            top: 'center',
            left: 'center',
            textStyle: {
                color: '#fff',
                fontSize: '16',
            },
        },
        legend: {
            show: val.legendShow, // 标题,
            orient: 'vertical',
            x: 'left',
            left: 'center',
            top: 0,
            data: val.legendData,
        },
        color: ['#3885E4', '#73AEF8', '#8BBFFF'],
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: val.seriRadius ? val.seriRadius : ['100%'],
            center: val.seriCenter || ['50%', '50%'], //X Y 间距
            avoidLabelOverlap: false,
            hoverAnimation: false, // hover放大饼图
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: val.empLabShow, // 圆心中间内容
                    fontSize: '14',
                    fontWeight: '400',
                    color: "#fff"
                }
            },
            labelLine: {
                show: false
            },
            data: val.seriesData
        }]
    };
    val.EChart.setOption(option);
}

