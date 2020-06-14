var app = new Vue({
  el:'#app',
  data:{
    now:''
  },
  methods:{
    onClick:function() {
      //alert('onclick')
      this.now = new Date().toLocaleString();
    }
  }
})