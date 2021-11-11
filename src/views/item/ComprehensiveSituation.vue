<!-- 综合态势 -->
<template>
  <div class="SmartEnvironmentalProtection">
    <!-- <div class="bg"></div> -->

    <div class="box">
      <div class="left">
        <div class="item">
          <div class="line">
            <h2>园区规模</h2>
            <b>/</b>
            <span>Park scale</span>
            <i></i>
          </div>

          <div class="item-box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.SmartEnvironmentalProtection {
  width: 100%;
  height: calc(100% - 64px);
  margin-top: 64px;
  background: url("../../assets/2.jpg") no-repeat center;
  background-size: 100%;
  position: relative;
 

  .box {
    width: 100%;
    height: 100%;
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
  .left {
    width: 360px;
    height: calc(100% - 100px);
    margin: 30px 0 0 40px;
    border: 1px solid #fff;
    .item {
      width: 100%;
      .item-box {
        width: 100%;
        height: 170px;
        border: 1px solid red;
      }
    }
  }
}
</style>