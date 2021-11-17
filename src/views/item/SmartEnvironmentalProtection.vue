<template>
  <div class="environmentManage">
    <div class="map">
      <img src="@/assets/background.png" alt="" width="100%" height="100%" />
      <!-- <baidu-map class="map" :scroll-wheel-zoom="true" center="泰兴市">
      </baidu-map> -->
    </div>
    <div class="left">
      <div class="charts-div">
        <div class="charts_1">
          <!-- chartsTitle -->
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">水质类别月度分析</span>
              <span class="chartsTitle-font--small">/ Monthly analysis</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <!-- select -->
          <div class="select2">
            <div class="label">水质站：</div>
            <div class="options">
              <el-select
                v-model="chartsList[0].form.value"
                placeholder="请选择"
              >
                <el-option
                  v-for="item in chartsList[0].form.options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <!-- charts -->
          <div class="charts">
            <div style="width: 100%; height: 100%" ref="chartColumn"></div>
          </div>
        </div>
        <div class="charts_2">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">水质类别占比</span>
              <span class="chartsTitle-font--small">/ Category Proportion</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="charts">
            <div style="width: 100%; height: 100%" ref="chartSingleBar"></div>
          </div>
        </div>
        <div class="charts_3">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">污染指数占比</span>
              <span class="chartsTitle-font--small"
                >/ Percentage of pollut</span
              >
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="charts">
            <div style="width: 100%; height: 100%" ref="chartSingleBar2"></div>
          </div>
        </div>
      </div>
      <div class="icons-list">
        <div class="left_iconList">
          <div
            @click="iconClick(1)"
            :class="iconClicked == 1 ? 'icon_item_active' : 'icon_item'"
          >
            <img
              src="@/assets/icons/environmentProtect/1.png"
              width="20px"
              height="20px"
              alt=""
            />
          </div>
          <div
            @click="iconClick(2)"
            :class="iconClicked == 2 ? 'icon_item_active' : 'icon_item'"
          >
            <img
              src="@/assets/icons/environmentProtect/2.png"
              width="20px"
              height="20px"
              alt=""
            />
          </div>
          <div
            @click="iconClick(3)"
            :class="iconClicked == 3 ? 'icon_item_active' : 'icon_item'"
          >
            <img
              src="@/assets/icons/environmentProtect/3.png"
              width="20px"
              height="20px"
              alt=""
            />
          </div>
          <div
            @click="iconClick(4)"
            :class="iconClicked == 4 ? 'icon_item_active' : 'icon_item'"
          >
            <img
              src="@/assets/icons/environmentProtect/4.png"
              width="20px"
              height="20px"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="chartsTitle">
        <div class="chartsTitle-font">
          <span class="chartsTitle-font--big">水质类别月度分析</span>
          <span class="chartsTitle-font--small">/ Monthly analysis</span>
        </div>
        <div class="chartsTitle-img"></div>
      </div>
      <div class="select2">
        <div class="label">监测点：</div>
        <div class="options">
          <el-select v-model="chartsList[0].form.value" placeholder="请选择">
            <el-option
              v-for="item in chartsList[0].form.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="date">
        <div class="select">
          <div class="done" @click="forward">《</div>
          <div class="select_main">
            <div class="year">{{ date.year }}年</div>
            <div
              v-if="dateType !== 'year' && dateType == 'quarterly'"
              class="quarter"
            >
              第{{ date.quarter }}季度
            </div>
            <div
              v-if="dateType !== 'year' && dateType == 'month'"
              class="month"
            >
              {{ date.month > 9 ? date.month : "0" + date.month }}月
            </div>
          </div>
          <div class="done" @click="backward">》</div>
        </div>
        <div class="item">
          <div
            @click="chooseDateType('year')"
            :class="dateType == 'year' ? 'itemType_active' : 'itemType'"
            style="border-top-left-radius: 4px; border-bottom-left-radius: 4px"
          >
            年度
          </div>
          <div
            @click="chooseDateType('quarterly')"
            :class="dateType == 'quarterly' ? 'itemType_active' : 'itemType'"
            class="itemType"
          >
            季度
          </div>
          <div
            @click="chooseDateType('month')"
            :class="dateType == 'month' ? 'itemType_active' : 'itemType'"
            class="itemType"
            style="
              border-top-right-radius: 4px;
              border-bottom-right-radius: 4px;
            "
          >
            月份
          </div>
        </div>
      </div>
      <div class="chart1" style="margin-top: 12px">
        <div class="chartsTitle2">
          <div class="point"></div>
          <div class="name">空气质量指数类别天数占比</div>
        </div>
        <div class="chart1_main">
          <div class="chart">
            <div ref="chartPie1" style="width: 100%; height: 100%"></div>
          </div>
          <div class="chartList">
            <div
              class="chartList-item"
              v-for="(item, index) in rightCharts.chart1"
              :key="index"
            >
              <div class="index" :style="{ background: item.color }"></div>
              <div style="width: 50%">{{ item.type }}</div>
              <div style="width: 25%">{{ item.num }}</div>
              <div style="width: 25%">{{ item.percent }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chart2">
        <div class="chartsTitle2">
          <div class="point"></div>
          <div class="name">首要污染物天数占比</div>
        </div>
        <div class="chart1_main">
          <div class="chart">
            <div ref="chartPie2" style="width: 100%; height: 100%"></div>
          </div>
          <div class="chartList">
            <div
              class="chartList-item"
              v-for="(item, index) in rightCharts.chart2"
              :key="index"
            >
              <div class="index" :style="{ background: item.color }"></div>
              <div style="width: 50%">{{ item.type }}</div>
              <div style="width: 25%">{{ item.num }}</div>
              <div style="width: 25%">{{ item.percent }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chart3">
        <div class="chartsTitle2">
          <div class="point"></div>
          <div class="name">AQI最差时段</div>
        </div>
        <div class="chartBox">
          <div ref="myChart6" style="width: 100%; height: 100%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ColumnBar, singleBar, pie, waterFall } from "@/utils/charts/index.js";
import * as echarts from "echarts";
export default {
  name: "Index",
  data() {
    return {
      iconClicked: 1,
      date: {
        year: "",
        quarter: "",
        month: "",
      },

      rightCharts: {
        chart1: [
          {
            color: "#1879F0",
            type: "优",
            num: 100,
            percent: "11%",
          },
          {
            color: "#3885E4",
            type: "良",
            num: 125,
            percent: "16%",
          },
          {
            color: "#73AEF8",
            type: "轻度污染",
            num: 40,
            percent: "4%",
          },
          {
            color: "#8BBFFF",
            type: "中度污染",
            num: 85,
            percent: "8%",
          },
          {
            color: "#ABD1FF",
            type: "重度污染",
            num: 40,
            percent: "4%",
          },
          {
            color: "#D2E6FF",
            type: "严重污染",
            num: 85,
            percent: "8%",
          },
        ],
        chart2: [
          {
            color: "#1879F0",
            type: "PM10",
            num: 94,
            percent: "86.24%",
          },
          {
            color: "#3885E4",
            type: "PM2.5",
            num: 21,
            percent: "8.26%",
          },
          {
            color: "#73AEF8",
            type: "CO",
            num: 26,
            percent: "1.83%",
          },
          {
            color: "#8BBFFF",
            type: "SO2",
            num: 31,
            percent: "1.83%",
          },
          {
            color: "#ABD1FF",
            type: "O3",
            num: 41,
            percent: "1.83%",
          },
          {
            color: "#D2E6FF",
            type: "NO2",
            num: 32,
            percent: "0%",
          },
        ],
      },

      dateType: "month",
      myChart: "",
      myChart2: "",
      myChart3: "",
      myChart4: "",
      myChart5: "",
      myChart6: "",
      screenWidth: document.body.clientWidth,
      chartsList: [
        {
          form: {
            value: "",
            options: [
              {
                value: "选项1",
                label: "黄金糕",
              },
              {
                value: "选项2",
                label: "双皮奶",
              },
            ],
          },
        },
      ],
    };
  },
  created() {
    this.date = {
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1,
      quarter: Math.floor(
        (new Date().getMonth() + 1) % 3 == 0
          ? (new Date().getMonth() + 1) / 3
          : (new Date().getMonth() + 1) / 3 + 1
      ),
    };
    this.$nextTick(() => {
      this.initColumnChart();
      this.initSingleBar();
      this.initSingleBar2();
      this.initPieChart1();
      this.initPieChart2();
      this.initWaterFall();
    });
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function () {
      _this.myChart.resize();
      _this.myChart2.resize();
      _this.myChart3.resize();
      _this.myChart4.resize();
      _this.myChart5.resize();
      _this.myChart6.resize();
    });
  },
  methods: {
    forward() {
      if (this.dateType == "year") {
        this.date.year--;
      } else if (this.dateType == "quarterly") {
        if (this.date.quarter - 1 !== 0) {
          this.date.quarter--;
        } else {
          this.date.year--;
          this.date.quarter = 4;
        }
      } else if (this.dateType == "month") {
        if (this.date.month - 1 !== 0) {
          this.date.month--;
        } else {
          this.date.year--;
          this.date.month = 12;
        }
      }
    },
    backward() {
      if (this.dateType == "year") {
        this.date.year++;
      } else if (this.dateType == "quarterly") {
        if (this.date.quarter + 1 !== 5) {
          this.date.quarter++;
        } else {
          this.date.year++;
          this.date.quarter = 1;
        }
      } else if (this.dateType == "month") {
        if (this.date.month + 1 !== 13) {
          this.date.month++;
        } else {
          this.date.year++;
          this.date.month = 1;
        }
      }
    },
    chooseDateType(type) {
      this.dateType = type;
    },
    iconClick(type) {
      this.iconClicked = type;
    },
    // 饼状图
    initPieChart1() {
      this.myChart4 = echarts.init(this.$refs.chartPie1);
      let data = {
        EChart: this.myChart4,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: this.formatterPie(this.rightCharts.chart1),
      };
      pie(data);
    },
    formatterPie(res) {
      let result = [];
      res.forEach((item) => {
        result.push({
          value: item.num,
          name: item.type,
          itemStyle: {
            normal: {
              color: item.color,
            },
          },
        });
      });
      return result;
    },
    // 瀑布图
    initWaterFall() {
      this.myChart6 = echarts.init(this.$refs.myChart6);
      let data = {
        EChart: this.myChart6,
        name: "",
        xAxisVal: ["Ⅰ级", "Ⅱ级", "Ⅲ级", "Ⅳ级", "Ⅴ级", "Ⅵ级"],
        seriesData1: [0, 1.4, 0.4, 0.9, 1.9, 0],
        seriesData2: [0, 0.2, 0.2, 0.2, 0.2, 0],
      };
      waterFall(data);
    },
    initPieChart2() {
      this.myChart5 = echarts.init(this.$refs.chartPie2);
      let data = {
        EChart: this.myChart5,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: this.formatterPie(this.rightCharts.chart2),
      };
      pie(data);
    },
    initColumnChart() {
      this.myChart = echarts.init(this.$refs.chartColumn);
      // 进行数据请求
      let data = {
        // name: "2021年绿色指标监控变动比率排名",
        name: "",
        xAxis: ["4月", "5月", "6月", "7月", "8月", "9月", "10月"],
        seriesData: [
          {
            name: "Ⅰ类",
            type: "bar",
            stack: "Ad",
            barWidth: 16, //柱图宽度
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#1879F0",
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Ⅱ类",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#3885E4",
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Ⅲ类",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#73AEF8",
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Ⅳ类",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#8BBFFF",
              },
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Ⅴ类",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#ABD1FF",
              },
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "劣Ⅴ类",
            type: "bar",
            stack: "Ad",
            emphasis: {
              focus: "series",
            },
            itemStyle: {
              normal: {
                color: "#D2E6FF",
              },
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
        ],
        EChart: this.myChart,
      };
      ColumnBar(data);
    },
    initSingleBar() {
      this.myChart2 = echarts.init(this.$refs.chartSingleBar);
      let data = {
        EChart: this.myChart2,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: [16.17, 33.3, 50, 100],
      };
      singleBar(data);
    },
    initSingleBar2() {
      this.myChart3 = echarts.init(this.$refs.chartSingleBar2);
      let data = {
        EChart: this.myChart3,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: [16.17, 16.17, 66.7, 100],
      };
      singleBar(data);
    },
  },
};
</script>
<style lang="scss">
.environmentManage {
  .el-input--suffix {
    width: 170%;
    margin-left: -50px;
    .el-input__inner {
      padding-right: 30 px;
      background: grey;
      border: transparent;
      color: #fff;
    }
  }
}
</style>
<style lang="scss" scoped>
.environmentManage {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  .map {
    width: 100%;
    height: 100%;
  }
  .chartsTitle {
    height: 30px;
    width: 100%;
    align-items: center;
    border-bottom: 2px solid #fff;
    display: flex;
    justify-content: space-between;
    .chartsTitle-font {
      width: 90%;
      height: 28px;
      display: flex;
      .chartsTitle-font--big {
        height: 28px;
        // width: 70%;
        line-height: 28px;
        font-size: 18px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #ffffff;
        line-height: 28px;
        margin-right: 4px;
      }
      .chartsTitle-font--small {
        height: 28px;
        // width: 70%;
        font-size: 14px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: #b1b1b1;
        line-height: 34px;
      }
    }
    .chartsTitle-img {
      width: 0;
      height: 0;
      border-bottom: 10px solid #46eed7;
      border-right: 10px solid transparent;
      position: relative;
      right: 0;
      bottom: -9px;
    }
  }
  .chartsTitle2 {
    width: 100%;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    .point {
      width: 10px;
      height: 10px;
      background: #1879f0;
      border-radius: 5px;
    }
    .name {
      margin-left: 10px;
      font-size: 18px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: 500;
      color: #ffffff;
      line-height: 22px;
    }
  }

  .left {
    position: absolute;
    width: 440px;
    height: calc(100% - 66px);
    min-height: 870px;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0.74) 0%,
      rgba(33, 33, 33, 0) 100%
    );
    left: 0;
    top: 64px;
    display: flex;
    justify-content: space-between;
    // flex-direction: Column-reverse;
    .charts-div {
      width: 358px;
      height: 100%;
      // border: 1px solid blue;
      padding: 36px 0 36px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .charts_1 {
        width: 100%;
        height: 44%;
        // border: 1px solid yellowgreen;
        .select2 {
          width: 100%;
          height: 46px;
          // border: 1px solid red;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          margin-top: 10px;
          .label {
            width: 20%;
            height: 16px;
            font-size: 16px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: #ffffff;
            text-align: right;
            line-height: 16px;
          }
          .options {
            width: 80%;
            height: 40px;
          }
        }
        .charts {
          width: 100%;
          height: calc(100% - 100px);
          // border: 1px solid yellowgreen;
        }
      }
      .charts_2 {
        width: 100%;
        height: 27.5%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 36px);
        }
      }
      .charts_3 {
        width: 100%;
        height: 27.5%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 36px);
        }
      }
    }
    .icons-list {
      width: 70px;
      height: auto;
      min-height: 100px;
      position: relative;
      // bottom: 0px;
      .left_iconList {
        width: 100%;
        position: absolute;
        height: 280px;
        bottom: 60px;
        .icon_item {
          cursor: pointer;
          width: 70px;
          height: 70px;
          background: url("../../assets/icons/environmentProtect/back.png") 0
            8px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .icon_item_active {
          cursor: pointer;
          width: 70px;
          height: 70px;
          background: url("../../assets/icons/environmentProtect/back_active.png")
            0 8px;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .right {
    position: absolute;
    width: 440px;
    height: calc(100% - 66px);
    min-height: 870px;
    // border: 1px solid red;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0) 0%,
      rgba(33, 33, 33, 0.74) 100%
    );
    right: 0;
    top: 64px;
    padding: 36px 30px 36px 62px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .select2 {
      width: 100%;
      height: 46px;
      // border: 1px solid red;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      margin-top: 10px;
      .label {
        width: 20%;
        height: 16px;
        font-size: 16px;
        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
        font-weight: 500;
        color: #ffffff;
        text-align: right;
        line-height: 16px;
      }
      .options {
        width: 80%;
        height: 40px;
      }
    }
    .date {
      width: 100%;
      height: 40px;
      margin: 6px 0;
      display: flex;
      .select {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        .select_main {
          display: flex;
          height: 100%;
          align-items: center;
          margin: 0 14px;
          color: #fff;
        }
        .done {
          cursor: pointer;
          color: #fff;
        }
      }
      .item {
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 4px;
        .itemType {
          width: 33.3%;
          height: 36px;
          color: #fff;
          font-size: 14px;
          background: rgba(255, 255, 255, 0.5);
          line-height: 36px;
          cursor: pointer;
        }
        .itemType_active {
          width: 33.3%;
          height: 36px;
          color: #fff;
          font-size: 14px;
          background: #1879f0;
          line-height: 36px;
          cursor: pointer;
        }
      }
    }
    .chart1 {
      width: 100%;
      height: 30%;
      .chart1_main {
        width: 100%;
        height: calc(100% - 22px);
        display: flex;
        align-items: center;
        .chart {
          width: 50%;
          height: 100%;
        }
        .chartList {
          width: 50%;
          height: 100%;
          // padding: 10px 0;
          box-sizing: border-box;
          .chartList-item {
            // opacity: 0.8;
            border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
            display: flex;
            font-size: 15px;
            align-items: center;
            .index {
              border-radius: 5px;
              width: 10px;
              height: 10px;
              margin-right: 8px;
            }
            div {
              width: 33%;
              opacity: 1;
              color: #fff;
              height: 26px;
              line-height: 26px;
              text-align: left;
            }
          }
        }
      }
    }
    .chart2 {
      width: 100%;
      height: 30%;
      .chart1_main {
        width: 100%;
        height: calc(100% - 22px);
        display: flex;
        align-items: center;
        .chart {
          width: 50%;
          height: 100%;
        }
        .chartList {
          width: 50%;
          height: 100%;
          // padding: 10px 0;
          box-sizing: border-box;
          .chartList-item {
            border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
            display: flex;
            font-size: 15px;
            align-items: center;
            .index {
              border-radius: 5px;
              width: 10px;
              height: 10px;
              margin-right: 8px;
            }
            div {
              width: 33%;
              opacity: 1;
              color: #fff;
              height: 26px;
              line-height: 26px;
              text-align: left;
            }
          }
        }
      }
    }
    .chart3 {
      width: 100%;
      height: 30%;
      .chartBox {
        width: 100%;
        height: calc(100% - 36px);
      }
    }
  }
}
</style>
