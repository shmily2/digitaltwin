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
        <div>
          <div class="icon_item"><img src="" alt="" /></div>
          <div class="icon_item"><img src="" alt="" /></div>
          <div class="icon_item"><img src="" alt="" /></div>
          <div class="icon_item"><img src="" alt="" /></div>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import { ColumnBar, singleBar } from "@/utils/charts/index.js";
import * as echarts from "echarts";
export default {
  name: "Index",
  data() {
    return {
      myChart: "",
      myChart2: "",
      myChart3: "",
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
    this.$nextTick(() => {
      this.initColumnChart();
      this.initSingleBar();
      this.initSingleBar2();
    });
  },
  mounted() {
    let _this = this;
    window.addEventListener("resize", function () {
      console.log("asdhjahsdjhkasdh");
      _this.myChart.resize();
      _this.myChart2.resize();
      _this.myChart3.resize();
    });

    // window.onresize = () => {
    //   console.log('asdhjahsdjhkasdh')
    //   //监听窗口变化
    //   // return (() => {
    //   //   this.myChart.resize();
    //   // })();
    // };
  },
  watch: {
    screenWidth() {
      console.log("askdhjkahsdjhksjd");
      // this.$nextTick(() => {
      //   this.myChart.resize();
      // });
    },
  },
  methods: {
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
        seriesData: [120, 200, 150],
      };
      singleBar(data);
    },
    initSingleBar2() {
      this.myChart3 = echarts.init(this.$refs.chartSingleBar2);
      let data = {
        EChart: this.myChart3,
        name: "",
        xAxisVal: ["Ⅲ类", "Ⅴ类", "劣Ⅴ类"],
        seriesData: [16.17, 33.3, 66.7,100],
      };
      singleBar(data);
    },
  },
};
</script>
<style lang="scss">
.environmentManage {
  .el-input--suffix .el-input__inner {
    padding-right: 30 px;
    background: grey;
    border: transparent;
    color: #fff;
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

  .left {
    position: absolute;
    width: 440px;
    height: calc(100% - 66px);
    min-height: 870px;
    border: 1px solid red;
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
          justify-content: center;
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
            width: 70%;
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
      width: 40px;
      height: auto;
      min-height: 100px;
      position: relative;
      bottom: 0px;
      border: 1px solid blue;
      .left_iconList {
        width: 100%;
        height: 232px;
        border: 1px solid yellow;
        .icon_item {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .right {
    position: absolute;
    width: 440px;
    height: calc(100% - 66px);
    min-height: 870px;
    border: 1px solid red;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0) 0%,
      rgba(33, 33, 33, 0.74) 100%
    );
    right: 0;
    top: 64px;
  }
}
</style>
