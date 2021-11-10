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
          <div class="chartsTitle">
            <div class="chartsTitle-font">
              <span class="chartsTitle-font--big">水质类别月度分析</span>
              <span class="chartsTitle-font--small">/ Monthly analysis</span>
            </div>
            <div class="chartsTitle-img"></div>
          </div>
        </div>
        <div class="charts_2"></div>
        <div class="charts_3"></div>
      </div>
      <div class="icons-list">icons</div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
// import BaiduMap from "vue-baidu-map/components/map/Map.vue";
export default {
  name: "Index",

  // components: {
  //   BaiduMap,
  //   // 使用该组件
  // },
  data() {
    return {};
  },
  methods: {},
};
</script>


<style lang="scss" scoped>
.environmentManage {
  width: 100%;
  height: calc(100vh - 68px);
  position: relative;
  .map {
    width: 100%;
    height: calc(100vh - 68px);
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
        font-size: 21px;
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
      width: 5%;
      height: 28px;
      width: 0; /*1.设置宽高为0*/
      height: 0;
      /*2.除右边都变透明色，实边*/
      border-color: transparent transparent transparent red;
      border-style: solid;
      border-width: 0 0 12px 12px; /*3.上边宽100，右边宽50，下左边宽0*/
    }
  }
  .left {
    position: absolute;
    width: 440px;
    height: 100%;
    min-height: 942px;
    border: 1px solid red;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0.74) 0%,
      rgba(33, 33, 33, 0) 100%
    );
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    // flex-direction: Column-reverse;
    .charts-div {
      width: 358px;
      height: 100%;
      border: 1px solid blue;
      padding: 36px 0 36px 30px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      .charts_1 {
        width: 100%;
        height: 44%;
        border: 1px solid yellowgreen;
      }
      .charts_2 {
        width: 100%;
        height: 27.5%;
        margin-top: 0.5%;
        border: 1px solid yellowgreen;
      }
      .charts_3 {
        width: 100%;
        height: 27.5%;
        margin-top: 0.5%;
        border: 1px solid yellowgreen;
      }
    }
    .icons-list {
      width: 40px;
      height: auto;
      min-height: 100px;
      position: relative;
      bottom: 0px;
      border: 1px solid blue;
    }
  }
  .right {
    position: absolute;
    width: 440px;
    height: 100%;
    min-height: 942px;
    border: 1px solid red;
    background: linear-gradient(
      90deg,
      rgba(33, 33, 33, 0) 0%,
      rgba(33, 33, 33, 0.74) 100%
    );
    right: 0;
    top: 0;
  }
}
</style>
