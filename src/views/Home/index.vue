<template>
  <div>
    <div class="Header">
      <Header></Header>
    </div>
    <div class="box"></div>
    <router-view/>

    <div v-if="clientWidth < 769 " class="operate-m">
      <el-button type="warning" icon="el-icon-plus" circle @click="show = true"></el-button>
      <van-action-sheet v-model="show" cancel-text="取消">
        <div class="fx">
          <div class="operate-list-item fx2 cur" v-for="item in operates" :key='item.id'>
            <div>
              <div class="operate-list-item-icon">
                <img :src="item.icon" alt="" />
              </div>
              <div class="operate-list-item-title tc">
                <span>{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </van-action-sheet>
    </div>
    <van-progress 
      class="progress"
      :percentage="this.$store.state.clientWidth / 19.2"
      :pivot-text="clientWidth"
      pivot-color="#7232dd"
      color="linear-gradient(to right, #be99ff, #7232dd)"
    />
    <footer></footer>
    <div v-if="$store.state.load" class="shadeLoad fx2">
      <div class="circle-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/header/index.vue'

export default {
  
  components: {
    Header
  },
  data(){
    return {
      show: false,
      operates: [
        { id: 10, icon: require('@/assets/home/edit_icon_01.png'), title: '发表文章', path: '/Home/Resource/Operate', name: 'Article' },
        { id: 11, icon: require('@/assets/home/edit_icon_02.png'), title: '草稿箱', path: '/Home/Resource/Operate', name: 'Drafts' },
        { id: 12, icon: require('@/assets/home/edit_icon_03.png'), title: '收藏', path: '/Home/Resource/Operate', name: 'Collect' },
        { id: 13, icon: require('@/assets/home/edit_icon_04.png'), title: '消息', path: '/Home/Resource/Operate', name: 'News' }
      ]
    }
  },
  computed:{
    clientWidth(){
      return this.$store.state.clientWidth + ''
    }
  }
};
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>