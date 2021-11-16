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
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0,
                        1,
                        0,
                        0,
                        [
                            {
                                offset: 0,
                                color: "transparent" // 0% 处的颜色
                            },
                            {
                                offset: 1,
                                color: "#1777EC" // 100% 处的颜色
                            }
                        ], false),
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
                color: new echarts.graphic.LinearGradient(0,
                    0,
                    0,
                    1,
                    [
                        {
                            offset: 0,
                            color: '#cd7cf3'
                        },
                        {
                            offset: 1,
                            color: '#de5df2'
                        }
                    ]),
                },
            data: val.seriesData,
            type: 'bar',
                // itemStyle: {
                //     normal: {
                //         color: 'rgba(255, 135, 0, 0.6)'
                //     }
                // }
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
        xAxis: [
            {
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
            },
        ],
        yAxis: [
            {
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
            }
        ],
        series: [
            {
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
                        0,
                        [
                            {
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
            },
        ],
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
        xAxis: [
            {
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
            }
        ],
        yAxis: [
            {
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
            }
        ],
        series: [
            {
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
            }
        ]
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
        color: ['#3885E4', '#73AEF8', '#8BBFFF'
        ],
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: val.seriRadius ? val.seriRadius : ['100%'
                ],
            center: val.seriCenter || ['50%', '50%'
                ], //X Y 间距
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
            }
        ]
    };
    val.EChart.setOption(option);
}


export function lineAndBar(val) {
    let option = {
        grid: {
            left: 40,
            right: 40,
            bottom: 35,
            top: 60,
            containLabel: false,
            borderWidth: 1
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            show: false, ////工具箱开关
            feature: { //数据视图打开并允许编辑
                dataView: {
                    show: true,
                    readOnly: false
                },
                magicType: {
                    show: true,
                    type: ['line', 'bar'
                    ]
                },
                restore: { //重新加载视图
                    show: true
                },
                saveAsImage: { //保存为图片
                    show: true
                }
            }
        },
        legend: {
            // data: val.legendData,
            show:val.legendShow,
            orient:'horizontal',
            borderColor:'#df3434',
            right: 8,
            top: 0,
            color: ['#2db7f5','#ff6600','#808bc6'
            ],
            itemWidth: 12, //图标宽
            itemHeight: 8, //图标高
            itemGap: 20, //间距
            data: [
                {
                    name:'去年',
                    textStyle: {
                        fontSize: 12,
                        // fontWeight:'bolder',
                        color:'#fff'
                    },
                    icon:'rect' // circle:圆   rect:长
                },
                {
                    name:'今年',
                    textStyle: {
                        fontSize: 12,
                        color:'#fff'
                    },
                    icon:'pie',
                },
                {
                    name:'增幅',
                    textStyle: {
                        fontSize: 12,
                        color:'#fff'
                    },
                    icon:'pie'
                }
            ]
        },
        xAxis: [
            {
            type: 'category',
            name: val.xAxName,
            data: val.xAxisData,
            nameTextStyle: { // 坐标轴名称样式
                color: '#fff',
                    // bottom:40,
                top: 30,
                },
            axisPointer: {
                type: 'shadow'
                },
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
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: val.yAxNameBefore,
                min: val.yAxMinBefore,
                max: val.yAxMaxBefore,
                // interval: 100,
                nameTextStyle: {
                    color: "#fff", 
                    fontSize: 12,
                },
                splitLine: {
                    show: val.yAxspLineBefore, //刻度线
                    lineStyle: {
                        type: "dashed",
                        color: "rgba(255, 255, 255, 0.3)"
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                },
                    axisLine: {
                    show: val.yAxLineShow,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        fontSize: 18,
                    },
                },
            },
            {
                type: 'value',
                name: val.yAxNameAfter,
                min: val.yAxMinAfter,
                max: val.yAxMaxAfter,
                // interval: 5,
                nameTextStyle: {
                    color: "#fff", 
                    fontSize: 12,
                },
                splitLine: {
                    show: val.yAxspLineAfter, //刻度线
                    lineStyle: {
                        type: "dashed",
                        color: "rgba(255, 255, 255, 0.3)"
                    }
                },
                axisLabel: {
                    formatter: '{value}'
                },
                axisLine: {
                    show: val.yAxLineShow,
                    lineStyle: {
                        color: "#fff",
                        width: 1,
                        fontSize: 18,
                    },
                },
            }
        ],
        // series: val.seriesData

        series: [
            {
              name: val.seriNameBef,
              type: 'bar',
              barWidth: val.barWidth, // 柱身宽度
              itemStyle: {
                normal: {
                  barBorderRadius:val.barBorderRadius, //柱身圆角
                  color: new echarts.graphic.LinearGradient(
                    // 柱身渐变
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                        offset: 0,
                        color: "rgba(24, 121, 240, 0)", // 0% 处的颜色
                            },
                            {
                        offset: 1,
                        color: "rgba(24, 121, 240, 1)", // 100% 处的颜色
                            },
                        ],
                        false
                  ),
                    },
                },
              data: [
                    510,
                    300,
                    500,
                    500,
                    400
                ],
            },
            {
              name: val.seriNameAft,
              type: 'bar',
              barWidth: val.barWidth, // 柱身宽度
              itemStyle: {
                normal: {
                  barBorderRadius:val.barBorderRadius,
                  color: new echarts.graphic.LinearGradient(
                    // 柱身渐变
                        0,
                        1,
                        0,
                        0,
                        [
                            {
                        offset: 0,
                        color: "rgba(139, 191, 255, 0)", // 0% 处的颜色
                            },
                            {
                        offset: 1,
                        color: "rgba(139, 191, 255, 1)", // 100% 处的颜色
                            },
                        ],
                        false
                  ),
                    },
                },
  
              data: [
                    200,
                    500,
                    400,
                    200,
                    480
                ],
            },
            {
              name: "增幅",
              type: "line",
              yAxisIndex: 1,
              color: "rgba(70, 238, 215, 1)",
              data: [
                    10,
                    60,
                    30,
                    50,
                    70
                ],
            },
        ],
    };
    val.EChart.setOption(option);
}