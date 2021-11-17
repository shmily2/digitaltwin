<!-- 智慧经济 -->
<template>
  <div class="AuxiliaryDecision">
    <div class="box">
      <div class="left">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>危险品进出对比</h2>
              <span>Dangerous goods</span>
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
              <h2>今日安全事件</h2>
              <span>Today's security incident</span>
            </div>
            <div class="item-box">
              <div class="item-pie item-block">
                <div class="item-pie-left">
                  <div
                    id="main"
                    ref="main2"
                    style="width: 100%; height: 200px"
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
              <h2>热点数据分析</h2>
              <span>Hot data analysis</span>
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

      <div class="right">
        <div class="content">
          <div class="item">
            <div class="line">
              <h2>安全事件类型</h2>
              <span>Security event type</span>
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
              <h2>安全事件排行</h2>
              <span>Security incident ranking</span>
            </div>
            <div class="item-box"></div>
          </div>

          <div class="item">
            <div class="line">
              <h2>企业画像标签对比</h2>
              <span>Corporate portrait</span>
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
        { name: "小事故", val: "52" },
        { name: "轻事故", val: "15" },
        { name: "轻一般事故", val: "51" },
        { name: "重大事故", val: "42" },
        { name: "超重大事故", val: "32" },
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
      tableData: [],
    };
  },
  methods: {
    todaySecurityInit() {
      // 累计工业总产值同比分析
      let myChart = this.$echarts.init(this.$refs.main2);
      let option = {
        EChart: myChart,
        // legendShow:true,
        titlText: "4052\n总数",
        yAxspLine: true,
        yAxMin: 0,
        yAxMax: 200,
        seriRadius: ["55%", "97%"],
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
    eventTypeInit() {
      let myChart = this.$echarts.init(this.$refs.main4);
      let data = {
        EChart: myChart,
        name: "2323",
        yAxspLine: true,
        barWidth: 20,
        yAxMin: 0,
        yAxMax: 500,
        xAxisData: ["危化品", "重点监管危化品"],
        seriesData: [390, 100],
      };
      BasicsBar(data);
    },
  },

  created() {
    this.$nextTick(() => {
      this.todaySecurityInit();
      this.eventTypeInit();
    });
  },
};
</script>

<style lang="scss" scoped>
.AuxiliaryDecision {
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
        border: 1px solid red;
        .item-box {
          width: 100%;
          height: 240px;
          padding-top: 5px;
          .item-pie {
            margin-top: 15px;
          }
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
      padding-top: 30px;
      li {
        position: relative;
        padding-left: 15px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.4);
        font-size: 15px;
        color: #ffffff;
        line-height: 30px;
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
        background: rgba(0, 135, 235, 1);
      }
      li:nth-child(3) i {
        background: rgba(95, 176, 254, 1);
      }
      li:nth-child(4) i {
        background: rgba(161, 210, 255, 1);
      }
      li:nth-child(5) i {
        background: rgba(205, 231, 255, 1);
      }
    }
  }
  .marginTop {
    margin-top: 15px;
  }
}
</style>