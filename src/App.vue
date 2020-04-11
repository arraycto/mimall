<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'App',
  components: {

  },
  data(){
    return{
      res:{}
    }
  },
  mounted() {
 /*
 1.本地MOCK
 this.axios.get("/mock/user/login.json").then((res) => {
        this.res = res;
      }
    );
    2.使用easy-mock,直接使用第三方服务器伪造请求
    3.使用mockJs插件
    */
    /**
     *  storage.setItem("a",1);
        storage.setItem("user",{a:1});
        storage.setItem("abc",{a:1},"user");
     * */

  }
}
</script>

<style>

</style>
