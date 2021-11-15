<!-- 综合态势 -->
<template>
  <div class="ComprehensiveSituation">
    <div class="box">
      <div class="left">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>园区规模</h2>
              <span>Park scale</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="park"
                style="width: 100%; height: 157px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>重大危险源</h2>
              <span>Major hazard</span>
            </div>
            <div class="item-box">
              <el-row class="flex-row">
                <el-col>
                  <span>危险化学生产</span>
                  <span>169</span>
                </el-col>
                <el-col>
                  <span>危险化学品经营</span>
                  <span>10</span>
                </el-col>
                <el-col>
                  <span>危险化学品使用</span>
                  <span>7</span>
                </el-col>
              </el-row>

              <div class="item-pie item-block">
                <div class="item-pie-left">
                  <div
                    id="main"
                    ref="major"
                    style="width: 100%; height: 115px"
                  ></div>
                </div>

                <ul>
                  <li v-for="(item, id) in list1" :key="id">
                    <i></i>
                    <span>{{ item.name }}</span>
                    <span>{{ item.val }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>危化品</h2>
              <span>Hazardous chemicals</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="hazardous"
                style="width: 100%; height: 157px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>高危工艺</h2>
              <span>Risk point</span>
            </div>
            <div class="item-box">
              <div class="slider">
                <p>
                  <span>重点监管高危工艺备份</span>
                  <span>高危工艺</span>
                </p>
                <el-slider v-model="value1"></el-slider>
                <el-row class="flex-row">
                  <el-col>
                    <span>高危工艺</span>
                    <span>395</span>
                  </el-col>
                  <el-col>
                    <span>重点监管高危工艺</span>
                    <span>500</span>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </div>

        <div style="red;font-size:90px">423423423</div>
      </div>

      <div class="right">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>今日隐患排查</h2>
              <span>Hidden danger investigation</span>
            </div>
            <div class="item-box">
              <div class="item-pie item-block marginTop">
                <div class="item-pie-left">
                  <div
                    id="main"
                    ref="hiddendanger"
                    style="width: 100%; height: 130px"
                  ></div>
                </div>

                <ul>
                  <li v-for="(item, id) in list2" :key="id">
                    <i></i>
                    <span>{{ item.name }}</span>
                    <span>{{ item.val }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>今日危险作业</h2>
              <span>Hazardous work</span>
            </div>
            <div class="item-box">
              <div
                id="main"
                ref="hazardWork"
                style="width: 100%; height: 157px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>今日报警</h2>
              <span>Call the police today</span>
            </div>
            <div class="item-box">
              <el-row class="flex-row">
                <el-col>
                  <span>高危工艺</span>
                  <span>395</span>
                </el-col>
                <el-col>
                  <span>重点监管高危工艺</span>
                  <span>500</span>
                </el-col>
              </el-row>
              <div
                id="main"
                ref="callThePolice"
                style="width: 100%; height: 120px"
              ></div>
            </div>
          </div>

          <div class="item">
            <div class="line">
              <h2>风险点</h2>
              <span>Risk point</span>
            </div>
            <div class="item-box">
              <el-row class="flex-row flex-row-inline">
                <el-col>
                  <span>可燃气体</span>
                  <span>965</span>
                </el-col>
                <el-col>
                  <span>有毒气体</span>
                  <span>410</span>
                </el-col>
              </el-row>

              <div class="item-pie item-block">
                <div class="item-pie-left">
                  <div
                    id="main"
                    ref="riskPoint"
                    style="width: 100%; height: 115px"
                  ></div>
                </div>

                <ul>
                  <li v-for="(item, id) in list3" :key="id">
                    <i></i>
                    <span>{{ item.name }}</span>
                    <span>{{ item.val }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BasicsBar, BasicsLine, BasicsPie } from "@/utils/charts/index.js";

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
    };
  },
  methods: {
    hazardousInit() {
      // 危化品
      let myChart = this.$echarts.init(this.$refs.hazardous);
      let data = {
        EChart: myChart,
        name: "2323",
        yAxspLine: true,
        barWidth: 80,
        yAxMin: 0,
        yAxMax: 500,
        xAxisData: ["危化品", "重点监管危化品"],
        seriesData: [390, 100],
      };
      BasicsBar(data);
    },
    parkInit() {
      // 园区规模
      let myChart = this.$echarts.init(this.$refs.park);
      let option = {
        EChart: myChart,
        barWidth: 16,
        xAxLineShow: true,
        yAxLineShow: true,
        seriLabShow: true,
        xAxisData: ["企业", "库区", "仓库", "罐区", "储藏", "生产装置"],
        seriesData: [70, 120, 40, 134, 350, 130],
      };

      BasicsBar(option);
    },
    hazardWorkInit() {
      // 今日危险作业
      let myChart = this.$echarts.init(this.$refs.hazardWork);
      let option = {
        EChart: myChart,
        barWidth: 16,
        xAxLineShow: true,
        yAxLineShow: true,
        seriLabShow: true,
        xAxisData: ["动火", "受限空间", "高处", "吊装", "临时用电", "设备检修"],
        seriesData: [130, 240, 140, 114, 120, 90],
      };
      BasicsBar(option);
    },
    callThePoliceInit() {
      // 今日报警
      let myChart = this.$echarts.init(this.$refs.callThePolice);
      let option = {
        EChart: myChart,
        yAxspLine: true,
        yAxMin: 0,
        yAxMax: 200,
        yAxsplitNum: 3,
        xAxisData: ["储罐", "监测泄漏点", "生产装置", "仓库"],
        seriesData: [130, 180, 140, 110],
      };
      BasicsLine(option);
    },
    majorInit() {
      // 重大危险源
      let myChart = this.$echarts.init(this.$refs.major);
      let option = {
        EChart: myChart,
        // legendShow:true,
        titlText: "总数\n186",
        yAxspLine: true,
        yAxMin: 0,
        yAxMax: 200,
        seriRadius: ["55%", "94%"],
        xAxisData: ["储罐", "监测泄漏点", "生产装置", "仓库"],
        seriesData: [
          {
            value: 169,
            name: "危险化学生产",
          },
          {
            value: 224,
            name: "危险化学品经营",
          },
          {
            value: 154,
            name: "危险化学品使用",
          },
        ],
      };
      BasicsPie(option);
    },
    hiddendangerInit() {
      // 今日隐患排查
      let myChart = this.$echarts.init(this.$refs.hiddendanger);
      let option = {
        EChart: myChart,
        yAxspLine: true,
        yAxMin: 0,
        yAxMax: 200,
        seriRadius: ["100%"],
        xAxisData: ["储罐", "监测泄漏点", "生产装置", "仓库"],
        seriesData: [
          {
            value: 169,
            name: "危险化学生产",
          },
          {
            value: 224,
            name: "危险化学品经营",
          },
          {
            value: 154,
            name: "危险化学品使用",
          },
        ],
      };
      BasicsPie(option);
    },
    riskPointInit() {
      // 风险点

      let myChart = this.$echarts.init(this.$refs.riskPoint);
      let option = {
        EChart: myChart,
        // legendShow:true,
        yAxspLine: true,
        yAxMin: 0,
        yAxMax: 200,
        seriRadius: ["55%", "100%"],
        xAxisData: ["储罐", "监测泄漏点", "生产装置", "仓库"],
        seriesData: [
          {
            value: 169,
            name: "危险化学生产",
          },
          {
            value: 224,
            name: "危险化学品经营",
          },
          {
            value: 154,
            name: "危险化学品使用",
          },
        ],
      };
      BasicsPie(option);
    },
  },

  created() {
    this.$nextTick(() => {
      this.hazardousInit();
      this.parkInit();
      this.hazardWorkInit();
      this.callThePoliceInit();
      this.majorInit();
      this.hiddendangerInit();
      this.riskPointInit();
    });
  },
};
</script>

