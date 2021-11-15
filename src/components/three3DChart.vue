<template>
  <div class="hello" style="overflow:hidden">
    <div id="container"></div>
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
      var chart = Highcharts.chart("container", {
        chart: {
          type: "pie",
          height: 328,
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
              format: "{point.name}",
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "浏览器占比",
            data: [
              ["Firefox", 45.0],
              ["IE", 26.8],
              {
                name: "Chrome",
                y: 12.8,
                sliced: true,
                selected: true,
              },
              ["Safari", 8.5],
              ["Opera", 6.2],
              ["Others", 0.7],
            ],
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