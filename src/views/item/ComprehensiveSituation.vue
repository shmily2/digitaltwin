<!-- 综合态势 -->
<template>
  <div class="ComprehensiveSituation">

    <div class="box">
      <div class="left">
        <div class="item">
          <div class="line">
            <h2>园区规模</h2>
            <b>/</b>
            <span>Park scale</span>
            <i></i>
          </div>
          <div class="item-box">
            <div id="main" ref="main1" style="width: 100%; height: 170px"></div>
          </div>
        </div>

        <div class="item">
          <div class="line">
            <h2>重大危险源</h2>
            <b>/</b>
            <span>Major hazard</span>
            <i></i>
          </div>
          <div class="item-box">
            <div id="main" ref="main2" style="width: 100%; height: 170px"></div>
          </div>
        </div>

        <div class="item">
          <div class="line">
            <h2>危化品</h2>
            <b>/</b>
            <span>Major hazard</span>
            <i></i>
          </div>
          <div class="item-box">
            <div id="main" ref="main3" style="width: 100%; height: 170px"></div>
          </div>
        </div>

        <div class="item">
          <div class="line">
            <h2>危化品</h2>
            <b>/</b>
            <span>Hazardous chemicals</span>
            <i></i>
          </div>
          <div class="item-box">
            <div id="main" ref="main4" style="width: 100%; height: 170px"></div>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="item">
          <div class="line">
            <h2>园区规模</h2>
            <b>/</b>
            <span>Park scale</span>
            <i></i>
          </div>
          <div class="item-box"></div>
        </div>

        <div class="item">
          <div class="line">
            <h2>重大危险源</h2>
            <b>/</b>
            <span>Major hazard</span>
            <i></i>
          </div>
          <div class="item-box"></div>
        </div>

        <div class="item">
          <div class="line">
            <h2>危化品</h2>
            <b>/</b>
            <span>Major hazard</span>
            <i></i>
          </div>
          <div class="item-box"></div>
        </div>

        <div class="item">
          <div class="line">
            <h2>危化品</h2>
            <b>/</b>
            <span>Hazardous chemicals</span>
            <i></i>
          </div>
          <div class="item-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        tooltip: {
          show: false,
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: 40,
          right: 0,
          bottom: 25,
          top: 25,
          containLabel: false,
        },
        xAxis: [
          {
            type: "category",
            data: ["企业", "库区", "仓库", "罐区", "储藏", "生产装置"],
            axisTick: {
              show: false, //隐藏刻度线
              alignWithLabel: false, //刻度对齐
            },
            axisLabel: {
              interval: 0, //设置间隔为0
            },
            axisLine: {
              show: true, //底部线段
              lineStyle: {
                color: "#fff",
                width: 2, //刻度线段宽度
                fontSize: 22,
              },
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            splitLine: {
              show: false,
              border: 20,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
                width: 2,
              },
              textStyle: {
                fontSize: 18,
              },
            },
            axisTick: { show: false },
            min: 0,
            max: 250,
          },
        ],
        series: [
          {
            name: "Direct",
            type: "bar",
            barWidth: "50%",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff",
                    fontSize: 12,
                  },
                },
              },
            },
            data: [70, 120, 40, 134, 350, 130],
          },
        ],
      },
    };
  },
  methods: {},
  mounted() {},
  created() {
    this.$nextTick(() => {
      let myChart1 = this.$echarts.init(this.$refs.main1);
      let myChart2 = this.$echarts.init(this.$refs.main2);
      let myChart3 = this.$echarts.init(this.$refs.main3);
      let myChart4 = this.$echarts.init(this.$refs.main4);
      myChart1.setOption(this.options);
      myChart2.setOption(this.options);
      myChart3.setOption(this.options);
      myChart4.setOption(this.options);
    });

    // var chartDom = echarts.init(this.$refs.main);

    //
  },
};
</script>

<style lang="scss" scoped>
.ComprehensiveSituation {
  width: 100%;
  height: calc(100% - 64px);
  margin-top: 64px;
  background: url("../../assets/2.jpg") no-repeat center;
  background-size: 100%;
  position: relative;

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    border: 1px solid red;
  }
  .line {
    display: flex;
    align-items: flex-end;
    position: relative;
    padding-bottom: 2px;
    border-bottom: 3px solid #fff;
    h2 {
      color: #fff;
      font-size: 21px;
      line-height: 24px;
      font-weight: 400;
      letter-spacing: 1px;
    }
    b {
      font-weight: 400;
      color: #b1b1b1;
      margin: 0 4px 0 6px;
      font-size: 14px;
    }
    span {
      font-size: 14px;
      color: #b1b1b1;
    }
    i {
      width: 10px;
      height: 9px;
      background: url("../../assets/triangle.png") no-repeat center;
      position: absolute;
      right: 0;
      bottom: 2px;
    }
  }
  .left,
  .right {
    width: 357px;
    height: calc(100% - 80px);
    margin: 40px 30px 0;
    border: 1px solid #fff;
    .item {
      width: 100%;
      margin-bottom: 25px;
      .item-box {
        width: 100%;
        height: 170px;
        margin: 5px 0;
      }
    }
  }
}
</style>