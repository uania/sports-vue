<template>
  <div>
    <Swiper></Swiper>
    <div class="notice">
        <van-notice-bar :text="notice" scrollable left-icon="volume-o" />
    </div>
    <span @click="goIntro()">content</span>
    <!-- <p @click="goLogin()" class="gologin">去登录页</p> -->
  </div>
</template>
<script>
import Swiper from '@/components/swiper/index.vue'
export default {
    data () {
        return{
            notice: '为了庆祝成立一周年，将开启限时抢购活动，快来参与吧!'
        }
    },
    components: {
        Swiper
    },
    mounted() {
        setTimeout(()=>{
            this.$store.commit('load', false)
        },100)
    },
    methods: {
        goIntro(){
            this.$router.push('/Home/Introduce')
            // 传参与取参数
            // this.$router.push('/Home/Introduce?id' + id)
            // this.$router.push({path: '', query: {plan: ''}})
            // this.$router.push({path: '', params: {plan: ''}})
            // this.$router.push({path: `/Home/Introduce/${id}`})
            // this.$routes.query.id
            // this.$routes.query.plan
            // this.$routes.params.plan
        },
        goLogin(){
            this.$router.push('/Login')
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
@import './index.scss'
</style>