<!-- 智慧经济 -->
<template>
  <div class="SmartEconomy">
    <div class="box">
      <div class="left">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>累计工业总产值同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="main1"
                style="width: 100%; height: 230px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>累计销售总产值同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="main2"
                style="width: 100%; height: 230px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>累计出口交货值同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <el-table
                class="item-table"
                :data="tableData"
                border
                size="mini"
                stripe
              >
                <el-table-column
                  prop="year"
                  label="经济"
                  align="center"
                  width="70"
                >
                  <el-table-column
                    prop="year"
                    label="月份"
                    align="center"
                    style="background: #ffffff"
                  >
                    <template slot-scope="scope">
                      {{ scope.row.year }}年
                    </template>
                  </el-table-column>
                </el-table-column>

                <el-table-column prop="a" label="去年" align="center">
                </el-table-column>

                <el-table-column prop="b" label="今年" align="center">
                </el-table-column>

                <el-table-column prop="c" label="涨幅" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>

        <ul class="icon-btn">
          <li>
            <img src="../../assets/icons/synthesis/zh.png" alt="" />
          </li>
          <li><img src="../../assets/icons/synthesis/zs.png" alt="" /></li>
        </ul>
      </div>

      <div class="right">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>累计营收同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="main4"
                style="width: 100%; height: 230px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>利润同额对比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <el-table
                class="item-table"
                :data="tableData"
                border
                size="mini"
                stripe
              >
                <el-table-column
                  prop="year"
                  label="经济"
                  align="center"
                  width="70"
                >
                  <el-table-column
                    prop="year"
                    label="月份"
                    align="center"
                    style="background: #ffffff"
                  >
                    <template slot-scope="scope">
                      {{ scope.row.year }}年
                    </template>
                  </el-table-column>
                </el-table-column>

                <el-table-column prop="a" label="去年" align="center">
                </el-table-column>

                <el-table-column prop="b" label="今年" align="center">
                </el-table-column>

                <el-table-column prop="c" label="涨幅" align="center">
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>利税总额同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="main6"
                style="width: 100%; height: 230px"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BasicsBar,
  BasicsLine,
  BasicsPie,
  lineAndBar,
  moreLine,
} from "@/utils/charts/index.js";

