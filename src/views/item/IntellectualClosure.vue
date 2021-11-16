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
          <!-- 海康 -->
          <div class="video">
            <preview :dataStream="dataStream"></preview>
          </div>
          <!-- 轮播 -->
          <div class="scrollTable">
            <dv-scroll-board
              @click="rowData"
              :config="config"
              class="scrollBoard_style"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
        <div class="charts_2">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">车辆类型统计</span>
              <span class="chartsTitle-font--small"
                >/ Vehicle type statistics</span
              >
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
              <span class="chartsTitle-font--big">告警统计</span>
              <span class="chartsTitle-font--small">/ Alarm statistics</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="chart1_main">
            <div class="chart">
              <div ref="chartPie1" style="width: 100%; height: 100%"></div>
            </div>
            <div class="chartList">
              <div
                class="chartList-item"
                v-for="(item, index) in leftCharts.chart1"
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
      <div class="charts_1">
        <!-- 海康 -->
        <div class="video">
          <preview2 :dataStream="dataStream2"></preview2>
        </div>
        <!-- 轮播 -->
        <div class="scrollTable">
          <dv-scroll-board
            @click="rowData"
            :config="config"
            class="scrollBoard_style"
            style="width: 100%; height: 100%"
          />
        </div>
      </div>
      <div class="charts_2">
        <div class="chartsTitle">
          <div class="chartsTitle-font">
            <span class="chartsTitle-font--big">车辆流量统计</span>
            <span class="chartsTitle-font--small"
              >/ Vehicle flow statistics</span
            >
          </div>
          <div class="chartsTitle-img"></div>
        </div>
        <div class="charts">
          <div style="width: 100%; height: 100%" ref="chartSingleBar3"></div>
        </div>
      </div>
      <div class="charts_3">
        <div class="chartsTitle">
          <div class="chartsTitle-font">
            <span class="chartsTitle-font--big">摄像头分类</span>
            <span class="chartsTitle-font--small">/ Camera classification</span>
          </div>
          <div class="chartsTitle-img"></div>
        </div>
        <div class="chart1_main">
          <div class="chart">
            <div ref="chartPie2" style="width: 100%; height: 100%"></div>
          </div>
          <div class="chartList">
            <div
              class="chartList-item"
              v-for="(item, index) in rightCharts.chart1"
              :key="index"
            >
              <div class="index" :style="{ background: item.color }"></div>
              <div style="width: 80%">{{ item.type }}</div>
              <div style="width: 20%">{{ item.num }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ColumnBar,
  singleBar,
  pie,
  waterFall,
  AreaChart,
} from "@/utils/charts/index.js";
import preview from "@/components/preview.vue";
import preview2 from "@/components/preview2.vue";
import * as echarts from "echarts";
export default {
  name: "Index",
  components: {
    preview,
    preview2,
  },
  data() {
    return {
      dataStream: "",
      dataStream2: "",
      config: {
        indexHeader: "序号",
        index: true,
        headerBGC: " rgba(33, 33, 33, 0.3)",
        oddRowBGC: "transparent",
        evenRowBGC: "transparent",
        // columnWidth: [60],
        rowNum: 6,
        header: ["姓名", "温度"],
        data: [
          ["杨海清", "36.5°C"],
          ["杨平", "37.5°C"],
          ["韩刚龙", "37.2°C"],
          ["陈桂平", '<span style="color:red;">39.5°C</span>'],
          ["刘再海", "37.5°C"],
          ["刘梅冉", "37.5°C"],
          ["李佐伊", "37.5°C"],
          ["杨海清", "36.5°C"],
          ["杨平", "37.5°C"],
          ["韩刚龙", "37.2°C"],
        ],
        align: ["center"],
      },

      iconClicked: 1,
      date: {
        year: "",
        quarter: "",
        month: "",
      },
      leftCharts: {
        chart1: [
          {
            color: "#1879F0",
            type: "违停",
            num: 620,
            percent: "70%",
          },
          {
            color: "#8BBFFF",
            type: "入园超时",
            num: 350,
            percent: "30%",
          },
        ],
      },

      rightCharts: {
        chart1: [
          {
            color: "#1879F0",
            type: "云台式摄像头",
            num: 200,
            percent: "86.24%",
          },
          {
            color: "#3885E4",
            type: "枪型摄像头",
            num: 147,
            percent: "8.26%",
          },
          {
            color: "#73AEF8",
            type: "鱼眼摄像头",
            num: 436,
            percent: "1.83%",
          },
          {
            color: "#8BBFFF",
            type: "球型摄像头",
            num: 57,
            percent: "1.83%",
          },
          {
            color: "#ABD1FF",
            type: "半球型摄像头",
            num: 199,
            percent: "1.83%",
          },
        ],
      },

      dateType: "month",
      myChart: "",
      myChart2: "",
      myChart3: "",
      myChart4: "",
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
      this.initSingleBar(); //1
      this.initPieChart1(); //2
      this.initAreaChart(); //3
      // this.initSingleBar2();
      this.initPieChart2(); //4
      // this.initWaterFall();
    });
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function () {
      _this.myChart.resize();
      _this.myChart2.resize();
      _this.myChart3.resize();
      _this.myChart4.resize();
    });
  },
  methods: {
    rowData(row) {},

    iconClick(type) {
      this.iconClicked = type;
    },
    // 区域图
    initAreaChart() {
      this.myChart3 = echarts.init(this.$refs.chartSingleBar3);
      let data = {
        EChart: this.myChart3,
        name: "",
        xAxisVal: [],
        seriesData: this.formatterPie(this.leftCharts.chart1),
      };
      AreaChart(data);
    },
    // 饼状图
    initPieChart1() {
      this.myChart2 = echarts.init(this.$refs.chartPie1);
      let data = {
        EChart: this.myChart2,
        name: "",
        xAxisVal: [],
        seriesData: this.formatterPie(this.leftCharts.chart1),
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
    initPieChart2() {
      this.myChart4 = echarts.init(this.$refs.chartPie2);
      let data = {
        EChart: this.myChart4,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: this.formatterPie(this.rightCharts.chart1),
      };
      pie(data);
    },

    initSingleBar() {
      this.myChart = echarts.init(this.$refs.chartSingleBar);
      let data = {
        EChart: this.myChart,
        name: "",
        xAxisVal: ["乘用车", "客车", "商用车", "全挂牵引车"],
        seriesData: [16.17, 33.3, 50, 70, 100],
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
<style scoped>
.scrollBoard_style >>> .row-item:hover {
  background: rgba(0, 119, 255, 0.3) !important;
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
  .scrollBoard_style {
    width: 100%;
    height: 100%;
    cursor: pointer;
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
      width: 388px;
      height: 100%;
      // border: 1px solid blue;
      padding: 36px 0 36px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .charts_1 {
        width: 100%;
        height: 50%;
        .video {
          width: 100%;
          height: 200px;
          border: 1px solid red;
          margin-bottom: 10px;
        }
        .scrollTable {
          width: 100%;
          height: calc(100% - 210px);
          border: 1px solid red;
        }
        .charts {
          width: 100%;
          height: calc(100% - 100px);
          // border: 1px solid yellowgreen;
        }
      }
      .charts_2 {
        width: 100%;
        height: 24.5%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 36px);
        }
      }
      .charts_3 {
        width: 100%;
        height: 24.5%;
        margin-top: 0.5%;
        .chart1_main {
          width: 100%;
          height: calc(100% - 22px);
          display: flex;
          margin-top: 15px;
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
    .charts_1 {
      width: 100%;
      height: 50%;
      .video {
        width: 100%;
        height: 200px;
        border: 1px solid red;
        margin-bottom: 10px;
      }
      .scrollTable {
        width: 100%;
        height: calc(100% - 210px);
        border: 1px solid red;
      }
      .charts {
        width: 100%;
        height: calc(100% - 100px);
        // border: 1px solid yellowgreen;
      }
    }
    .charts_2 {
      width: 100%;
      height: 24.5%;
      margin-top: 0.5%;
      .charts {
        width: 100%;
        height: calc(100% - 36px);
      }
    }
    .charts_3 {
      width: 100%;
      height: 24.5%;
      margin-top: 0.5%;
      .chart1_main {
        width: 100%;
        height: calc(100% - 22px);
        display: flex;
        margin-top: 15px;
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
  }
}
</style>
