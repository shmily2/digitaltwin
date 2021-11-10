<template>
  <div id="login">
    <div class="box">
      <el-form :model="loginForm" ref="ruleForm" :rules="loginRules" class="loginbox">
        <h2>智慧园区</h2>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名/手机号" auto-complete="on"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" placeholder="请输入密码" auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item>
          <div>
            <el-button type="primary" @click="submitForm('ruleForm')" style="width:100%">登录</el-button>
          </div>
          <router-link to="/register" style="color:#409eff">暂无账号,去注册</router-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      loginRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ]
      }
      
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push("/home");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100vh;
  background: url("../assets/register.jpeg") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .box {
    position: absolute;
    width: 20%;
    height: 30%;
    right: 10%;
    top: 26%;
    background: rgba(36, 52, 58, 0.5);
    border-radius: 10px;
    .loginbox {
      width: 80%;
      height: 60%;
      margin-left: 10%;
      padding: 20px 0;
      box-sizing: border-box;
      h2 {
        color: #fff;
        line-height: 50px;
      }
    }
  }
}
</style>