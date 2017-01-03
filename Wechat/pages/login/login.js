
Page({
  data:{
    userName: '',
    userPass: ''
  },
  formSubmit: function(e){
      console.log(e.detail.value);
      var obj = e.detail.value;
      if(obj.userName && obj.userPass){
          //本地存储用户名和密码
          wx.setStorageSync('userName', obj.userName)
          wx.setStorageSync('userPass', obj.userPass)
      }
  },

  //加载事件，如果判断有缓存信息，就读取并显示在input里
  onLoad:function(){
      var name = wx.getStorageInfoSync('userName');
      var password = wx.getStorageInfoSync('userPass');
      if(name) {
          this.setData({userName:name})
      }
      if(password) {
          this.setData({userPass:password})
      }
  }
})