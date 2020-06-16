var app = new Vue({
  el:'#app',
  data:{
    message:'hello vue!'
  },
  methods:{
    clickHandler:function(event) {
      this.message = this.message.split('').reverse().join('')
    }
  }

})