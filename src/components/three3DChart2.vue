<template>
  <div class="hello" style="overflow: hidden">
    <div id="container2"></div>
  </div>
</template>

<script>
import Highcharts from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";

HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);

export default {
  name: "HelloWorld",
  props: {
    data: Array,
    msg: String,
  },
  mounted() {
    this.moreChart();
  },
  methods: {
    moreChart() {
      if (this.chart) {
        this.chart.destroy();
      }
      // 初始化 Highcharts 图表
      var chart = Highcharts.chart("container2", {
        chart: {
          type: "pie",
          height: 250,
          width: 328,
          backgroundColor: "rgba(0,0,0,0)",
          options3d: {
            enabled: true,
            alpha: 45,
            beta: 0,
          },
        },
        title: {
          text: "",
        },
        credits: {
          enabled: false, //不显示LOGO
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
        },
        grid: {
          left: 35,
          right: 0,
          bottom: 32,
          top: 15,
          containLabel: false,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 35,
            dataLabels: {
              enabled: true,
              // format: "{point.name}",
              // format: '<p>{point.name}:</p><p>{point.percentage:.1f} %</p>',
              style: {
                color: "#FFF",
                textOutline: "none",
              },
              useHTML: true, //使用formatter内的标签和样式
              formatter: function () {
                //this 为当前的点（扇区）对象，可以通过  console.log(this) 来查看详细信息
                console.log(this);
                return (
                  '<div><p style="color: #ccf9ff;">' +
                  this.point.name +
                  "</p>" +
                  '<p><span style="font-size: 14px;margin-right: 4px;">' +
                  this.y +
                  '<p style="font-size: 14px;color: ' +
                  this.point.color +
                  '">' +
                  this.percentage.toFixed(1) +
                  "%</p></div>"
                );
              },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "人数占比(人)",
            data: this.data,
          },
        ],
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit css to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>