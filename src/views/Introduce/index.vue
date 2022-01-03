<template>
  <div>
    介绍页
    介绍页介绍页介绍页介绍页介绍页介绍页介绍页介绍页介绍页
    介绍页
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