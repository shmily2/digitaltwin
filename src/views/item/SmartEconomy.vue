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
            <div class="item-box"></div>
          </div>

          <div class="item">
            <div class="line">
              <h2>累计出口交货值同比分析</h2>
              <span>YoY analysis</span>
            </div>
            <div class="item-box"></div>
          </div>
        </div>

        <ul class="icon-btn">
          <li>
            <img src="../../assets/icons/synthesis/zh.png" alt="" />
          </li>
          <li><img src="../../assets/icons/synthesis/zs.png" alt="" /></li>
        </ul>
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
    };
  },
  methods: {
    hazardousInit() {
      // 危化品
      let myChart = this.$echarts.init(this.$refs.main1);
      let data = {
        EChart: myChart,
        name: "2323",
        yAxspLine: true,
        yAxMinBefore: 0,
        yAxMaxBefore: 600,
        legendShow: true,
        yAxspLineBefore: true,
        xAxName: "(月)",
        yAxNameBefore: "(亿元)",
        yAxNameAfter: "(%)",
        seriNameBef: "去年",
        barWidth: 10,
        seriNameAft: "今年",
        barBorderRadius: 10,
        // legendData: ["去年", "今年", "增幅"],
        xAxisData: ["1.3", "1.4", "1.5", "1.6", "1.7"],
      };
      lineAndBar(data);
    },
  },

  created() {
    this.$nextTick(() => {
      this.hazardousInit();
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
          border: 1px solid yellow;
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
</style>