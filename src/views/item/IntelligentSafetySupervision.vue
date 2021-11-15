<template>
  <div class="environmentManage">
    <div class="map">
      <img src="@/assets/background.png" alt="" width="100%" height="100%" />
    </div>
    <div class="left">
      <div class="charts-div">
        <div class="charts_1">
          <!-- chartsTitle -->
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">应急物资</span>
              <span class="chartsTitle-font--small">/ Emergency supplies</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <!-- charts -->
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
                <div style="width: 50%">{{ item.num }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="charts_2">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">应急队伍</span>
              <span class="chartsTitle-font--small">/ Emergency team</span>
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
              <span class="chartsTitle-font--big">应急装备</span>
              <span class="chartsTitle-font--small">/ Emergency equipment</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="charts">
            <threeDChart2></threeDChart2>
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
      <div class="charts-div">
        <div class="charts_3">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">专家库</span>
              <span class="chartsTitle-font--small">/ Expert library</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="charts">
            <threeDChart></threeDChart>
          </div>
        </div>
        <div class="charts_2">
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">应急避难所</span>
              <span class="chartsTitle-font--small">/ Emergency shelter</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <div class="charts">
            <div style="width: 100%; height: 100%" ref="chartSingleBar2"></div>
          </div>
        </div>
        <div class="charts_1">
          <!-- chartsTitle -->
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">重大危险源</span>
              <span class="chartsTitle-font--small">/ Major hazard</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
          <!-- charts -->
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
                <div style="width: 50%">{{ item.type }}</div>
                <div style="width: 50%">{{ item.num }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BasicsBar, singleBar, pie, waterFall } from "@/utils/charts/index.js";
import threeDChart from "@/components/three3DChart.vue";
import threeDChart2 from "@/components/three3DChart.vue";
import * as echarts from "echarts";
export default {
  name: "Index",
  components: { threeDChart, threeDChart2 },
  data() {
    return {
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
            type: "园区",
            num: 1980,
          },
          {
            color: "#8BBFFF",
            type: "企业",
            num: 875,
          },
        ],
      },
      rightCharts: {
        chart1: [
          {
            color: "#1879F0",
            type: "园区",
            num: 1980,
          },
          {
            color: "#8BBFFF",
            type: "企业",
            num: 875,
          },
        ],
      },

      dateType: "month",
      myChart1: "",
      myChart2: "",
      myChart4: "",
      myChart5: "",
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
      this.initPieChart1(); //1
      this.initSingleBar(); //2
      this.initSingleBar2(); //2-1
      this.initPieChart2(); //2-2
    });
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function () {
      _this.myChart1.resize();
      _this.myChart2.resize();
      _this.myChart4.resize();
      _this.myChart5.resize();
    });
  },
  methods: {
    iconClick(type) {
      this.iconClicked = type;
    },
    // 饼状图
    initPieChart1() {
      this.myChart1 = echarts.init(this.$refs.chartPie1);
      let data = {
        EChart: this.myChart1,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
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
      this.myChart5 = echarts.init(this.$refs.chartPie2);
      let data = {
        EChart: this.myChart5,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: this.formatterPie(this.rightCharts.chart1),
      };
      pie(data);
    },
    initSingleBar() {
      this.myChart2 = this.$echarts.init(this.$refs.chartSingleBar);
      let data = {
        EChart: this.myChart2,
        name: "2323",
        yAxspLine: true,
        barWidth: 80,
        yAxMin: 0,
        yAxMax: 500,
        xAxisData: ["园区", "企业"],
        seriesData: [390, 100],
      };
      BasicsBar(data);
    },
    initSingleBar2() {
      this.myChart4 = this.$echarts.init(this.$refs.chartSingleBar2);
      let data = {
        EChart: this.myChart4,
        name: "2323",
        yAxspLine: true,
        barWidth: 80,
        yAxMin: 0,
        yAxMax: 500,
        xAxisData: ["园区", "企业"],
        seriesData: [390, 100],
      };
      BasicsBar(data);
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
        height: 33%;
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
            padding: 40px 0;
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
                width: 50%;
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
      .charts_2 {
        width: 100%;
        height: 33%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 36px);
        }
      }
      .charts_3 {
        width: 100%;
        height: 33%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 5px);
          overflow: hidden;
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
    .charts-div {
      width: 358px;
      height: 100%;
      // border: 1px solid blue;
      // padding: 36px 0 36px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .charts_1 {
        width: 100%;
        height: 33%;
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
            padding: 40px 0;
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
                width: 50%;
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
      .charts_2 {
        width: 100%;
        height: 33%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 36px);
        }
      }
      .charts_3 {
        width: 100%;
        height: 33%;
        margin-top: 0.5%;
        .charts {
          width: 100%;
          height: calc(100% - 5px);
          overflow: hidden;
        }
      }
    }
  }
}
</style>