export default {
  data() {
    return {
      value1: "",
      list1: [
        { name: "一级", val: "52" },
        { name: "二级", val: "15" },
        { name: "三级", val: "51" },
        { name: "四级", val: "42" },
      ],
      list2: [
        { name: "一般隐患", val: "1200" },
        { name: "重大隐患", val: "1500" },
        { name: "未整改一般隐患", val: "1100" },
        { name: "未整改重大隐患", val: "300" },
        { name: "到期证书", val: "800" },
      ],
      list3: [
        { name: "重大风险", val: "52" },
        { name: "较大风险", val: "15" },
        { name: "一般风险", val: "51" },
        { name: "低风险", val: "42" },
      ],
      tableData: [
        { a: "39亿元", b: "32亿元", c: "1.75%", year: "1-3" },
        { a: "12亿元", b: "22亿元", c: "5%", year: "1-4" },
        { a: "15亿元", b: "29亿元", c: "7%", year: "1-5" },
        { a: "15亿元", b: "32亿元", c: "11.5%", year: "1-6" },
        { a: "17亿元", b: "39亿元", c: "15%", year: "1-7" },
      ],
    };
  },
  methods: {
    IndustrialInit() {
      // 累计工业总产值同比分析
      let myChart = this.$echarts.init(this.$refs.main1);
      let data = {
        EChart: myChart,
        name: "2323",
        yAxspLine: true,
        yAxMinLeft: 0,
        yAxMaxLeft: 600,
        yAxMinRight: 0,
        legendShow: true,
        yAxspLineLeft: true,
        yAxspLineRight: false,
        xAxName: "(月)",
        yAxNameLeft: "(亿元)",
        yAxNameRight: "(%)",
        seriNameLeft: "去年",
        barWidth: 10,
        seriNameRight: "今年",
        barBorderRadius: 10,
        // legendData: ["去年", "今年", "增幅"],
        xAxisData: ["1.3", "1.4", "1.5", "1.6", "1.7"],
        seriesDataLine: [10, 40, 30, 50, 20],
        seriesDataBefore: [510, 300, 500, 500, 400],
        seriesDataAfter: [200, 500, 400, 200, 480],
      };
      lineAndBar(data);
    },
    exportDeliveryInit() {
      // 累计出口交货值同比分析
      let myChart = this.$echarts.init(this.$refs.main2);
      let data = {
        EChart: myChart,
        name: "",
        yAxspLine: true,
        legendShow: true,
        yAxspLineLeft: true,
        yAxspLineRight: false,
        yAxMinLeft: 0,
        yAxMaxLeft: 500,
        yAxMinRight: 0,
        yAxMaxRight: 50,
        xAxName: "(月)",
        yAxNameLeft: "(亿元)",
        yAxNameRight: "(%)",
        seriNameLeft: "去年",
        barWidth: 10,
        seriNameRight: "今年",
        barBorderRadius: 10,
        yAxsplitNum: 6,
        // legendData: ["去年", "今年", "增幅"],
        xAxisData: ["1.3", "1.4", "1.5", "1.6", "1.7"],
        seriesDataLine: [20, 20, 30, 10, 50],
        seriesDataBefore: [210, 220, 280, 320, 400],
        seriesDataAfter: [400, 420, 480, 400, 480],
      };
      lineAndBar(data);
    },
    totalProfitInit() {
      // 利润总额
      let myChart = this.$echarts.init(this.$refs.main6);
      let data = {
        EChart: myChart,
        name: "2323",
        yAxspLine: true,
        legendShow: true,
        yAxspLineLeft: true,
        yAxspLineRight: false,
        yAxMinLeft: 0,
        yAxMaxLeft: 500,
        yAxMinRight: 0,
        yAxMaxRight: 50,
        xAxName: "(月)",
        yAxNameLeft: "(亿元)",
        yAxNameRight: "(%)",
        seriNameLeft: "去年",
        barWidth: 10,
        seriNameRight: "今年",
        barBorderRadius: 10,
        yAxsplitNum: 6,
        // legendData: ["去年", "今年", "增幅"],
        xAxisData: ["1.3", "1.4", "1.5", "1.6", "1.7"],
        seriesDataLine: [20, 20, 30, 10, 50],
        seriesDataBefore: [210, 220, 280, 320, 400],
        seriesDataAfter: [400, 420, 480, 400, 480],
      };
      lineAndBar(data);
    },
    totalSalesInit() {
      // 累计销售总产值同比分析
      let myChart = this.$echarts.init(this.$refs.main2);
      let option = {
        EChart: myChart,
        gL: 50,
        gR: 50,
        gB: 30,
        gT: 50,
        yAxspLine: true,
        legendShow: true,
        legendData: [
          {
            name: "去年",
            textStyle: {
              fontSize: 12,
              // fontWeight:'bolder',
              color: "#fff",
            },
            icon: "rect", // circle:圆   rect:长
          },
          {
            name: "今年",
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
            icon: "pie",
          },
          {
            name: "增幅",
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
            icon: "pie",
          },
        ],
        yAxMin: 0,
        yAxMax: 700,
        yAxsplitNum: 6,
        yAxName: "(亿元)",
        yAxNameright: "(%)",
        xAxName: "(月)",
        xAxisData: ["1-3", "1-4", "1-5", "1-6", "1-7"],
        seriesData: [
          {
            name: "今年",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(24, 121, 240, 1)",
            areaStyle: {
              //  color: "rgba(4, 121, 240, 0.4)"
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(24, 121, 240, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(24, 121, 240,1)",
                  },
                ]),
              },
            },
            data: [220, 382, 391, 234, 510],
          },
          {
            name: "去年",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(139, 191, 255,1)",
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(139, 191, 255, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(139, 191, 255,1)",
                  },
                ]),
              },
            },
            data: [320, 522, 501, 354, 610],
          },
          {
            name: "增幅",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(245, 242, 184, 1)",
            data: [520, 582, 601, 434, 690],
          },
        ],
      };
      moreLine(option);
    },
    totalRevenueInit() {
      // 累计营收同比分析
      let myChart = this.$echarts.init(this.$refs.main4);
      let option = {
        EChart: myChart,
        gL: 50,
        gR: 50,
        gB: 30,
        gT: 50,
        yAxspLine: true,
        legendShow: true,
        legendData: [
          {
            name: "去年",
            textStyle: {
              fontSize: 12,
              // fontWeight:'bolder',
              color: "#fff",
            },
            icon: "rect", // circle:圆   rect:长
          },
          {
            name: "今年",
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
            icon: "pie",
          },
          {
            name: "增幅",
            textStyle: {
              fontSize: 12,
              color: "#fff",
            },
            icon: "pie",
          },
        ],
        yAxMin: 0,
        yAxMax: 700,
        yAxsplitNum: 6,
        yAxName: "(亿元)",
        yAxNameright: "(%)",
        xAxName: "(月)",
        xAxisData: ["1-3", "1-4", "1-5", "1-6", "1-7"],
        seriesData: [
          {
            name: "今年",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(24, 121, 240, 1)",
            areaStyle: {
              //  color: "rgba(4, 121, 240, 0.4)"
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(24, 121, 240, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(24, 121, 240,1)",
                  },
                ]),
              },
            },
            data: [320, 522, 191, 134, 310],
          },
          {
            name: "去年",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(139, 191, 255,1)",
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 0,
                    color: "rgba(139, 191, 255, 0.1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(139, 191, 255,1)",
                  },
                ]),
              },
            },
            data: [420, 622, 301, 354, 410],
          },
          {
            name: "增幅",
            type: "line",
            // stack: "Total",
            symbolSize: 8, //拐点大小
            smooth: 0.3, //波浪
            color: "rgba(245, 242, 184, 1)",
            data: [520, 700, 501, 534, 690],
          },
        ],
      };
      moreLine(option);
    },
  },

  created() {
    this.$nextTick(() => {
      this.IndustrialInit();
      this.exportDeliveryInit();
      this.totalProfitInit();
      this.totalSalesInit();
      this.totalRevenueInit();
    });
  },
};
</script>

