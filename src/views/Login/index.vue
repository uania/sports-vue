<template>
  <div class="login fx1">
      <div class="login-content">
      <h1 class="login-title fx2">
        登录
      </h1>
      <div class="loginForm">
        <el-form v-if="loginStyle" ref="form" :model="form" :rules="rules">
          <el-form-item prop="MobilePhone">
            <el-input placeholder="请输入手机号" v-model.trim="form.MobilePhone" class="areaCode">
              <el-select v-model.trim="areaCode" slot="prepend" >
                <el-option label="+86" value="+86" class="tc"></el-option>
              </el-select>
              <i class="el-icon-circle-close el-input__icon cur" slot="suffix" @click="handleIconClick('MobilePhone')"></i>
            </el-input>
          </el-form-item>
          <el-form-item prop="Code">
            <div class="fx1">
              <el-input v-model="form.Code" placeholder="请输入验证码" style="margin-right: 5px" maxlength="6">
                <i class="el-icon-circle-close el-input__icon cur" slot="suffix" @click="handleIconClick('Code')"></i>
              </el-input>
              <el-button class="getCode" type="warning" v-if="codeShow" @click="getPhoneCode">获取验证码</el-button>
              <el-button class="getCode" v-else disabled>{{ count }}秒后重试</el-button>
            </div>
          </el-form-item>
          <el-form-item class="btn-operation">
            <!-- <el-button type="warning" :loading="loading" @click="submitForm('form')" class="loginBtn" >登 录</el-button> -->
            <el-button type="warning" @click="submitForm('form')" class="loginBtn" >登 录</el-button>
            <el-button type="warning" @click="resetForm('form')" class="loginBtn" >重 置</el-button>
          </el-form-item>
        </el-form>
        <!-- <div v-if="wxData.wxState" class="wxLoginContent">

          <div class="wxCodeImg">
            二维码加载loading
            <div v-if="wxData.wxLoading" class="wxLoading fx2">
              <van-loading type="spinner" />
            </div>

            二维码扫描成功弹窗
            <div v-if="wxData.wxCodeState === 1" class="wxCodeState-success tc">
              <i class="el-icon-success"></i>
              <p>扫码成功!</p>
            </div>

            二维码过期弹窗
            <div v-if="wxData.wxCodeState === 2" class="wxCodeState-warning tc">
              <i class="el-icon-warning"></i>
              <p>二维码已过期<br>请刷新重试！</p>
            </div>
            <img :src="wxData.wxCodeImg" alt="" width="100%">
          </div>
          <div class="tc refresh">
            <span class="cur" @click="refresh">刷新二维码</span> |
            <span class="cur" @click="elses">其他方式登录</span>
          </div>
        </div> -->
        <!-- <div class="tc">
          <p>
            <span style="font-size: 14px">还不是社区用户，</span>
            <a href="javascript: void(0)" class="link" @click="GoRegister">立即注册</a>
            <a href="javascript: void(0)" class="link" @click="GoHome">返回首页</a>
          </p>
        </div> -->
        <!-- <div v-if="loginStyle" class="loginStyle fx6">
          <div class="wxLogin cur" @click="wxStates">
            <div class="tc"><img src="@/assets/login/icon_vx.png" alt=""></div>
            <div class="loginStyle-title tc">微信快捷登录</div>
          </div>
        </div>
        <div v-if="loginStyle && clientWidth > 768" class="tc records">
          ©2021 UG Leader All Rights Reserved. - Design By Mfweb.Mfweb.浙ICP备18044783号-2 浙公网安备 33018502001979号
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data () {
        return{
            //! 区号
            areaCode: '+86',
            //! 登录表单数据
            form: {
                MobilePhone: '',
                Code: ''
            },
            //! 是否点击获取验证码
            codeShow: true,
            // !验证码倒计时
            count: 60,
            //! 切换登录方式
            loginStyle: true,
            // !表单验证规则
            rules: {
                MobilePhone: [
                { required: true, message: '请输入您的手机号', trigger: 'blur' },
                {
                    pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
                    message: '请输入正确的手机号',
                    trigger: 'blur'
                }
                ],
                Code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            },
        }
    },
    components: {

    },
    mounted() {
        setTimeout(()=>{
            this.$store.commit('load', false)
        },300)
    },
    methods: {
        getPhoneCode(){
            this.codeShow = false
            const TIME_COUNT = 60
            this.timer = setInterval(()=>{
                if(this.count > 0 && this.count <= TIME_COUNT){
                    this.count--
                }else{
                    this.codeShow = true
                    clearInterval(this.timer)
                    this.timer = null
                }
            }, 1000)
        },
        submitForm(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    console.log(123)
                }
            })
        },
        resetForm(form) {
            this.$refs[form].resetFields();
        }
    },
    computed:{
        clientWidth () {
            return this.$store.state.clientWidth
        }
    }
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>