<style lang="scss" scoped>
.ComprehensiveSituation {
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
    .content {
      width: 357px;
      height: calc(100% - 105px);
      margin-top: 104px;
      .item {
        width: 100%;
        .item-box {
          width: 100%;
          height: 170px;
          // border: 2px solid yellow;
          padding-top: 5px;
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

    .flex-row {
      display: flex;
      justify-content: space-between;
      .el-col {
        color: #fff;
        width: 42%;
        span {
          display: block;
        }
        span:first-child {
          font-size: 14px;
        }
        span:last-child {
          font-size: 20px;
          margin-top: 5px;
        }
      }
    }
    .el-row::after,
    .el-row::before {
      display: none;
    }
    .flex-row-inline {
      width: 90%;
      margin: 8px auto;
      .el-col span {
        display: inline-block;
      }
      span:first-child {
        margin-right: 12px;
      }
    }
  }

  .item-pie {
    width: 90%;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    .item-pie-left {
      width: 130px;
    }

    ul {
      width: 170px;
      li {
        position: relative;
        padding-left: 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
        font-size: 15px;
        color: #ffffff;
        line-height: 26px;
        i {
          width: 8px;
          height: 8px;
          position: absolute;
          border-radius: 50%;
          left: -2px;
          top: 9px;
        }
      }

      li:nth-child(1) i {
        background: rgba(51, 130, 231, 1);
      }

      li:nth-child(2) i {
        background: rgba(56, 133, 228, 1);
      }

      li:nth-child(3) i {
        background: rgba(115, 174, 248, 1);
      }
      li:nth-child(4) i {
        background: rgba(139, 191, 255, 1);
      }
      li:nth-child(5) i {
        background: rgba(139, 191, 255, 1);
      }
    }
  }

  .marginTop {
    margin-top: 15px;
  }
}
</style>