<style lang="scss" scoped>
.SmartEconomy {
  width: 100%;
  height: 100%;
  background: url("../../assets/background.png") no-repeat center;
  background-size: 100% 100%;
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .line {
    display: flex;
    align-items: flex-end;
    position: relative;
    padding-bottom: 4px;
    border-bottom: 2px solid #fff;
    h2 {
      color: #fff;
      font-size: 18px;
      line-height: 20px;
      font-weight: 400;
      letter-spacing: 1px;
    }
    span {
      font-size: 14px;
      line-height: 14px;
      color: #b1b1b1;
    }
    span::before {
      content: "/";
      color: #b1b1b1;
      margin: 0 4px;
      font-size: 14px;
      line-height: 14px;
    }
    span::after {
      content: "";
      width: 10px;
      height: 9px;
      background: url("../../assets/triangle.png") no-repeat center;
      position: absolute;
      right: 0;
      bottom: 2px;
    }
  }

  .left {
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0.74) 0%,
      rgba(33, 33, 33, 0) 100%
    );
  }
  .right {
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0) 0%,
      rgba(33, 33, 33, 0.74) 100%
    );
  }

  .left,
  .right {
    width: 439px;
    height: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    position: relative;
    .content {
      width: 357px;
      height: calc(100% - 105px);
      margin-top: 104px;
      .item {
        width: 100%;
        .item-box {
          width: 100%;
          height: 230px;
          padding-top: 5px;
        }
      }
    }

    .icon-btn {
      width: 55px;
      position: absolute;
      bottom: 210px;
      right: -25px;
      li {
        height: 80px;
        width: 55px;
        overflow: hidden;
        img {
          margin-left: -10px;
        }
      }

      li:nth-child(2) {
        width: 40px;
        height: 40px;
        margin: 5px 0 15px 10px;
        background: rgba(87, 95, 105, 1);
        border-radius: 50%;
        img {
          margin: 10px;
        }
      }
    }
    .slider {
      width: calc(100% - 60px);
      margin: 30px;
      p {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
        span {
          color: #ffffff;
          font-size: 14px;
        }
      }

      .el-slider {
        margin-bottom: 20px;
        ::v-deep .el-slider__runway {
          height: 16px;
          margin: 0;
          border-radius: 14px;
          background: linear-gradient(90deg, #73aef8 0%, #1879f0 100%);
        }
        ::v-deep .el-slider__bar {
          height: 16px;
          border-radius: 14px;
          background: linear-gradient(90deg, #73aef8 0%, #1879f0 100%);
        }
        ::v-deep .el-slider__button-wrapper {
          top: -5px;
        }
        ::v-deep .el-slider__button {
          width: 24px;
          height: 24px;
          background: #73aef8;
          position: relative;
          border: none;
        }
        ::v-deep .el-slider__button-wrapper::after {
          width: 10px;
          height: 10px;
          position: absolute;
          border-radius: 50%;
          background: #ffffff;
          left: 13px;
          top: 8px;
        }
      }
    }
  }

  .marginTop {
    margin-top: 15px;
  }
}

.el-table,
::v-deep .el-table__expanded-cell {
  background-color: transparent !important;
}

/* 表格内背景颜色 */
::v-deep .el-table th,
::v-deep .el-table tr,
::v-deep .el-table td {
  background-color: transparent !important;
}

::v-deep tr:first-of-type th:first-of-type:before {
  content: "";
  position: absolute;
  width: 1px;
  height: 110px;
  top: 0;
  left: 0;
  background-color: #8bbfff;
  display: block;
  transform: rotate(-62deg);
  z-index: 99;
  transform-origin: top;
}
// ::v-deep th:first-child > .cell {

::v-deep tr:nth-child(1) > th:first-child > .cell {
  text-align: right !important;
  padding-right: 5px !important;
}
::v-deep tr:nth-child(2) > th:first-child  {
  padding-left: 5px !important;
  text-align: left;
}

.item-table {
  width: 100%;
  height: 220px;
  border: 1px solid #8bbfff;
  ::v-deep .el-table__cell {
    color: #fff;
    padding: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }

  ::v-deep td {
    padding: 5px !important;
    border-bottom: 1px solid #8bbfff;
  }

  ::v-deep .el-table__cell.is-leaf {
    border-bottom: 1px solid #8bbfff;
    border-right: 1px solid #8bbfff;
  }
}
.el-table::before,
.el-table::after {
  background-color: transparent;
}
</style>

<style>
.el-table--border th.el-table__cell,
.el-table__fixed-right-patch {
  overflow: initial;
  border-bottom: none;
}
.el-table--border .el-table__cell,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid #8bbfff;
}
</style>