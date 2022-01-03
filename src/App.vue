<template>
  <div id="app">
    <router-view/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 屏幕宽度{{clientWidth}} -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted () {
    const that = this
    window.onresize = () => {
      that.$store.commit('clientWidth', document.documentElement.clientWidth)
    }
  },
  computed: {
    clientWidth () {
      return this.$store.state.clientWidth
    }
  },
  watch: {
    // 监听小于768px后重载页面
    clientWidth (news, olds) {
      if((olds < 768 && news > 768) || (olds > 768 && news < 768)){
        this.$toast.loading({message: 'loading', loadingType: 'spinner'})
        setTimeout(() => {
          location.reload()
        }, 100);
      }
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
