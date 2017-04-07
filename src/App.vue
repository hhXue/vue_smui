<template>
  <div class="content">
    <remote-js src="https://g.alicdn.com/msui/sm/0.6.2/js/sm.min.js"></remote-js>
    <remote-js src="https://g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js"></remote-js>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {
    'remote-js': {
      render (createElement) {
        return createElement('script', {attrs: { type: 'text/javascript', src: this.src }})
      },
      props: {
        src: { type: String, required: true }
      }
    }
  }
}
</script>
<style lang="less">
@import "../static/less/public.less";
</style>
