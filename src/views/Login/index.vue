<template>
  <div class="login fx1">
    <div class="login-content">
      <h1 class="login-title fx2">登录</h1>
      <div class="loginForm">
        <el-form v-if="loginStyle" ref="form" :model="form" :rules="rules">
          <el-form-item prop="Phone">
            <el-input
              placeholder="请输入手机号"
              v-model.trim="form.Phone"
              class="areaCode"
            >
              <el-select v-model.trim="areaCode" slot="prepend">
                <el-option label="+86" value="+86" class="tc"></el-option>
              </el-select>
              <i
                class="el-icon-circle-close el-input__icon cur"
                slot="suffix"
                @click="handleIconClick('Phone')"
              ></i>
            </el-input>
          </el-form-item>
          <el-form-item class="btn-operation">
            <el-button
              type="warning"
              @click="submitForm('form')"
              class="loginBtn"
              >登 录</el-button
            >
            <el-button
              type="warning"
              @click="resetForm('form')"
              class="loginBtn"
              >重 置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { signin } from "@/api/index.js";
export default {
  data() {
    return {
      //! 区号
      areaCode: "+86",
      //! 登录表单数据
      form: {
        Phone: ""
      },
      //! 是否点击获取验证码
      codeShow: true,
      // !验证码倒计时
      count: 60,
      //! 切换登录方式
      loginStyle: true,
      // !表单验证规则
      rules: {
        Phone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          {
            pattern:
              /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: "请输入正确的手机号",
            trigger: "blur",
          },
        ],
      },
    };
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this.$store.commit("load", false);
    }, 300);
  },
  methods: {
    getPhoneCode() {
      this.codeShow = false;
      const TIME_COUNT = 60;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          this.codeShow = true;
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    },
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form.Phone);
          var data = {
            "Params":this.form
          };
          signin(data);
        }
      });
    },
    resetForm(form) {
      this.$refs[form].resetFields();
    },
  },
  computed: {
    clientWidth() {
      return this.$store.state.clientWidth;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>