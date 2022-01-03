<template>
  <div>
    个人中心页
    个人中心页
    个人中心页
  </div>
</template>

<script>
export default {
    data () {
      return{

      }
    },
    components: {

    },
    mounted() {
        setTimeout(()=>{
            this.$store.commit('load', false)
        },500)
    },
    methods: {

    },
    computed:{
        clientWidth () {
            return this.$store.state.clientWidth
        }
    }
};
</script>

<style lang="scss" scoped>
</style>