<template>
  <div class="Head fx4">
    <div class="logo">
      <img src="@/assets/logo.png" class="logo-img" @click="show = true" alt="" />
      <van-action-sheet v-model="show" cancel-text="取消">
        <div class="fx">
          <div class="operate-list-item fx2 cur" v-for="item in operates" :key='item.id'>
            <div>
              <a :href="item.path" class="operate-list-item-icon" target="_blink">
                <img :src="item.icon" alt="" />
              </a>
              <div class="operate-list-item-title tc">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <div v-if="$store.state.clientWidth > 768" class="header-pc">
      <!-- <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      > -->
      <el-menu
        :default-active="this.$route.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        background-color="#fff"
        text-color="#42b983"
        active-text-color="#F67C1B"
      >
        <template v-for="item in navPath">
            <el-submenu v-if="item.items.length" :index="item.title" :key="item.title">
                <template slot="title">
                    {{ item.title }}
                </template>
                <el-menu-item v-for="items in item.items" :key="items.title" class="h-active" :index="items.path" >
                    {{ items.title }}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.items.length == 0" :index="item.path" :key="item.title">
                {{ item.title }}
            </el-menu-item>
        </template>
      </el-menu>
    </div>
    <div v-else class="header-m">
      <img src="@/assets/home/menu_m.png" @click="navMo" class="nav-m" alt="" />
      <el-collapse-transition>
        <div v-if="navMobile" class="nav_m">
          <!-- 导航栏第二种方法 -->
          <!-- <ul class="mobileNav">
            <li v-for="item in navPath" :key="item.key">
              <div v-if="item.items.length">
                <p @click="shows = !shows">
                  {{item.title}}
                  <i v-if="shows === false" class="el-icon-caret-bottom"></i>
                  <i v-else class="el-icon-caret-top"></i>
                </p>
                <el-collapse-transition>
                  <div v-if="shows">
                    <ul>
                      <li v-for="items in item.items" :key="items.key"  @click="nav_Moile">
                        <p :class="item.path == $route.path ? 'active2' : ''">{{items.title}}</p>
                      </li>
                    </ul>
                  </div>
                </el-collapse-transition>
              </div>
              <p v-if="item.items.length == 0" @click="nav_Moile(item.title)" :class="item.path == $route.path ? 'active2' : ''">
                {{item.title}}
              </p>
            </li>
          </ul> -->
          <!-- 导航栏第一种方法 -->
          <el-menu
            :default-active="this.$route.path"
            router
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#42b983"
            active-text-color="#F67C1B"
          >
          <template v-for="item in navPath">
            <el-submenu v-if="item.items.length" :index="item.title" :key="item.title">
                <template slot="title" @click="nav_Moile">
                    {{ item.title }}
                </template>
                <el-menu-item v-for="items in item.items" :key="items.title" :index="items.path" @click="nav_Moile">
                    {{ items.title }}
                </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.items.length == 0" :index="item.path" :key="item.title" @click="nav_Moile">
                {{ item.title }}
            </el-menu-item>
          </template>
          </el-menu>
          <div v-if="clientWidth <= 768" class="fx5 operation">
            <el-button v-if="!$store.state.token" type="warning" size="small" round plain @click="Login()">登录</el-button>
            <el-button v-if="!$store.state.token" type="warning" size="small" round plain>注册</el-button>
            <el-button v-if="$store.state.token" type="warning" size="small" round plain>切换账号</el-button>
            <el-button v-if="$store.state.token" type="warning" size="small" round plain>退出登录</el-button>
          </div>
        </div>
      </el-collapse-transition>
    </div>
    <div class="user" v-if="clientWidth > 768">
      <div v-if="clientWidth > 768 && !$store.state.token">
        <el-button type="warning" size="small" round plain @click="Login()">登录</el-button>
        <el-button type="warning" size="small" round plain>注册</el-button>
      </div>
      <!-- <van-icon v-if="clientWidth <= 768 && !nav_m" name="wap-nav" class="icon-nav cur" @click="navState1"/>
      <van-icon v-if="clientWidth <= 768 && nav_m" name="cross" class="icon-nav cur" @click="navState2" /> -->
      <div v-if="clientWidth > 768 && $store.state.token" class="infos cur">
        <el-popover placement="top-start" width="50" trigger="hover">
          <ul class="cur operation tc">
            <li style="line-height:22px;">切换账户</li>
            <li style="line-height:22px;">退出登录</li>
          </ul>
          <div class="user-info fx1" slot="reference">
            <div class="user-imgUrl"><img src="@/assets/logo.png" alt="" width="100%" height="100%"></div>
            <div class="user-name hidden"> 陈传佳 </div>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      shows: false,
      navMobile: false,
      navPath: [
        { title: "首页", path: "/Home/Index", items:[] },
        { title: "介绍页", path: "/Home/Introduce", items:[] },
        { title: "分类", items: [
            { title: "水果", path: "/Home/Demo1" },
            { title: "蔬菜", path: "/Home/Demo2" },
            { title: "酸奶", path: "/Home/Demo3" }
            ]
        },
        { title: "个人中心", path: "/Home/Personal", items:[] },
      ],
      operates: [
        { id: 10, icon: require('@/assets/logo.png'), title: '去vue', path: 'https://cn.vuejs.org/', name: 'Article' },
        { id: 11, icon: require('@/assets/vant.png'), title: '去vant', path: 'https://www.w3cschool.cn/vantlesson/', name: 'Drafts' },
        { id: 12, icon: require('@/assets/elementui.png'), title: '去elementui', path: 'https://element.eleme.cn/#/zh-CN', name: 'Collect' },
        { id: 13, icon: require('@/assets/wx.png'), title: '去小程序文档', path: 'https://developers.weixin.qq.com/miniprogram/dev/framework/', name: 'News' }
      ]
    };
  },
  methods: {
    navMo() {
      this.navMobile = !this.navMobile;
      this.shows = false
    },
    nav_Moile(title) {
      this.navMobile = false

      // 第二种导航栏方法
      if(title === '首页'){
        this.$router.push('/Home/Index')
      }else if(title === '介绍页') {
        this.$router.push('/Home/Introduce')
      }else if(title === '个人中心') {
        this.$router.push('/Home/Personal')
      }
    },
    Login() {
      this.$router.push('/Login')
    }
  },
  computed: {
    clientWidth () {
        return this.$store.state.clientWidth
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>