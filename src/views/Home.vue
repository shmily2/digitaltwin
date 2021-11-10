<template>
  <div class="box">
    <div class="head">
      <div class="left">
        <div class="logopic">
          <img src="../assets/logo.png" />
        </div>
        <div class="compayname">
          <h2>泰兴经济开发区</h2>
          <span>Taixing Economic Dev</span>
        </div>
      </div>
      <div class="middle">
        <ul>
          <li v-for="(item,index) in List" :key="index" @click="typeclick(index)">
            <router-link :to="item.src" :class="{'active':active==index}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
      <div class="right">
        <div>
          <span>空气质量</span>
          <span>优</span>
        </div>
        <div>
          <span>湿度</span>
          <span>34%</span>
        </div>
        <div>
          <span>温度</span>
          <span>10°C</span>
        </div>
        <div>|</div>
        <div>
          <span>2021/11/08</span>
          <span>周一下午7:30</span>
        </div>
        <div>|</div>
        <div class="el-icon-rank rank"></div>
        <div>|</div>
        <div class="el-icon-setting set"></div>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      active: 0,
      List: [
        {
          name: "综合态势",
          src: "/home/ComprehensiveSituation"
        },
        {
          name: "智慧经济",
          src: "/home/SmartEconomy"
        },
        {
          name: "智慧封闭",
          src: "/home/IntellectualClosure"
        },
        {
          name: "智慧安监",
          src: "/home/IntelligentSafetySupervision"
        },
        {
          name: "智慧环保",
          src: "/home/SmartEnvironmentalProtection"
        },
        {
          name: "智慧应急",
          src: "/home/IntelligentEmergency"
        },
        {
          name: "辅助决策",
          src: "/home/AuxiliaryDecision"
        }
      ]
    };
  },
  created() {
    this.active = this.$route.meta.index;
  },
  methods: {
    typeclick(ind) {
      this.active = ind;
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .head {
    height: 64px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(33, 33, 33, 0.8) 0%,
      rgba(33, 33, 33, 0) 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      width: 360px;
      display: flex;
      .logopic {
        width: 45px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .compayname {
        display: flex;
        flex-direction: column;
        margin-left: 16px;
        h2 {
          width: 182px;
          height: 26px;
          font-size: 26px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #ffffff;
          line-height: 26px;
        }
        span {
          width: 178px;
          height: 10px;
          font-size: 10px;
          font-family: SourceHanSansCN-Medium, SourceHanSansCN;
          font-weight: 500;
          color: #b1b1b1;
          line-height: 10px;
        }
      }
    }
    .right {
      width: 440px;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      box-sizing: border-box;
      color: #fff;
      div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .rank {
        font-size: 28px;
      }
      .set {
        font-size: 26px;
      }
    }
    .middle {
      width:720px;
      padding-right: 40px;
      box-sizing: border-box;
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
<style lang="scss">
.box {
  li {
    a {
      color: #686868;
    }
    .active {
      color: #ffffff;
    }
  }
}
</style>