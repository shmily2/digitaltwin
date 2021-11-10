<template>
  <div class="box">
    <div class="head">
      <div class="left">
        <div>
          <img src />
        </div>
        <div>
          <span>泰兴经济开发区</span>
          <span>Taixing Economic Dev</span>
        </div>
      </div>
      <div class="middle">
        <ul>
          <li>
            <router-link
              to="/home/ComprehensiveSituation"
              style="color: #409eff"
              >综合态势</router-link
            >
          </li>
          <li>
            <router-link to="/home/SmartEconomy" style="color: #409eff"
              >智慧经济</router-link
            >
          </li>
          <li>
            <router-link to="/home/IntellectualClosure" style="color: #409eff"
              >智慧封闭</router-link
            >
          </li>
          <li>
            <router-link
              to="/home/IntelligentSafetySupervision"
              style="color: #409eff"
              >智慧安监</router-link
            >
          </li>
          <li>
            <router-link
              to="/home/SmartEnvironmentalProtection"
              style="color: #409eff"
              >智慧环保</router-link
            >
          </li>
          <li>
            <router-link to="/home/IntelligentEmergency" style="color: #409eff"
              >智慧应急</router-link
            >
          </li>
          <li>
            <router-link to="/home/AuxiliaryDecision" style="color: #409eff"
              >辅助决策</router-link
            >
          </li>
        </ul>
      </div>
      <div class="right"></div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  .head {
    height: 64px;
    width: 100%;
    z-index: 10000;
    position: absolute;
    top: 0;
    background: linear-gradient(
      180deg,
      rgba(33, 33, 33, 0.8) 0%,
      rgba(33, 33, 33, 0) 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 440px;
    }
    .right {
      width: 440px;
    }
    .middle {
      flex: 1;
      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        color: #686868;
        li {
          min-width: 42px;
          cursor: pointer;
        }
      }
    }
  }
  .content {
    flex: 1;
    width: 100%;
  }
}
</style>